'use client';

import Image from 'next/image';
import { aboutData, timelineData } from '@/lib/company-data';
import { Target, Eye, Building2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div>
      {/* Hero Banner */}
<section className="relative overflow-hidden h-[320px] lg:h-[360px] flex items-center bg-[#0A1F44]">
  {/* Background Image */}
  <Image
    src="/images/about-banner.jpg"
    alt="About Noval Aeroethics"
    fill
    priority
    className="object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#081A3A]/90 via-[#0A1F44]/80 to-[#0A1F44]/65" />

  {/* Hero Content */}
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full">
    <p className="text-[#10B981] font-semibold text-sm tracking-[0.25em] uppercase mb-5">
      About Noval Aeroethics
    </p>

<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">      Precision Engineering,
      <br />
      Built on Trust and Excellence
    </h1>

<p className="mt-5 text-base lg:text-lg text-slate-200 max-w-2xl leading-relaxed">      Delivering aerospace-grade precision machining, advanced manufacturing,
      and uncompromising quality through cutting-edge technology and skilled engineering.
    </p>

  </div>

</section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-[#10B981] font-semibold text-sm tracking-wide uppercase mb-3">
                Our Story
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1F44] mb-6">
                Delivering Precision Since {aboutData.established}
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {aboutData.story}
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/images/factory-interior.jpg"
                alt="Noval Aeroethics manufacturing facility"
                width={1344}
                height={768}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 lg:p-10 border border-slate-100 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-[#0A1F44] flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A1F44] mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                {aboutData.mission}
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 lg:p-10 border border-slate-100 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-[#1B5E9E] flex items-center justify-center mb-6">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A1F44] mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                {aboutData.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#10B981] font-semibold text-sm tracking-wide uppercase mb-3">
              Company Overview
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1F44]">
              Built for Precision
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#F8FAFC] rounded-xl p-6 text-center">
              <Building2 className="h-8 w-8 text-[#1B5E9E] mx-auto mb-3" />
              <p className="text-sm font-medium text-slate-500">Location</p>
              <p className="text-base font-semibold text-[#0A1F44] mt-1">Bangalore, India</p>
            </div>
            <div className="bg-[#F8FAFC] rounded-xl p-6 text-center">
              <svg className="h-8 w-8 text-[#1B5E9E] mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              <p className="text-sm font-medium text-slate-500">Certification</p>
              <p className="text-base font-semibold text-[#0A1F44] mt-1">ISO Certified</p>
            </div>
            <div className="bg-[#F8FAFC] rounded-xl p-6 text-center">
              <svg className="h-8 w-8 text-[#1B5E9E] mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <p className="text-sm font-medium text-slate-500">Accuracy</p>
              <p className="text-base font-semibold text-[#10B981] mt-1">3 Micron</p>
            </div>
            <div className="bg-[#F8FAFC] rounded-xl p-6 text-center">
              <svg className="h-8 w-8 text-[#1B5E9E] mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              <p className="text-sm font-medium text-slate-500">Spindle Speed</p>
              <p className="text-base font-semibold text-[#0A1F44] mt-1">12,000 RPM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#10B981] font-semibold text-sm tracking-wide uppercase mb-3">
              Our Journey
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1F44]">
              Company Timeline
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {timelineData.map((item, i) => (
              <div key={i} className="flex gap-6 pb-10 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#1B5E9E] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {item.year.slice(-2)}
                  </div>
                  {i < timelineData.length - 1 && (
                    <div className="w-0.5 h-full bg-slate-200 mt-2" />
                  )}
                </div>
                <div className="pb-6">
                  <p className="text-xs text-[#1B5E9E] font-semibold mb-1">{item.year}</p>
                  <h3 className="text-lg font-semibold text-[#0A1F44] mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
