'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MainFooter } from '@/components/main-footer';
import { ArrowLeft, CheckCircle, FileText, Scale, Users, Shield, Globe } from 'lucide-react';

// Data for each service
const serviceData: Record<string, any> = {
    corporate: {
        title: "Incorporation & Corporate Matters",
        subtitle: "Comprehensive corporate legal services for businesses in Thailand.",
        description: "Navigating the regulatory landscape for establishing and managing a business in Thailand requires precise legal expertise. Our Corporate team assists foreign and local investors with entity selection, registration, and ongoing compliance, ensuring a solid foundation for your business growth.",
        image: "/service-corporate.png",
        features: [
            "Company Registration & Incorporation",
            "Shareholder Agreements & Joint Ventures",
            "Foreign Business License (FBL) Applications",
            "BOI Investment Promotion Support",
            "Corporate Secretarial Services",
            "Mergers & Acquisitions (M&A)"
        ],
        details: "Our attorneys guide you through every step of the incorporation process, from reserving your company name to filing the Memorandum of Association and convening the statutory meeting. We also provide ongoing support for annual filings, capital increases, and regulatory compliance to keep your business in good standing."
    },
    litigation: {
        title: "Litigation, Mediation & ADR",
        subtitle: "Strategic dispute resolution focused on protecting your interests.",
        description: "When disputes arise, you need a team that understands both the legal framework and the commercial realities. Our Litigation practice handles complex commercial disputes, civil and criminal cases, and administrative proceedings with a focus on achieving favorable outcomes effectively and efficiently.",
        image: "/service-litigation.png",
        features: [
            "Commercial & Civil Litigation",
            "Arbitration & Mediation",
            "Administrative Court Proceedings",
            "Employment Disputes",
            "Debt Recovery & Bankruptcy",
            "White Collar Crime Defense"
        ],
        details: "We represent clients in all Thai courts and international arbitration tribunals. Our approach emphasizes early case assessment and strategic planning. While we are aggressive advocates in the courtroom, we also recognize the value of Alternative Dispute Resolution (ADR) and mediation to resolve conflicts amicably when possible."
    },
    immigration: {
        title: "Immigration, Relocation & Work Permit",
        subtitle: "Seamless mobility solutions for expatriates and corporations.",
        description: "Relocating to Thailand involves navigating complex immigration laws. Our dedicated team provides end-to-end support for work permits and visas, helping multinational corporations and individuals ensure full compliance with Thai Immigration Bureau and Ministry of Labor regulations.",
        image: "/service-immigration.png",
        features: [
            "Business Visa (Non-B) & Work Permits",
            "Long-Term Resident (LTR) Visa",
            "Smart Visa Applications",
            "Permanent Residence",
            "Deployment & Relocation Strategy",
            "Dependent & Retirement Visas"
        ],
        details: "We handle the entire application process, from document preparation to accompanying clients to government offices. Our team stays updated on the latest regulatory changes to advise you on the most suitable visa categories, including privileges under the Board of Investment (BOI) or Industrial Estate Authority of Thailand (IEAT)."
    },
    taxation: {
        title: "Taxation",
        subtitle: "Optimizing tax efficiency while ensuring full compliance.",
        description: "Our Tax practice provides strategic advice on Corporate Income Tax, VAT, Specific Business Tax, and custom duties. We help clients structure their transactions and operations to maximize tax efficiency while strictly adhering to the Revenue Code of Thailand.",
        image: "/service-taxation.png",
        features: [
            "Corporate Tax Planning",
            "Transfer Pricing",
            "Tax Dispute Resolution",
            "International Tax Structuring",
            "Expatriate Personal Income Tax",
            "Customs & Excise Duty"
        ],
        details: "Whether you are entering the market or restructuring an existing operation, our tax advisors work closely with legal and financial teams to identify risks and opportunities. We also represent clients in negotiations with the Revenue Department and in tax court litigation if necessary."
    },
    ip: {
        title: "Intellectual Property",
        subtitle: "Protecting and enforcing your intangible assets.",
        description: "In an innovation-driven economy, protecting your brand and technology is paramount. Our IP team offers full-spectrum services from trademark and patent registration to enforcement actions against infringement and counterfeiting.",
        image: "/service-ip.png",
        features: [
            "Trademark & Patent Registration",
            "Copyright Protection",
            "IP Portfolio Management",
            "Licensing & Franchising Agreements",
            "IP Litigation & Enforcement",
            "Trade Secrets Protection"
        ],
        details: "We act as your agents for filing applications with the Department of Intellectual Property. Beyond registration, we develop comprehensive IP strategies to commercialize your assets through licensing and franchising, and take decisive legal action against infringers to safeguard your market position."
    }
};

export default function PracticeAreaDetailPage() {
    const params = useParams();
    const slug = params.slug as string;
    const service = serviceData[slug];

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#0a2608] text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
                    <Link href="/practice-areas" className="text-[#f9b400] hover:underline">
                        Back to Legal Services
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen relative bg-[#0a2608]">
            {/* Header Background */}
            <div className="absolute top-0 left-0 w-full h-[50vh] z-0">
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a2608]/80 via-[#0a2608]/60 to-[#0a2608]" />
            </div>

            <div className="relative z-10 pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breacrumbs / Back */}
                <Link
                    href="/practice-areas"
                    className="inline-flex items-center gap-2 text-white/70 hover:text-[#f9b400] transition-colors mb-8 group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Legal Services
                </Link>

                {/* Title Section */}
                <div className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                        {service.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-[#f9b400] font-light max-w-3xl leading-relaxed">
                        {service.subtitle}
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content (Left 2 cols) */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Description */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl">
                            <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-[#f9b400] pl-4">Overview</h2>
                            <p className="text-gray-200 leading-relaxed text-lg mb-6">
                                {service.description}
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                {service.details}
                            </p>
                        </div>

                        {/* Key Services/Features */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-[#f9b400] pl-4">Key Capabilities</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {service.features.map((feature: string, index: number) => (
                                    <div key={index} className="flex items-start gap-4 p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 hover:border-[#f9b400]/50 transition-all duration-300">
                                        <div className="mt-1 bg-[#f9b400]/20 p-2 rounded-full">
                                            <CheckCircle className="w-5 h-5 text-[#f9b400]" />
                                        </div>
                                        <span className="text-white font-medium text-lg">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar (Right 1 col) */}
                    <div className="space-y-8">
                        {/* Call to Action Card */}
                        <div className="bg-[#f9b400] rounded-2xl p-8 text-[#0a2608] shadow-2xl relative overflow-hidden group">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-4 font-serif">Need Legal Assistance?</h3>
                                <p className="mb-6 font-medium opacity-90">
                                    Our specialists are ready to provide tailored advice for your specific situation.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-block px-6 py-3 bg-[#0a2608] text-white font-bold rounded-lg hover:bg-black transition-colors w-full text-center"
                                >
                                    Speak to an Attorney
                                </Link>
                            </div>
                            {/* Decoration */}
                            <div className="absolute -right-6 -bottom-6 opacity-10 transform ml-6 rotate-12 group-hover:scale-110 transition-transform duration-500">
                                <Scale className="w-40 h-40" />
                            </div>
                        </div>

                        {/* Quick Contact Info */}
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-6">Contact Us Directly</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-gray-300">
                                    <Globe className="w-5 h-5 text-[#f9b400]" />
                                    <span>Bangkok, Thailand</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <Users className="w-5 h-5 text-[#f9b400]" />
                                    <span>Partner-led Team</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <Shield className="w-5 h-5 text-[#f9b400]" />
                                    <span>Confidential & Secure</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <FileText className="w-5 h-5 text-[#f9b400]" />
                                    <a href="mailto:dej-udom@dejudom.com" className="hover:text-white hover:underline transition-colors">
                                        dej-udom@dejudom.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            {/* Footer */}
            <MainFooter />
        </div>
    );
}
