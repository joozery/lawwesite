'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MainFooter } from "@/components/main-footer";

export default function AboutPage() {
    return (
        <div className="min-h-screen relative overflow-hidden">
                {/* Background Image - Absolute for this page only */}
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
                        About Dej-Udom & Associates
                    </h1>
                    
                    <p className="text-lg mb-6 max-w-4xl leading-relaxed">
                        Commercial insight, local authority, and uncompromising service make us the full-service law firm of choice in Thailand and beyond.
                    </p>
                    
                    <p className="text-base text-gray-200 max-w-4xl leading-relaxed">
                        Founded in Bangkok in 1986 by Professor Dej-Udom Krairit, Dej-Udom & Associates has spent nearly four decades helping businesses, investors, and individuals navigate complex legal landscapes across Southeast Asia and the wider world. From our independent base in Thailand, we deliver integrated, cross-border advice that aligns with your commercial objectives and safeguards your long-term success.
                    </p>
                    </div>
                </section>

            {/* Our Commitment Section */}
            <section className="py-20 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-12">
                        Our Commitment
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
                        <div>
                            <h3 className="text-xl font-bold text-secondary mb-4">Client Focus</h3>
                            <p className="text-sm leading-relaxed text-gray-300">
                                We invest the time to understand your industry, strategy, and operational realities, enabling us to provide business-driven solutions that add measurable value.
                            </p>
                        </div>
                        
                        <div>
                            <h3 className="text-xl font-bold text-secondary mb-4">Excellence in Service</h3>
                            <p className="text-sm leading-relaxed text-gray-300">
                                Our multidisciplinary team is recognized for responsiveness, clarity, and integrity. We deliver practical, actionable advice whether resolving a single issue or stewarding your most significant transactions.
                            </p>
                        </div>
                        
                        <div>
                            <h3 className="text-xl font-bold text-secondary mb-4">Local Strength, Global Perspective</h3>
                            <p className="text-sm leading-relaxed text-gray-300">
                                With deep roots in Thailand and strategic alliances on six continents, we combine nuanced local knowledge with an international outlook, ensuring seamless support for inbound and outbound matters alike.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Areas of Practice Section */}
            <section className="py-20 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-12">
                        Areas of Practice
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="border border-white/30 p-8 rounded hover:border-secondary transition-colors">
                            <h3 className="text-xl font-bold text-white mb-4">Incorporation & Corporate Matters</h3>
                            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                                Strategic advice on corporate structuring, regulatory compliance, mergers and acquisitions, joint ventures, and commercial contracts.
                            </p>
                            <Link href="#" className="inline-flex items-center text-secondary hover:text-secondary/80 text-sm">
                                Read More <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                        
                        <div className="border border-white/30 p-8 rounded hover:border-secondary transition-colors">
                            <h3 className="text-xl font-bold text-white mb-4">Litigation, Mediation & ADR</h3>
                            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                                Robust advocacy in complex commercial disputes, domestic and international arbitration, and all tiers of Thai courts.
                            </p>
                            <Link href="#" className="inline-flex items-center text-secondary hover:text-secondary/80 text-sm">
                                Read More <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                        
                        <div className="border border-white/30 p-8 rounded hover:border-secondary transition-colors">
                            <h3 className="text-xl font-bold text-white mb-4">Intellectual Property</h3>
                            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                                End to end protection and enforcement of trademarks, patents, designs, copyrights, and trade secrets.
                            </p>
                            <Link href="#" className="inline-flex items-center text-secondary hover:text-secondary/80 text-sm">
                                Read More <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                        
                        <div className="grid grid-rows-2 gap-6">
                            <div className="border border-white/30 p-6 rounded hover:border-secondary transition-colors">
                                <h3 className="text-lg font-bold text-white mb-2">Taxation</h3>
                                <p className="text-sm text-gray-300 mb-3 leading-relaxed">
                                    Holistic advice on corporate and personal tax, VAT, customs and excise details, and tax-efficient structuring.
                                </p>
                                <Link href="#" className="inline-flex items-center text-secondary hover:text-secondary/80 text-sm">
                                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                            
                            <div className="border border-white/30 p-6 rounded hover:border-secondary transition-colors">
                                <h3 className="text-lg font-bold text-white mb-2">Immigration, Relocation & Work Permit</h3>
                                <p className="text-sm text-gray-300 mb-3 leading-relaxed">
                                    Practical family support for visas, work permits, business licenses, and long-term residency applications.
                                </p>
                                <Link href="#" className="inline-flex items-center text-secondary hover:text-secondary/80 text-sm">
                                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-8">
                        Mission
                    </h2>
                    
                    <div className="text-white space-y-6 max-w-5xl">
                        <p className="text-base leading-relaxed">
                            To be the trusted legal partner of choice for multinational, high-growth enterprises and Thai businesses, providing tailored counsel that empowers our clients to thrive in complex and competitive markets.
                        </p>
                        
                        <p className="text-base leading-relaxed">
                            Whether you are a global corporation, an emerging enterprise, or a private individual, Dej-Udom & Associates stands ready to protect your interests with professionalism, creativity, and unwavering commitment to excellence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Custom Footer for About Page Only */}
            <div className="relative z-20">
                <MainFooter />
            </div>
            </div>
        </div>
    );
}
