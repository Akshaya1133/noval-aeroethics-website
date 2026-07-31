'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useNavigation } from '@/lib/navigation';
import { highlights, servicesData, whyChooseUs, productsData, capabilitiesData } from '@/lib/company-data';
import { Shield, Zap, Target, Award, ArrowRight } from 'lucide-react';

export default function HomePage() {
  const { navigate } = useNavigation();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 lg:pt-8 pb-16 lg:pb-20">          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-[#1B5E9E] font-semibold text-sm tracking-wide uppercase mb-4">
                Precision Engineering
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0A1F44] leading-tight">
                Engineering Excellence for{' '}
                <span className="text-[#1B5E9E]">Aerospace & Beyond</span>
              </h1>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
                Delivering high-precision machined components for the aerospace and defense industries with uncompromising quality and micron-level accuracy.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  onClick={() => navigate('contact')}
                  className="bg-[#1B5E9E] hover:bg-[#0D2B5E] text-white px-8 py-3 rounded-lg text-base font-semibold"
                >
                  Get a Quote
                </Button>
                <Button
                  onClick={() => navigate('capabilities')}
                  variant="outline"
                  className="border-[#0A1F44] text-[#0A1F44] hover:bg-slate-50 px-8 py-3 rounded-lg text-base font-semibold"
                >
                  Our Capabilities
                </Button>
              </div>
            </div>
             <div className="relative">
  <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">

    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/videos/hero.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Premium overlay */}
    <div className="absolute inset-0 bg-gradient-to-tr from-[#0A1F44]/20 via-transparent to-[#10B981]/10"></div>

  </div>
</div>
          </div>
        </div>
      </section>

      {/* Company Highlights */}
<section className="bg-[#F8FAFC] py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      {highlights.map((item, i) => (
        <div
          key={i}
          onClick={() => {
            if (item.label === "ISO Certified") {
              window.open("/certificates/iso-9001.pdf", "_blank");
            }
          }}
          className={`bg-white rounded-xl p-6 text-center shadow-sm border border-slate-100 transition-all duration-300 ${
            item.label === "ISO Certified"
              ? "cursor-pointer hover:shadow-xl hover:-translate-y-1"
              : ""
          }`}
        >
          <div className="text-3xl lg:text-4xl font-bold text-[#0A1F44] mb-2">
            {item.value}
          </div>

          {item.label === "ISO Certified" ? (
            <div className="inline-block relative text-sm font-medium text-[#1B5E9E]">
              ISO Certified

              {/* Animated underline */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#10B981] animate-pulse rounded-full"></span>
            </div>
          ) : (
            <div className="text-sm text-slate-500 font-medium">
              {item.label}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Services Preview */}
<section className="pt-20 pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#10B981] font-semibold text-sm tracking-wide uppercase mb-3">
              What We Do
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1F44]">
              Our Services
            </h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
              From raw material to finished product, we take care of your complete manufacturing process.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[#0A1F44] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>
                  <button
                    onClick={() => navigate('services')}
                    className="text-[#1B5E9E] text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all cursor-pointer"
                  >
                    Read More <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/images/why-choose-engineer.jpg"
                alt="Engineer operating precision CNC machine"
                width={1344}
                height={768}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <p className="text-[#10B981] font-semibold text-sm tracking-wide uppercase mb-3">
                Why Choose Us
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1F44] mb-8">
                Trusted by Global Manufacturing Clients
              </h2>
              <div className="space-y-6">
                {whyChooseUs.map((item, i) => {
                  const icons = [Shield, Target, Zap, Award];
                  const Icon = icons[i];
                  return (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#0A1F44] flex items-center justify-center">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-[#0A1F44] mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Machine Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-[#10B981] font-semibold text-sm tracking-wide uppercase mb-3">
                Our Machinery
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1F44] mb-6">
                {capabilitiesData.machine.name}
              </h2>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-[#F8FAFC] rounded-lg p-4">
                  <p className="text-xs text-slate-500 mb-1">Table Size</p>
                  <p className="text-sm font-semibold text-[#0A1F44]">{capabilitiesData.machine.tableSize}</p>
                </div>
                <div className="bg-[#F8FAFC] rounded-lg p-4">
                  <p className="text-xs text-slate-500 mb-1">Axes</p>
                  <p className="text-sm font-semibold text-[#0A1F44]">{capabilitiesData.machine.axes}</p>
                </div>
                <div className="bg-[#F8FAFC] rounded-lg p-4">
                  <p className="text-xs text-slate-500 mb-1">Spindle Speed</p>
                  <p className="text-sm font-semibold text-[#0A1F44]">{capabilitiesData.machine.spindleSpeed}</p>
                </div>
                <div className="bg-[#F8FAFC] rounded-lg p-4">
                  <p className="text-xs text-slate-500 mb-1">Repeatability</p>
                  <p className="text-sm font-semibold text-[#10B981]">{capabilitiesData.machine.repeatability}</p>
                </div>
              </div>
              <Button
                onClick={() => navigate('capabilities')}
                className="bg-[#1B5E9E] hover:bg-[#0D2B5E] text-white px-6 py-2.5 rounded-lg text-sm font-semibold"
              >
                View Full Capabilities
              </Button>
            </div>
            <div className="order-1 lg:order-2 flex justify-center items-center">

  <Image
    src="/images/cosmos-cvm1160.png"
    alt="Cosmos CVM 1160 CNC Machine"
    width={1100}
    height={800}
    priority
    className="w-full max-w-3xl h-auto object-contain transition-transform duration-300 hover:scale-[1.02]"
  />

</div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#10B981] font-semibold text-sm tracking-wide uppercase mb-3">
              Our Products
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1F44]">
              What We Deliver
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {productsData.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden group"
              >
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs text-[#1B5E9E] font-medium mb-1">
                    {product.category}
                  </p>
                  <h3 className="text-sm font-semibold text-[#0A1F44]">
                    {product.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>
    </div>
  );
}
