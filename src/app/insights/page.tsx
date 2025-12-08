import { SectionTitle } from "@/components/ui/section-title";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

// Mock data - will be replaced with database queries
const newsArticles = [
    {
        id: "1",
        title: "New Corporate Law Updates for 2024",
        slug: "corporate-law-updates-2024",
        excerpt: "Important changes in corporate regulations that businesses need to know.",
        category: "Corporate Law",
        publishedAt: "2024-01-15",
        coverImage: null,
    },
    {
        id: "2",
        title: "Understanding Family Law Mediation",
        slug: "family-law-mediation",
        excerpt: "How mediation can help resolve family disputes effectively.",
        category: "Family Law",
        publishedAt: "2024-01-10",
        coverImage: null,
    },
    {
        id: "3",
        title: "Real Estate Transaction Best Practices",
        slug: "real-estate-best-practices",
        excerpt: "Essential tips for smooth property transactions.",
        category: "Real Estate",
        publishedAt: "2024-01-05",
        coverImage: null,
    },
];

export default function InsightsPage() {
    return (
        <div className="py-20 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle title="Insights & News" subtitle="Latest Updates" centered />

                <p className="max-w-3xl mx-auto text-center text-gray-600 mb-16 text-lg">
                    Stay informed with the latest legal news, insights, and updates from our team of experts.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsArticles.map((article) => (
                        <Link
                            key={article.id}
                            href={`/insights/${article.slug}`}
                            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
                        >
                            <div className="h-48 bg-gray-200 flex items-center justify-center text-4xl">
                                📰
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-sm text-secondary mb-3">
                                    <span className="font-medium">{article.category}</span>
                                </div>
                                <h3 className="text-xl font-serif font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-gray-600 mb-4 line-clamp-2">
                                    {article.excerpt}
                                </p>
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2 text-gray-500">
                                        <Calendar className="h-4 w-4" />
                                        <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-primary group-hover:text-secondary transition-colors">
                                        Read More
                                        <ArrowRight className="h-4 w-4" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
