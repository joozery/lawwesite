'use client';

import Image from "next/image";
import { MainFooter } from "@/components/main-footer";

const opportunities = [
    {
        id: "thinking",
        icon: "/icon-thinking.png",
        title: "Forward-Thinking Practice",
        description: "We invest heavily in legal technology, data-driven research, and horizon scanning so that our lawyers stay ahead of regulatory change. You will advise clients on how to make regulatory change work for them, not against them, and you will help shape the firm's strategic positioning in an evolving legal market.",
    },
    {
        id: "progression",
        icon: "/icon-progression.png",
        title: "Merit-Based Progression",
        description: "Clear KPIs, mid-year feedback loops, and transparent promotion criteria mean your career depends on performance, not politics. We reward originators who bring in new work, technical specialists who become thought leaders, and project managers who deliver complex mandates with precision, performance bonuses, and public recognition as firm-wide role models.",
    },
    {
        id: "culture",
        icon: "/icon-culture.png",
        title: "Collaborative Culture",
        description: "Your day-to-day, you will work in cross-practice teams where partners keep open doors and junior lawyers are encouraged to ask questions. We share knowledge through internal CLE sessions, turn complex challenges into shared victories and ensure no one is left to solve problems alone.",
    },
    {
        id: "flexibility",
        icon: "/icon-flexibility.png",
        title: "People-First Flexibility",
        description: "Hybrid schedules, wellness stipends, and firm-sponsored community time off help you manage the demands of everyday life. Our inclusive meritocracy links and promotes on capability and character alone, diversely of background and thought, and we expect clients and colleagues alike to treat everyone with respect.",
    },
    {
        id: "learning",
        icon: "/icon-learning.png",
        title: "Continuous Learning",
        description: "Every lawyer receives an annual CPD budget, access to in-house masterclasses, and scholarships for international conferences or postgraduate study. You can expect overseas secondments with global partner firms, shadowing opportunities with senior counsel, and a culture that celebrates curiosity and ensures no one is left to solve problems alone.",
    },
];

export default function CareersPage() {
    return (
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
            <div className="relative z-10 min-h-screen">
                {/* Hero Section */}
                <section className="pt-32 pb-16 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            Careers at Dej-Udom & Associates
                        </h1>

                        <p className="text-base text-gray-200 max-w-5xl leading-relaxed mb-4">
                            <span className="font-semibold">Shape the Law. Grow Your Career.</span>
                        </p>

                        <p className="text-base text-gray-200 max-w-5xl leading-relaxed">
                            From precedent-setting cross-border deals to high-stakes disputes, Dej-Udom & Associates sits at the heart of Southeast Asia's legal market. Join us and you will work side-by-side with leading practitioners, advise global brands, and help drive legal innovation across the region.
                        </p>
                    </div>
                </section>

                {/* Opportunities Section */}
                <section className="pb-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-12">
                            Opportunities with Dej-Udom & Associates
                        </h2>

                        <div className="space-y-12">
                            {opportunities.map((opp, index) => {
                                const isEven = index % 2 === 0;

                                return (
                                    <div
                                        key={opp.id}
                                        className={`flex items-start gap-8 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
                                    >
                                        {/* Icon */}
                                        <div className="flex-shrink-0">
                                            <div className="w-20 h-20 relative">
                                                <Image
                                                    src={opp.icon}
                                                    alt={opp.title}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className={`flex-1 ${isEven ? 'text-left' : 'text-right ml-auto'}`}>
                                            <h3 className="text-xl font-bold text-secondary mb-3">
                                                {opp.title}
                                            </h3>
                                            <p className={`text-gray-200 text-sm leading-relaxed max-w-2xl ${isEven ? '' : 'ml-auto'}`}>
                                                {opp.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="pb-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg px-8 py-6 flex items-center justify-between">
                            <h2 className="text-xl md:text-2xl font-serif font-bold text-white">
                                Interested in Understanding Our Recruitment Process?
                            </h2>
                            <a
                                href="#"
                                className="flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/90 text-[#0a2608] font-semibold rounded transition-all whitespace-nowrap"
                            >
                                Read More
                                <span>→</span>
                            </a>
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
