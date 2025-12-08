import { SectionTitle } from "@/components/ui/section-title";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";

const practiceAreas = {
    "corporate-law": {
        title: "Corporate Law",
        description: "Comprehensive legal solutions for businesses of all sizes.",
        content: `
      Our corporate law practice provides strategic legal counsel to businesses ranging from startups to established corporations. 
      We understand that every business is unique, and we tailor our services to meet your specific needs.
    `,
        services: [
            "Business Formation & Structure",
            "Mergers & Acquisitions",
            "Corporate Governance",
            "Contract Negotiation & Drafting",
            "Compliance & Regulatory Matters",
            "Intellectual Property Protection",
        ],
        whyChooseUs: [
            "Decades of combined experience in corporate law",
            "Proven track record with successful transactions",
            "Strategic business-minded approach",
            "Available for urgent matters 24/7",
        ],
    },
    "family-law": {
        title: "Family Law",
        description: "Compassionate representation for family matters.",
        content: `
      Family law matters are deeply personal and emotionally challenging. Our team provides compassionate, 
      yet assertive representation to protect your interests and those of your loved ones.
    `,
        services: [
            "Divorce & Legal Separation",
            "Child Custody & Visitation",
            "Child Support & Alimony",
            "Adoption Proceedings",
            "Prenuptial & Postnuptial Agreements",
            "Mediation Services",
        ],
        whyChooseUs: [
            "Sensitive and confidential handling",
            "Focus on amicable resolutions",
            "Strong courtroom advocacy when needed",
            "Child-centered approach",
        ],
    },
    "real-estate": {
        title: "Real Estate Law",
        description: "Expert guidance for all property transactions.",
        content: `
      Whether you're buying your first home or managing a commercial property portfolio, 
      our real estate attorneys provide the expertise you need for smooth transactions.
    `,
        services: [
            "Residential & Commercial Transactions",
            "Title Examination & Insurance",
            "Lease Negotiations",
            "Zoning & Land Use",
            "Property Disputes",
            "Real Estate Development",
        ],
        whyChooseUs: [
            "Thorough due diligence process",
            "Efficient transaction management",
            "Risk mitigation strategies",
            "Local market expertise",
        ],
    },
    "criminal-defense": {
        title: "Criminal Defense",
        description: "Aggressive defense to protect your rights.",
        content: `
      Facing criminal charges is one of the most stressful experiences. Our criminal defense team 
      fights tirelessly to protect your rights and achieve the best possible outcome.
    `,
        services: [
            "Misdemeanor & Felony Defense",
            "DUI/DWI Defense",
            "Drug Crimes",
            "White Collar Crimes",
            "Assault & Battery",
            "Expungement & Record Sealing",
        ],
        whyChooseUs: [
            "Former prosecutors on our team",
            "Aggressive courtroom representation",
            "Thorough case investigation",
            "24/7 emergency availability",
        ],
    },
    "personal-injury": {
        title: "Personal Injury",
        description: "Fighting for fair compensation for injury victims.",
        content: `
      If you've been injured due to someone else's negligence, you deserve compensation. 
      We fight aggressively to ensure you receive the maximum recovery possible.
    `,
        services: [
            "Car & Truck Accidents",
            "Slip & Fall Injuries",
            "Medical Malpractice",
            "Product Liability",
            "Wrongful Death",
            "Workers' Compensation",
        ],
        whyChooseUs: [
            "No fees unless we win",
            "Millions recovered for clients",
            "Experienced trial attorneys",
            "Personalized attention to every case",
        ],
    },
};

type PracticeAreaSlug = keyof typeof practiceAreas;

export default function PracticeAreaDetailPage({
    params,
}: {
    params: { slug: string };
}) {
    const area = practiceAreas[params.slug as PracticeAreaSlug];

    if (!area) {
        return <div>Practice area not found</div>;
    }

    return (
        <div className="py-20 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link
                    href="/practice-areas"
                    className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors mb-8"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Practice Areas
                </Link>

                <SectionTitle title={area.title} subtitle="Practice Area" centered={false} />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
                    <div className="lg:col-span-2">
                        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                            {area.description}
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            {area.content}
                        </p>

                        <h3 className="text-2xl font-serif font-bold text-primary mb-6">
                            Our Services
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                            {area.services.map((service, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-1" />
                                    <span className="text-gray-700">{service}</span>
                                </div>
                            ))}
                        </div>

                        <h3 className="text-2xl font-serif font-bold text-primary mb-6">
                            Why Choose Us
                        </h3>
                        <div className="space-y-3 mb-12">
                            {area.whyChooseUs.map((reason, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-1" />
                                    <span className="text-gray-700">{reason}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-primary text-white p-8 rounded-lg sticky top-24">
                            <h3 className="text-2xl font-serif font-bold mb-4">
                                Need Legal Help?
                            </h3>
                            <p className="mb-6 text-gray-200">
                                Contact us today for a free consultation. We're here to help.
                            </p>
                            <Link
                                href="/contact"
                                className="block w-full text-center bg-secondary text-primary font-bold py-3 px-6 rounded hover:bg-white transition-all mb-4"
                            >
                                Free Consultation
                            </Link>
                            <div className="border-t border-white/20 pt-6 mt-6 space-y-3 text-sm">
                                <div>
                                    <div className="font-bold mb-1">Phone</div>
                                    <div className="text-gray-200">+1 (555) 123-4567</div>
                                </div>
                                <div>
                                    <div className="font-bold mb-1">Email</div>
                                    <div className="text-gray-200">contact@legalpartners.com</div>
                                </div>
                                <div>
                                    <div className="font-bold mb-1">Hours</div>
                                    <div className="text-gray-200">Mon-Fri: 9AM - 6PM</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
