'use client';

import Image from "next/image";
import Link from "next/link";
import { MainFooter } from "@/components/main-footer";

const services = [
    {
        id: "corporate",
        title: "Incorporation & Corporate Matters",
        description: "Entity setup, shareholder agreements, capital structuring, and company secretarial support from launch through growth.",
        image: "/service-corporate.png",
        href: "/practice-areas/corporate",
    },
    {
        id: "litigation",
        title: "Litigation, Mediation & ADR",
        description: "Commercial disputes, regulatory investigations, and alternative dispute resolution handled by experienced litigators.",
        image: "/service-litigation.png",
        href: "/practice-areas/litigation",
    },
    {
        id: "immigration",
        title: "Immigration, Relocation & Work Permit",
        description: "Visas, work permits, BOI, and cross-border relocation with clear timelines and documentation checklists.",
        image: "/service-immigration.png",
        href: "/practice-areas/immigration",
    },
    {
        id: "taxation",
        title: "Taxation",
        description: "Transaction tax, transfer pricing coordination, and dispute resolution aligned with business objectives.",
        image: "/service-taxation.png",
        href: "/practice-areas/taxation",
    },
    {
        id: "ip",
        title: "Intellectual Property",
        description: "Trademarks, patents (via agents), copyright, and brand protection including enforcement and portfolio strategy.",
        image: "/service-ip.png",
        href: "/practice-areas/ip",
    },
];

export default function PracticeAreasPage() {
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
                            Legal Services
                        </h1>

                        <p className="text-base text-gray-200 max-w-5xl leading-relaxed">
                            Dej-Udom & Associates Attorneys-at-Law delivers partner-led, business-focused counsel to Thai and international clients from our base in Bangkok's Silom financial district. Drawing on more than four decades of courtroom and boardroom experience, we provide seamless advice across Incorporation & Corporate Matters, Immigration, Relocation & Work Permit, Intellectual Property, Litigation, Mediation & ADR and Taxation. Our multidisciplinary teams combine local insight with international perspective, allowing you to pursue opportunity and manage risk with confidence.
                        </p>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="pb-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service) => (
                                <Link
                                    key={service.id}
                                    href={service.href}
                                    className="group bg-[#0d2b0a] border-2 border-white/30 rounded-lg overflow-hidden hover:border-secondary transition-all"
                                >
                                    {/* Image */}
                                    <div className="relative h-56 overflow-hidden">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-secondary transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                            {service.description}
                                        </p>
                                        <div className="flex items-center gap-2 text-secondary text-sm font-semibold">
                                            View More
                                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Clients Choose Us */}
                <section className="pb-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-12">
                            Why Clients Choose Us
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold text-secondary mb-3">
                                    Depth of Expertise
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed italic">
                                    Senior partner and sector specialists involved from strategy to execution.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-secondary mb-3">
                                    Regional Reach
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed italic">
                                    Established alliances across ASEAN with reliable, cross-border support.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-secondary mb-3">
                                    Commercial Clarity
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed italic">
                                    Advice framed around your business model with clear, practical options.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-secondary mb-3">
                                    Agile Delivery
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed italic">
                                    Lean teams that move quickly with secure, confidential matter handling.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section className="pb-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-12">
                            Speak to our Attorney
                        </h2>

                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Full Name */}
                            <div>
                                <label htmlFor="fullName" className="block text-white text-sm font-semibold mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    className="w-full px-4 py-3 bg-transparent border-2 border-white/30 rounded text-white placeholder-gray-400 focus:outline-none focus:border-secondary transition-colors"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            {/* Email Address */}
                            <div>
                                <label htmlFor="email" className="block text-white text-sm font-semibold mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-3 bg-transparent border-2 border-white/30 rounded text-white placeholder-gray-400 focus:outline-none focus:border-secondary transition-colors"
                                    placeholder="Enter your email"
                                />
                            </div>

                            {/* Inquiry Type */}
                            <div className="md:col-span-2">
                                <label htmlFor="inquiryType" className="block text-white text-sm font-semibold mb-2">
                                    Inquiry Type
                                </label>
                                <select
                                    id="inquiryType"
                                    name="inquiryType"
                                    className="w-full px-4 py-3 bg-transparent border-2 border-white/30 rounded text-gray-400 focus:outline-none focus:border-secondary transition-colors appearance-none cursor-pointer"
                                    style={{
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'right 1rem center',
                                        backgroundSize: '1.5rem'
                                    }}
                                >
                                    <option value="">Please select the type of inquiry you have</option>
                                    <option value="corporate">Incorporation & Corporate Matters</option>
                                    <option value="immigration">Immigration, Relocation & Work Permit</option>
                                    <option value="ip">Intellectual Property</option>
                                    <option value="litigation">Litigation, Mediation & ADR</option>
                                    <option value="taxation">Taxation</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            {/* Message */}
                            <div className="md:col-span-2">
                                <label htmlFor="message" className="block text-white text-sm font-semibold mb-2">
                                    Describe Your Matter (No Confidential Information)
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    className="w-full px-4 py-3 bg-transparent border-2 border-white/30 rounded text-white placeholder-gray-400 focus:outline-none focus:border-secondary transition-colors resize-none"
                                    placeholder="Please describe your inquiry..."
                                ></textarea>
                            </div>

                            {/* Terms and Submit */}
                            <div className="md:col-span-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                                <div className="flex items-start gap-3">
                                    <input
                                        type="checkbox"
                                        id="terms"
                                        name="terms"
                                        className="mt-1 w-4 h-4 border-2 border-white/30 rounded bg-transparent focus:ring-secondary"
                                    />
                                    <label htmlFor="terms" className="text-white text-xs leading-relaxed">
                                        I agree to the <span className="font-semibold">Terms & Conditions</span> and consent to Dej-Udom & Associates Ltd. collecting, using, and disclosing my personal data in accordance with the <span className="font-semibold">Privacy Policy</span>.
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    className="px-8 py-3 bg-white/10 hover:bg-secondary text-white hover:text-[#0a2608] border-2 border-white/30 hover:border-secondary rounded-full font-semibold transition-all"
                                >
                                    Submit Inquiry
                                </button>
                            </div>
                        </form>
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
