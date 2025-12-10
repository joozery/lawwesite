'use client';

import Image from "next/image";
import { MainFooter } from "@/components/main-footer";

const primaryContacts = [
    {
        name: "Worawut Krairit",
        position: "Senior Partner",
        image: "/team-member-3.png",
    },
    {
        name: "Benjawan Rasdusade",
        position: "Partner",
        image: "/team-member-4.png",
    },
];

export default function TaxationPage() {
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
                            Taxation
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
                                        "Integrated tax advice for efficient, compliant commercial operations"
                                    </p>
                                    <div className="flex flex-col gap-3">
                                        <a
                                            href="mailto:corporate@dejudom.com"
                                            className="flex items-center gap-2 text-white hover:text-secondary transition-colors text-sm"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            corporate@dejudom.com
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
                                    Dej-Udom & Associates aligns tax strategy with clients' commercial objectives and integrates tax advice with corporate, employment, IP and dispute strategies. The team advises on corporate and personal income tax, value-added tax (VAT) and specific business tax, customs and excise, stamp duty and other local levies, and supports lawful tax-efficiency, compliance with new rules, and resolution of audits and disputes. Tax experience extends to advising overseas financial institutions on cross-border and inter-banking transactions. The firm's broad practice areas allow for seamless coordination.
                                </p>
                            </div>

                            {/* Right Column */}
                            <div>
                                <p className="text-gray-200 text-sm leading-relaxed">
                                    Effective tax planning in Thailand matches structure to substance. Choices between a Thai subsidiary, branch, representative office, joint venture or holding pattern affect corporate income tax, withholding on outbound dividends and payments, thin capitalization rules and repatriation. Rather than bolt tax considerations on at the end, Dej-Udom & Associates builds tax design into the business model and then drafts corporate documents and approvals that make those positions accurate. Transactions are structured so that term sheets, purchase agreements and closing steps preserve desired tax positions and avoid unexpected stamp or documentary duties. Indirect taxes are addressed at the contract table—mapping supply chains, selecting place of supply, designing input VAT recovery and managing stamp duty and e-stamping obligations. The team also assists with customs and excise issues (classification, valuation, origin, bonded zones and drawbacks), manages transfer pricing and substance requirements for treaty relief, establishes compliance routines and handles audits and disputes without drama.
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
                                    Advised on entity and holding structures: compared Thai subsidiaries, branches, representative offices, joint ventures and holding companies, explaining permanent-establishment risks, withholding tax implications, thin capitalization considerations and repatriation mechanics; drafted filings and approvals accordingly.
                                </span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-200 text-sm">
                                <span className="text-secondary mt-1 flex-shrink-0">•</span>
                                <span className="leading-relaxed">
                                    Designed tax-efficient transactions and reorganizations: structured mergers, acquisitions, hive-downs and amalgamations to preserve VAT positions, avoid unexpected stamp duty and documentary taxes and maintain licensing and employment continuity; coordinated post-closing steps with banks and auditors.
                                </span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-200 text-sm">
                                <span className="text-secondary mt-1 flex-shrink-0">•</span>
                                <span className="leading-relaxed">
                                    Developed indirect-tax strategies: mapped supply chains and drafted contract terms that optimized input VAT recovery, managed specific business tax exposure and addressed stamp duty and e-stamping obligations up front.
                                </span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-200 text-sm">
                                <span className="text-secondary mt-1 flex-shrink-0">•</span>
                                <span className="leading-relaxed">
                                    Managed customs and excise matters: advised on tariff classification, valuation, origin, free-trade agreement use, bonded and IEAT zones and drawback schemes; handled post-clearance audits and negotiated settlements that reduced exposure while keeping goods moving.
                                </span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-200 text-sm">
                                <span className="text-secondary mt-1 flex-shrink-0">•</span>
                                <span className="leading-relaxed">
                                    Prepared transfer pricing and international tax documentation: coordinated with foreign counsel to align pricing and funding across jurisdictions, documented substance and beneficial ownership to secure treaty relief and pursued advance rulings where certainty was valuable.
                                </span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-200 text-sm">
                                <span className="text-secondary mt-1 flex-shrink-0">•</span>
                                <span className="leading-relaxed">
                                    Implemented compliance calendars and handled audits: established templates and evidence rooms for corporate and personal tax returns, VAT/SBT filings, withholding and Social Security submissions; responded to Revenue Department, Customs and Excise inquiries with organised evidence and technical arguments, and litigated when administrative resolution proved impossible.
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
