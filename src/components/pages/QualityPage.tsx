'use client';

import Image from 'next/image';
import { qualityData } from '@/lib/company-data';
import { Shield, CheckCircle2, Ruler, ClipboardCheck } from 'lucide-react';

export default function QualityPage() {
  return (
    <div>
      {/* Hero Banner */}
<section className="relative overflow-hidden h-[320px] lg:h-[360px] flex items-center">

  {/* Background Image */}
  <Image
    src="/images/quality-banner.jpg"
    alt="Quality Assurance"
    fill
    priority
    className="object-cover object-center"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#081A3A]/90 via-[#0A1F44]/75 to-[#0A1F44]/35" />

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

    <p className="text-[#10B981] font-semibold tracking-[0.25em] uppercase text-sm mb-5">
      Quality Assurance
    </p>

    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl">
      Committed to Excellence
      <br />
      in Every Component
    </h1>

    <p className="mt-5 text-lg text-slate-200 max-w-2xl leading-relaxed">
      Every component undergoes rigorous inspection using calibrated
      measuring instruments and ISO 9001:2015 quality processes to ensure
      precision, reliability, and customer satisfaction.
    </p>

  </div>

</section>

     {/* ISO Certification */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

      {/* Left Content */}
      <div>
        <p className="text-[#10B981] font-semibold text-sm tracking-wide uppercase mb-3">
          Certification
        </p>

        <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1F44] mb-6">
          ISO Certified Operations
        </h2>

        <p className="text-slate-600 leading-relaxed mb-8">
          Noval Aeroethics operates under a certified quality management
          system that governs every aspect of our manufacturing process.
          Our ISO certification demonstrates our commitment to maintaining
          international quality standards, continuous improvement, and
          customer satisfaction across all operations.
        </p>

        {/* Clickable Certificate Card */}
        <a
          href="/certificates/iso-9001.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 hover:border-[#10B981] hover:shadow-lg transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-[#10B981] flex items-center justify-center flex-shrink-0">
              <Shield className="w-7 h-7 text-white" />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#0A1F44]">
                ISO 9001:2015 Certificate
              </h3>

              <p className="text-sm text-slate-500">
                Click here to view the certificate
              </p>
            </div>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-[#10B981] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 17L17 7M17 7H8M17 7V16"
            />
          </svg>
        </a>
      </div>

      {/* Right Image */}
      <div className="flex justify-center">
        <div className="w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden bg-[#F8FAFC] border border-slate-200">
          <Image
            src="/images/quality-instruments.jpg"
            alt="Quality measuring instruments"
            width={1344}
            height={768}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </div>
  </div>
</section>
      {/* Quality Policy */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#10B981] font-semibold text-sm tracking-wide uppercase mb-3">
              Our Commitment
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1F44]">
              Quality Policy
            </h2>
          </div>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-slate-600 leading-relaxed text-center">
              {qualityData.policyDescription}
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityData.policy.map((item, i) => {
              const icons = [Shield, Ruler, ClipboardCheck, CheckCircle2];
              const Icon = icons[i] || Shield;
              return (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 text-center border border-slate-100 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-full bg-[#0A1F44] flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-[#0A1F44]">{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Measuring Instruments */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#10B981] font-semibold text-sm tracking-wide uppercase mb-3">
              Equipment
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1F44]">
              Quality Measuring Instruments
            </h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
              We employ a comprehensive suite of calibrated precision instruments to ensure every component meets exact specifications.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {qualityData.instruments.map((instrument, i) => (
              <div
                key={i}
                className="bg-[#F8FAFC] rounded-xl p-5 border border-slate-100 hover:border-[#1B5E9E] transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-3">
                  <Ruler className="h-5 w-5 text-[#1B5E9E]" />
                </div>
                <h3 className="text-sm font-semibold text-[#0A1F44] mb-1.5">
                  {instrument.name}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {instrument.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspection Process */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#10B981] font-semibold text-sm tracking-wide uppercase mb-3">
              Process
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1F44]">
              Inspection Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualityData.inspectionProcess.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm flex gap-5"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1B5E9E] text-white flex items-center justify-center text-lg font-bold">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#0A1F44] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
