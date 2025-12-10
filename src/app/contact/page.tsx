'use client';

import Image from "next/image";
import { Mail, Phone, Building2, User, Scale, Home, Plane, Receipt, Lightbulb } from "lucide-react";
import { MainFooter } from "@/components/main-footer";

const departments = [
    {
        id: "ceo",
        icon: Building2,
        title: "Chief Executive Officer",
        subtitle: "Officer of the CEO",
        buttonText: "Email Office",
        href: "mailto:office@dejudom.com",
    },
    {
        id: "deputy",
        icon: User,
        title: "Deputy Managing Partner",
        subtitle: "Executive Office",
        buttonText: "Email Deputy",
        href: "mailto:deputy@dejudom.com",
    },
    {
        id: "litigation",
        icon: Scale,
        title: "Litigation, Mediation & ADR",
        subtitle: "Dispute Resolution",
        buttonText: "Contact Litigation Team",
        href: "mailto:litigation@dejudom.com",
    },
    {
        id: "corporate",
        icon: Home,
        title: "Incorporation & Corporate Matters",
        subtitle: "Corporate Services",
        buttonText: "Contact Corporate Team",
        href: "mailto:corporate@dejudom.com",
    },
    {
        id: "immigration",
        icon: Plane,
        title: "Immigration, Relocation & Work Permit",
        subtitle: "Immigration Services",
        buttonText: "Ask Immigration Team",
        href: "mailto:immigration@dejudom.com",
    },
    {
        id: "taxation",
        icon: Receipt,
        title: "Taxation",
        subtitle: "Dispute and Tax",
        buttonText: "Ask a Tax Adviser",
        href: "mailto:tax@dejudom.com",
    },
    {
        id: "ip",
        icon: Lightbulb,
        title: "Intellectual Property",
        subtitle: "Patent & Trademark",
        buttonText: "Talk to IP Specialist",
        href: "mailto:ip@dejudom.com",
    },
];

export default function ContactPage() {
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
                {/* Contact Form Section */}
                <section className="pt-32 pb-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-12">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                                Contact Us
                            </h2>
                            <p className="text-gray-200 text-sm leading-relaxed max-w-4xl">
                                Whether you are seeking strategic legal advice, media commentary, or career information, our team stands ready to assist. Please reach out through any of the channels below and we will connect you with the right professional without delay.
                            </p>
                        </div>

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
                                    placeholder=""
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
                                    placeholder=""
                                />
                            </div>

                            {/* Inquiry Type */}
                            <div>
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
                            <div className="md:row-span-2">
                                <label htmlFor="message" className="block text-white text-sm font-semibold mb-2">
                                    Describe Your Matter (No Confidential Information)
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={8}
                                    className="w-full h-[calc(100%-2rem)] px-4 py-3 bg-transparent border-2 border-white/30 rounded text-white placeholder-gray-400 focus:outline-none focus:border-secondary transition-colors resize-none"
                                    placeholder=""
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
                                    className="px-8 py-3 bg-white/10 hover:bg-secondary text-white hover:text-[#0a2608] border-2 border-white/30 hover:border-secondary rounded-full font-semibold transition-all whitespace-nowrap"
                                >
                                    Submit Inquiry
                                </button>
                            </div>
                        </form>
                    </div>
                </section>

                {/* Map Section */}
                <section className="pb-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg overflow-hidden">
                            <div className="w-full h-96 rounded-lg overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.9876543210123!2d100.5234567890123!3d13.7234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQzJzI0LjQiTiAxMDDCsDMxJzI0LjQiRQ!5e0!3m2!1sen!2sth!4v1234567890123!5m2!1sen!2sth"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Dej-Udom & Associates Office Location"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Contacts Section */}
                <section className="pb-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8">
                            Key Contacts
                        </h2>

                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-white/10">
                                            <th className="px-6 py-4 text-left text-sm font-semibold text-white">Purpose</th>
                                            <th className="px-6 py-4 text-left text-sm font-semibold text-white">Name</th>
                                            <th className="px-6 py-4 text-left text-sm font-semibold text-white">Email</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-200">
                                        <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                                            <td className="px-6 py-4 text-sm">Chief Executive Officer</td>
                                            <td className="px-6 py-4 text-sm">Dej-Udom Krairit, Esq.</td>
                                            <td className="px-6 py-4 text-sm">
                                                <a href="mailto:dej-udom@dejudom.com" className="text-secondary hover:underline">
                                                    dej-udom@dejudom.com
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                                            <td className="px-6 py-4 text-sm">Deputy Managing Partner</td>
                                            <td className="px-6 py-4 text-sm">Worawut Krairit, Esq.</td>
                                            <td className="px-6 py-4 text-sm">
                                                <a href="mailto:worawut@dejudom.com" className="text-secondary hover:underline">
                                                    worawut@dejudom.com
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                                            <td className="px-6 py-4 text-sm">Litigation, Mediation & ADR</td>
                                            <td className="px-6 py-4 text-sm">-</td>
                                            <td className="px-6 py-4 text-sm">
                                                <a href="mailto:litigation@dejudom.com" className="text-secondary hover:underline">
                                                    litigation@dejudom.com
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                                            <td className="px-6 py-4 text-sm">Intellectual Property</td>
                                            <td className="px-6 py-4 text-sm">-</td>
                                            <td className="px-6 py-4 text-sm">
                                                <a href="mailto:ceo_ip@dejudom.com" className="text-secondary hover:underline">
                                                    ceo_ip@dejudom.com
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                                            <td className="px-6 py-4 text-sm">Incorporation & Corporate Matters</td>
                                            <td className="px-6 py-4 text-sm">-</td>
                                            <td className="px-6 py-4 text-sm">
                                                <a href="mailto:corporate@dejudom.com" className="text-secondary hover:underline">
                                                    corporate@dejudom.com
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                                            <td className="px-6 py-4 text-sm">Immigration, Relocation & Work Permit</td>
                                            <td className="px-6 py-4 text-sm">-</td>
                                            <td className="px-6 py-4 text-sm">
                                                <a href="mailto:immigration-employment@dejudom.com" className="text-secondary hover:underline">
                                                    immigration-employment@dejudom.com
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-white/5 transition-colors">
                                            <td className="px-6 py-4 text-sm">Taxation</td>
                                            <td className="px-6 py-4 text-sm">-</td>
                                            <td className="px-6 py-4 text-sm">
                                                <a href="mailto:dej-udom@dejudom.com" className="text-secondary hover:underline">
                                                    dej-udom@dejudom.com
                                                </a>
                                                <span className="text-gray-400"> ; </span>
                                                <a href="mailto:worawut@dejudom.com" className="text-secondary hover:underline">
                                                    worawut@dejudom.com
                                                </a>
                                                <span className="text-gray-400"> ; </span>
                                                <a href="mailto:benjawan_corporate@dejudom.com" className="text-secondary hover:underline">
                                                    benjawan_corporate@dejudom.com
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
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
