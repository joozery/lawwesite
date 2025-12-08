import { SectionTitle } from "@/components/ui/section-title";
import { CheckCircle2, History, Target, Users } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="py-20 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle title="About Legal Partners" subtitle="Our Story & Mission" centered />

                {/* Introduction */}
                <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                                A Tradition of Excellence Since 1995
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                For over 25 years, Legal Partners has been a pillar of the legal community, providing unwavering support and superior representation to individuals and businesses alike. Founded on the principles of integrity, diligence, and justice, we have built a reputation for achieving results when it matters most.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Our collaborative approach ensures that every client receives the benefit of our collective experience, resulting in innovative strategies and comprehensive legal solutions.
                            </p>
                        </div>
                        <div className="bg-muted h-80 rounded flex items-center justify-center relative overflow-hidden group">
                            {/* Placeholder for About Image */}
                            <div className="text-gray-400 text-center">
                                <span className="block text-4xl mb-2">🏛️</span>
                                Our Office Building
                            </div>
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/5 transition-colors" />
                        </div>
                    </div>
                </div>

                {/* Mission & Values */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {[
                        {
                            icon: Target,
                            title: "Our Mission",
                            text: "To provide accessible, high-quality legal services that empower our clients to navigate complex legal challenges."
                        },
                        {
                            icon: Users,
                            title: "Our Values",
                            text: "Integrity, Transparency, and Client-Centricity. We put your needs first and communicate openly at every step."
                        },
                        {
                            icon: History,
                            title: "Our Vision",
                            text: "To be the leading law firm recognized for our commitment to justice and our positive impact on the community."
                        }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded shadow-sm border-t-4 border-secondary">
                            <item.icon className="h-10 w-10 text-primary mb-4" />
                            <h4 className="text-xl font-serif font-bold text-primary mb-3">{item.title}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                </div>

                {/* Why Us List */}
                <div className="bg-primary text-white p-12 rounded-lg">
                    <div className="max-w-3xl mx-auto text-center">
                        <h3 className="text-2xl font-serif font-bold mb-8">Why Clients Trust Us</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                            {[
                                "Available 24/7 for urgent matters",
                                "Transparent fee structure",
                                "Initial consultation is free",
                                "Top-rated by regional bar associations",
                                "Personalized attention to every case",
                                "Multilingual support staff"
                            ].map((benefit, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                                    <span>{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
