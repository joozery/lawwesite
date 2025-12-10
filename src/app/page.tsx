'use client';

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { DefaultPageWrapper } from "@/components/default-page-wrapper";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { t } = useTranslation();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/books-articles?q=${encodeURIComponent(searchQuery)}`);
    } else {
      router.push('/books-articles');
    }
  };

  return (
    <DefaultPageWrapper>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center text-white overflow-hidden">
          {/* Background Image */}
          <Image
            src="/land-2297.jpg"
            alt="Bangkok Cityscape"
            fill
            className="object-cover"
            priority
          />
          {/* Green Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a2608]/80 via-[#0a2608]/70 to-[#0a2608]/80 z-10" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center py-24">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder={t('hero.searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-3.5 pr-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent text-sm"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Statistics Section with Thailand Map */}
        <section className="py-20 bg-[#061a04] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              {/* Left Side - Text */}
              <div className="lg:col-span-1">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                  {t('stats.title')}{' '}
                  <span className="text-secondary">{t('stats.titleHighlight')}</span>
                </h2>
                <Link
                  href="/about"
                  className="inline-flex items-center text-white hover:text-secondary transition-colors text-sm font-medium"
                >
                  {t('stats.readMore')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Center - Thailand Map */}
              <div className="lg:col-span-1 flex justify-center">
                <div className="relative w-full max-w-sm">
                  {/* Thailand Map Image */}
                  <Image
                    src="/mapthai.png"
                    alt="Thailand Map"
                    width={400}
                    height={600}
                    className="w-full h-auto"
                    priority
                  />
                  {/* Location Pin - Bangkok */}
                  <div className="absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                        <MapPin className="h-5 w-5 text-[#061a04]" />
                      </div>
                      <div className="absolute top-0 left-0 w-8 h-8 bg-secondary rounded-full animate-ping opacity-75"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Statistics */}
              <div className="lg:col-span-1 space-y-8">
                <div>
                  <div className="text-5xl md:text-6xl font-bold text-secondary mb-2">5000+</div>
                  <div className="text-white text-lg">{t('stats.clients')}</div>
                </div>
                <div>
                  <div className="text-5xl md:text-6xl font-bold text-secondary mb-2">39+</div>
                  <div className="text-white text-lg">{t('stats.years')}</div>
                </div>
                <div>
                  <div className="text-5xl md:text-6xl font-bold text-secondary mb-2">30+</div>
                  <div className="text-white text-lg">{t('stats.attorneys')}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Legal Services */}
        <section className="relative min-h-[500px] flex items-center justify-center text-white overflow-hidden py-20">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070')",
              filter: "brightness(0.4)"
            }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16">
              {t('legalServices.title')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="text-center">
                <h3 className="text-xl font-serif font-bold mb-4">
                  {t('legalServices.incorporation.title')}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {t('legalServices.incorporation.desc')}
                </p>
              </div>

              {/* Service 2 */}
              <div className="text-center">
                <h3 className="text-xl font-serif font-bold mb-4">
                  {t('legalServices.litigation.title')}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {t('legalServices.litigation.desc')}
                </p>
              </div>

              {/* Service 3 */}
              <div className="text-center">
                <h3 className="text-xl font-serif font-bold mb-4">
                  {t('legalServices.ip.title')}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {t('legalServices.ip.desc')}
                </p>
              </div>
            </div>

            {/* Carousel Dots */}
            <div className="flex justify-center gap-2 mt-12">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <div className="w-2 h-2 rounded-full bg-white/30"></div>
              <div className="w-2 h-2 rounded-full bg-white/30"></div>
            </div>
          </div>
        </section>

        {/* Representative Peer & Client Reviews */}
        <section className="py-20 bg-[#061a04]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4 text-white">
              {t('reviews.title')} <span className="text-secondary">{t('reviews.titleHighlight')}</span>
            </h2>

            {/* Reviews Grid */}
            <div className="mt-16 space-y-8">
              {/* Review 1 - Chambers */}
              <div className="text-center max-w-4xl mx-auto">
                <p className="text-gray-400 text-sm italic mb-2">
                  Sole Thai member since 1995; Focus on international lawyers network itself 'is ranked by Chambers among the{' '}
                  <span className="text-secondary">top 2%</span> of law firm networks'
                </p>
              </div>

              {/* Review 2 - Known for ability */}
              <div className="text-center max-w-4xl mx-auto">
                <p className="text-gray-300 text-base italic mb-2">
                  "Known for its ability to handle cases that{' '}
                  <span className="text-secondary">demand a sophisticated understanding</span> of intricate{' '}
                  <span className="text-secondary">legal issues</span> well equipped to tackle complex cross border matters."
                </p>
                <p className="text-gray-500 text-sm">— Law Crossing</p>
              </div>

              {/* Review 3 - Always been unbiased */}
              <div className="text-center max-w-4xl mx-auto">
                <p className="text-gray-300 text-base italic mb-2">
                  "His advice has <span className="text-secondary">always been unbiased</span>, spot on, well researched and once a{' '}
                  <span className="text-secondary">decision was made flawlessly implemented</span>."
                </p>
                <p className="text-gray-500 text-sm">
                  — Eric Rose, O/ Counsel, Herzfeld & Rubin PC, on founder Dej-Udom Krairit
                </p>
              </div>

              {/* Review 4 - Confidence */}
              <div className="text-center max-w-4xl mx-auto">
                <p className="text-gray-300 text-base italic mb-2">
                  "<span className="text-secondary">Confidence</span> is placed in the firm when it comes to handling brand related matters in Thailand and abroad."
                </p>
                <p className="text-gray-500 text-sm">— World Trademark Review 1000 commentary (2024)</p>
              </div>
            </div>

            {/* Google Reviews Badge */}
            <div className="flex justify-center mt-16">
              <div className="inline-flex items-center gap-3 px-6 py-3 border-2 border-secondary rounded-full">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-secondary text-xl">★</span>
                  ))}
                </div>
                <span className="text-white font-semibold">Google Reviews</span>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement Section */}
        <section className="relative min-h-[400px] flex items-center justify-center text-white overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=2064')",
              filter: "brightness(0.3)"
            }}
          />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
              {t('mission.title')} <span className="text-secondary">{t('mission.complexity')}</span> {t('mission.into')}{' '}
              <span className="text-secondary">{t('mission.advantage')}</span> {t('mission.integrity')}
            </h2>
            <p className="text-gray-300 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
              {t('mission.description')}
            </p>
          </div>
        </section>
      </div>
    </DefaultPageWrapper>
  );
}
