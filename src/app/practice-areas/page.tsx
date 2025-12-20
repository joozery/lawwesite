'use client';

import Image from "next/image";
import Link from "next/link";
import { MainFooter } from "@/components/main-footer";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
// Import i18n to match Contact page pattern, although Provider handles it
// Removing import '@/lib/i18n' to avoid errors as seen previously

const services = [
    {
        id: "corporate",
        titleKey: "departments.corporate.title", // Using existing keys structure or creating new
        // For this specific design request, I'll use hardcoded text first to MATCH THE DESIGN EXACTLY, 
        // as translation keys might simpler than the detailed description in the design.
        // Actually, let's use the text from the design image.
        title: "Incorporation & Corporate Matters",
        description: "Entity setup, shareholder agreements, capital structuring, and company secretarial support from launch to growth.",
        image: "/service-corporate.png",
        href: "/practice-areas/corporate"
    },
    {
        id: "litigation",
        title: "Litigation, Mediation & ADR",
        description: "Commercial disputes, regulatory investigations, and alternative dispute resolution handled by experienced litigators.",
        image: "/service-litigation.png",
        href: "/practice-areas/litigation"
    },
    {
        id: "immigration",
        title: "Immigration, Relocation & Work Permit",
        description: "Visas, work permits, BOI, and cross-border relocation with clear timelines and documentation checklists.",
        image: "/service-immigration.png",
        href: "/practice-areas/immigration"
    },
    {
        id: "taxation",
        title: "Taxation",
        description: "Transaction tax, transfer pricing coordination, and dispute resolution aligned with business objectives.",
        image: "/service-taxation.png",
        href: "/practice-areas/taxation"
    },
    {
        id: "ip",
        title: "Intellectual Property",
        description: "Trademarks, patents (via agents), copyright, and brand protection including enforcement and portfolio strategy.",
        image: "/service-ip.png",
        href: "/practice-areas/ip"
    },
];

export default function PracticeAreasPage() {
    const { t } = useTranslation();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#0a2608]">
            {/* Background Image - Using a dark city background similar to design */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/588618834.jpg"
                    alt="Background"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                {/* Green Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a2608]/90 via-[#0a2608]/80 to-[#0a2608]/90" />
            </div>

            {/* All Content */}
            <div className="relative z-10 min-h-screen flex flex-col">
                <div className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">

                    {/* Header Section */}
                    <div className="mb-16">
                        <h1 className="text-[29px] font-serif font-bold text-white mb-6">
                            Legal Services
                        </h1>
                        <p className="text-gray-200 text-[11px] leading-relaxed tracking-wide max-w-5xl">
                            Dej-Udom & Associates Attorneys-at-Law delivers partner-led, business-focused counsel to Thai and international clients from our base in Bangkok's Silom financial district. Drawing on more than four decades of courtroom and boardroom experience, we provide seamless advice across: Incorporation & Corporate Matters, Immigration, Relocation & Work Permit, Intellectual Property, Litigation, Mediation & ADR and Taxation. Our multidisciplinary teams combine local insight with international perspective, allowing you to pursue opportunity and manage risk with confidence.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="flex flex-col gap-8">
                        {/* Top Row: 3 items */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.slice(0, 3).map((service) => (
                                <Link
                                    key={service.id}
                                    href={service.href}
                                    className="group relative flex flex-col border-2 border-white rounded-[20px] overflow-hidden hover:border-secondary transition-colors duration-300 p-1.5"
                                >
                                    {/* Image Section - Top Half */}
                                    <div className="relative h-56 w-full">
                                        <div className="relative w-full h-full rounded-[14px] overflow-hidden">
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                fill
                                                className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                    </div>

                                    {/* Content Section - Bottom Half */}
                                    <div className="flex flex-col flex-1 px-4 py-5 bg-transparent">
                                        <h3 className="text-[17px] font-bold text-white mb-3 leading-tight min-h-[56px] flex items-start">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-200 text-[10px] leading-[1.6] mb-6 flex-1 opacity-90">
                                            {service.description}
                                        </p>

                                        <div className="flex justify-end mt-auto">
                                            <span className="text-[#f9b400] text-sm font-bold hover:underline bg-transparent">
                                                View More
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Bottom Row: 2 items centered */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full lg:w-2/3">
                            {services.slice(3, 5).map((service) => (
                                <Link
                                    key={service.id}
                                    href={service.href}
                                    className="group relative flex flex-col border-2 border-white rounded-[20px] overflow-hidden hover:border-secondary transition-colors duration-300 p-1.5"
                                >
                                    {/* Image Section - Top Half */}
                                    <div className="relative h-56 w-full">
                                        <div className="relative w-full h-full rounded-[14px] overflow-hidden">
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                fill
                                                className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                    </div>

                                    {/* Content Section - Bottom Half */}
                                    <div className="flex flex-col flex-1 px-4 py-5 bg-transparent">
                                        <h3 className="text-[22px] font-bold text-white mb-3 leading-tight min-h-[32px] flex items-start">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-200 text-[13px] leading-[1.6] mb-6 flex-1 opacity-90">
                                            {service.description}
                                        </p>

                                        <div className="flex justify-end mt-auto">
                                            <span className="text-[#f9b400] text-sm font-bold hover:underline bg-transparent">
                                                View More
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Why Clients Choose Us Section */}
                    <div className="mt-20 mb-16">
                        <h2 className="text-2xl font-serif font-bold text-white mb-8 border-l-4 border-[#f9b400] pl-4">
                            Why Clients Choose Us
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                            <div>
                                <h3 className="text-[#f9b400] font-bold text-lg mb-1">Depth of Expertise</h3>
                                <p className="text-white font-serif italic text-sm opacity-90">
                                    Senior partner and sector specialists involved from strategy to execution.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-[#f9b400] font-bold text-lg mb-1">Regional Reach</h3>
                                <p className="text-white font-serif italic text-sm opacity-90">
                                    Established alliances across ASEAN with reliable cross-border support.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-[#f9b400] font-bold text-lg mb-1">Commercial Clarity</h3>
                                <p className="text-white font-serif italic text-sm opacity-90">
                                    Advice framed around your business model with clear, practical options.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-[#f9b400] font-bold text-lg mb-1">Agile Delivery</h3>
                                <p className="text-white font-serif italic text-sm opacity-90">
                                    Lean teams that move quickly with secure, confidential matter handling.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Speak to our Attorney Form */}
                    <div className="mb-12">
                        <h2 className="text-xl font-bold text-white mb-6">
                            Speak to our Attorney
                        </h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Full Name */}
                                <div className="space-y-2">
                                    <label className="text-white font-bold text-sm">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full bg-transparent border border-gray-500 rounded px-4 py-2.5 text-white focus:outline-none focus:border-[#f9b400] transition-colors"
                                    />
                                </div>

                                {/* Email Address */}
                                <div className="space-y-2">
                                    <label className="text-white font-bold text-sm">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full bg-transparent border border-gray-500 rounded px-4 py-2.5 text-white focus:outline-none focus:border-[#f9b400] transition-colors"
                                    />
                                </div>

                                {/* Inquiry Type */}
                                <div className="space-y-2">
                                    <label className="text-white font-bold text-sm">
                                        Inquiry Type <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <select className="w-full bg-transparent border border-gray-500 rounded px-4 py-2.5 text-gray-300 focus:outline-none focus:border-[#f9b400] transition-colors appearance-none cursor-pointer">
                                            <option value="" disabled selected>Please select the type of inquiry you have</option>
                                            <option value="corporate">Incorporation & Corporate Matters</option>
                                            <option value="litigation">Litigation, Mediation & ADR</option>
                                            <option value="immigration">Immigration, Relocation & Work Permit</option>
                                            <option value="taxation">Taxation</option>
                                            <option value="ip">Intellectual Property</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Describe Your Matter */}
                                <div className="space-y-2">
                                    <label className="text-white font-bold text-sm">
                                        Describe Your Matter (No Confidential Information) <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        rows={4}
                                        className="w-full bg-transparent border border-gray-500 rounded px-4 py-2.5 text-white focus:outline-none focus:border-[#f9b400] transition-colors resize-none"
                                    ></textarea>
                                </div>
                            </div>

                            {/* Terms & Submit */}
                            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
                                <div className="flex items-start gap-3 max-w-2xl">
                                    <div className="relative flex items-center">
                                        <input
                                            type="checkbox"
                                            id="terms"
                                            className="peer h-5 w-5 cursor-pointer appearance-none border border-gray-500 bg-transparent checked:border-[#f9b400] checked:bg-[#f9b400] transition-all"
                                        />
                                        <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none opacity-0 peer-checked:opacity-100 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                    <label htmlFor="terms" className="text-xs text-white leading-relaxed cursor-pointer select-none">
                                        I agree to the <span className="font-bold">Terms & Conditions</span> and consent to Dej-Udom & Associates Ltd. collecting, using, and disclosing my personal data in accordance with the <span className="font-bold">Privacy Policy</span>.
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="px-8 py-2.5 bg-white/20 hover:bg-white/30 border border-white/30 text-white font-bold text-sm rounded-full transition-all whitespace-nowrap shadow-lg backdrop-blur-sm"
                                >
                                    Submit Inquiry
                                </button>
                            </div>
                        </form>
                    </div>

                </div>

                {/* Footer */}
                <div className="relative z-20">
                    <MainFooter />
                </div>
            </div>
        </div>
    );
}
