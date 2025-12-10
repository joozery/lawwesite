'use client';

import Image from "next/image";
import { MainFooter } from "@/components/main-footer";
import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';

// Placeholder book data - replace with actual data
const books = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    title: `Book Title ${i + 1}`,
    author: "Professor Dej-Udom Krairit",
    year: 2020 + (i % 5),
    category: "Taxation",
}));

export default function BooksArticlesPage() {
    const searchParams = useSearchParams();
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15;

    // Initialize search query from URL parameter
    useEffect(() => {
        const query = searchParams.get('q');
        if (query) {
            setSearchQuery(query);
        }
    }, [searchParams]);

    // Filter books based on search
    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Calculate pagination
    const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentBooks = filteredBooks.slice(startIndex, endIndex);

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background Image */}
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
                        {/* Breadcrumb */}
                        <div className="mb-4 text-sm text-gray-300">
                            <a href="/" className="hover:text-secondary transition-colors">Home</a>
                            <span className="mx-2">/</span>
                            <span className="text-secondary">TAXATION</span>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8">
                            Professor Dej-Udom Krairit Books & Articles
                        </h1>

                        {/* Search Bar */}
                        <div className="max-w-md">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search for Books & Articles"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full px-4 py-3 pr-12 bg-white text-gray-900 rounded-full focus:outline-none focus:ring-2 focus:ring-secondary"
                                />
                                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Books Grid Section */}
                <section className="pb-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                            {currentBooks.map((book) => (
                                <div
                                    key={book.id}
                                    className="group cursor-pointer"
                                >
                                    {/* Book Cover */}
                                    <div className="relative aspect-[3/4] bg-gradient-to-b from-blue-100 to-green-200 rounded-lg shadow-lg overflow-hidden mb-3 transform transition-transform group-hover:scale-105">
                                        {/* Placeholder book cover design */}
                                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                                            <div className="w-full h-20 bg-white/30 rounded mb-4"></div>
                                            <div className="w-3/4 h-3 bg-white/20 rounded mb-2"></div>
                                            <div className="w-2/3 h-3 bg-white/20 rounded mb-2"></div>
                                            <div className="w-1/2 h-3 bg-white/20 rounded"></div>
                                        </div>
                                        {/* Yellow corner fold */}
                                        <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-b-[30px] border-b-yellow-400"></div>
                                    </div>

                                    {/* Book Info */}
                                    <div className="text-center">
                                        <h3 className="text-white text-sm font-semibold line-clamp-2 mb-1">
                                            {book.title}
                                        </h3>
                                        <p className="text-gray-400 text-xs">
                                            {book.year}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pagination */}
                <section className="pb-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-center gap-4">
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                disabled={currentPage === 1}
                                className="text-secondary hover:text-secondary/80 disabled:text-gray-600 disabled:cursor-not-allowed transition-colors"
                            >
                                ← Previous
                            </button>

                            <div className="flex items-center gap-2">
                                <span className="text-white">
                                    Page {currentPage} of {totalPages}
                                </span>
                            </div>

                            <button
                                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                                disabled={currentPage === totalPages}
                                className="text-secondary hover:text-secondary/80 disabled:text-gray-600 disabled:cursor-not-allowed transition-colors"
                            >
                                Next →
                            </button>
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
