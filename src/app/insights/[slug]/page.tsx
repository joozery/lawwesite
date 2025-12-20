'use client';

import Image from "next/image";
import Link from "next/link";
import { MainFooter } from "@/components/main-footer";
import { Calendar, Clock, User, Tag, Share2, Facebook, Twitter, Linkedin, Mail, ArrowLeft, ChevronRight, Eye, Loader2 } from "lucide-react";
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';

// Define Interface matching Admin
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
    tags?: string; // Comma separated string from DB
}

export default function InsightDetailPage() {
    const params = useParams();
    const router = useRouter(); // Import useRouter
    const slug = params.slug as string;

    const [insightData, setInsightData] = useState<Insight | null>(null);
    const [loading, setLoading] = useState(true);
    const [relatedInsights, setRelatedInsights] = useState<Insight[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch All Insights (Ideally should have By-Slug API, but filtering client-side for now for speed)
                const res = await fetch('/api/insights');
                if (res.ok) {
                    const allInsights: Insight[] = await res.json();
                    const found = allInsights.find(i => i.slug === slug);
                    setInsightData(found || null);

                    // Set Related (Same Category, exclude current)
                    if (found) {
                        const related = allInsights
                            .filter(i => i.category === found.category && i.id !== found.id)
                            .slice(0, 3);
                        setRelatedInsights(related);
                    }
                }
            } catch (error) {
                console.error("Failed to fetch insight", error);
            } finally {
                setLoading(false);
            }
        };

        if (slug) fetchData();
    }, [slug]);

    const handleShare = (platform: string) => {
        if (!insightData) return;
        const url = window.location.href;
        const title = insightData.title;

        switch (platform) {
            case 'facebook':
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
                break;
            case 'twitter':
                window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank');
                break;
            case 'linkedin':
                window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
                break;
            case 'email':
                window.location.href = `mailto:?subject=${title}&body=${url}`;
                break;
        }
    };

    // Smart Back Function
    const handleBack = () => {
        if (window.history.length > 2) { // >2 because Next.js has initial entries
            router.back();
        } else {
            router.push('/insights'); // Fallback to main list
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#0a2608] flex items-center justify-center">
                <Loader2 className="w-12 h-12 text-white animate-spin" />
            </div>
        );
    }

    if (!insightData) {
        return (
            <div className="min-h-screen bg-[#0a2608] flex flex-col items-center justify-center text-white">
                <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
                <Link href="/insights" className="text-secondary hover:underline">Back to Insights</Link>
            </div>
        );
    }

    // Parse tags safely
    const tagsArray = insightData.tags ? insightData.tags.split(',').map(t => t.trim()) : [];

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/city.png"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Green Overlay */}
                <div className="absolute inset-0 bg-[#0a2608]/95" />
            </div>

            {/* All Content */}
            <div className="relative z-10 min-h-screen">
                {/* Breadcrumb / Back Button */}
                <section className="pt-32 pb-8">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <button
                            onClick={handleBack}
                            className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors text-sm mb-6"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back
                        </button>

                        {/* Category Badge */}
                        <div className="mb-4">
                            <span className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary rounded-full text-sm font-semibold border border-secondary/30">
                                {insightData.category}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                            {insightData.title}
                        </h1>

                        {/* Meta Information */}
                        <div className="flex flex-wrap items-center gap-6 text-gray-300 text-sm mb-8">
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>{new Date(insightData.publishedAt).toLocaleDateString()}</span>
                            </div>
                            {insightData.readTime && (
                                <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4" />
                                    <span>{insightData.readTime}</span>
                                </div>
                            )}
                            <div className="flex items-center gap-2">
                                <Eye className="h-4 w-4" />
                                <span>{insightData.views.toLocaleString()} views</span>
                            </div>
                        </div>

                        {/* Author Info */}
                        <div className="flex items-center gap-4 pb-8 border-b border-white/10">
                            {insightData.authorImage ? (
                                <Image
                                    src={insightData.authorImage}
                                    alt={insightData.author}
                                    width={60}
                                    height={60}
                                    className="rounded-full border-2 border-secondary object-cover w-[60px] h-[60px]"
                                />
                            ) : (
                                <div className="w-[60px] h-[60px] rounded-full bg-gray-700 flex items-center justify-center border-2 border-secondary">
                                    <User className="h-8 w-8 text-secondary" />
                                </div>
                            )}
                            <div>
                                <div className="flex items-center gap-2">
                                    <User className="h-4 w-4 text-secondary" />
                                    <span className="text-white font-semibold">{insightData.author}</span>
                                </div>
                                {insightData.authorRole && (
                                    <p className="text-gray-400 text-sm">{insightData.authorRole}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Cover Image */}
                <section className="pb-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-white/10 shadow-2xl bg-gray-800">
                            {insightData.coverImage ? (
                                <Image
                                    src={insightData.coverImage}
                                    alt={insightData.title}
                                    fill
                                    className="object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-500">
                                    No Cover Image
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Content */}
                <section className="pb-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12">
                            <div
                                className="prose prose-lg max-w-none
                                    prose-headings:text-gray-900 prose-headings:font-serif prose-headings:font-bold
                                    prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-[#0a2608]
                                    prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-[#0a2608]
                                    prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                                    prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
                                    prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
                                    prose-li:text-gray-700 prose-li:mb-2
                                    prose-strong:text-gray-900 prose-strong:font-semibold"
                                dangerouslySetInnerHTML={{ __html: insightData.content }}
                            />

                            {/* Tags */}
                            {tagsArray.length > 0 && (
                                <div className="mt-12 pt-8 border-t border-gray-200">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <Tag className="h-5 w-5 text-gray-400" />
                                        {tagsArray.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Share Section */}
                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-gray-700">
                                        <Share2 className="h-5 w-5" />
                                        <span className="font-semibold">Share this article:</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => handleShare('facebook')}
                                            className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
                                        >
                                            <Facebook className="h-5 w-5" />
                                        </button>
                                        <button
                                            onClick={() => handleShare('twitter')}
                                            className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors"
                                        >
                                            <Twitter className="h-5 w-5" />
                                        </button>
                                        <button
                                            onClick={() => handleShare('linkedin')}
                                            className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition-colors"
                                        >
                                            <Linkedin className="h-5 w-5" />
                                        </button>
                                        <button
                                            onClick={() => handleShare('email')}
                                            className="w-10 h-10 rounded-full bg-gray-600 text-white flex items-center justify-center hover:bg-gray-700 transition-colors"
                                        >
                                            <Mail className="h-5 w-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Related Insights */}
                {relatedInsights.length > 0 && (
                    <section className="pb-20">
                        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-3xl font-serif font-bold text-white mb-8">Related Insights</h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {relatedInsights.map((insight) => (
                                    <Link
                                        key={insight.id}
                                        href={`/insights/${insight.slug}`}
                                        className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
                                    >
                                        <div className="relative aspect-video">
                                            {insight.coverImage ? (
                                                <Image
                                                    src={insight.coverImage}
                                                    alt={insight.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">No Image</div>
                                            )}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                            <div className="absolute bottom-3 left-3">
                                                <span className="px-3 py-1 bg-secondary text-[#0a2608] rounded-full text-xs font-semibold">
                                                    {insight.category}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#0a2608] transition-colors line-clamp-2">
                                                {insight.title}
                                            </h3>
                                            <div className="flex items-center justify-between text-sm text-gray-500">
                                                <span>{new Date(insight.publishedAt).toLocaleDateString()}</span>
                                                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
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
