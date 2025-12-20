'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MainFooter } from '@/components/main-footer';
import { Mail, Phone, Linkedin, ArrowLeft } from 'lucide-react';

// Mock Data for Attorneys
const attorneysData: Record<string, any> = {
    "dej-udom-krairit": {
        name: "Dej-Udom Krairit",
        role: "Founder & CEO",
        image: "/dej.png",
        email: "dej-udom@dejudom.com",
        phone: "+66-2-233-0055",
        linkedin: "Dej-Udom Krairit",
        profile: "Dej-Udom Krairit is the Founder and CEO of Dej-Udom & Associates. With over 40 years of experience in the Thai legal industry, he is widely recognized as a leading authority on corporate law, foreign investment, and dispute resolution. He has served as a President of the Lawyers Council of Thailand and continues to advise major multinational corporations on their operations in the Kingdom.",
        contributions: [
            "Served as President of the Lawyers Council of Thailand for three consecutive terms.",
            "Advised on the restructuring of major state enterprises and financial institutions.",
            "Pioneered cross-border legal frameworks for ASEAN integration.",
            "Regular lecturer at top Thai universities on legal ethics and practice.",
            "Recognized by Chambers Asia-Pacific and Legal 500 as a Senior Statesman."
        ]
    },
    "nipa-pakdeechanuan": {
        name: "Nipa Pakdeechanuan",
        role: "Senior Partner",
        image: "/team-member-1.png",
        email: "nipa@dejudom.com",
        phone: "+66-2-233-0055",
        linkedin: "Nipa Pakdeechanuan",
        profile: "Nipa Pakdeechanuan acts as a Senior Partner specializing in corporate and commercial law. She has extensive experience in joint ventures, mergers and acquisitions, and foreign direct investment. Her practical approach helps clients navigate complex regulatory environments with confidence.",
        contributions: [
            "Led legal due diligence for multiple high-value M&A transactions.",
            "Advisor to foreign investors in the Eastern Economic Corridor (EEC) projects.",
            "Expert in BOI promotion applications and compliance.",
            "Drafted and negotiated complex shareholder agreements for international joint ventures."
        ]
    },
    "benjawan-rasdusade": {
        name: "Benjawan Rasdusade",
        role: "Partner",
        image: "/team-member-2.png",
        email: "benjawan@dejudom.com",
        phone: "+66-2-233-0055",
        linkedin: "Benjawan Rasdusade",
        profile: "Benjawan Rasdusade is a Partner with a strong focus on Intellectual Property and Litigation. She represents clients in trademark and patent disputes and manages IP portfolios for global brands entering the Thai market.",
        contributions: [
            "Successfully defended major international brands in trademark infringement cases.",
            "Manages IP portfolios for over 50 global companies.",
            "Expertise in IP enforcement and anti-counterfeiting strategies.",
            "Provides strategic advice on IP commercialization and licensing."
        ]
    },
    "shawn-krairit": {
        name: "Shawn Krairit",
        role: "Associates",
        image: "", // Placeholder or use generic
        email: "email@dejudom.com",
        phone: "+66-XXX-XXX-XXXX",
        linkedin: "LinkedIn Profile Link",
        profile: "Shawn Krairit is an Associate at Dej-Udom & Associates, advising both domestic and international clients on corporate, commercial, and regulatory matters. His practice focuses on contract drafting and negotiation, corporate structuring, and compliance support for businesses entering or expanding in Thailand. Shawn is valued for his practical, solution-oriented approach, helping clients balance legal requirements with commercial objectives. He has assisted clients across technology, retail, and manufacturing sectors, supporting transactions, risk assessments, and regulatory reviews. Known for clear communication and attention to detail, Shawn works closely with executives and in-house counsel to deliver timely, actionable advice. His commitment to efficiency and client service makes him a trusted member of the Dej-Udom & Associates team.",
        contributions: [
            "Drafted and negotiated comprehensive services and licensing agreements for a Thailand–APAC rollout, aligning terms across multiple jurisdictions.",
            "Supported legal due diligence and documentation workstreams for an SME acquisition, coordinating with finance and operations to close on schedule.",
            "Advised on Thai regulatory considerations for a new product launch, including consumer protection, advertising, and data-related requirements.",
            "Led a contract remediation project, standardizing vendor terms and reducing cycle time for renewals and new engagements.",
            "Prepared internal playbooks for contract review and negotiation, improving consistency and stakeholder visibility.",
            "Assisted in dispute strategy and settlement negotiations for a commercial contract matter, helping the client achieve a cost–effective resolution."
        ]
    }
};

export default function AttorneyProfilePage() {
    const params = useParams();
    const slug = params.slug as string;
    const attorney = attorneysData[slug];

    if (!attorney) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#0a2608] text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Attorney Not Found</h1>
                    <Link href="/practice-areas" className="text-[#f9b400] hover:underline">
                        Back to Practice Areas
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen relative bg-[#0a2608] font-sans">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/588618834.jpg"
                    alt="Background"
                    fill
                    className="object-cover opacity-30"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a2608]/80 via-[#0a2608]/70 to-[#0a2608]" />
            </div>

            <div className="relative z-10 pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breacrumbs / Back */}
                <Link
                    href="/practice-areas"
                    className="inline-flex items-center gap-2 text-white/70 hover:text-[#f9b400] transition-colors mb-12 group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Previous Page
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
                    {/* Left Column: Info & Bio */}
                    <div className="lg:col-span-2 text-white">
                        {/* Header: Name & Role */}
                        <div className="mb-12">
                            <h1 className="text-4xl md:text-5xl font-bold mb-2">{attorney.name}</h1>
                            <p className="text-2xl text-gray-300 font-light">{attorney.role}</p>
                        </div>

                        {/* Contact Info - Visible mostly on Mobile here, or kept on left as per design */}
                        <div className="mb-12 space-y-2 text-gray-300">
                            <h3 className="text-[#f9b400] font-bold text-lg mb-2">Contact</h3>
                            <div className="flex items-center gap-2">
                                <span className="opacity-80">Email:</span>
                                <a href={`mailto:${attorney.email}`} className="hover:text-white hover:underline">{attorney.email}</a>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="opacity-80">Phone:</span>
                                <span>{attorney.phone}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="opacity-80">LinkedIn:</span>
                                <a href="#" className="hover:text-white hover:underline">{attorney.linkedin}</a>
                            </div>
                        </div>

                        {/* Professional Profile */}
                        <div className="mb-12">
                            <h3 className="text-[#f9b400] font-bold text-lg mb-4">Professional Profile</h3>
                            <p className="text-gray-200 leading-relaxed text-sm md:text-base opacity-90">
                                {attorney.profile}
                            </p>
                        </div>

                        {/* Key Contributions */}
                        <div>
                            <h3 className="text-[#f9b400] font-bold text-lg mb-4">Key Contributions</h3>
                            <ul className="space-y-3">
                                {attorney.contributions.map((item: string, index: number) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                                        <span className="text-gray-200 text-sm md:text-base opacity-90 leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-32">
                            <div className="relative aspect-square w-full max-w-sm mx-auto lg:ml-auto bg-gray-200 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
                                {attorney.image ? (
                                    <Image
                                        src={attorney.image}
                                        alt={attorney.name}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-500">
                                        No Image
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <MainFooter />
        </div>
    );
}
