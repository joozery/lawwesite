'use client';

import { useState, useEffect } from 'react';
import {
    Users,
    Plus,
    Search,
    MoreHorizontal,
    Pencil,
    Trash2,
    Loader2,
    Mail,
    Linkedin
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

interface Attorney {
    id: string;
    name: string;
    slug: string;
    role: string;
    image: string;
    email: string;
    phone: string;
    linkedin: string;
    profile: string;
    contributions: string;
}

export default function AdminAttorneysPage() {
    const [attorneys, setAttorneys] = useState<Attorney[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    // Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [currentAttorney, setCurrentAttorney] = useState<Attorney | null>(null);

    // Form Data
    const initialFormState = {
        name: '',
        slug: '',
        role: '',
        image: '',
        email: '',
        phone: '',
        linkedin: '',
        profile: '',
        contributions: ''
    };
    const [formData, setFormData] = useState(initialFormState);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const fetchAttorneys = async () => {
        try {
            const res = await fetch('/api/attorneys');
            if (res.ok) {
                const data = await res.json();
                setAttorneys(data);
            }
        } catch (error) {
            console.error('Failed to fetch attorneys', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAttorneys();
    }, []);

    const handleOpenAdd = () => {
        setCurrentAttorney(null);
        setFormData(initialFormState);
        setIsModalOpen(true);
    };

    const handleOpenEdit = (attorney: Attorney) => {
        setCurrentAttorney(attorney);
        setFormData({
            name: attorney.name,
            slug: attorney.slug,
            role: attorney.role,
            image: attorney.image || '',
            email: attorney.email || '',
            phone: attorney.phone || '',
            linkedin: attorney.linkedin || '',
            profile: attorney.profile || '',
            contributions: attorney.contributions || ''
        });
        setIsModalOpen(true);
    };

    const handleDeleteClick = (attorney: Attorney) => {
        setCurrentAttorney(attorney);
        setIsDeleteModalOpen(true);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const url = currentAttorney ? `/api/attorneys/${currentAttorney.id}` : '/api/attorneys';
            const method = currentAttorney ? 'PATCH' : 'POST';

            const payload = { ...formData };

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                setIsModalOpen(false);
                fetchAttorneys();
            } else {
                const errorData = await res.json();
                alert(`Operation failed: ${errorData.error}`);
            }
        } catch (error) {
            console.error('Submit error', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const confirmDelete = async () => {
        if (!currentAttorney) return;
        setIsSubmitting(true);
        try {
            const res = await fetch(`/api/attorneys/${currentAttorney.id}`, { method: 'DELETE' });
            if (res.ok) {
                setIsDeleteModalOpen(false);
                fetchAttorneys();
            }
        } catch (error) {
            console.error('Delete error', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.value;
        setFormData(prev => ({
            ...prev,
            name,
            slug: (!currentAttorney && !prev.slug) ? name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '') : prev.slug
        }));
    };

    const filteredAttorneys = attorneys.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.role.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight flex items-center gap-3">
                        <Users className="w-8 h-8 text-blue-600" />
                        Attorneys / Team
                    </h1>
                    <p className="text-gray-500 mt-1 ml-11">Manage team profiles and details</p>
                </div>
                <Button onClick={handleOpenAdd} className="bg-[#111] hover:bg-black gap-2 shadow-lg hover:shadow-xl transition-all">
                    <Plus className="h-4 w-4" />
                    Add Attorney
                </Button>
            </div>

            <Card className="border-none shadow-sm bg-white/50 backdrop-blur-sm">
                <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="relative flex-1 max-w-sm">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                                placeholder="Search attorneys..."
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
                                    <TableHead className="w-[80px]">Image</TableHead>
                                    <TableHead className="font-semibold">Name & Role</TableHead>
                                    <TableHead className="font-semibold">Contact</TableHead>
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
                                ) : filteredAttorneys.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={4} className="h-32 text-center text-gray-500">
                                            No attorneys found.
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    filteredAttorneys.map((item) => (
                                        <TableRow key={item.id} className="hover:bg-gray-50/50 transition-colors">
                                            <TableCell>
                                                {item.image ? (
                                                    <img src={item.image} alt="Profile" className="h-10 w-10 object-cover rounded-full border border-gray-200" />
                                                ) : (
                                                    <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                                                        <Users className="w-5 h-5" />
                                                    </div>
                                                )}
                                            </TableCell>
                                            <TableCell className="font-medium text-gray-900">
                                                <div>{item.name}</div>
                                                <div className="text-xs text-blue-500">{item.role}</div>
                                            </TableCell>
                                            <TableCell className="text-gray-600 text-sm">
                                                <div className="flex items-center gap-2">
                                                    <Mail className="w-3 h-3" /> {item.email || '-'}
                                                </div>
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
                        <DialogTitle>{currentAttorney ? 'Edit Attorney' : 'Add New Attorney'}</DialogTitle>
                        <DialogDescription>
                            Profile details and contributions.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="flex-1 overflow-y-auto p-6">
                        <form id="attorney-form" onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Full Name</Label>
                                    <Input
                                        id="name"
                                        value={formData.name}
                                        onChange={handleNameChange}
                                        required
                                        placeholder="e.g. Dej-Udom Krairit"
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
                                <Label htmlFor="role">Role / Position</Label>
                                <Input
                                    id="role"
                                    value={formData.role}
                                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                    required
                                    placeholder="e.g. Founder & CEO"
                                />
                            </div>

                            {/* Image */}
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <FileUpload
                                    label="Profile Image"
                                    accept="image/*"
                                    value={formData.image}
                                    onChange={(url) => setFormData({ ...formData, image: url })}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="email@dejudom.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone</Label>
                                    <Input
                                        id="phone"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        placeholder="+66..."
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="linkedin">LinkedIn URL (Optional)</Label>
                                <Input
                                    id="linkedin"
                                    value={formData.linkedin}
                                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                                    placeholder="https://linkedin.com/in/..."
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="profile">Professional Profile (Bio)</Label>
                                <Textarea
                                    id="profile"
                                    value={formData.profile}
                                    onChange={(e) => setFormData({ ...formData, profile: e.target.value })}
                                    rows={5}
                                    placeholder="Bio paragraph..."
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="contributions">Key Contributions (JSON Array or Text)</Label>
                                <Textarea
                                    id="contributions"
                                    value={formData.contributions}
                                    onChange={(e) => setFormData({ ...formData, contributions: e.target.value })}
                                    rows={5}
                                    placeholder='["Contribution 1", "Contribution 2"] or just text'
                                    className="font-mono bg-gray-50"
                                />
                                <p className="text-xs text-gray-500">Ideally enter as a JSON array of strings: ["Item 1", "Item 2"]</p>
                            </div>
                        </form>
                    </div>

                    <DialogFooter className="px-6 py-4 border-t bg-gray-50">
                        <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                        <Button type="submit" form="attorney-form" disabled={isSubmitting} className="bg-[#111]">
                            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            {currentAttorney ? 'Save Changes' : 'Add Attorney'}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Delete Modal */}
            <Dialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Delete Attorney?</DialogTitle>
                        <DialogDescription>
                            Permanently delete <span className="font-bold">{currentAttorney?.name}</span>?
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
