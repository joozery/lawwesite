'use client';

import Image from "next/image";
import { MainFooter } from "@/components/main-footer";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from 'next/navigation';
import { Loader2, FileText, Book } from "lucide-react";

// Unified Interface for Display
interface MixedItem {
    id: string;
    type: 'book' | 'article';
    title: string;
    description?: string; // used for filtering
    category: string;
    coverImage?: string;
    createdAt: string;
    year: number;
    // Specific fields
    fileUrl?: string; // for books
    slug?: string;    // for articles
}

export default function BooksArticlesPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");
    const [mixedItems, setMixedItems] = useState<MixedItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15;

    // Initialize search query from URL parameter
    useEffect(() => {
        const query = searchParams.get('q');
        if (query) {
            setSearchQuery(query);
        }
    }, [searchParams]);

    // Fetch Content (Both Ebooks and Insights)
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Parallel fetch
                const [booksRes, insightsRes] = await Promise.all([
                    fetch('/api/ebooks'),
                    fetch('/api/insights')
                ]);

                let items: MixedItem[] = [];

                if (booksRes.ok) {
                    const booksData = await booksRes.json();
                    items = items.concat(booksData.map((b: any) => ({
                        id: `book-${b.id}`,
                        type: 'book',
                        title: b.title,
                        description: b.description,
                        category: b.category,
                        coverImage: b.coverImage,
                        createdAt: b.createdAt,
                        year: new Date(b.createdAt).getFullYear(),
                        fileUrl: b.fileUrl
                    })));
                }

                if (insightsRes.ok) {
                    const insightsData = await insightsRes.json();
                    items = items.concat(insightsData.map((i: any) => ({
                        id: `article-${i.id}`,
                        type: 'article',
                        title: i.title,
                        description: i.content, // naive search on content
                        category: i.category,
                        coverImage: i.coverImage,
                        createdAt: i.publishedAt || i.createdAt,
                        year: new Date(i.publishedAt || i.createdAt).getFullYear(),
                        slug: i.slug
                    })));
                }

                // Sort by Latest Date
                items.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

                setMixedItems(items);
            } catch (error) {
                console.error("Failed to fetch data", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Filter Logic
    const filteredItems = mixedItems.filter(item =>
        item.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Calculate pagination
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = filteredItems.slice(startIndex, endIndex);

    // Handle Item Click
    const handleItemClick = (item: MixedItem) => {
        if (item.type === 'book' && item.fileUrl) {
            // Open PDF via Proxy (force inline)
            const proxyUrl = `/api/view-pdf?url=${encodeURIComponent(item.fileUrl)}`;
            window.open(proxyUrl, '_blank');
        } else if (item.type === 'article' && item.slug) {
            // Navigate to Article
            router.push(`/insights/${item.slug}`);
        }
    };

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/city.png"
                    alt="City Background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Green Overlay */}
                <div className="absolute inset-0 bg-[#0a2608]/90" />
            </div>

            {/* All Content */}
            <div className="relative z-10 min-h-screen">
                {/* Hero Section */}
                <section className="pt-32 pb-12 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Breadcrumb */}
                        <div className="mb-4 text-sm text-gray-300">
                            <a href="/" className="hover:text-secondary transition-colors">Home</a>
                            <span className="mx-2">/</span>
                            <span className="text-secondary">RESOURCES</span>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8">
                            Professor Dej-Udom Krairit Books & Articles
                        </h1>

                        {/* Search Bar */}
                        <div className="max-w-md">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search for Books & Articles"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full px-4 py-3 pr-12 bg-white text-gray-900 rounded-full focus:outline-none focus:ring-2 focus:ring-secondary"
                                />
                                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Grid Section */}
                <section className="pb-12 min-h-[400px]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {loading ? (
                            <div className="flex justify-center items-center h-64">
                                <Loader2 className="w-12 h-12 text-secondary animate-spin" />
                            </div>
                        ) : currentItems.length === 0 ? (
                            <div className="text-center text-gray-400 py-12">
                                No books or articles found matching your search.
                            </div>
                        ) : (
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                                {currentItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className="group cursor-pointer"
                                        onClick={() => handleItemClick(item)}
                                    >
                                        {/* Cover Image */}
                                        <div className="relative aspect-[3/4] bg-gradient-to-b from-blue-100 to-green-200 rounded-lg shadow-lg overflow-hidden mb-3 transform transition-transform group-hover:scale-105">
                                            {item.coverImage ? (
                                                <Image
                                                    src={item.coverImage}
                                                    alt={item.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            ) : (
                                                /* Placeholder design */
                                                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gray-800">
                                                    {item.type === 'book' ? (
                                                        <Book className="w-12 h-12 text-white/50 mb-2" />
                                                    ) : (
                                                        <FileText className="w-12 h-12 text-white/50 mb-2" />
                                                    )}
                                                    <div className="text-white/50 text-xs uppercase font-bold tracking-widest">
                                                        {item.type}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Type Badge (Top Right) */}
                                            <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide text-black shadow-sm"
                                                style={{ backgroundColor: item.type === 'book' ? '#fbbf24' : '#ffffff' }}
                                            >
                                                {item.type === 'book' ? 'BOOK' : 'ARTICLE'}
                                            </div>

                                            {/* Corner Decoration for Books */}
                                            {item.type === 'book' && !item.coverImage && (
                                                <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-b-[30px] border-b-yellow-400"></div>
                                            )}
                                        </div>

                                        {/* Info */}
                                        <div className="text-center">
                                            <h3 className="text-white text-sm font-semibold line-clamp-2 mb-1" title={item.title}>
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-400 text-xs">
                                                {item.year}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* Pagination */}
                {!loading && filteredItems.length > 0 && (
                    <section className="pb-20">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex items-center justify-center gap-4">
                                <button
                                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                    disabled={currentPage === 1}
                                    className="text-secondary hover:text-secondary/80 disabled:text-gray-600 disabled:cursor-not-allowed transition-colors"
                                >
                                    ← Previous
                                </button>

                                <div className="flex items-center gap-2">
                                    <span className="text-white">
                                        Page {currentPage} of {totalPages}
                                    </span>
                                </div>

                                <button
                                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                                    disabled={currentPage === totalPages}
                                    className="text-secondary hover:text-secondary/80 disabled:text-gray-600 disabled:cursor-not-allowed transition-colors"
                                >
                                    Next →
                                </button>
                            </div>
                        </div>
                    </section>
                )}

                {/* Custom Footer */}
                <div className="relative z-20">
                    <MainFooter />
                </div>
            </div>
        </div>
    );
}
