'use client';

import Image from "next/image";
import { Mail, Phone, Building2, User, Scale, Home, Plane, Receipt, Lightbulb } from "lucide-react";
import { MainFooter } from "@/components/main-footer";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
// Import i18n configuration to ensure it's initialized (though provider usually handles this)


const departments = [
    {
        id: "ceo",
        icon: Building2,
        translationKey: "ceo", // Use key instead of hardcoded text
        href: "mailto:dej-udom@dejudom.com",
    },
    {
        id: "deputy",
        icon: User,
        translationKey: "deputy",
        href: "mailto:worawut@dejudom.com",
    },
    {
        id: "litigation",
        icon: Scale,
        translationKey: "litigation",
        href: "mailto:litigation@dejudom.com",
    },
    {
        id: "corporate",
        icon: Home,
        translationKey: "corporate",
        href: "mailto:corporate@dejudom.com",
    },
    {
        id: "immigration",
        icon: Plane,
        translationKey: "immigration",
        href: "mailto:immigration-employment@dejudom.com",
    },
    {
        id: "taxation",
        icon: Receipt,
        translationKey: "taxation",
        href: "mailto:corporate@dejudom.com",
    },
    {
        id: "ip",
        icon: Lightbulb,
        translationKey: "ip",
        href: "mailto:ceo_ip@dejudom.com",
    },
];

export default function ContactPage() {
    const { t } = useTranslation();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent hydration mismatch
    if (!mounted) return null;

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/588618834.jpg"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Green Overlay */}
                <div className="absolute inset-0 bg-[#0a2608]/95" />
            </div>

            {/* All Content */}
            <div className="relative z-10 min-h-screen pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header Text */}
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                            {t('contact.title')}
                        </h1>
                        <p className="text-gray-200 text-lg leading-relaxed max-w-4xl mb-8">
                            {t('contact.subtitle')}
                        </p>

                        {/* Direct Contact Bar */}
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 text-white">
                            <span className="font-semibold text-sm">{t('contact.preferDirect')}</span>
                            <div className="flex items-center gap-4">
                                <a href="mailto:dej-udom@dejudom.com" className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors border border-white/10">
                                    <Mail className="h-4 w-4" />
                                    {t('contact.emailUs')} dej-udom@dejudom.com
                                </a>
                                <a href="tel:+6622330055" className="flex items-center gap-2 px-4 py-2 bg-[#111]/80 rounded-lg hover:bg-black transition-colors border border-white/10">
                                    <Phone className="h-4 w-4" />
                                    +66 2233 0055
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Department Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                        {departments.map((dept) => (
                            <div key={dept.id} className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-xl hover:translate-y-[-4px] transition-all duration-300">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                                        <dept.icon className="h-6 w-6 text-gray-700" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1">
                                            {t(`contact.departments.${dept.translationKey}.title`)}
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            {t(`contact.departments.${dept.translationKey}.subtitle`)}
                                        </p>
                                    </div>
                                </div>
                                <a
                                    href={dept.href}
                                    className="block w-full text-center py-3 bg-[#1a1a1a] text-white rounded-lg hover:bg-black transition-colors text-sm font-medium"
                                >
                                    {t(`contact.departments.${dept.translationKey}.button`)}
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Map Section */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-1 border border-white/10 shadow-2xl overflow-hidden mb-20">
                        <div className="w-full h-96 rounded-lg overflow-hidden bg-gray-900">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.9876543210123!2d100.5234567890123!3d13.7234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQzJzI0LjQiTiAxMDDCsDMxJzI0LjQiRQ!5e0!3m2!1sen!2sth!4v1234567890123!5m2!1sen!2sth"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Dej-Udom & Associates Office Location"
                                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                            ></iframe>
                        </div>
                    </div>

                </div>

                {/* Custom Footer inside layout */}
                <div className="relative z-20">
                    <MainFooter />
                </div>
            </div>
        </div>
    );
}
