'use client';

import { useState } from 'react';
import { Search, X } from 'lucide-react';
import Link from 'next/link';

interface SearchResult {
    title: string;
    url: string;
    type: string;
}

export function SearchBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);

    // Mock search data - will be replaced with actual search implementation
    const searchData: SearchResult[] = [
        { title: 'Home', url: '/', type: 'Page' },
        { title: 'About Us', url: '/about', type: 'Page' },
        { title: 'Practice Areas', url: '/practice-areas', type: 'Page' },
        { title: 'Corporate Law', url: '/practice-areas/corporate-law', type: 'Practice Area' },
        { title: 'Family Law', url: '/practice-areas/family-law', type: 'Practice Area' },
        { title: 'Real Estate', url: '/practice-areas/real-estate', type: 'Practice Area' },
        { title: 'Criminal Defense', url: '/practice-areas/criminal-defense', type: 'Practice Area' },
        { title: 'Personal Injury', url: '/practice-areas/personal-injury', type: 'Practice Area' },
        { title: 'Attorneys', url: '/attorneys', type: 'Page' },
        { title: 'Insights & News', url: '/insights', type: 'Page' },
        { title: 'eBooks', url: '/ebooks', type: 'Page' },
        { title: 'Careers', url: '/careers', type: 'Page' },
        { title: 'Contact', url: '/contact', type: 'Page' },
    ];

    const handleSearch = (value: string) => {
        setQuery(value);
        if (value.trim() === '') {
            setResults([]);
            return;
        }

        const filtered = searchData.filter((item) =>
            item.title.toLowerCase().includes(value.toLowerCase())
        );
        setResults(filtered.slice(0, 5));
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="p-2 hover:bg-white/10 rounded transition-colors"
                aria-label="Search"
            >
                <Search className="h-5 w-5" />
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20">
                    <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl mx-4">
                        <div className="flex items-center gap-3 p-4 border-b border-gray-200">
                            <Search className="h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search..."
                                value={query}
                                onChange={(e) => handleSearch(e.target.value)}
                                className="flex-1 outline-none text-lg"
                                autoFocus
                            />
                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                    setQuery('');
                                    setResults([]);
                                }}
                                className="p-2 hover:bg-gray-100 rounded transition-colors"
                            >
                                <X className="h-5 w-5 text-gray-500" />
                            </button>
                        </div>

                        {results.length > 0 && (
                            <div className="p-2 max-h-96 overflow-y-auto">
                                {results.map((result, index) => (
                                    <Link
                                        key={index}
                                        href={result.url}
                                        onClick={() => {
                                            setIsOpen(false);
                                            setQuery('');
                                            setResults([]);
                                        }}
                                        className="block p-3 hover:bg-gray-50 rounded transition-colors"
                                    >
                                        <div className="font-medium text-primary">{result.title}</div>
                                        <div className="text-sm text-gray-500">{result.type}</div>
                                    </Link>
                                ))}
                            </div>
                        )}

                        {query && results.length === 0 && (
                            <div className="p-8 text-center text-gray-500">
                                No results found for "{query}"
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
