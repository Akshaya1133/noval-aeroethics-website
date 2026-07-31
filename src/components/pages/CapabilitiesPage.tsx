'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useNavigation } from '@/lib/navigation';
import { capabilitiesData } from '@/lib/company-data';
import { Cog, Layers } from 'lucide-react';

export default function CapabilitiesPage() {
  const { navigate } = useNavigation();
  const { machine, processes, materials } = capabilitiesData;

  return (
    <div>
      {/* Hero Banner */}
<section className="relative overflow-hidden h-[320px] lg:h-[360px] flex items-center">

  {/* Background Image */}
  <Image
    src="/images/capabilities-banner.jpg"
    alt="Manufacturing Capabilities"
    fill
    priority
    className="object-cover object-center"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#081A3A]/90 via-[#0A1F44]/75 to-[#0A1F44]/35" />

  {/* Hero Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

    <p className="text-[#10B981] font-semibold tracking-[0.25em] uppercase text-sm mb-5">
      Technical Capabilities
    </p>

    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl">
      Advanced Manufacturing
      <br />
      Capabilities
    </h1>

    <p className="mt-5 text-lg text-slate-200 max-w-2xl leading-relaxed">
      Equipped with advanced CNC machining centers, precision tooling,
      and high-performance manufacturing processes to produce complex
      aerospace and engineering components with exceptional accuracy.
    </p>

  </div>

</section>

      {/* Machine Specifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-[#10B981] font-semibold text-sm tracking-wide uppercase mb-3">
                Primary Machine
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1F44] mb-6">
                {machine.name}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our Cosmos CVM 1160 vertical machining center is the backbone of our manufacturing capability. With generous table travels and high-speed spindle, this machine delivers the precision and versatility required for complex aerospace component manufacturing.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#F8FAFC] rounded-xl p-5 border border-slate-100">
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-1">Table Travel</p>
                  <p className="text-lg font-bold text-[#0A1F44]">{machine.tableSize}</p>
                </div>
                <div className="bg-[#F8FAFC] rounded-xl p-5 border border-slate-100">
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-1">Configuration</p>
                  <p className="text-lg font-bold text-[#0A1F44]">{machine.axes}</p>
                </div>
                <div className="bg-[#F8FAFC] rounded-xl p-5 border border-slate-100">
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-1">Max Spindle Speed</p>
                  <p className="text-lg font-bold text-[#0A1F44]">{machine.spindleSpeed}</p>
                </div>
                <div className="bg-[#F8FAFC] rounded-xl p-5 border border-slate-100">
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-1">Repeatability</p>
                  <p className="text-lg font-bold text-[#10B981]">{machine.repeatability}</p>
                </div>
                <div className="bg-[#F8FAFC] rounded-xl p-5 border border-slate-100 col-span-2">
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-1">Position Accuracy</p>
                  <p className="text-lg font-bold text-[#1B5E9E]">{machine.positionAccuracy}</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <Image
  src="/images/cosmos-cvm1160.png"
  alt="Cosmos CVM 1160"
  width={1400}
  height={900}
  className="w-full h-auto object-contain rounded-2xl"
/>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Processes */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#10B981] font-semibold text-sm tracking-wide uppercase mb-3">
              What We Do
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1F44]">
              Manufacturing Processes
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processes.map((process, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0A1F44] flex items-center justify-center mb-4">
                  <Cog className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#0A1F44] mb-2">
                  {process.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="text-[#10B981] font-semibold text-sm tracking-wide uppercase mb-3">
                Materials Expertise
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1F44] mb-6">
                Materials We Process
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We work with a wide range of engineering materials commonly used in aerospace, defense, and precision engineering applications. Our team has deep expertise in selecting optimal cutting parameters and tooling for each material to achieve the best surface finish and dimensional accuracy.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {materials.map((material, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-[#F8FAFC] rounded-lg p-4 border border-slate-100"
                >
                  <Layers className="h-5 w-5 text-[#1B5E9E] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#0A1F44]">{material}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <Button
              onClick={() => navigate('contact')}
              className="bg-[#1B5E9E] hover:bg-[#0D2B5E] text-white px-8 py-3 rounded-lg text-base font-semibold"
            >
              Discuss Your Requirements
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
