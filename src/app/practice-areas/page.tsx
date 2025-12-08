import { SectionTitle } from "@/components/ui/section-title";
import { Gavel, Users, Home, Briefcase, Heart, BookOpen, Truck, Landmark } from "lucide-react";

export default function PracticeAreasPage() {
    const practices = [
        {
            icon: Briefcase,
            title: "Corporate Law",
            description: "Comprehensive legal solutions for businesses, from formation to extensive mergers and acquisitions."
        },
        {
            icon: Users,
            title: "Family Law",
            description: "Compassionate representation for divorce, custody disputes, and adoption proceedings."
        },
        {
            icon: Home,
            title: "Real Estate",
            description: "Expert guidance for residential and commercial transactions, zoning issues, and disputes."
        },
        {
            icon: Gavel,
            title: "Criminal Defense",
            description: "Aggressive defense strategies to protect your rights in misdemeanor and felony cases."
        },
        {
            icon: Heart,
            title: "Personal Injury",
            description: "Fighting for fair compensation for victims of accidents, negligence, and malpractice."
        },
        {
            icon: BookOpen,
            title: "Estate Planning",
            description: "Helping you secure your legacy through wills, trusts, and comprehensive estate strategies."
        },
        {
            icon: Truck,
            title: "Employment Law",
            description: "Representing both employers and employees in disputes regarding wrongful termination and discrimination."
        },
        {
            icon: Landmark,
            title: "Immigration",
            description: "Navigating complex immigration laws to help families and businesses achieve their goals."
        }
    ];

    return (
        <div className="py-20 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle title="Our Practice Areas" subtitle="Specialized Legal Expertise" centered />

                <p className="max-w-3xl mx-auto text-center text-gray-600 mb-16 text-lg">
                    At Legal Partners, we offer a wide range of legal services tailored to meet the diverse needs of our clients. Our dedicated attorneys are experts in their respective fields.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {practices.map((practice, index) => (
                        <div key={index} className="bg-gray-50 border border-gray-100 rounded-lg p-8 hover:shadow-lg hover:border-secondary/50 transition-all duration-300 group">
                            <div className="h-14 w-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                                <practice.icon className="h-7 w-7 text-secondary" />
                            </div>
                            <h3 className="text-xl font-serif font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                                {practice.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {practice.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
