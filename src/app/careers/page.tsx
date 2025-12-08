'use client';

import { SectionTitle } from "@/components/ui/section-title";
import { useState } from "react";

export default function CareersPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        coverLetter: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        alert('Application submitted successfully! We will review your application and contact you soon.');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="py-20 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle title="Join Our Team" subtitle="Careers & Internships" centered />

                <p className="max-w-3xl mx-auto text-center text-gray-600 mb-16 text-lg">
                    We're always looking for talented individuals to join our team. Explore opportunities to grow your legal career with us.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Why Join Us */}
                    <div>
                        <h3 className="text-2xl font-serif font-bold text-primary mb-6">
                            Why Work With Us?
                        </h3>
                        <div className="space-y-4 mb-8">
                            {[
                                "Collaborative and supportive work environment",
                                "Competitive compensation and benefits",
                                "Professional development opportunities",
                                "Mentorship from experienced attorneys",
                                "Work-life balance initiatives",
                                "Diverse and inclusive culture",
                            ].map((benefit, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                                        <span className="text-secondary text-sm">✓</span>
                                    </div>
                                    <span className="text-gray-700">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        <div className="bg-muted p-6 rounded-lg">
                            <h4 className="font-bold text-primary mb-3">Current Openings</h4>
                            <ul className="space-y-2 text-gray-700">
                                <li>• Associate Attorney - Corporate Law</li>
                                <li>• Paralegal - Family Law</li>
                                <li>• Legal Assistant</li>
                                <li>• Summer Internship Program</li>
                            </ul>
                        </div>
                    </div>

                    {/* Application Form */}
                    <div className="bg-gray-50 p-8 rounded-lg">
                        <h3 className="text-2xl font-serif font-bold text-primary mb-6">
                            Apply Now
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                        First Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        required
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary outline-none"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                        Last Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        required
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary outline-none"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary outline-none"
                                />
                            </div>

                            <div>
                                <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                                    Position Applying For *
                                </label>
                                <select
                                    id="position"
                                    name="position"
                                    required
                                    value={formData.position}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary outline-none"
                                >
                                    <option value="">Select a position</option>
                                    <option value="attorney">Associate Attorney</option>
                                    <option value="paralegal">Paralegal</option>
                                    <option value="assistant">Legal Assistant</option>
                                    <option value="intern">Internship</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                                    Years of Experience
                                </label>
                                <input
                                    type="text"
                                    id="experience"
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary outline-none"
                                    placeholder="e.g., 3 years"
                                />
                            </div>

                            <div>
                                <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-2">
                                    Cover Letter / Why do you want to join us? *
                                </label>
                                <textarea
                                    id="coverLetter"
                                    name="coverLetter"
                                    required
                                    rows={4}
                                    value={formData.coverLetter}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary outline-none"
                                    placeholder="Tell us about yourself and why you'd be a great fit..."
                                ></textarea>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Resume / CV *
                                </label>
                                <input
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary outline-none"
                                />
                                <p className="text-xs text-gray-500 mt-1">PDF, DOC, or DOCX (Max 5MB)</p>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-secondary text-primary font-bold py-3 px-6 rounded hover:bg-primary hover:text-white transition-all duration-300"
                            >
                                Submit Application
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
