'use client';

import { useState, useEffect } from 'react';
import {
    BookOpen,
    Plus,
    Search,
    MoreHorizontal,
    Pencil,
    Trash2,
    Loader2,
    ExternalLink
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
import { Badge } from "@/components/ui/badge";
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

interface Ebook {
    id: string;
    title: string;
    description: string;
    category: string;
    fileUrl: string;
    coverImage?: string;
    downloads: number;
    createdAt: string;
}

export default function AdminEbooksPage() {
    const [ebooks, setEbooks] = useState<Ebook[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    // Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [currentEbook, setCurrentEbook] = useState<Ebook | null>(null);
    const [formData, setFormData] = useState({ title: '', description: '', category: '', fileUrl: '', coverImage: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Fetch Ebooks
    const fetchEbooks = async () => {
        try {
            const res = await fetch('/api/ebooks');
            if (res.ok) {
                const data = await res.json();
                setEbooks(data);
            }
        } catch (error) {
            console.error('Failed to fetch ebooks', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEbooks();
    }, []);

    // Handlers
    const handleOpenAdd = () => {
        setCurrentEbook(null);
        setFormData({ title: '', description: '', category: '', fileUrl: '', coverImage: '' });
        setIsModalOpen(true);
    }

    const handleOpenEdit = (ebook: Ebook) => {
        setCurrentEbook(ebook);
        setFormData({
            title: ebook.title,
            description: ebook.description,
            category: ebook.category,
            fileUrl: ebook.fileUrl,
            coverImage: ebook.coverImage || ''
        });
        setIsModalOpen(true);
    }

    const handleDeleteClick = (ebook: Ebook) => {
        setCurrentEbook(ebook);
        setIsDeleteModalOpen(true);
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.fileUrl) {
            alert('Please upload a PDF file');
            return;
        }
        setIsSubmitting(true);

        try {
            const url = currentEbook ? `/api/ebooks/${currentEbook.id}` : '/api/ebooks';
            const method = currentEbook ? 'PATCH' : 'POST';

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setIsModalOpen(false);
                fetchEbooks();
            } else {
                alert('Operation failed');
            }
        } catch (error) {
            console.error('Submit error', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const confirmDelete = async () => {
        if (!currentEbook) return;
        setIsSubmitting(true);
        try {
            const res = await fetch(`/api/ebooks/${currentEbook.id}`, { method: 'DELETE' });
            if (res.ok) {
                setIsDeleteModalOpen(false);
                fetchEbooks();
            }
        } catch (error) {
            console.error('Delete error', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const filteredEbooks = ebooks.filter(ebook =>
        ebook.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ebook.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight flex items-center gap-3">
                        <BookOpen className="w-8 h-8 text-purple-600" />
                        Books & Articles
                    </h1>
                    <p className="text-gray-500 mt-1 ml-11">Manage digital publications and resources</p>
                </div>
                <Button onClick={handleOpenAdd} className="bg-[#111] hover:bg-black gap-2 shadow-lg hover:shadow-xl transition-all">
                    <Plus className="h-4 w-4" />
                    Add New Item
                </Button>
            </div>

            <Card className="border-none shadow-sm bg-white/50 backdrop-blur-sm">
                <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="relative flex-1 max-w-sm">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                                placeholder="Search books..."
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
                                    <TableHead className="w-[80px]">Cover</TableHead>
                                    <TableHead className="font-semibold">Title</TableHead>
                                    <TableHead className="font-semibold">Category</TableHead>
                                    <TableHead className="font-semibold">Downloads</TableHead>
                                    <TableHead className="font-semibold">Created At</TableHead>
                                    <TableHead className="text-right font-semibold">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {loading ? (
                                    <TableRow>
                                        <TableCell colSpan={6} className="h-24 text-center text-gray-500">
                                            Loading...
                                        </TableCell>
                                    </TableRow>
                                ) : filteredEbooks.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={6} className="h-32 text-center text-gray-500">
                                            No items found.
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    filteredEbooks.map((ebook) => (
                                        <TableRow key={ebook.id} className="hover:bg-gray-50/50 transition-colors">
                                            <TableCell>
                                                {ebook.coverImage ? (
                                                    <img src={ebook.coverImage} alt="Cover" className="h-10 w-8 object-cover rounded shadow-sm border border-gray-200" />
                                                ) : (
                                                    <div className="h-10 w-8 bg-gray-100 rounded flex items-center justify-center text-gray-300 text-xs">No Cover</div>
                                                )}
                                            </TableCell>
                                            <TableCell className="font-medium text-gray-900">
                                                {ebook.title}
                                                <p className="text-xs text-gray-500 truncate max-w-[200px]">{ebook.description}</p>
                                            </TableCell>
                                            <TableCell>
                                                <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200 font-normal">
                                                    {ebook.category}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="text-gray-600 font-mono text-sm">{ebook.downloads}</TableCell>
                                            <TableCell className="text-gray-500 text-sm">
                                                {new Date(ebook.createdAt).toLocaleDateString()}
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
                                                        <DropdownMenuItem onClick={() => window.open(`/api/view-pdf?url=${encodeURIComponent(ebook.fileUrl)}`, '_blank')}>
                                                            <ExternalLink className="mr-2 h-4 w-4" /> View File
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem onClick={() => handleOpenEdit(ebook)}>
                                                            <Pencil className="mr-2 h-4 w-4" /> Edit
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem onClick={() => handleDeleteClick(ebook)} className="text-red-600 focus:text-red-600">
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
                <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                        <DialogTitle>{currentEbook ? 'Edit Item' : 'Add New Item'}</DialogTitle>
                        <DialogDescription>
                            {currentEbook ? "Update the details below." : "Upload a new book or article."}
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-4 py-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="title">Title</Label>
                                <Input
                                    id="title"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="category">Category</Label>
                                <Input
                                    id="category"
                                    placeholder="e.g. Legal Guide, Annual Report"
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                id="description"
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                rows={3}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {/* Cover Image Upload */}
                            <FileUpload
                                label="Cover Image (Optional)"
                                accept="image/*"
                                value={formData.coverImage}
                                onChange={(url) => setFormData({ ...formData, coverImage: url })}
                            />

                            {/* PDF File Upload */}
                            <FileUpload
                                label="PDF File (Required)"
                                accept=".pdf"
                                value={formData.fileUrl}
                                onChange={(url) => setFormData({ ...formData, fileUrl: url })}
                            />
                        </div>

                        <DialogFooter className="mt-6">
                            <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                            <Button type="submit" disabled={isSubmitting} className="bg-[#111]">
                                {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                {currentEbook ? 'Save Changes' : 'Create Item'}
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>

            {/* Delete Confirmation Modal */}
            <Dialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Are you sure?</DialogTitle>
                        <DialogDescription>
                            This action cannot be undone. This will permanently delete
                            <span className="font-bold text-gray-900"> {currentEbook?.title} </span>.
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
