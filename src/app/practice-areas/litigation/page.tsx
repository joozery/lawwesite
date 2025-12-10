'use client';

import Image from "next/image";
import { MainFooter } from "@/components/main-footer";

const primaryContacts = [
    {
        name: "Wanchai Kijchanpaiboon",
        position: "Partner",
        image: "/team-member-1.png",
    },
    {
        name: "Kittitad Rattanakuha",
        position: "Head of Department",
        image: "/team-member-3.png",
    },
];

export default function LitigationPage() {
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
                            Litigation, Mediation & ADR
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
                                        "Strong representation in disputes, arbitration and court proceedings"
                                    </p>
                                    <div className="flex flex-col gap-3">
                                        <a
                                            href="mailto:litigation@dejudom.com"
                                            className="flex items-center gap-2 text-white hover:text-secondary transition-colors text-sm"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            litigation@dejudom.com
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
                                    The firm resolves disputes with a single objective: secure the best commercial outcome, as quickly and cost-effectively as the law allows. Its Litigation Department appears in every major court in Thailand including the Civil Court of First Instance, Courts of Appeal and the Supreme Court and regularly acts before specialist forums including the Central Intellectual Property & International Trade Court, Labour Courts, Tax Court, Bankruptcy Court and Juvenile & Family Courts. The team handles both civil and criminal matters and manages cross-border disputes where evidence, witnesses or assets sit in multiple jurisdictions.
                                </p>
                            </div>

                            {/* Right Column */}
                            <div>
                                <p className="text-gray-200 text-sm leading-relaxed">
                                    Litigation in Thailand should be designed backward from the remedy required. Dej-Udom & Associates maps merits to facts that can be proved, ensures documentary and electronic evidence is authenticated and translated correctly, prepares witnesses and chooses experts who educate rather than obscure. Applications are sequenced so urgent relief (injunctions, preservation orders) is obtained swiftly; evidence is locked-in for trial hearing. The team builds enforcement into the case plan from the first meeting—asset mapping, security interests and jurisdictional analysis ensure that judgments and awards translate into recoveries. Mediation is approached as a structured negotiation with defined goals, not a checkbox exercise, and arbitration is managed from clause drafting to award enforcement under TAI, THAC, ICC, UNCITRAL and other rules.
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
                                    Represented clients in specialist and general courts: acted for international and domestic companies in high-value disputes before the Central IP & International Trade Court, Labour Court, Tax Court and general civil and criminal courts, and pursued appeals to the Supreme Court.
                                </span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-200 text-sm">
                                <span className="text-secondary mt-1 flex-shrink-0">•</span>
                                <span className="leading-relaxed">
                                    Developed merits maps and evidence plans: organized documentary, electronic and foreign evidence (including translations and notarizations), prepared witnesses and engaged experts in technology, finance and industry to support claims.
                                </span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-200 text-sm">
                                <span className="text-secondary mt-1 flex-shrink-0">•</span>
                                <span className="leading-relaxed">
                                    Obtained urgent relief: secured interim injunctions and preservation orders to prevent dissipation of assets or destruction of evidence, and drafted protective-order protocols for sensitive trade-secret or competition information.
                                </span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-200 text-sm">
                                <span className="text-secondary mt-1 flex-shrink-0">•</span>
                                <span className="leading-relaxed">
                                    Executed enforcement strategies: traced assets, perfected security interests, coordinated parallel actions and settlement negotiations and pursued garnishment and execution proceedings to convert judgments into cash or compliance.
                                </span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-200 text-sm">
                                <span className="text-secondary mt-1 flex-shrink-0">•</span>
                                <span className="leading-relaxed">
                                    Guided mediation: selected optimal timing, prepared position statements that balanced strengths and weaknesses and drafted settlement terms that courts could recognize and enforce, arranged private mediations for sensitive disputes.
                                </span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-200 text-sm">
                                <span className="text-secondary mt-1 flex-shrink-0">•</span>
                                <span className="leading-relaxed">
                                    Managed arbitrations: evaluated institutional and ad hoc rules, seat-governing law and language, appointed tribunals, managed procedural timetables and document exchanges, prepared damages models and expert evidence, and enforced awards under the New York Convention.
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
