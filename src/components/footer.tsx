import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-[#061a04] text-gray-300 pt-12 pb-4 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Left Side - Contact Information */}
                    <div>
                        <h2 className="text-2xl font-serif font-bold text-white mb-6">Contact</h2>

                        {/* Phone Numbers */}
                        <div className="mb-4">
                            <h3 className="text-sm font-semibold text-secondary mb-2 uppercase tracking-wider">Phone Number</h3>
                            <div className="space-y-1">
                                <p className="text-white">(66) 2233-0066</p>
                                <p className="text-white">(66) 2233-0068</p>
                            </div>
                        </div>

                        {/* Email Addresses */}
                        <div className="mb-4">
                            <h3 className="text-sm font-semibold text-secondary mb-2 uppercase tracking-wider">Email Address</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-2 text-sm">
                                <div>
                                    <a href="mailto:dej-udom@dejudom.com" className="text-white hover:text-secondary transition-colors block">
                                        dej-udom@dejudom.com
                                    </a>
                                    <span className="text-gray-500 text-xs">General Inquiries</span>
                                </div>
                                <div>
                                    <a href="mailto:litigation@dejudom.com" className="text-white hover:text-secondary transition-colors block">
                                        litigation@dejudom.com
                                    </a>
                                    <span className="text-gray-500 text-xs">Litigation Department</span>
                                </div>
                                <div>
                                    <a href="mailto:corporate@dejudom.com" className="text-white hover:text-secondary transition-colors block">
                                        corporate@dejudom.com
                                    </a>
                                    <span className="text-gray-500 text-xs">Corporate Department</span>
                                </div>
                                <div>
                                    <a href="mailto:worrawut@dejudom.com" className="text-white hover:text-secondary transition-colors block">
                                        worrawut@dejudom.com
                                    </a>
                                    <span className="text-gray-500 text-xs">Worrawut Krien-Eak</span>
                                </div>
                                <div>
                                    <a href="mailto:ceo_ip@dejudom.com" className="text-white hover:text-secondary transition-colors block">
                                        ceo_ip@dejudom.com
                                    </a>
                                    <span className="text-gray-500 text-xs">Intellectual Property Department</span>
                                </div>
                                <div>
                                    <a href="mailto:immigration-employment@dejudom.com" className="text-white hover:text-secondary transition-colors block">
                                        immigration-employment@dejudom.com
                                    </a>
                                    <span className="text-gray-500 text-xs">Immigration Department</span>
                                </div>
                            </div>
                        </div>

                        {/* Firm Location */}
                        <div className="mb-4">
                            <h3 className="text-sm font-semibold text-secondary mb-2 uppercase tracking-wider">Firm Location</h3>
                            <p className="text-white leading-relaxed text-sm">
                                Charm Issara Tower 1, 2nd Floor, 942/69 Rama IV Road, Bang-rak District, Bangkok 10500, Thailand
                            </p>
                        </div>

                        {/* Social Media */}
                        <div>
                            <h3 className="text-sm font-semibold text-secondary mb-2 uppercase tracking-wider">Follow Us</h3>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-10 h-10 bg-[#0077b5] hover:bg-[#006399] rounded transition-colors"
                            >
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Map */}
                    <div className="h-[280px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.8736193842896!2d100.53127931483037!3d13.726165990356955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f1c8c9c8c9d%3A0x1c8c8c8c8c8c8c8c!2sCharm%20Issara%20Tower%201!5e0!3m2!1sen!2sth!4v1234567890123!5m2!1sen!2sth"
                            width="100%"
                            height="100%"
                            style={{ border: 0, borderRadius: '8px' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </div>

                {/* Bottom Bar - Copyright and Links */}
                <div className="border-t border-white/10 pt-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm">
                        <p className="text-gray-400">
                            © 2025 Dej-Udom & Associates Ltd. All Rights Reserved.
                        </p>
                        <div className="flex gap-6">
                            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                                Term of Use
                            </Link>
                            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/fraudulent" className="text-gray-400 hover:text-white transition-colors">
                                Fraudulent Communications
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
