'use client';

import Image from "next/image";
import Link from "next/link";
import { MainFooter } from "@/components/main-footer";
import { Calendar, Clock, User, Tag, Share2, Facebook, Twitter, Linkedin, Mail, ArrowLeft, ChevronRight, Eye } from "lucide-react";

// Mock data - replace with actual data from API/database
const insightData = {
    id: 1,
    title: "New Tax Regulations 2024: What Businesses Need to Know",
    category: "Taxation",
    author: {
        name: "Prof. Dej-Udom Krairit",
        position: "Founder & CEO",
        image: "/team-member-1.png",
    },
    date: "January 15, 2024",
    readTime: "8 min read",
    views: 2453,
    coverImage: "/city.png",
    content: `
        <p>Thailand's tax landscape is undergoing significant changes in 2024, with new regulations that will impact businesses across all sectors. Understanding these changes is crucial for maintaining compliance and optimizing your tax strategy.</p>

        <h2>Key Changes in Corporate Tax</h2>
        <p>The Revenue Department has introduced several amendments to corporate income tax regulations, affecting both domestic and foreign companies operating in Thailand. These changes aim to modernize the tax system and align it with international standards.</p>

        <h3>1. Digital Economy Taxation</h3>
        <p>One of the most significant updates is the expansion of VAT requirements for digital services. Foreign digital service providers must now register for VAT if their annual revenue from Thai customers exceeds THB 1.8 million.</p>

        <h3>2. Transfer Pricing Documentation</h3>
        <p>Enhanced transfer pricing documentation requirements have been implemented, requiring companies to maintain detailed records of inter-company transactions. This includes:</p>
        <ul>
            <li>Master file and local file documentation</li>
            <li>Country-by-country reporting for multinational groups</li>
            <li>Advanced pricing agreements (APAs) for complex transactions</li>
        </ul>

        <h2>Impact on Small and Medium Enterprises</h2>
        <p>SMEs will benefit from new tax incentives designed to promote growth and innovation. The government has extended tax holidays for qualifying businesses in targeted industries, including technology, renewable energy, and advanced manufacturing.</p>

        <h3>Tax Incentives for Innovation</h3>
        <p>Companies investing in research and development can now claim enhanced deductions of up to 300% of eligible R&D expenses. This represents a significant opportunity for businesses looking to innovate while reducing their tax burden.</p>

        <h2>Compliance Deadlines</h2>
        <p>It's crucial to note the key compliance deadlines for 2024:</p>
        <ul>
            <li><strong>March 31, 2024:</strong> Corporate income tax returns for calendar year 2023</li>
            <li><strong>June 30, 2024:</strong> Transfer pricing documentation submission</li>
            <li><strong>September 30, 2024:</strong> Country-by-country reporting deadline</li>
        </ul>

        <h2>Recommendations for Businesses</h2>
        <p>To navigate these changes effectively, we recommend the following steps:</p>
        <ol>
            <li>Conduct a comprehensive review of your current tax structure</li>
            <li>Update internal processes to ensure compliance with new documentation requirements</li>
            <li>Explore available tax incentives that may benefit your business</li>
            <li>Consult with tax professionals to optimize your tax strategy</li>
        </ol>

        <h2>Conclusion</h2>
        <p>The 2024 tax regulations represent both challenges and opportunities for businesses in Thailand. By staying informed and proactive, companies can ensure compliance while taking advantage of new incentives to support their growth objectives.</p>

        <p>For personalized advice on how these changes affect your specific situation, please don't hesitate to contact our tax team.</p>
    `,
    tags: ["Tax Law", "Corporate Tax", "Compliance", "2024 Regulations"],
    relatedInsights: [
        {
            id: 2,
            slug: "corporate-governance-best-practices",
            title: "Corporate Governance Best Practices",
            category: "Corporate",
            date: "January 10, 2024",
            image: "/city.png",
        },
        {
            id: 3,
            slug: "ip-protection-strategies",
            title: "IP Protection Strategies for Startups",
            category: "Intellectual Property",
            date: "January 5, 2024",
            image: "/city.png",
        },
        {
            id: 4,
            slug: "immigration-law-updates",
            title: "Immigration Law Updates",
            category: "Immigration",
            date: "December 28, 2023",
            image: "/city.png",
        },
    ],
};

export default function InsightDetailPage() {
    const handleShare = (platform: string) => {
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
                {/* Breadcrumb */}
                <section className="pt-32 pb-8">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Link
                            href="/insights"
                            className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors text-sm mb-6"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to Insights
                        </Link>

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
                                <span>{insightData.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                <span>{insightData.readTime}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Eye className="h-4 w-4" />
                                <span>{insightData.views.toLocaleString()} views</span>
                            </div>
                        </div>

                        {/* Author Info */}
                        <div className="flex items-center gap-4 pb-8 border-b border-white/10">
                            <Image
                                src={insightData.author.image}
                                alt={insightData.author.name}
                                width={60}
                                height={60}
                                className="rounded-full border-2 border-secondary"
                            />
                            <div>
                                <div className="flex items-center gap-2">
                                    <User className="h-4 w-4 text-secondary" />
                                    <span className="text-white font-semibold">{insightData.author.name}</span>
                                </div>
                                <p className="text-gray-400 text-sm">{insightData.author.position}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Cover Image */}
                <section className="pb-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-white/10 shadow-2xl">
                            <Image
                                src={insightData.coverImage}
                                alt={insightData.title}
                                fill
                                className="object-cover"
                            />
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
                            <div className="mt-12 pt-8 border-t border-gray-200">
                                <div className="flex items-center gap-2 flex-wrap">
                                    <Tag className="h-5 w-5 text-gray-400" />
                                    {insightData.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

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
                <section className="pb-20">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-serif font-bold text-white mb-8">Related Insights</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {insightData.relatedInsights.map((insight) => (
                                <Link
                                    key={insight.id}
                                    href={`/insights/${insight.slug}`}
                                    className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
                                >
                                    <div className="relative aspect-video">
                                        <Image
                                            src={insight.image}
                                            alt={insight.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
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
                                            <span>{insight.date}</span>
                                            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Custom Footer */}
                <div className="relative z-20">
                    <MainFooter />
                </div>
            </div>
        </div>
    );
}
