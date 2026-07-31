'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useNavigation } from '@/lib/navigation';
import { servicesData } from '@/lib/company-data';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const { navigate } = useNavigation();

  return (
    <div>
      {/* Hero Banner */}
<section className="relative overflow-hidden h-[320px] lg:h-[360px] flex items-center">

  {/* Background Image */}
  <Image
    src="/images/services-banner.jpg"
    alt="Manufacturing Services"
    fill
    priority
    className="object-cover object-left"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#081A3A]/90 via-[#0A1F44]/70 to-[#0A1F44]/30" />

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

    <p className="text-[#10B981] font-semibold tracking-[0.25em] uppercase text-sm mb-5">
      Our Services
    </p>

    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl">
      Complete Manufacturing
      <br />
      Solutions
    </h1>

    <p className="mt-5 text-lg text-slate-200 max-w-2xl leading-relaxed">
      From raw material to finished components, we deliver precision CNC
      machining services with consistent quality and aerospace-grade standards.
    </p>

  </div>

</section>

      {/* Services Detail */}
      {servicesData.map((service, index) => (
        <section
          key={service.id}
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 !== 0 ? 'lg:direction-rtl' : ''}`}>
              <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="rounded-2xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={1344}
                    height={768}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                <p className="text-[#10B981] font-semibold text-sm tracking-wide uppercase mb-3">
                  Service {String(index + 1).padStart(2, '0')}
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1F44] mb-6">
                  {service.title}
                </h2>
                <p className="text-slate-600 leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Benefits */}
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-[#0A1F44] uppercase tracking-wide mb-4">
                    Key Benefits
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-[#10B981] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applications & Industries */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="text-sm font-semibold text-[#0A1F44] uppercase tracking-wide mb-3">
                      Applications
                    </h3>
                    <ul className="space-y-2">
                      {service.applications.map((app, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#1B5E9E]" />
                          <span className="text-sm text-slate-600">{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#0A1F44] uppercase tracking-wide mb-3">
                      Industries Served
                    </h3>
                    <ul className="space-y-2">
                      {service.industries.map((ind, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                          <span className="text-sm text-slate-600">{ind}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button
                  onClick={() => navigate('contact')}
                  className="bg-[#1B5E9E] hover:bg-[#0D2B5E] text-white px-6 py-2.5 rounded-lg text-sm font-semibold"
                >
                  Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
