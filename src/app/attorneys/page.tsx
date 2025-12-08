import { SectionTitle } from "@/components/ui/section-title";
import { Mail, Phone } from "lucide-react";

export default function AttorneysPage() {
    const attorneys = [
        {
            name: "Robert J. Sterling",
            role: "Managing Partner",
            bio: "Robert has over 30 years of experience in corporate law and high-stakes litigation. He founded Sterling & Partners with a vision of excellence.",
            email: "r.sterling@legalpartners.com"
        },
        {
            name: "Eleanor Davis",
            role: "Senior Partner",
            bio: "An expert in family law and mediation, Eleanor is known for her compassionate approach and fierce advocacy for her clients.",
            email: "e.davis@legalpartners.com"
        },
        {
            name: "Michael Chang",
            role: "Associate Attorney",
            bio: "Michael specializes in criminal defense and civil rights. He is dedicated to protecting the liberties of his clients.",
            email: "m.chang@legalpartners.com"
        },
        {
            name: "Sarah Williams",
            role: "Associate Attorney",
            bio: "Focusing on real estate and property law, Sarah guides clients through complex transactions with precision handling.",
            email: "s.williams@legalpartners.com"
        }
    ];

    return (
        <div className="py-20 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle title="Our Team" subtitle="Meet Your Legal Experts" centered />

                <p className="max-w-3xl mx-auto text-center text-gray-600 mb-16 text-lg">
                    Our team of dedicated attorneys brings a wealth of experience and a passion for justice to every case we handle. We work collaboratively to ensure the best possible outcomes.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {attorneys.map((attorney, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                            <div className="h-64 bg-gray-200 w-full flex items-center justify-center text-4xl grayscale group-hover:grayscale-0 transition-all">
                                {/* Image Placeholder */}
                                👤
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-serif font-bold text-primary mb-1">{attorney.name}</h3>
                                <div className="text-secondary text-sm font-medium uppercase tracking-wide mb-4">{attorney.role}</div>
                                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                                    {attorney.bio}
                                </p>
                                <div className="border-t border-gray-100 pt-4 space-y-2">
                                    <div className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors cursor-pointer">
                                        <Mail className="h-4 w-4" />
                                        <span className="truncate">{attorney.email}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
