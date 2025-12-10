'use client';

import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, Search, Filter } from "lucide-react";
import { DefaultPageWrapper } from "@/components/default-page-wrapper";
import { useState } from "react";

// Mock data - will be replaced with database queries
const featuredArticle = {
    id: "featured",
    title: "Headline of the Topics",
    slug: "featured-topic",
    excerpt: "Short Description or Summary of the Topic. Short Description or Summary of the Topic. Short Description or Summary of the Topic. Short Description or Summary of the Topic. Short Description or Summary of the Topic. Short Description or Summary of the Topic.",
    category: "Featured",
    publishedAt: "DD/MM/YYYY",
    readTime: "X min",
    coverImage: "/land-2297.jpg",
};

const newsArticles = [
    {
        id: "1",
        title: "New Corporate Law Updates for 2024",
        slug: "corporate-law-updates-2024",
        excerpt: "Important changes in corporate regulations that businesses need to know.",
        category: "Corporate Law",
        publishedAt: "15/1/2567",
        coverImage: "/news-1.png",
    },
    {
        id: "2",
        title: "Understanding Family Law Mediation",
        slug: "family-law-mediation",
        excerpt: "How mediation can help resolve family disputes effectively.",
        category: "Family Law",
        publishedAt: "10/1/2567",
        coverImage: "/news-2.png",
    },
    {
        id: "3",
        title: "Real Estate Transaction Best Practices",
        slug: "real-estate-best-practices",
        excerpt: "Essential tips for smooth property transactions.",
        category: "Real Estate",
        publishedAt: "5/1/2567",
        coverImage: "/news-3.png",
    },
    {
        id: "4",
        title: "Immigration Law Changes 2024",
        slug: "immigration-law-2024",
        excerpt: "New immigration regulations and what they mean for you.",
        category: "Immigration",
        publishedAt: "3/1/2567",
        coverImage: "/news-4.png",
    },
    {
        id: "5",
        title: "Intellectual Property Protection",
        slug: "ip-protection",
        excerpt: "How to protect your intellectual property rights.",
        category: "Intellectual Property",
        publishedAt: "1/1/2567",
        coverImage: "/news-5.png",
    },
    {
        id: "6",
        title: "Taxation Updates for Businesses",
        slug: "taxation-updates",
        excerpt: "Latest tax law changes affecting businesses.",
        category: "Taxation",
        publishedAt: "28/12/2566",
        coverImage: "/news-6.png",
    },
];

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

                        {/* Featured Article */}
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
                                                {featuredArticle.publishedAt} • ⏱ {featuredArticle.readTime}
                                            </span>
                                        </div>

                                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 leading-tight">
                                            {featuredArticle.title}
                                        </h2>
                                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4 leading-tight">
                                            {featuredArticle.title}
                                        </h3>
                                        <h4 className="text-xl md:text-2xl font-serif font-bold text-white mb-6 leading-tight">
                                            {featuredArticle.title}
                                        </h4>

                                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                                            {featuredArticle.excerpt}
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
                                <div className="relative h-64 lg:h-auto">
                                    <Image
                                        src={featuredArticle.coverImage}
                                        alt={featuredArticle.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white flex items-center gap-2">
                                        <span className="text-green-400">✓</span> General Info • Not Legal Advice
                                    </div>
                                </div>
                            </Link>
                        </div>

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
                            <button className="px-6 py-3 bg-[#0d2b0a] border border-white/20 rounded-lg text-white hover:border-secondary transition-colors flex items-center gap-2">
                                <span>Newest</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
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
                                Latest insights
                            </h2>
                            <p className="text-gray-400 text-sm mb-8">
                                Thought leadership, client alerts, and case notes from our lawyers.
                            </p>

                            {/* Articles Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {newsArticles.map((article) => (
                                    <Link
                                        key={article.id}
                                        href={`/insights/${article.slug}`}
                                        className="bg-[#0d2b0a] border border-white/20 rounded-lg overflow-hidden hover:border-secondary transition-all group"
                                    >
                                        <div className="relative h-48 bg-gradient-to-br from-[#0a2608] to-[#0d2b0a] border-b border-white/10">
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
                                        <div className="p-6">
                                            <div className="flex items-center gap-2 text-xs mb-3">
                                                <span className="text-secondary font-medium">{article.category}</span>
                                                <span className="text-gray-500">•</span>
                                                <span className="text-gray-400">{article.publishedAt}</span>
                                            </div>
                                            <h3 className="text-lg font-serif font-bold text-white mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                                                {article.title}
                                            </h3>
                                            <p className="text-gray-300 mb-4 text-sm line-clamp-2">
                                                {article.excerpt}
                                            </p>
                                            <div className="flex items-center gap-1 text-secondary text-sm group-hover:gap-2 transition-all">
                                                Read More
                                                <ArrowRight className="h-4 w-4" />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultPageWrapper>
    );
}
