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
        <section className="relative min-h-[700px] md:min-h-[800px] flex items-center justify-center text-white overflow-hidden">
          {/* Background Image */}
          <Image
            src="/herobackground.png"
            alt="Bangkok Cityscape"
            fill
            className="object-cover"
            priority
          />
          {/* Green Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a2608]/40 via-[#0a2608]/35 to-[#0a2608]/40 z-10" />

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
        <section className="py-24 bg-[#061a04] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Text */}
              <div className="lg:pr-12">
                <h2 className="text-[39px] font-sans font-bold text-white mb-6 leading-tight">
                  <span className="block">{t('stats.title1')}</span>
                  <span className="block">{t('stats.title2')}</span>
                  <span className="text-[#f9b400] block mt-2">{t('stats.titleHighlight')}</span>
                </h2>
                <Link
                  href="/about"
                  className="inline-block text-white/80 hover:text-white transition-colors text-[10px] font-bold tracking-wide mt-2 uppercase"
                >
                  {t('stats.readMore')}
                </Link>
              </div>

              {/* Right Side - Thailand Map & Stats */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 relative">
                {/* Map Container */}
                <div className="relative w-full max-w-xl">
                  {/* Thailand Map Image */}
                  <Image
                    src="/mapthai.png"
                    alt="Thailand Map"
                    width={600}
                    height={900}
                    className="w-full h-auto drop-shadow-2xl opacity-90 hover:opacity-100 transition-opacity"
                    priority
                  />
                </div>

                {/* Stats - Positioned to the right of map */}
                <div className="space-y-12 min-w-[180px]">
                  <div>
                    <div className="text-[24px] font-bold text-[#f9b400] mb-1">5000+</div>
                    <div className="text-white text-[12px] opacity-90">{t('stats.clients')}</div>
                  </div>
                  <div>
                    <div className="text-[24px] font-bold text-[#f9b400] mb-1">39+</div>
                    <div className="text-white text-[12px] opacity-90">{t('stats.years')}</div>
                  </div>
                  <div>
                    <div className="text-[24px] font-bold text-[#f9b400] mb-1">30+</div>
                    <div className="text-white text-[12px] opacity-90">{t('stats.attorneys')}</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Our Legal Services */}
        <section className="relative min-h-[500px] flex items-center justify-center text-white overflow-hidden py-20">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/3background.png"
              alt="Legal Services Background"
              fill
              className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />
          </div>

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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-20 text-white">
              {t('reviews.title')} <span className="text-[#f9b400]">{t('reviews.titleHighlight')}</span>
            </h2>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-6xl mx-auto">
              {/* Review 1 - Chambers */}
              <div className="text-left">
                <p className="text-gray-300 text-lg font-serif italic leading-relaxed">
                  Sole Thai member since 1995; Focus on international lawyers network itself is ranked by Chambers among the{' '}
                  <span className="text-[#f9b400] italic">top 2 %</span> of law firm networks
                </p>
              </div>

              {/* Review 2 - Known for ability (Pushed down slightly for staggered look if needed, but grid is fine) */}
              <div className="text-left md:mt-12">
                <p className="text-gray-300 text-lg font-serif italic leading-relaxed mb-4">
                  "Known for its ability to handle cases that <span className="text-[#f9b400] italic">demand a sophisticated understanding</span> of intricate <span className="text-[#f9b400] italic">legal issues</span> well equipped to tackle complex cross border matters."
                </p>
                <p className="text-gray-500 text-sm">— LawCrossing</p>
              </div>

              {/* Review 3 - Always been unbiased */}
              <div className="text-left">
                <p className="text-gray-300 text-lg font-serif italic leading-relaxed mb-4">
                  "His advice has <span className="text-[#f9b400] italic">always been unbiased</span>, spot on, well researched and once a{' '}
                  <span className="text-[#f9b400] italic">decision was made flawlessly implemented</span>."
                </p>
                <p className="text-gray-500 text-sm font-sans italic">
                  — Eric Rose, Of Counsel, Herzfeld & Rubin PC, on founder Dej-Udom Krairit
                </p>
              </div>

              {/* Review 4 - Confidence */}
              <div className="text-left md:mt-12">
                <p className="text-gray-300 text-lg font-serif italic leading-relaxed mb-4">
                  "<span className="text-[#f9b400] italic">Confidence</span> is placed in the firm when it comes to handling brand related matters in Thailand and abroad."
                </p>
                <p className="text-gray-500 text-sm italic">— World Trademark Review 1000 commentary (2024)</p>
              </div>
            </div>

            {/* Google Reviews Badge */}
            <div className="flex justify-center mt-24">
              <div className="inline-flex items-center gap-3 px-6 py-2 border border-white rounded-full bg-black/20 backdrop-blur-sm">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#f9b400]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                {/* Google G Logo */}
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.24.81-.6z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  <span className="text-white font-semibold text-sm">Google Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement Section */}
        <section className="relative min-h-[400px] flex items-center justify-center text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/2background.png"
              alt="Mission Background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
              {t('mission.title')} <span className="text-[#f9b400]">{t('mission.complexity')}</span> {t('mission.into')} <br className="hidden md:block" />
              <span className="text-[#f9b400]">{t('mission.advantage')}</span> {t('mission.integrity')}
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
