import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";

// Mock data - will be replaced with database query
const article = {
    title: "New Corporate Law Updates for 2024",
    slug: "corporate-law-updates-2024",
    content: `
    <h2>Introduction</h2>
    <p>The corporate legal landscape is constantly evolving, and 2024 brings significant changes that businesses must understand and adapt to. These updates affect everything from compliance requirements to governance structures.</p>
    
    <h2>Key Changes</h2>
    <p>Several major updates have been introduced this year:</p>
    <ul>
      <li>Enhanced disclosure requirements for publicly traded companies</li>
      <li>New regulations on data privacy and cybersecurity</li>
      <li>Updated guidelines for corporate governance</li>
      <li>Changes to merger and acquisition procedures</li>
    </ul>
    
    <h2>Impact on Businesses</h2>
    <p>These changes will have far-reaching implications for businesses of all sizes. Companies need to review their current practices and ensure compliance with the new regulations.</p>
    
    <h2>What You Should Do</h2>
    <p>We recommend that businesses take the following steps:</p>
    <ol>
      <li>Conduct a comprehensive compliance audit</li>
      <li>Update internal policies and procedures</li>
      <li>Train staff on new requirements</li>
      <li>Consult with legal counsel to ensure full compliance</li>
    </ol>
    
    <h2>Conclusion</h2>
    <p>Staying informed about legal changes is crucial for business success. Our team is here to help you navigate these updates and ensure your company remains compliant.</p>
  `,
    category: "Corporate Law",
    publishedAt: "2024-01-15",
    author: "Legal Partners Team",
};

export default function InsightDetailPage() {
    return (
        <div className="py-20 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link
                    href="/insights"
                    className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors mb-8"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Insights
                </Link>

                <div className="mb-8">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full font-medium">
                            {article.category}
                        </span>
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            <span>{article.author}</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                        {article.title}
                    </h1>
                </div>

                <div className="h-96 bg-gray-200 rounded-lg mb-12 flex items-center justify-center text-6xl">
                    📰
                </div>

                <div
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />

                <div className="mt-12 pt-8 border-t border-gray-200">
                    <h3 className="text-xl font-serif font-bold text-primary mb-4">
                        Need Legal Advice?
                    </h3>
                    <p className="text-gray-600 mb-6">
                        Our team of experienced attorneys is ready to help you navigate these changes.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-primary font-medium rounded hover:bg-primary hover:text-white transition-all"
                    >
                        Contact Us Today
                    </Link>
                </div>
            </div>
        </div>
    );
}
