'use client';

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search, Filter, Loader2 } from "lucide-react";
import { DefaultPageWrapper } from "@/components/default-page-wrapper";
import { useState, useEffect } from "react";

// Define Interface
interface Insight {
    id: string;
    title: string;
    slug: string;
    excerpt?: string; // Derived from content if not present
    content: string;
    category: string;
    publishedAt: string;
    coverImage?: string;
    readTime?: string;
}

const categories = [
    "Incorporation & Corporate Matters",
    "Immigration, Relocation & Work Permit",
    "Intellectual Property",
    "Litigation, Mediation & ADR",
    "Taxation",
];

export default function InsightsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [insights, setInsights] = useState<Insight[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
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

        fetchInsights();
    }, []);

    // Filter Logic
    const filteredInsights = insights.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.category.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory ? item.category === selectedCategory : true;
        return matchesSearch && matchesCategory;
    });

    // Determine Featured and List
    // If filtering, show all in grid. If no filter, show first as featured.
    const hasFilter = searchQuery || selectedCategory;

    // Fallback if no data
    const featuredArticle = !hasFilter && filteredInsights.length > 0 ? filteredInsights[0] : null;
    const listArticles = !hasFilter && filteredInsights.length > 0 ? filteredInsights.slice(1) : filteredInsights;

    // Helper to extract excerpt from HTML content
    const getExcerpt = (content: string) => {
        return content.replace(/<[^>]+>/g, '').substring(0, 150) + '...';
    };

    return (
        <DefaultPageWrapper>
            <div className="min-h-screen relative overflow-hidden">
                {/* Background Image - Same as About page */}
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
                <div className="relative z-10 pt-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-8">
                            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">
                                Insights
                            </h1>
                            <div className="flex gap-4 text-sm text-gray-300">
                                <Link href="#" className="hover:text-secondary transition-colors">
                                    LITIGATION, MEDIATION & ADR
                                </Link>
                                <Link href="#" className="hover:text-secondary transition-colors">
                                    TAXATION
                                </Link>
                            </div>
                        </div>

                        {loading ? (
                            <div className="flex justify-center py-20">
                                <Loader2 className="w-10 h-10 text-white animate-spin" />
                            </div>
                        ) : (
                            <>
                                {/* Featured Article (Show only if no filters active and exists) */}
                                {featuredArticle && (
                                    <div className="mb-8">
                                        <Link
                                            href={`/insights/${featuredArticle.slug}`}
                                            className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-[#0d2b0a] border border-white/20 rounded-lg overflow-hidden hover:border-secondary transition-all group"
                                        >
                                            {/* Left Side - Content */}
                                            <div className="p-8 lg:p-12 flex flex-col justify-between">
                                                <div>
                                                    <div className="flex items-center gap-3 mb-6">
                                                        <span className="px-3 py-1 bg-secondary/20 text-secondary text-xs font-semibold rounded-full border border-secondary/30">
                                                            {featuredArticle.category}
                                                        </span>
                                                        <span className="text-gray-400 text-xs">
                                                            {new Date(featuredArticle.publishedAt).toLocaleDateString()} • ⏱ {featuredArticle.readTime || '5 min'}
                                                        </span>
                                                    </div>

                                                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 leading-tight">
                                                        {featuredArticle.title}
                                                    </h2>

                                                    <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">
                                                        {getExcerpt(featuredArticle.content)}
                                                    </p>
                                                </div>

                                                <div className="flex gap-4">
                                                    <button className="px-6 py-2 border border-white/30 text-white rounded-full hover:bg-white/10 transition-colors text-sm">
                                                        Read Insight
                                                    </button>
                                                    <button className="px-6 py-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors text-sm">
                                                        Contact Us
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Right Side - Image */}
                                            <div className="relative h-64 lg:h-auto min-h-[300px]">
                                                {featuredArticle.coverImage ? (
                                                    <Image
                                                        src={featuredArticle.coverImage}
                                                        alt={featuredArticle.title}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-500">
                                                        No Image
                                                    </div>
                                                )}
                                                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white flex items-center gap-2">
                                                    <span className="text-green-400">✓</span> General Info • Not Legal Advice
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )}

                                {/* Search and Filter */}
                                <div className="flex flex-col md:flex-row gap-4 mb-6">
                                    <div className="flex-1 relative">
                                        <input
                                            type="text"
                                            placeholder="Search insights, topics or authors..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="w-full px-4 py-3 pl-10 bg-[#0d2b0a] border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-secondary transition-colors"
                                        />
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    </div>
                                    {/* Sort button removed for simplicity, default is Newest from API */}
                                </div>

                                {/* Quick Filters */}
                                <div className="flex flex-wrap gap-3 mb-8">
                                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                                        <Filter className="h-4 w-4" />
                                        <span>Quick Filters:</span>
                                    </div>
                                    {categories.map((category) => (
                                        <button
                                            key={category}
                                            onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                                            className={`px-4 py-2 rounded-full text-sm transition-all ${selectedCategory === category
                                                ? 'bg-secondary text-[#0a2608] font-semibold'
                                                : 'bg-[#0d2b0a] border border-white/20 text-white hover:border-secondary'
                                                }`}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>

                                {/* Latest Insights Section */}
                                <div className="mb-8">
                                    <h2 className="text-3xl font-serif font-bold text-white mb-2">
                                        {hasFilter ? 'Search Results' : 'Latest insights'}
                                    </h2>
                                    <p className="text-gray-400 text-sm mb-8">
                                        Thought leadership, client alerts, and case notes from our lawyers.
                                    </p>

                                    {/* Articles Grid */}
                                    {listArticles.length === 0 ? (
                                        <div className="text-center py-10 text-gray-400 bg-[#0d2b0a]/50 rounded-lg">
                                            No articles found.
                                        </div>
                                    ) : (
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {listArticles.map((article) => (
                                                <Link
                                                    key={article.id}
                                                    href={`/insights/${article.slug}`}
                                                    className="bg-[#0d2b0a] border border-white/20 rounded-lg overflow-hidden hover:border-secondary transition-all group flex flex-col h-full"
                                                >
                                                    <div className="relative h-48 bg-gradient-to-br from-[#0a2608] to-[#0d2b0a] border-b border-white/10 shrink-0">
                                                        {article.coverImage ? (
                                                            <Image
                                                                src={article.coverImage}
                                                                alt={article.title}
                                                                fill
                                                                className="object-cover"
                                                            />
                                                        ) : (
                                                            <div className="flex items-center justify-center h-full text-6xl">
                                                                📰
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="p-6 flex flex-col flex-1">
                                                        <div className="flex items-center gap-2 text-xs mb-3">
                                                            <span className="text-secondary font-medium truncate max-w-[150px]">{article.category}</span>
                                                            <span className="text-gray-500">•</span>
                                                            <span className="text-gray-400">{new Date(article.publishedAt).toLocaleDateString()}</span>
                                                        </div>
                                                        <h3 className="text-lg font-serif font-bold text-white mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                                                            {article.title}
                                                        </h3>
                                                        <p className="text-gray-300 mb-4 text-sm line-clamp-3 overflow-hidden flex-1">
                                                            {getExcerpt(article.content)}
                                                        </p>
                                                        <div className="flex items-center gap-1 text-secondary text-sm group-hover:gap-2 transition-all mt-auto pt-4">
                                                            Read More
                                                            <ArrowRight className="h-4 w-4" />
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </DefaultPageWrapper>
    );
}
