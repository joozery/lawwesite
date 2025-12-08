'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const cookieConsent = localStorage.getItem('cookieConsent');
        if (!cookieConsent) {
            setShowBanner(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setShowBanner(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookieConsent', 'declined');
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom duration-500">
            <div className="max-w-7xl mx-auto">
                <div className="bg-gray-800/95 backdrop-blur-md text-white rounded-lg shadow-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 border border-gray-700">
                    <div className="flex-1">
                        <p className="text-sm leading-relaxed">
                            We use website technologies to operate this site, measure performance, and enhance your experience. By clicking Accept all, you consent to their use. For information on how we handle personal data, see our{' '}
                            <Link href="/privacy-policy" className="text-secondary hover:underline font-medium">
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </div>
                    <div className="flex gap-3 shrink-0">
                        <button
                            onClick={handleAccept}
                            className="px-6 py-2.5 bg-white text-gray-900 rounded-md hover:bg-gray-100 transition-colors font-medium text-sm whitespace-nowrap"
                        >
                            Accept
                        </button>
                        <button
                            onClick={handleDecline}
                            className="px-6 py-2.5 bg-transparent border border-white/30 text-white rounded-md hover:bg-white/10 transition-colors font-medium text-sm whitespace-nowrap"
                        >
                            Decline
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
