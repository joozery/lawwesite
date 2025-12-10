'use client';

import Image from "next/image";
import { MainFooter } from "@/components/main-footer";

export default function InternshipPage() {
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
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            Legal Internship in Bangkok — Learn, Contribute and Grow
                        </h1>

                        <p className="text-base text-gray-200 max-w-5xl leading-relaxed">
                            Our internship offers hands-on exposure to business law practice at Dej-Udom & Associates. You will assist with research, drafting, and client matters under the supervision of associates and partners.
                        </p>
                    </div>
                </section>

                {/* Program Overview Section */}
                <section className="pb-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8">
                            Program Overview
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* What you'll do */}
                            <div>
                                <h3 className="text-xl font-bold text-secondary mb-4">
                                    What you'll do
                                </h3>
                                <ul className="space-y-3 text-gray-200 text-sm">
                                    <li className="flex items-start gap-3">
                                        <span className="text-secondary mt-1">•</span>
                                        <span>Assist with legal research and drafting in Thai and/or English</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-secondary mt-1">•</span>
                                        <span>Support due diligence, filings, and hearing preparation</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-secondary mt-1">•</span>
                                        <span>Attend internal seminars and case meetings</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-secondary mt-1">•</span>
                                        <span>Work with a dedicated mentor and receive feedback</span>
                                    </li>
                                </ul>
                                <p className="text-xs text-gray-400 mt-4 italic">
                                    Note: Internship responsibilities may vary by practice group (Corporate/M&A, Litigation, IP, Immigration, etc.).
                                </p>
                            </div>

                            {/* Eligibility */}
                            <div>
                                <h3 className="text-xl font-bold text-secondary mb-4">
                                    Eligibility
                                </h3>
                                <ul className="space-y-3 text-gray-200 text-sm">
                                    <li className="flex items-start gap-3">
                                        <span className="text-secondary mt-1">•</span>
                                        <span>Current law student (LL.B/LL.M) or recent graduate</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-secondary mt-1">•</span>
                                        <span>Strong academic record, research and writing ability</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-secondary mt-1">•</span>
                                        <span>Professional conduct and confidentiality</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-secondary mt-1">•</span>
                                        <span>Right to work/Intern in Thailand or ability to meet visa requirements</span>
                                    </li>
                                </ul>
                                <p className="text-xs text-gray-400 mt-4 italic">
                                    Compensation and schedule depend on term and university policy; details provided during selection.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Timeline & Selection Process + FAQ */}
                <section className="pb-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Timeline & Selection Process */}
                            <div>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8">
                                    Timeline & Selection Process
                                </h2>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-bold text-secondary mb-2">
                                            1. Application review
                                        </h3>
                                        <p className="text-gray-200 text-sm">
                                            HR and supervising lawyers review your CV, transcript, and statement.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold text-secondary mb-2">
                                            2. Interview
                                        </h3>
                                        <p className="text-gray-200 text-sm">
                                            Short virtual or in-person interview; language assessment may be included.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold text-secondary mb-2">
                                            3. Offer
                                        </h3>
                                        <p className="text-gray-200 text-sm">
                                            Accepted candidates receive term dates, supervisor assignment, and onboarding details.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold text-secondary mb-2">
                                            4. Onboarding
                                        </h3>
                                        <p className="text-gray-200 text-sm">
                                            Orientation on ethics, confidentiality, and matter management tools.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Frequently Asked Questions */}
                            <div>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8">
                                    Frequently Asked Questions
                                </h2>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-bold text-secondary mb-2">
                                            Is the internship paid?
                                        </h3>
                                        <p className="text-gray-200 text-sm">
                                            Stipends may be available depending on term length and policy; we will confirm during the offer stage.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold text-secondary mb-2">
                                            Do you accept international students?
                                        </h3>
                                        <p className="text-gray-200 text-sm">
                                            Yes, subject to applicable visa and university requirements.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold text-secondary mb-2">
                                            Can I receive academic credit?
                                        </h3>
                                        <p className="text-gray-200 text-sm">
                                            We cooperate with university credit processes where feasible.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Application Form Section */}
                <section className="pb-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                            Apply for the Internship
                        </h2>
                        <p className="text-sm text-gray-300 mb-8">
                            Fields marked with <span className="text-red-500">*</span> are required.
                        </p>

                        <form className="space-y-6">
                            {/* Full Name and Email */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="fullName" className="block text-white text-sm font-semibold mb-2">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        required
                                        className="w-full px-4 py-3 bg-transparent border-2 border-white/30 rounded text-white placeholder-gray-400 focus:outline-none focus:border-secondary transition-colors"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-white text-sm font-semibold mb-2">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 bg-transparent border-2 border-white/30 rounded text-white placeholder-gray-400 focus:outline-none focus:border-secondary transition-colors"
                                    />
                                </div>
                            </div>

                            {/* University and Degree/Year */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="university" className="block text-white text-sm font-semibold mb-2">
                                        University <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="university"
                                        name="university"
                                        required
                                        className="w-full px-4 py-3 bg-transparent border-2 border-white/30 rounded text-white placeholder-gray-400 focus:outline-none focus:border-secondary transition-colors"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="degree" className="block text-white text-sm font-semibold mb-2">
                                        Degree/Year <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        id="degree"
                                        name="degree"
                                        required
                                        className="w-full px-4 py-3 bg-transparent border-2 border-white/30 rounded text-gray-400 focus:outline-none focus:border-secondary transition-colors appearance-none cursor-pointer"
                                        style={{
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'right 1rem center',
                                            backgroundSize: '1.5rem'
                                        }}
                                    >
                                        <option value="">Select</option>
                                        <option value="llb-1">LL.B - Year 1</option>
                                        <option value="llb-2">LL.B - Year 2</option>
                                        <option value="llb-3">LL.B - Year 3</option>
                                        <option value="llb-4">LL.B - Year 4</option>
                                        <option value="llm">LL.M</option>
                                        <option value="graduate">Recent Graduate</option>
                                    </select>
                                </div>
                            </div>

                            {/* Earliest Start Date and Preferred Duration */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="startDate" className="block text-white text-sm font-semibold mb-2">
                                        Earliest Start Date <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="date"
                                        id="startDate"
                                        name="startDate"
                                        required
                                        className="w-full px-4 py-3 bg-transparent border-2 border-white/30 rounded text-white focus:outline-none focus:border-secondary transition-colors"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="duration" className="block text-white text-sm font-semibold mb-2">
                                        Preferred Duration <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        id="duration"
                                        name="duration"
                                        required
                                        className="w-full px-4 py-3 bg-transparent border-2 border-white/30 rounded text-gray-400 focus:outline-none focus:border-secondary transition-colors appearance-none cursor-pointer"
                                        style={{
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'right 1rem center',
                                            backgroundSize: '1.5rem'
                                        }}
                                    >
                                        <option value="">Select</option>
                                        <option value="1-month">1 month</option>
                                        <option value="2-months">2 months</option>
                                        <option value="3-months">3 months</option>
                                        <option value="6-months">6 months</option>
                                        <option value="flexible">Flexible</option>
                                    </select>
                                </div>
                            </div>

                            {/* Upload CV/Resume and Academic Transcript */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="cv" className="block text-white text-sm font-semibold mb-2">
                                        Upload CV/Resume (PDF/DOCX, max 5 MB) <span className="text-red-500">*</span>
                                    </label>
                                    <div className="flex items-center gap-4">
                                        <label className="px-6 py-3 bg-white/10 border border-white/30 rounded text-white text-sm cursor-pointer hover:bg-white/20 transition-colors">
                                            Choose File
                                            <input
                                                type="file"
                                                id="cv"
                                                name="cv"
                                                accept=".pdf,.doc,.docx"
                                                className="hidden"
                                                required
                                            />
                                        </label>
                                        <span className="text-gray-400 text-sm">No file selected</span>
                                    </div>
                                    <p className="text-xs text-gray-400 mt-2">
                                        Include academic transcript if applying as a trainee.
                                    </p>
                                </div>

                                <div>
                                    <label htmlFor="transcript" className="block text-white text-sm font-semibold mb-2">
                                        Academic transcript (PDF/DOCX, max 5 MB) <span className="text-red-500">*</span>
                                    </label>
                                    <div className="flex items-center gap-4">
                                        <label className="px-6 py-3 bg-white/10 border border-white/30 rounded text-white text-sm cursor-pointer hover:bg-white/20 transition-colors">
                                            Choose File
                                            <input
                                                type="file"
                                                id="transcript"
                                                name="transcript"
                                                accept=".pdf,.doc,.docx"
                                                className="hidden"
                                                required
                                            />
                                        </label>
                                        <span className="text-gray-400 text-sm">No file selected</span>
                                    </div>
                                </div>
                            </div>

                            {/* Statement of Interest */}
                            <div>
                                <label htmlFor="statement" className="block text-white text-sm font-semibold mb-2">
                                    Statement of Interest (max 300 words) <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="statement"
                                    name="statement"
                                    rows={6}
                                    required
                                    placeholder="Share your motivation, areas of interest (e.g., corporate, litigation, IP), language skills and goals."
                                    className="w-full px-4 py-3 bg-transparent border-2 border-white/30 rounded text-white placeholder-gray-400 focus:outline-none focus:border-secondary transition-colors resize-none"
                                ></textarea>
                                <p className="text-xs text-gray-400 mt-2">
                                    Tip: Include notable coursework, moots, journals or clinics
                                </p>
                            </div>

                            {/* How did you hear about us? */}
                            <div>
                                <label htmlFor="source" className="block text-white text-sm font-semibold mb-2">
                                    How did you hear about us? <span className="text-red-500">*</span>
                                </label>
                                <select
                                    id="source"
                                    name="source"
                                    required
                                    className="w-full px-4 py-3 bg-transparent border-2 border-white/30 rounded text-gray-400 focus:outline-none focus:border-secondary transition-colors appearance-none cursor-pointer"
                                    style={{
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'right 1rem center',
                                        backgroundSize: '1.5rem'
                                    }}
                                >
                                    <option value="">Select</option>
                                    <option value="university">University Career Office</option>
                                    <option value="website">Firm Website</option>
                                    <option value="social">Social Media</option>
                                    <option value="referral">Referral</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            {/* Privacy Notice */}
                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <h3 className="text-white font-bold text-sm mb-3">Privacy Notice</h3>
                                <p className="text-gray-300 text-xs leading-relaxed mb-3">
                                    By submitting this form, you acknowledge that Dej-Udom & Associates (the Firm) will collect and use your personal data (e.g., contact details, CV, academic records) to assess your candidacy. The Firm processes data under applicable laws including Thailand's PDPA and, where relevant, the GDPR legitimate interests and consent basis, to retain recruitment data for up to 24 months unless a shorter or longer period is required by law or consent is withdrawn.
                                </p>
                                <p className="text-gray-300 text-xs leading-relaxed">
                                    You may exercise your rights to access, correct, delete, or restrict processing by contacting dej-udom@dejudom. We do not sell your data. Service providers (e.g., HR systems) may process data under contractual safeguards and appropriate transfer mechanisms. For more information, request our full Privacy Policy.
                                </p>
                                <p className="text-gray-300 text-xs leading-relaxed mt-3">
                                    If you are under 20 years old (or otherwise a minor under local law), please apply with parental consent.
                                </p>
                            </div>

                            {/* Submit and Reset Buttons */}
                            <div className="flex gap-4">
                                <button
                                    type="submit"
                                    className="px-8 py-3 bg-white/10 hover:bg-secondary text-white hover:text-[#0a2608] border-2 border-white/30 hover:border-secondary rounded-full font-semibold transition-all"
                                >
                                    Submit Application
                                </button>
                                <button
                                    type="reset"
                                    className="px-8 py-3 bg-transparent hover:bg-white/5 text-white border-2 border-white/30 rounded-full font-semibold transition-all"
                                >
                                    Reset
                                </button>
                            </div>
                        </form>
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
