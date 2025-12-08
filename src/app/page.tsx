'use client';

import Link from "next/link";
import { ArrowRight, CheckCircle2, Gavel, Scale, Shield, Users, MapPin } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center text-white">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070')",
            filter: "brightness(0.4)"
          }}
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-32">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder={t('hero.searchPlaceholder')}
                className="w-full px-6 py-4 pr-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-white/10 transition-colors">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
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
                {/* Thailand Map SVG - More Accurate Shape */}
                <svg viewBox="0 0 300 500" className="w-full h-auto" fill="#e8dcc4">
                  {/* Northern Thailand */}
                  <path d="M150,30 L160,35 L165,45 L170,55 L175,65 L178,75 L180,85 L182,95 L183,105 L184,115 L185,125 L186,135 L187,145 L188,155 L189,165 L190,175 L191,185 L192,195 L193,205 L194,215 L195,225 L196,235 L197,245 L198,255 L199,265 L200,275 L201,285 L202,295 L203,305 L204,315 L205,325 L206,335 L207,345 L208,355 L209,365 L210,375 L211,385 L212,395 L213,405 L214,415 L215,425 L216,435 L217,445 L218,455 L219,465 L220,475 L215,480 L210,483 L205,485 L200,487 L195,488 L190,489 L185,490 L180,490 L175,489 L170,488 L165,487 L160,485 L155,483 L150,480 L145,477 L140,473 L135,468 L130,463 L125,457 L120,450 L115,443 L110,435 L105,427 L100,418 L95,408 L90,398 L85,387 L80,375 L75,363 L70,350 L65,337 L60,323 L55,308 L50,293 L45,277 L40,260 L35,243 L30,225 L25,207 L20,188 L18,169 L17,150 L18,131 L20,112 L23,93 L27,74 L32,55 L38,40 L45,30 L55,25 L65,22 L75,20 L85,20 L95,22 L105,25 L115,28 L125,30 L135,30 Z" />

                  {/* Southern Peninsula */}
                  <path d="M150,300 L155,310 L158,320 L160,330 L161,340 L162,350 L163,360 L164,370 L165,380 L166,390 L167,400 L168,410 L169,420 L170,430 L171,440 L172,450 L173,460 L174,470 L173,475 L170,478 L165,480 L160,481 L155,482 L150,483 L145,482 L140,481 L135,480 L130,478 L127,475 L126,470 L127,460 L128,450 L129,440 L130,430 L131,420 L132,410 L133,400 L134,390 L135,380 L136,370 L137,360 L138,350 L139,340 L140,330 L142,320 L145,310 Z" />
                </svg>
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

      {/* Features / Why Choose Us */}
      <section className="py-20 bg-[#0a1f08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: t('features.proven.title'),
                description: t('features.proven.desc')
              },
              {
                icon: Users,
                title: t('features.client.title'),
                description: t('features.client.desc')
              },
              {
                icon: Gavel,
                title: t('features.aggressive.title'),
                description: t('features.aggressive.desc')
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-[#0d2b0a] rounded-lg hover:shadow-lg transition-shadow duration-300 border border-[#15381a]">
                <feature.icon className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-serif font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas Preview */}
      <section className="py-20 bg-[#061a04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t('practiceAreas.title')} subtitle={t('practiceAreas.subtitle')} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              t('practiceAreas.corporate'), t('practiceAreas.family'), t('practiceAreas.realEstate'), t('practiceAreas.criminal'),
              t('practiceAreas.injury'), t('practiceAreas.estate'), t('practiceAreas.employment'), t('practiceAreas.immigration')
            ].map((area, index) => (
              <Link key={index} href="/practice-areas" className="group block bg-[#0a1f08] p-6 rounded shadow-sm hover:shadow-md transition-shadow border border-[#15381a] hover:border-secondary">
                <div className="flex justify-between items-center">
                  <h3 className="font-serif font-semibold text-lg text-white group-hover:text-secondary transition-colors">{area}</h3>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-secondary transform group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/practice-areas" className="text-secondary font-medium hover:text-secondary/80 inline-flex items-center gap-2">
              {t('practiceAreas.viewAll')} <ArrowRight className="h-4 w-4" />
            </Link>
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
  );
}
