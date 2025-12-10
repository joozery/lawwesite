'use client';

import Image from "next/image";
import { MainFooter } from "@/components/main-footer";

const primaryContacts = [
    {
        name: "Pimpair Pienpatara",
        position: "Partner",
        image: "/team-member-2.png",
    },
    {
        name: "Worawut Krairit",
        position: "Senior Partner",
        image: "/team-member-1.png",
    },
];

export default function ImmigrationPage() {
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
                            Immigration, Relocation & Work Permit
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
                                        "Seamless solutions for visas, work permits and employment"
                                    </p>
                                    <div className="flex flex-col gap-3">
                                        <a
                                            href="mailto:immigration-employment@dejudom.com"
                                            className="flex items-center gap-2 text-white hover:text-secondary transition-colors text-sm"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            immigration-employment@dejudom.com
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
                                    Thailand is a regional hub for investment and headquarters operations, and moving people across borders requires a well-structured immigration programme. Dej-Udom & Associates' Immigration & Employment team designs and runs corporate immigration programs so that companies can mobilize talent quickly while remaining fully compliant. Whether supporting multinationals, SMEs, start-ups or NGOs, the firm begins with a practical eligibility review of visa and work-authorization options, prepares evidence packs for legalization or apostille, and aligns job titles and descriptions between immigration filings and employment contracts. Families are supported holistically, coordinating dependent visas and school support so households settle smoothly.
                                </p>
                            </div>

                            {/* Right Column */}
                            <div>
                                <p className="text-gray-200 text-sm leading-relaxed">
                                    The firm treats immigration as a controlled process rather than an ad-hoc exercise. If you're moving immigration filings in-house or to the Government of Thailand's Industrial Estate Authority of Thailand (IEAT) privileges, keeps corporate immigration profiles current and trains HR teams on documentation standards so that fast-track channels remain open. The team advises on who is eligible for which visa, the documents required, approval thresholds and re-entry protocols, enabling businesses to scale without surprises. Short-term assignments and frequent travel are managed through notification workflows and re-entry strategies, and off-boarding is handled cleanly to close visas and work permits, update TM30 and 90-day reporting, and provide exit documentation.
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
                                    Designed immigration playbooks for multinational groups: created eligibility matrices, document checklists and approval workflows so that line managers, HR and mobility providers could move personnel into Thailand quickly and compliantly.
                                </span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-200 text-sm">
                                <span className="text-secondary mt-1 flex-shrink-0">•</span>
                                <span className="leading-relaxed">
                                    Leveraged BOI/IEAT privileges: coordinated applications for digital work permits and multiple re-entry permissions through the One-Stop Service Centre while synchronizing immigration filings with promotion KPIs.
                                </span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-200 text-sm">
                                <span className="text-secondary mt-1 flex-shrink-0">•</span>
                                <span className="leading-relaxed">
                                    Secured Long-Term Resident visas: prepared evidence packs and maintained status for high-net-worth individuals, pensioners, "work-from-Thailand" professionals and highly-skilled employees, and advised sponsors on waiving benefit sets.
                                </span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-200 text-sm">
                                <span className="text-secondary mt-1 flex-shrink-0">•</span>
                                <span className="leading-relaxed">
                                    Implemented travel-notification systems: developed workflows that reminded HR and travellers about re-entry permits, role changes and short-term work authorizations, and calibrated when business-visitor status was sufficient versus when a work permit was required.
                                </span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-200 text-sm">
                                <span className="text-secondary mt-1 flex-shrink-0">•</span>
                                <span className="leading-relaxed">
                                    Managed end-of-assignment off-boarding: performed clean cancellations of visas and work permits, updated TM30 and 90-day reporting, confirmed payroll and Social Security closures and provided employees with departure documentation.
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
