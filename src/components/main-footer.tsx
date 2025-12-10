import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function MainFooter() {
    return (
        <footer className="bg-[#061a04] text-white py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact</h3>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            We advise clients from our Bangkok headquarters and through our partner network across Southeast Asia and the wider world.
                        </p>
                        <Link href="/contact" className="inline-flex items-center text-secondary hover:text-secondary/80 text-sm mt-4">
                            Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>

                    {/* Career */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Career</h3>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            We are always looking for outstanding lawyers, business services specialists, and law graduates eager to join our growing team.
                        </p>
                        <Link href="/careers" className="inline-flex items-center text-secondary hover:text-secondary/80 text-sm mt-4">
                            Join Us <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>

                    {/* Professional Networks */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Professional Networks</h3>
                        <div className="space-y-2">
                            <Link href="#" className="block text-sm text-secondary hover:text-secondary/80">
                                International Bar Association (IBA)
                            </Link>
                            <Link href="#" className="block text-sm text-secondary hover:text-secondary/80">
                                ASEAN Australia Alliance (AAA)
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm">
                        <p className="text-gray-400">
                            © 2025 Dej-Udom & Associates Ltd. All Rights Reserved.
                        </p>
                        <div className="flex gap-6">
                            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                                Terms of Use
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

