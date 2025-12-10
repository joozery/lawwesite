'use client';

import Image from "next/image";
import { MainFooter } from "@/components/main-footer";

const primaryContacts = [
    {
        name: "Dej-Udom Krairit",
        position: "Founder & CEO",
        image: "/team-member-1.png",
    },
    {
        name: "Nipa Pakdeechanuan",
        position: "Senior Partner",
        image: "/team-member-2.png",
    },
    {
        name: "Benjawan Rasdusade",
        position: "Partner",
        image: "/team-member-4.png",
    },
];

const experiences = [
    "Market entry for a multinational, Thailand, corporate setup: prepared feasibility memo on the Foreign Business Act and sector rules, then sequenced incorporation, tax and social security registrations.",
    "Joint venture for international investors, Thailand: drafted shareholder agreement aligned with Thai enforceability, set reserved matters and tied rights back to Articles and board powers.",
    "Banking onboarding for a new subsidiary, Thailand: aligned specimen signatures and board resolutions with bank templates and attended KYC to avoid delays.",
    "Vehicle selection for a regional project, Thailand: compared representative office, branch and subsidiary on control, liability and tax, then documented the chosen route.",
    "BOI promotion activation for a project company, Thailand: registered privileges on relevant systems and set SOPs so customs and immigration benefits were realised in operations.",
];

export default function CorporatePage() {
    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background Image */}
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
                <section className="pt-32 pb-12 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-12">
                            Incorporation & Corporate Matters
                        </h1>

                        {/* Primary Contacts */}
                        <div className="mb-12">
                            <h2 className="text-xl font-bold text-white mb-6">
                                Primary Contacts
                            </h2>

                            <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 items-center">
                                {/* Left: Contact Cards */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {primaryContacts.map((contact, index) => (
                                        <div
                                            key={index}
                                            className="bg-white rounded-lg overflow-hidden shadow-lg"
                                        >
                                            {/* Profile Image */}
                                            <div className="aspect-[3/4] bg-gray-200 relative">
                                                <Image
                                                    src={contact.image}
                                                    alt={contact.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>

                                            {/* Contact Info */}
                                            <div className="p-4 text-center bg-white">
                                                <h3 className="font-bold text-gray-900 text-sm mb-1">
                                                    {contact.name}
                                                </h3>
                                                <p className="text-gray-600 text-xs">
                                                    {contact.position}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Right: Quote and Email */}
                                <div className="flex flex-col justify-center items-start gap-6 lg:pl-8">
                                    <p className="text-secondary italic text-base">
                                        "Guiding corporate structures, compliance, mergers and acquisitions"
                                    </p>
                                    <a
                                        href="mailto:corporate@dejudom.com"
                                        className="flex items-center gap-2 text-white hover:text-secondary transition-colors text-sm"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        corporate@dejudom.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Overview Section */}
                <section className="pb-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Left Column */}
                            <div>
                                <h2 className="text-2xl font-bold text-secondary mb-4">
                                    Overview
                                </h2>
                                <p className="text-gray-200 text-sm leading-relaxed">
                                    Multinational investors, SMEs and founders entering Thailand must navigate the Foreign Business Act, select the right vehicle and sequenced incorporation carefully. A Thai private limited company is often used because it balances speed, control and flexibility, but branch or representative offices may suit specific models. We coordinate legal, tax, immigration and regulatory steps—draft bilingual constitutive documents, obtain name reservations and directors' consent, and manage VAT, social security and bank onboarding so the company can invoice, hire and repatriate profits without surprises.
                                </p>
                            </div>

                            {/* Right Column */}
                            <div>
                                <p className="text-gray-200 text-sm leading-relaxed">
                                    What distinguishes Dej-Udom & Associates is our combination of Thai legal insight and international commercial experience. Our lawyers advise on your governance activities against available routes, explain trade-offs and implement governance so board powers, shareholder agreements and bank mandates align. We handle feasibility studies, joint-venture agreements, M&A due diligence, reorganisations and BOI promotions while coordinating with accountants and foreign counsel so ASEAN clients gain a single project plan, harmonised templates and a compliance calendar that keeps operations and filings aligned.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                <section className="pb-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-secondary mb-6">
                            Experience
                        </h2>

                        <ul className="space-y-3">
                            {experiences.map((exp, index) => (
                                <li key={index} className="flex items-start gap-3 text-gray-200 text-sm">
                                    <span className="text-secondary mt-1 flex-shrink-0">•</span>
                                    <span className="leading-relaxed">{exp}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Insights Section */}
                <section className="pb-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-secondary mb-8">
                            Insights
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[1, 2, 3].map((item) => (
                                <div
                                    key={item}
                                    className="group relative h-64 rounded-lg overflow-hidden border-2 border-white/20 hover:border-secondary transition-colors"
                                >
                                    {/* Background Image */}
                                    <div className="absolute inset-0">
                                        <Image
                                            src="/city.png"
                                            alt="Insight background"
                                            fill
                                            className="object-cover opacity-40"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                    </div>

                                    {/* Content */}
                                    <div className="relative h-full flex flex-col justify-end p-6">
                                        <h3 className="text-white text-lg font-bold mb-4">
                                            Headline of the Topics
                                        </h3>
                                        <a
                                            href="#"
                                            className="text-white text-sm hover:text-secondary transition-colors inline-flex items-center gap-2"
                                        >
                                            Read Insight
                                            <span>→</span>
                                        </a>
                                    </div>
                                </div>
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
