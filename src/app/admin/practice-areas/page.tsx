'use client';

import { useState, useEffect } from 'react';
import {
    Briefcase,
    Plus,
    Search,
    MoreHorizontal,
    Pencil,
    Trash2,
    Loader2,
    ExternalLink,
    CheckCircle
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FileUpload } from "@/components/admin/file-upload";

// Define Interface
interface PracticeArea {
    id: string;
    title: string;
    slug: string;
    subtitle?: string;
    description: string;
    details: string;
    features?: string;
    image?: string;
    order: number;
}

export default function AdminPracticeAreasPage() {
    const [practiceAreas, setPracticeAreas] = useState<PracticeArea[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    // Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [currentArea, setCurrentArea] = useState<PracticeArea | null>(null);

    // Form Data
    const initialFormState = {
        title: '',
        slug: '',
        subtitle: '',
        description: '',
        details: '',
        features: '', // Will handle as string and split
        image: '',
        order: 0
    };
    const [formData, setFormData] = useState(initialFormState);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Fetch Data
    const fetchPracticeAreas = async () => {
        try {
            const res = await fetch('/api/practice-areas');
            if (res.ok) {
                const data = await res.json();
                setPracticeAreas(data);
            }
        } catch (error) {
            console.error('Failed to fetch practice areas', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPracticeAreas();
    }, []);

    // Handlers
    const handleOpenAdd = () => {
        setCurrentArea(null);
        setFormData(initialFormState);
        setIsModalOpen(true);
    }

    const handleOpenEdit = (area: PracticeArea) => {
        setCurrentArea(area);

        // Handle features which might be stored as JSON string of array
        let featuresString = '';
        if (area.features) {
            try {
                const parsed = JSON.parse(area.features);
                if (Array.isArray(parsed)) {
                    featuresString = parsed.join('\n'); // Display as line-separated
                } else {
                    featuresString = area.features;
                }
            } catch (e) {
                featuresString = area.features;
            }
        }

        setFormData({
            title: area.title,
            slug: area.slug,
            subtitle: area.subtitle || '',
            description: area.description,
            details: area.details,
            features: featuresString,
            image: area.image || '',
            order: area.order
        });
        setIsModalOpen(true);
    }

    const handleDeleteClick = (area: PracticeArea) => {
        setCurrentArea(area);
        setIsDeleteModalOpen(true);
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const url = currentArea ? `/api/practice-areas/${currentArea.id}` : '/api/practice-areas';
            const method = currentArea ? 'PATCH' : 'POST';

            // Convert features string to array
            const featuresArray = formData.features.split('\n').map(s => s.trim()).filter(Boolean);

            const payload = {
                ...formData,
                features: featuresArray
            };

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                setIsModalOpen(false);
                fetchPracticeAreas();
            } else {
                const errorData = await res.json();
                alert(`Operation failed: ${errorData.error || 'Unknown error'}`);
            }
        } catch (error) {
            console.error('Submit error', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const confirmDelete = async () => {
        if (!currentArea) return;
        setIsSubmitting(true);
        try {
            const res = await fetch(`/api/practice-areas/${currentArea.id}`, { method: 'DELETE' });
            if (res.ok) {
                setIsDeleteModalOpen(false);
                fetchPracticeAreas();
            }
        } catch (error) {
            console.error('Delete error', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const title = e.target.value;
        setFormData(prev => ({
            ...prev,
            title,
            slug: (!currentArea && !prev.slug) ? title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '') : prev.slug
        }));
    };

    const filteredAreas = practiceAreas.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight flex items-center gap-3">
                        <Briefcase className="w-8 h-8 text-blue-600" />
                        Practice Areas
                    </h1>
                    <p className="text-gray-500 mt-1 ml-11">Manage legal services and practice areas</p>
                </div>
                <Button onClick={handleOpenAdd} className="bg-[#111] hover:bg-black gap-2 shadow-lg hover:shadow-xl transition-all">
                    <Plus className="h-4 w-4" />
                    Add Service
                </Button>
            </div>

            <Card className="border-none shadow-sm bg-white/50 backdrop-blur-sm">
                <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="relative flex-1 max-w-sm">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                                placeholder="Search services..."
                                className="pl-10 bg-white"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="rounded-lg border border-gray-200 bg-white overflow-hidden">
                        <Table>
                            <TableHeader className="bg-gray-50/50">
                                <TableRow>
                                    <TableHead className="w-[80px]">Icon/Img</TableHead>
                                    <TableHead className="font-semibold">Title</TableHead>
                                    <TableHead className="font-semibold">Description</TableHead>
                                    <TableHead className="text-right font-semibold">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {loading ? (
                                    <TableRow>
                                        <TableCell colSpan={4} className="h-24 text-center text-gray-500">
                                            Loading...
                                        </TableCell>
                                    </TableRow>
                                ) : filteredAreas.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={4} className="h-32 text-center text-gray-500">
                                            No practice areas found.
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    filteredAreas.map((item) => (
                                        <TableRow key={item.id} className="hover:bg-gray-50/50 transition-colors">
                                            <TableCell>
                                                {item.image ? (
                                                    <img src={item.image} alt="Cover" className="h-10 w-10 object-cover rounded shadow-sm border border-gray-200" />
                                                ) : (
                                                    <div className="h-10 w-10 bg-gray-100 rounded flex items-center justify-center text-gray-300">
                                                        <Briefcase className="w-5 h-5" />
                                                    </div>
                                                )}
                                            </TableCell>
                                            <TableCell className="font-medium text-gray-900">
                                                <div>{item.title}</div>
                                                <div className="text-xs text-blue-500">/{item.slug}</div>
                                            </TableCell>
                                            <TableCell className="text-gray-600 text-sm max-w-[300px] truncate">
                                                {item.description}
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-gray-900">
                                                            <MoreHorizontal className="h-4 w-4" />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end">
                                                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuItem onClick={() => window.open(`/services/${item.slug}`, '_blank')}>
                                                            <ExternalLink className="mr-2 h-4 w-4" /> View Live
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem onClick={() => handleOpenEdit(item)}>
                                                            <Pencil className="mr-2 h-4 w-4" /> Edit
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem onClick={() => handleDeleteClick(item)} className="text-red-600 focus:text-red-600">
                                                            <Trash2 className="mr-2 h-4 w-4" /> Delete
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>

            {/* Add/Edit Modal */}
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent className="sm:max-w-[700px] h-[85vh] flex flex-col p-0 overflow-hidden">
                    <DialogHeader className="px-6 py-4 border-b">
                        <DialogTitle>{currentArea ? 'Edit Service' : 'Add New Service'}</DialogTitle>
                        <DialogDescription>
                            Configure the legal service offering details.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="flex-1 overflow-y-auto p-6">
                        <form id="practice-form" onSubmit={handleSubmit} className="space-y-6">
                            {/* Main Info */}
                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="title">Service Title</Label>
                                        <Input
                                            id="title"
                                            value={formData.title}
                                            onChange={handleTitleChange}
                                            required
                                            placeholder="e.g. Litigation"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="slug">Slug (URL)</Label>
                                        <Input
                                            id="slug"
                                            value={formData.slug}
                                            onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="subtitle">Subtitle (On Detail Page)</Label>
                                    <Input
                                        id="subtitle"
                                        value={formData.subtitle}
                                        onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                                        placeholder="Brief impactful headline"
                                    />
                                </div>
                            </div>

                            {/* Image */}
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <FileUpload
                                    label="Service Image"
                                    accept="image/*"
                                    value={formData.image}
                                    onChange={(url) => setFormData({ ...formData, image: url })}
                                />
                            </div>

                            {/* Details */}
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="description">Short Description (Card)</Label>
                                    <Textarea
                                        id="description"
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                        rows={3}
                                        placeholder="Shown on the main Practice Areas grid"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="details">Full Overview (Detail Page)</Label>
                                    <Textarea
                                        id="details"
                                        value={formData.details}
                                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                                        rows={6}
                                        placeholder="Detailed explanation of the service..."
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="features">Key Features (One per line)</Label>
                                    <Textarea
                                        id="features"
                                        value={formData.features}
                                        onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                                        rows={5}
                                        placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
                                        className="font-mono bg-gray-50"
                                    />
                                    <p className="text-xs text-gray-500">Enter each key capability on a new line.</p>
                                </div>
                            </div>
                        </form>
                    </div>

                    <DialogFooter className="px-6 py-4 border-t bg-gray-50">
                        <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                        <Button type="submit" form="practice-form" disabled={isSubmitting} className="bg-[#111]">
                            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            {currentArea ? 'Save Changes' : 'Add Service'}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Delete Modal */}
            <Dialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Delete Service?</DialogTitle>
                        <DialogDescription>
                            Permanently delete <span className="font-bold">{currentArea?.title}</span>?
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsDeleteModalOpen(false)}>Cancel</Button>
                        <Button
                            variant="destructive"
                            onClick={confirmDelete}
                            disabled={isSubmitting}
                            className="bg-red-600 hover:bg-red-700"
                        >
                            {isSubmitting ? 'Deleting...' : 'Delete'}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
