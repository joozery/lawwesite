import { SectionTitle } from "@/components/ui/section-title";
import { Download, FileText } from "lucide-react";

// Mock data - will be replaced with database queries
const ebooks = [
    {
        id: "1",
        title: "Guide to Starting Your Business",
        description: "Everything you need to know about forming and structuring your business entity.",
        category: "Corporate Law",
        downloads: 1234,
        fileUrl: "/ebooks/business-guide.pdf",
    },
    {
        id: "2",
        title: "Understanding Divorce Process",
        description: "A comprehensive guide to navigating divorce proceedings and protecting your interests.",
        category: "Family Law",
        downloads: 892,
        fileUrl: "/ebooks/divorce-guide.pdf",
    },
    {
        id: "3",
        title: "Real Estate Buyer's Handbook",
        description: "Essential tips and legal considerations for purchasing property.",
        category: "Real Estate",
        downloads: 756,
        fileUrl: "/ebooks/real-estate-guide.pdf",
    },
    {
        id: "4",
        title: "Your Rights: Criminal Defense",
        description: "Know your rights when facing criminal charges.",
        category: "Criminal Defense",
        downloads: 654,
        fileUrl: "/ebooks/criminal-defense-guide.pdf",
    },
    {
        id: "5",
        title: "Personal Injury Claims Guide",
        description: "Steps to take after an accident and how to maximize your compensation.",
        category: "Personal Injury",
        downloads: 543,
        fileUrl: "/ebooks/personal-injury-guide.pdf",
    },
    {
        id: "6",
        title: "Estate Planning Essentials",
        description: "Protect your legacy with proper estate planning strategies.",
        category: "Estate Planning",
        downloads: 432,
        fileUrl: "/ebooks/estate-planning-guide.pdf",
    },
];

export default function EbooksPage() {
    return (
        <div className="py-20 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle title="Legal eBooks" subtitle="Free Resources" centered />

                <p className="max-w-3xl mx-auto text-center text-gray-600 mb-16 text-lg">
                    Download our free legal guides to help you understand your rights and navigate complex legal matters.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ebooks.map((ebook) => (
                        <div
                            key={ebook.id}
                            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow p-6"
                        >
                            <div className="h-48 bg-gradient-to-br from-primary to-secondary rounded flex items-center justify-center mb-6">
                                <FileText className="h-20 w-20 text-white" />
                            </div>

                            <div className="mb-3">
                                <span className="text-sm text-secondary font-medium">{ebook.category}</span>
                            </div>

                            <h3 className="text-xl font-serif font-bold text-primary mb-3">
                                {ebook.title}
                            </h3>

                            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                {ebook.description}
                            </p>

                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                <span className="text-sm text-gray-500">
                                    {ebook.downloads.toLocaleString()} downloads
                                </span>
                                <button className="inline-flex items-center gap-2 bg-secondary text-primary px-4 py-2 rounded font-medium hover:bg-primary hover:text-white transition-all">
                                    <Download className="h-4 w-4" />
                                    Download
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-white p-8 rounded-lg shadow-sm text-center">
                    <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                        Need Personalized Legal Advice?
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        While our eBooks provide valuable information, every legal situation is unique.
                        Contact us for a free consultation tailored to your specific needs.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-3 bg-secondary text-primary font-medium rounded hover:bg-primary hover:text-white transition-all"
                    >
                        Schedule Consultation
                    </a>
                </div>
            </div>
        </div>
    );
}
