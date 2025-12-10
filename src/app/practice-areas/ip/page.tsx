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
        name: "Worawut Krairit",
        position: "Senior Partner",
        image: "/team-member-3.png",
    },
];

export default function IPPage() {
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
                            Intellectual Property
                        </h1>

                        {/* Primary Contacts */}
                        <div className="mb-12">
                            <h2 className="text-xl font-bold text-white mb-6">
                                Primary Contacts
                            </h2>

                            <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 items-center">
                                {/* Left: Contact Cards */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                                {/* Right: Quote and Contact Info */}
                                <div className="flex flex-col justify-center items-start gap-6 lg:pl-8">
                                    <p className="text-secondary italic text-base">
                                        "Protecting trademarks, patents, copyrights and trade secrets"
                                    </p>
                                    <div className="flex flex-col gap-3">
                                        <a
                                            href="mailto:ceo-ip@dejudom.com"
                                            className="flex items-center gap-2 text-white hover:text-secondary transition-colors text-sm"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            ceo-ip@dejudom.com
                                        </a>
                                        <a
                                            href="tel:+6622330055"
                                            className="flex items-center gap-2 text-white hover:text-secondary transition-colors text-sm"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                            +66 2233 0055
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Overview Section */}
                <section className="pb-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="border-t border-white/20 pt-8 mb-8"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Left Column */}
                            <div>
                                <h2 className="text-2xl font-bold text-secondary mb-4">
                                    Overview
                                </h2>
                                <p className="text-gray-200 text-sm leading-relaxed">
                                    Dej-Udom & Associates protects, commercializes and enforces the ideas and brands that power its clients' businesses. Our Intellectual Property (IP) team manages the entire IP lifecycle in Thailand: clearance searches and registrability opinions, filing and prosecution of trademarks, patents and designs, office-action and opposition management, renewals and recordals, assignments and licences, and civil or criminal enforcement while coordinating cross-border strategy across ASEAN. Working closely with the firm's litigators and law-enforcement counterparts, the team translates complex rules into practical outcomes.
                                </p>
                            </div>

                            {/* Right Column */}
                            <div>
                                <p className="text-gray-200 text-sm leading-relaxed">
                                    Effective IP protection begins before filing: examiners expect narrowly tailored specifications and will not register applications that simply copy "Nice" classification terms. The firm drafts precise goods-and-services lists and patent claims aligned with Thai practice, manages priority and foreign filings, and treats IP as a continuum from clearance to commercialization to enforcement. After registration the team builds evidence-of-use kits, dockets renewals and recordals, and plans enforcement. Customs recordals, officer training and product-identification guides increase interception of counterfeit goods, and the team navigates parallel-import rules to protect clients' market positions. Licensing and assignment agreements are drafted with auditors and counterparties in mind, ensuring royalties reflect supply-chain realities and that chain of title remains clean.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                <section className="pb-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-secondary mb-6">
                            Experience
                        </h2>

                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-gray-200 text-sm">
                                <span className="text-secondary mt-1 flex-shrink-0">•</span>
                                <span className="leading-relaxed">
                                    Provided clearance and registrability opinions: conducted identical and similar-mark searches, assessed prior art and landscape for inventions and designs, and issued business-focused opinions that guided brand and R&D teams on filing scope and risk.
                                </span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-200 text-sm">
                                <span className="text-secondary mt-1 flex-shrink-0">•</span>
                                <span className="leading-relaxed">
                                    Managed trademark, patent and design prosecution: drafted precise specifications, filed applications, responded to office actions and oppositions, and coordinated publication opposition windows and renewals, managed priority filings and ASEAN portfolio filings.
                                </span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-200 text-sm">
                                <span className="text-secondary mt-1 flex-shrink-0">•</span>
                                <span className="leading-relaxed">
                                    Handled office-action and opposition responses: prepared arguments that preserved enforceability while exploring coexistence and consent agreements where commercially sensible; kept decision-makers informed about timing, cost and probability.
                                </span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-200 text-sm">
                                <span className="text-secondary mt-1 flex-shrink-0">•</span>
                                <span className="leading-relaxed">
                                    Maintained and enforced registrations: docketed renewals and recordals of assignments and licences, assembled evidence-of-use kits with marketing materials, invoices and dated photographs, and lodged customs recordals to intercept counterfeit or parallel imports.
                                </span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-200 text-sm">
                                <span className="text-secondary mt-1 flex-shrink-0">•</span>
                                <span className="leading-relaxed">
                                    Negotiated IP assignments and licences: drafted agreements that aligned royalty calculations and reporting with the way products are shipped and revenues booked, maintained portfolio indices so investors and acquirers could verify title easily.
                                </span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-200 text-sm">
                                <span className="text-secondary mt-1 flex-shrink-0">•</span>
                                <span className="leading-relaxed">
                                    Litigated IP disputes: represented clients before the Central IP & International Trade Court and coordinated investigators, technical experts and damages analyses to obtain injunctions, delivery-up orders, damages and account-of-profits awards.
                                </span>
                            </li>
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
