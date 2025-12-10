'use client';

import Image from "next/image";
import { MainFooter } from "@/components/main-footer";
import { useState } from "react";

export default function TeamPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedPractice, setSelectedPractice] = useState('All Practices');
    const [selectedPosition, setSelectedPosition] = useState('All Positions');

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
                <section className="pt-32 pb-12 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Top Links */}
                        <div className="flex justify-end gap-6 mb-8 text-xs text-gray-300">
                            <a href="#" className="hover:text-secondary transition-colors">
                                LITIGATION, MEDIATION & ADR
                            </a>
                            <a href="#" className="hover:text-secondary transition-colors">
                                TAXATION
                            </a>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            Dej-Udom & Associates Team
                        </h1>

                        <p className="text-base text-gray-200 max-w-5xl leading-relaxed">
                            At Dej-Udom & Associates, our strength lies in a diverse bench of seasoned attorneys, industry-savvy consultants, and dedicated support specialists who blend technical excellence with commercial acumen to advance every client's objectives. With decades of combined experience across all major practice areas, our professionals deliver coordinated, cross-border advice in Thai, English, and several other languages, ensuring both local fluency and global reach.
                        </p>
                    </div>
                </section>

                {/* Leadership Section */}
                <section className="pb-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-12">
                            Leadership
                        </h2>

                        <div className="flex items-start gap-12">
                            {/* Founder Image */}
                            <div className="flex-shrink-0">
                                <div className="w-64 h-80 relative rounded-lg overflow-hidden">
                                    <Image
                                        src="/dej.png"
                                        alt="Professor Dej-Udom Krairit"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Leadership Content */}
                            <div className="flex-1">
                                <p className="text-gray-200 text-sm leading-relaxed mb-4">
                                    Helmed by our founder, Professor Dej-Udom Krairit, the leadership team sets the firm's strategic vision, champions innovation, and upholds an uncompromising commitment to integrity, client service, and professional ethics.
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 text-sm font-semibold transition-colors"
                                >
                                    Read More
                                    <span>→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Professionals Section */}
                <section className="pb-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                            Professionals
                        </h2>

                        <p className="text-gray-200 text-sm leading-relaxed mb-8">
                            Driven by principles of integrity, ingenuity, and partnership, Dej-Udom & Associates brings together <span className="font-bold">more than 40 multilingual lawyers and consultants</span> whose Thai insight and international credentials empower clients to succeed in Southeast Asia and beyond; explore our professionals below to see how their sector-specific expertise and collaborative approach can advance your goals.
                        </p>

                        {/* Search Section */}
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-white mb-4">
                                Search Our Legal Counsel
                            </h3>

                            {/* Search Input */}
                            <div className="relative mb-4">
                                <input
                                    type="text"
                                    placeholder="Search for lawyers"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full px-4 py-3 pr-12 bg-white text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                                />
                                <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary/90 transition-colors">
                                    <svg className="w-4 h-4 text-[#0a2608]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </button>
                            </div>

                            {/* Filters */}
                            <div className="flex gap-4">
                                <select
                                    value={selectedPractice}
                                    onChange={(e) => setSelectedPractice(e.target.value)}
                                    className="px-4 py-2 bg-white text-gray-900 rounded text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                                >
                                    <option>All Practices</option>
                                    <option>Corporate/M&A</option>
                                    <option>Litigation</option>
                                    <option>Intellectual Property</option>
                                    <option>Immigration</option>
                                    <option>Taxation</option>
                                </select>

                                <select
                                    value={selectedPosition}
                                    onChange={(e) => setSelectedPosition(e.target.value)}
                                    className="px-4 py-2 bg-white text-gray-900 rounded text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                                >
                                    <option>All Positions</option>
                                    <option>Partner</option>
                                    <option>Senior Associate</option>
                                    <option>Associate</option>
                                    <option>Consultant</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Members Grid */}
                <section className="pb-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Team Member Card - Repeat for each member */}
                            {[
                                { name: 'Shawn Krairit', position: 'Associates', image: '/team-member-1.png' },
                                { name: 'Shawn Krairit', position: 'Partner', image: '/team-member-2.png' },
                                { name: 'Shawn Krairit', position: 'Senior Associates', image: '/team-member-3.png' },
                                { name: 'Shawn Krairit', position: 'Senior Manager', image: '/team-member-4.png' },
                            ].map((member, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                                >
                                    {/* Profile Image */}
                                    <div className="aspect-[3/4] bg-gray-200 relative">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Member Info */}
                                    <div className="p-4 text-center">
                                        <h3 className="font-bold text-gray-900 text-sm mb-1">
                                            {member.name}
                                        </h3>
                                        <p className="text-gray-600 text-xs">
                                            {member.position}
                                        </p>
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
