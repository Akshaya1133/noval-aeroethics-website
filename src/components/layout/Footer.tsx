'use client';

import { useNavigation } from '@/lib/navigation';
import { companyInfo, navItems } from '@/lib/company-data';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const { navigate } = useNavigation();

  return (
    <footer className="bg-[#0A1F44] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo.png"
              alt="Noval Aeroethics Logo"
              width={160}
              height={48}
              className="h-10 w-auto object-contain brightness-0 invert mb-4"
            />
            <p className="text-slate-300 text-sm leading-relaxed mt-3">
              {companyInfo.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.page}>
                  <button
                    onClick={() => navigate(item.page)}
                    className="text-slate-300 hover:text-white text-sm transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#10B981] mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-sm leading-relaxed">
                  {companyInfo.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#10B981] flex-shrink-0" />
                <span className="text-slate-300 text-sm">
                  {companyInfo.phone1} / {companyInfo.phone2}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#10B981] flex-shrink-0" />
                <span className="text-slate-300 text-sm">{companyInfo.email}</span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2.5">
              <li className="text-slate-300 text-sm">CNC Machining</li>
              <li className="text-slate-300 text-sm">Aerospace Components</li>
              <li className="text-slate-300 text-sm">Precision Parts</li>
              <li className="text-slate-300 text-sm">Quality Inspection</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Noval Aeroethics. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs">
            Precision Engineering for Aerospace & Beyond
          </p>
        </div>
      </div>
    </footer>
  );
}
