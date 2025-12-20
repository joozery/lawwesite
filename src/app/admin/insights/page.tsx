'use client';

import { useState, useEffect } from 'react';
import {
    Newspaper,
    Plus,
    Search,
    MoreHorizontal,
    Pencil,
    Trash2,
    Loader2,
    ExternalLink,
    Eye
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

// Define Interface
interface Insight {
    id: string;
    title: string;
    slug: string;
    category: string;
    author: string;
    authorRole?: string;
    authorImage?: string;
    publishedAt: string;
    views: number;
    coverImage?: string;
    content: string;
    readTime?: string;
    tags?: string;
}

export default function AdminInsightsPage() {
    const [insights, setInsights] = useState<Insight[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    // Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [currentInsight, setCurrentInsight] = useState<Insight | null>(null);

    // Form Data
    const initialFormState = {
        title: '',
        slug: '',
        category: '',
        author: 'Prof. Dej-Udom Krairit',
        authorRole: 'Founder & CEO',
        authorImage: '', // Default placeholder later
        coverImage: '',
        content: '',
        readTime: '5 min read',
        tags: '',
    };
    const [formData, setFormData] = useState(initialFormState);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Fetch Insights
    const fetchInsights = async () => {
        try {
            const res = await fetch('/api/insights');
            if (res.ok) {
                const data = await res.json();
                setInsights(data);
            }
        } catch (error) {
            console.error('Failed to fetch insights', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchInsights();
    }, []);

    // Handlers
    const handleOpenAdd = () => {
        setCurrentInsight(null);
        setFormData(initialFormState);
        setIsModalOpen(true);
    }

    const handleOpenEdit = (insight: Insight) => {
        setCurrentInsight(insight);
        setFormData({
            title: insight.title,
            slug: insight.slug,
            category: insight.category,
            author: insight.author,
            authorRole: insight.authorRole || '',
            authorImage: insight.authorImage || '',
            coverImage: insight.coverImage || '',
            content: insight.content,
            readTime: insight.readTime || '',
            tags: insight.tags || '',
        });
        setIsModalOpen(true);
    }

    const handleDeleteClick = (insight: Insight) => {
        setCurrentInsight(insight);
        setIsDeleteModalOpen(true);
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const url = currentInsight ? `/api/insights/${currentInsight.id}` : '/api/insights';
            const method = currentInsight ? 'PATCH' : 'POST';

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setIsModalOpen(false);
                fetchInsights();
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
        if (!currentInsight) return;
        setIsSubmitting(true);
        try {
            const res = await fetch(`/api/insights/${currentInsight.id}`, { method: 'DELETE' });
            if (res.ok) {
                setIsDeleteModalOpen(false);
                fetchInsights();
            }
        } catch (error) {
            console.error('Delete error', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Auto-generate slug from title
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const title = e.target.value;
        setFormData(prev => ({
            ...prev,
            title,
            slug: (!currentInsight && !prev.slug) ? title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '') : prev.slug
        }));
    };

    const filteredInsights = insights.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight flex items-center gap-3">
                        <Newspaper className="w-8 h-8 text-blue-600" />
                        Insights & News
                    </h1>
                    <p className="text-gray-500 mt-1 ml-11">Manage legal updates, articles, and company news</p>
                </div>
                <Button onClick={handleOpenAdd} className="bg-[#111] hover:bg-black gap-2 shadow-lg hover:shadow-xl transition-all">
                    <Plus className="h-4 w-4" />
                    Create Article
                </Button>
            </div>

            <Card className="border-none shadow-sm bg-white/50 backdrop-blur-sm">
                <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="relative flex-1 max-w-sm">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                                placeholder="Search articles..."
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
                                    <TableHead className="font-semibold">Author</TableHead>
                                    <TableHead className="font-semibold">Stats</TableHead>
                                    <TableHead className="font-semibold">Date</TableHead>
                                    <TableHead className="text-right font-semibold">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {loading ? (
                                    <TableRow>
                                        <TableCell colSpan={7} className="h-24 text-center text-gray-500">
                                            Loading...
                                        </TableCell>
                                    </TableRow>
                                ) : filteredInsights.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={7} className="h-32 text-center text-gray-500">
                                            No articles found.
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    filteredInsights.map((item) => (
                                        <TableRow key={item.id} className="hover:bg-gray-50/50 transition-colors">
                                            <TableCell>
                                                {item.coverImage ? (
                                                    <img src={item.coverImage} alt="Cover" className="h-10 w-16 object-cover rounded shadow-sm border border-gray-200" />
                                                ) : (
                                                    <div className="h-10 w-16 bg-gray-100 rounded flex items-center justify-center text-gray-300 text-xs">No Img</div>
                                                )}
                                            </TableCell>
                                            <TableCell className="font-medium text-gray-900 max-w-[200px]">
                                                <div className="truncate" title={item.title}>{item.title}</div>
                                                <div className="text-xs text-blue-500 truncate">/{item.slug}</div>
                                            </TableCell>
                                            <TableCell>
                                                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 font-normal">
                                                    {item.category}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="text-gray-600 text-sm">{item.author}</TableCell>
                                            <TableCell className="text-gray-500 text-sm">
                                                <div className="flex items-center gap-1">
                                                    <Eye className="w-3 h-3" /> {item.views.toLocaleString()}
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-gray-500 text-sm">
                                                {new Date(item.publishedAt).toLocaleDateString()}
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
                                                        <DropdownMenuItem onClick={() => window.open(`/insights/${item.slug}`, '_blank')}>
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

            {/* Add/Edit Modal - Full Screen or Large Modal for better editing */}
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent className="sm:max-w-[900px] h-[80vh] flex flex-col p-0 overflow-hidden">
                    <DialogHeader className="px-6 py-4 border-b">
                        <DialogTitle>{currentInsight ? 'Edit Article' : 'Create Article'}</DialogTitle>
                        <DialogDescription>
                            Fill in the details for the news or insight article.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="flex-1 overflow-y-auto p-6">
                        <form id="insight-form" onSubmit={handleSubmit} className="space-y-6">
                            {/* Main Info */}
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2 col-span-2">
                                    <Label htmlFor="title">Article Title</Label>
                                    <Input
                                        id="title"
                                        value={formData.title}
                                        onChange={handleTitleChange}
                                        required
                                        className="text-lg font-semibold"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="slug">URL Slug</Label>
                                    <Input
                                        id="slug"
                                        value={formData.slug}
                                        onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                        required
                                        className="font-mono text-sm"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="category">Category</Label>
                                    <Input
                                        id="category"
                                        placeholder="e.g. Taxation, Corporate Law"
                                        value={formData.category}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Images */}
                            <div className="grid grid-cols-2 gap-6 p-4 bg-gray-50 rounded-lg">
                                <FileUpload
                                    label="Cover Image (Landscape)"
                                    accept="image/*"
                                    value={formData.coverImage}
                                    onChange={(url) => setFormData({ ...formData, coverImage: url })}
                                />
                                <FileUpload
                                    label="Author Image (Square/Portrait)"
                                    accept="image/*"
                                    value={formData.authorImage}
                                    onChange={(url) => setFormData({ ...formData, authorImage: url })}
                                />
                            </div>

                            {/* Author & Meta */}
                            <div className="grid grid-cols-3 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="author">Author Name</Label>
                                    <Input
                                        id="author"
                                        value={formData.author}
                                        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="authorRole">Author Role</Label>
                                    <Input
                                        id="authorRole"
                                        value={formData.authorRole}
                                        onChange={(e) => setFormData({ ...formData, authorRole: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="readTime">Read Time</Label>
                                    <Input
                                        id="readTime"
                                        value={formData.readTime}
                                        onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                                    />
                                </div>
                            </div>

                            {/* Tags */}
                            <div className="space-y-2">
                                <Label htmlFor="tags">Tags (comma separated)</Label>
                                <Input
                                    id="tags"
                                    placeholder="e.g. Law, Tax, 2024"
                                    value={formData.tags}
                                    onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                                />
                            </div>

                            {/* Content */}
                            <div className="space-y-2">
                                <Label htmlFor="content">Content (HTML supported)</Label>
                                <Textarea
                                    id="content"
                                    value={formData.content}
                                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                    rows={10}
                                    className="font-mono text-sm leading-relaxed"
                                    placeholder="<p>Write your article content here...</p>"
                                />
                                <p className="text-xs text-gray-500">
                                    Tip: Use HTML tags like &lt;h2&gt;, &lt;p&gt;, &lt;ul&gt; for formatting.
                                </p>
                            </div>
                        </form>
                    </div>

                    <DialogFooter className="px-6 py-4 border-t bg-gray-50">
                        <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                        <Button type="submit" form="insight-form" disabled={isSubmitting} className="bg-[#111]">
                            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            {currentInsight ? 'Save Changes' : 'Publish Article'}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Delete Confirmation Modal */}
            <Dialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Delete Article?</DialogTitle>
                        <DialogDescription>
                            This will permanently remove <span className="font-bold text-gray-900">{currentInsight?.title}</span>.
                            This action cannot be undone.
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
