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
    Users
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

// Define Interfaces
interface Attorney {
    id: string;
    name: string;
    role: string;
}

interface PracticeArea {
    id: string;
    title: string;
    slug: string;
    subtitle?: string;
    description: string;

    // New Fields
    quote?: string;
    contactEmail?: string;
    overview?: string;
    experience?: string; // JSON Array string

    image?: string;
    order: number;
    attorneys: Attorney[]; // Connected attorneys
}

export default function AdminPracticeAreasPage() {
    const [practiceAreas, setPracticeAreas] = useState<PracticeArea[]>([]);
    const [allAttorneys, setAllAttorneys] = useState<Attorney[]>([]);
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
        description: '', // Short desc
        quote: '',
        contactEmail: '',
        overview: '', // Full Text
        experience: '', // Text area for JSON array
        image: '',
        order: 0,
        attorneyIDs: [] as string[]
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

    const fetchAttorneys = async () => {
        try {
            const res = await fetch('/api/attorneys');
            if (res.ok) {
                const data = await res.json();
                setAllAttorneys(data);
            }
        } catch (error) {
            console.error('Failed to fetch attorneys', error);
        }
    }

    useEffect(() => {
        fetchPracticeAreas();
        fetchAttorneys();
    }, []);

    // Handlers
    const handleOpenAdd = () => {
        setCurrentArea(null);
        setFormData(initialFormState);
        setIsModalOpen(true);
    }

    const handleOpenEdit = (area: PracticeArea) => {
        setCurrentArea(area);

        // Handle features/experience
        let experienceString = area.experience || '';
        try {
            // If it's pure JSON array, try to format nicely? 
            // Or simple strategy: Keep it as is if it's string.
            const parsed = JSON.parse(experienceString);
            if (Array.isArray(parsed)) {
                experienceString = JSON.stringify(parsed, null, 2);
            }
        } catch (e) {
            // It's raw text
        }

        setFormData({
            title: area.title,
            slug: area.slug,
            subtitle: area.subtitle || '',
            description: area.description || '',
            quote: area.quote || '',
            contactEmail: area.contactEmail || '',
            overview: area.overview || '',
            experience: experienceString,
            image: area.image || '',
            order: area.order,
            attorneyIDs: area.attorneys ? area.attorneys.map(a => a.id) : []
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

            // process experience to be valid JSON if possible, or just string array
            let experiencePayload = formData.experience;
            try {
                // Try parse
                JSON.parse(formData.experience);
            } catch (e) {
                // If not valid JSON, treat as newline separated list -> convert to JSON array
                const list = formData.experience.split('\n').map(l => l.trim()).filter(Boolean);
                experiencePayload = JSON.stringify(list);
            }

            // Similar for overview if desired, but user design showed 2 cols. 
            // Let's assume overview is simple text paragraphs (separated by double newline) for now
            // or we store it directly.

            const payload = {
                ...formData,
                experience: experiencePayload
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

    const toggleAttorney = (attorneyId: string) => {
        setFormData(prev => {
            const current = prev.attorneyIDs;
            if (current.includes(attorneyId)) {
                return { ...prev, attorneyIDs: current.filter(id => id !== attorneyId) };
            } else {
                return { ...prev, attorneyIDs: [...current, attorneyId] };
            }
        });
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
                    <p className="text-gray-500 mt-1 ml-11">Manage legal services and primary contacts</p>
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
                                    <TableHead className="w-[80px]">Icon</TableHead>
                                    <TableHead className="font-semibold">Title</TableHead>
                                    <TableHead className="font-semibold">Team</TableHead>
                                    <TableHead className="font-semibold">Description</TableHead>
                                    <TableHead className="text-right font-semibold">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {loading ? (
                                    <TableRow>
                                        <TableCell colSpan={5} className="h-24 text-center text-gray-500">
                                            Loading...
                                        </TableCell>
                                    </TableRow>
                                ) : filteredAreas.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={5} className="h-32 text-center text-gray-500">
                                            No practice areas found.
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    filteredAreas.map((item) => (
                                        <TableRow key={item.id} className="hover:bg-gray-50/50 transition-colors">
                                            <TableCell>
                                                {item.image ? (
                                                    <img src={item.image} alt="Icon" className="h-10 w-10 object-cover rounded shadow-sm border border-gray-200" />
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
                                            <TableCell className="text-gray-600 text-sm">
                                                <div className="flex -space-x-2 overflow-hidden">
                                                    {item.attorneys && item.attorneys.length > 0 ? (
                                                        item.attorneys.map((att: any) => (
                                                            <div key={att.id} className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-gray-200 flex items-center justify-center text-[10px] font-bold" title={att.name}>
                                                                {att.name[0]}
                                                            </div>
                                                        ))
                                                    ) : (
                                                        <span className="text-xs text-gray-400">None</span>
                                                    )}
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-gray-600 text-sm max-w-[200px] truncate">
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
                <DialogContent className="sm:max-w-[850px] h-[90vh] flex flex-col p-0 overflow-hidden">
                    <DialogHeader className="px-6 py-4 border-b">
                        <DialogTitle>{currentArea ? 'Edit Service' : 'Add New Service'}</DialogTitle>
                        <DialogDescription>
                            Configure service details, content, and team members.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="flex-1 overflow-y-auto p-6">
                        <form id="practice-form" onSubmit={handleSubmit} className="space-y-6">
                            {/* Main Info */}
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="title">Title</Label>
                                        <Input
                                            id="title"
                                            value={formData.title}
                                            onChange={handleTitleChange}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="slug">Slug URL</Label>
                                        <Input
                                            id="slug"
                                            value={formData.slug}
                                            onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="subtitle">Subtitle</Label>
                                        <Input
                                            id="subtitle"
                                            value={formData.subtitle}
                                            onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <FileUpload
                                        label="Service Image / Icon"
                                        accept="image/*"
                                        value={formData.image}
                                        onChange={(url) => setFormData({ ...formData, image: url })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description">Short Description (Card)</Label>
                                <Textarea
                                    id="description"
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    rows={2}
                                />
                            </div>

                            <hr className="border-gray-100" />
                            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                                <Briefcase className="w-4 h-4" /> Header & Contacts
                            </h3>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="quote">Feature Quote</Label>
                                    <Textarea
                                        id="quote"
                                        value={formData.quote}
                                        onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                                        rows={3}
                                        placeholder="e.g. Guiding corporate structures..."
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="contactEmail">Contact Email</Label>
                                    <Input
                                        id="contactEmail"
                                        value={formData.contactEmail}
                                        onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                                        placeholder="corporate@dejudom.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label>Primary Contacts (Select Attorneys)</Label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 p-3 bg-gray-50 rounded-lg border max-h-40 overflow-y-auto">
                                    {allAttorneys.map(att => (
                                        <label key={att.id} className="flex items-center gap-2 text-sm bg-white p-2 rounded border cursor-pointer hover:border-blue-400 transition-colors">
                                            <input
                                                type="checkbox"
                                                checked={formData.attorneyIDs.includes(att.id)}
                                                onChange={() => toggleAttorney(att.id)}
                                                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                            />
                                            <span className="truncate">{att.name}</span>
                                        </label>
                                    ))}
                                    {allAttorneys.length === 0 && (
                                        <div className="col-span-3 text-center text-gray-400 text-sm py-2">
                                            No attorneys available. Add them in Team Members page first.
                                        </div>
                                    )}
                                </div>
                            </div>

                            <hr className="border-gray-100" />
                            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                                <Users className="w-4 h-4" /> Content Body
                            </h3>

                            <div className="space-y-2">
                                <Label htmlFor="overview">Overview (Full Text)</Label>
                                <Textarea
                                    id="overview"
                                    value={formData.overview}
                                    onChange={(e) => setFormData({ ...formData, overview: e.target.value })}
                                    rows={6}
                                    placeholder="Full description text..."
                                />
                                <p className="text-xs text-gray-500">For 2 columns layout, separate paragraphs with double newlines.</p>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="experience">Experience (Bullet Points)</Label>
                                <Textarea
                                    id="experience"
                                    value={formData.experience}
                                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                                    rows={5}
                                    className="font-mono bg-gray-50"
                                    placeholder='["Project A...", "Project B..."]'
                                />
                                <p className="text-xs text-gray-500">Enter as JSON array ["Point 1", "Point 2"] or one per line.</p>
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
