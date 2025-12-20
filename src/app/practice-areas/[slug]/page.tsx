'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MainFooter } from '@/components/main-footer';
import { Mail, ArrowRight } from 'lucide-react';

// Data for each service
const serviceData: Record<string, any> = {
    corporate: {
        title: "Incorporation & Corporate Matters",
        quote: "Guiding corporate structures, compliance, mergers and acquisitions",
        contactEmail: "corporate@dejudom.com",
        overview: [
            "Multinational investors, SMEs and founders entering Thailand must navigate the Foreign Business Act, select the right vehicle and sequence registrations carefully. A Thai private limited company is often used because it balances speed, control and flexibility, but branch or representative offices may suit specific models. We coordinate legal, tax, immigration and regulatory steps, draft bilingual constitutive documents, obtain name reservation, register directors and manage VAT, social security and bank onboarding so the company can invoice, hire and repatriate profits without surprises.",
            "What distinguishes Dej-Udom & Associates is our combination of Thai legal insight and international transactional experience. Our bilingual lawyers map your planned activities against available routes, explain trade-offs and implement governance so board powers, shareholder agreements and bank mandates align. We handle feasibility studies, joint-venture agreements, M&A due diligence, reorganisations and BOI promotions while coordinating with accountants and foreign counsel across ASEAN. Clients gain a single project plan, harmonised templates and a compliance calendar that keeps operations and filings aligned."
        ],
        experience: [
            "Market entry for a multinational, Thailand, corporate setup: prepared feasibility memo on the Foreign Business Act and sector rules, then sequenced incorporation, tax and social security registrations.",
            "Joint venture for international investors, Thailand: drafted shareholder agreement aligned with Thai enforceability, set reserved matters and tied rights back to Articles and board powers.",
            "Banking onboarding for a new subsidiary, Thailand: aligned specimen signatures and board resolutions with bank templates and attended KYC to avoid delays.",
            "Vehicle selection for a regional project, Thailand: compared representative office, branch and subsidiary on control, liability and tax, then documented the chosen route.",
            "BOI promotion activation for a project company, Thailand: registered privileges on relevant systems and set SOPs so customs and immigration benefits were realized in operations."
        ],
        contacts: [
            { name: "Dej-Udom Krairit", role: "Founder & CEO", image: "/dej.png", slug: "dej-udom-krairit" },
            { name: "Nipa Pakdeechanuan", role: "Senior Partner", image: "/team-member-1.png", slug: "nipa-pakdeechanuan" },
            { name: "Benjawan Rasdusade", role: "Partner", image: "/team-member-2.png", slug: "benjawan-rasdusade" }
        ]
    },
    // Adding dummy data for other services to prevent errors, using Corporate template
    litigation: {
        title: "Litigation, Mediation & ADR",
        quote: "Resolving disputes with strategic foresight and aggressive advocacy",
        contactEmail: "litigation@dejudom.com",
        overview: ["Litigation overview paragraph 1...", "Litigation overview paragraph 2..."],
        experience: ["Litigation Case 1", "Litigation Case 2"],
        contacts: [
            { name: "Dej-Udom Krairit", role: "Founder & CEO", image: "/dej.png", slug: "dej-udom-krairit" },
            { name: "Benjawan Rasdusade", role: "Partner", image: "/team-member-2.png", slug: "benjawan-rasdusade" }
        ]
    },
    immigration: {
        title: "Immigration, Relocation & Work Permit",
        quote: "Seamless mobility solutions for your global workforce",
        contactEmail: "immigration@dejudom.com",
        overview: ["Immigration overview paragraph 1...", "Immigration overview paragraph 2..."],
        experience: ["Immigration Case 1", "Immigration Case 2"],
        contacts: [
            { name: "Nipa Pakdeechanuan", role: "Senior Partner", image: "/team-member-1.png", slug: "nipa-pakdeechanuan" }
        ]
    },
    taxation: {
        title: "Taxation",
        quote: "Optimizing tax efficiency with full regulatory compliance",
        contactEmail: "tax@dejudom.com",
        overview: ["Tax overview paragraph 1...", "Tax overview paragraph 2..."],
        experience: ["Tax Case 1", "Tax Case 2"],
        contacts: [
            { name: "Dej-Udom Krairit", role: "Founder & CEO", image: "/dej.png", slug: "dej-udom-krairit" }
        ]
    },
    ip: {
        title: "Intellectual Property",
        quote: "Protecting your innovation and brand assets",
        contactEmail: "ip@dejudom.com",
        overview: ["IP overview paragraph 1...", "IP overview paragraph 2..."],
        experience: ["IP Case 1", "IP Case 2"],
        contacts: [
            { name: "Benjawan Rasdusade", role: "Partner", image: "/team-member-2.png", slug: "benjawan-rasdusade" }
        ]
    }
};

const insightsMock = [
    { title: "Headline of the Topics", image: "/news-1.png" },
    { title: "Headline of the Topics", image: "/news-2.png" },
    { title: "Headline of the Topics", image: "/news-3.png" },
];

export default function PracticeAreaDetailPage() {
    const params = useParams();
    const slug = params.slug as string;
    const service = serviceData[slug] || serviceData['corporate']; // Fallback to corporate if not found for demo

    // Insights State
    const [insights, setInsights] = useState<any[]>([]);

    useEffect(() => {
        const fetchInsights = async () => {
            try {
                // Fetch latest 3 insights
                const res = await fetch('/api/insights');
                if (res.ok) {
                    const data = await res.json();
                    // Sort by newest and take top 3
                    const sorted = data.sort((a: any, b: any) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()).slice(0, 3);
                    setInsights(sorted);
                }
            } catch (error) {
                console.error("Failed to fetch insights", error);
            }
        };

        if (service) {
            // You might want to filter insights by category matching the service later
            fetchInsights();
        }
    }, [service]);

    return (
        <div className="min-h-screen bg-[#0a2608] text-white font-sans">
            {/* Background Texture/Image Overlay */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <Image
                    src="/588618834.jpg"
                    alt="Background"
                    fill
                    className="object-cover opacity-20"
                    priority
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

                {/* 1. Header & Title */}
                <div className="mb-8 mt-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
                    <h2 className="text-xl md:text-2xl font-light text-gray-200">Primary Contacts</h2>
                </div>

                {/* 2. Primary Contacts & Quote Section */}
                <div className="flex flex-col lg:flex-row gap-12 mb-12">
                    {/* Contacts Grid */}
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {service.contacts?.map((contact: any, index: number) => (
                            <Link href={`/attorneys/${contact.slug}`} key={index} className="group cursor-pointer">
                                <div className="bg-white rounded-t-lg overflow-hidden aspect-[3/4] relative">
                                    <Image
                                        src={contact.image}
                                        alt={contact.name}
                                        fill
                                        className="object-cover object-top hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="bg-white py-4 px-2 text-center h-28 flex flex-col justify-center rounded-b-lg shadow-sm">
                                    <h3 className="text-[#0a2608] font-bold text-lg leading-tight group-hover:text-[#f9b400] transition-colors mb-1">
                                        {contact.name}
                                    </h3>
                                    <p className="text-gray-500 text-sm font-medium">{contact.role}</p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Quote & Email (Right Side) */}
                    <div className="lg:w-1/3 flex flex-col justify-center pl-0 lg:pl-12 border-t lg:border-t-0 lg:border-l border-white/20 pt-8 lg:pt-0">
                        <blockquote className="text-[#f9b400] text-xl md:text-2xl font-serif italic mb-8 leading-relaxed">
                            "{service.quote}"
                        </blockquote>
                        <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                            <Mail className="w-5 h-5" />
                            <a href={`mailto:${service.contactEmail}`} className="text-sm md:text-base cursor-pointer hover:underline">{service.contactEmail}</a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <hr className="border-white/20 mb-12" />

                {/* 3. Overview Section */}
                <div className="mb-12">
                    <h3 className="text-[#f9b400] font-bold text-xl mb-6">Overview</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-200 text-sm md:text-base leading-relaxed text-justify">
                        <p>{service.overview[0]}</p>
                        <p>{service.overview[1]}</p>
                    </div>
                </div>

                {/* Divider */}
                <hr className="border-white/20 mb-12" />

                {/* 4. Experience Section */}
                <div className="mb-12">
                    <h3 className="text-[#f9b400] font-bold text-xl mb-6">Experience</h3>
                    <ul className="space-y-4">
                        {service.experience.map((item: string, index: number) => (
                            <li key={index} className="flex items-start gap-4">
                                <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0" />
                                <span className="text-gray-200 text-sm md:text-base leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Divider */}
                <hr className="border-white/20 mb-12" />

                {/* 5. Insights Section */}
                <div className="mb-20">
                    <h3 className="text-[#f9b400] font-bold text-xl mb-6">Insights</h3>
                    {insights.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {insights.map((insight, index) => (
                                <Link href={`/insights/${insight.slug}`} key={index} className="block relative border border-white/20 rounded-2xl overflow-hidden group hover:border-[#f9b400]/50 transition-all h-[360px]">
                                    {/* Background Image / Overlay */}
                                    <div className="absolute inset-0 bg-[#1a2e1a]">
                                        {insight.coverImage ? (
                                            <Image
                                                src={insight.coverImage}
                                                alt={insight.title}
                                                fill
                                                className="object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-white/10 text-4xl font-serif">
                                                Image
                                            </div>
                                        )}
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                    </div>

                                    {/* Content Positioned at Bottom */}
                                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                                        <h4 className="text-white font-bold text-xl mb-6 line-clamp-2 leading-tight group-hover:text-[#f9b400] transition-colors">
                                            {insight.title}
                                        </h4>
                                        <div className="flex justify-end border-t border-white/10 pt-4">
                                            <span className="text-gray-400 text-xs flex items-center gap-1 group-hover:text-white transition-colors">
                                                Read Insight <ArrowRight className="w-3 h-3" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-10 text-gray-500 border border-white/10 rounded-xl">
                            Loading insights...
                        </div>
                    )}
                </div>
            </div>

            <MainFooter />
        </div>
    );
}
