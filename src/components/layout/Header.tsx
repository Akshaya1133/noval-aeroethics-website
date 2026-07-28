'use client';

import { useState } from 'react';
import { useNavigation } from '@/lib/navigation';
import { navItems } from '@/lib/company-data';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import Image from 'next/image';
import { Menu } from 'lucide-react';

export default function Header() {
  const { currentPage, navigate } = useNavigation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (page: typeof navItems[number]['page']) => {
    navigate(page);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4 py-3 md:py-4">
          {/* ================= BRAND (Logo + Name) ================= */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 cursor-pointer flex-shrink-0"
            aria-label="Go to Home"
          >
            <Image
              src="/images/logo-icon.png"
              alt="Noval Aeroethics"
              width={64}
              height={70}
              className="h-9 sm:h-[42px] md:h-12 w-auto object-contain flex-shrink-0"
              priority
            />
            <span className="flex flex-col leading-tight text-left">
              <span className="whitespace-nowrap text-base sm:text-lg md:text-xl text-[#0A1F44] tracking-wide">
                <span className="font-bold">NOVAL</span>{' '}
                <span className="font-medium text-slate-600">AEROETHICS</span>
              </span>
              <span className="hidden sm:block text-[11px] md:text-xs text-slate-500 mt-0.5">
                Precision Aerospace Engineering
              </span>
            </span>
          </button>

          {/* ================= DESKTOP MENU ================= */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNav(item.page)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition ${
                  currentPage === item.page
                    ? 'bg-slate-100 text-[#0A1F44]'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-[#0A1F44]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* ================= GET QUOTE ================= */}
          <div className="hidden lg:block flex-shrink-0">
            <Button
              onClick={() => handleNav('contact')}
              className="bg-[#1B5E9E] hover:bg-[#0A1F44] text-white px-6 py-3 rounded-lg font-semibold"
            >
              Get Quote
            </Button>
          </div>

          {/* ================= MOBILE MENU ================= */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <button className="p-2">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="w-80 p-0">
              <SheetTitle className="sr-only">
                Navigation Menu
              </SheetTitle>

              <div className="border-b p-6">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/logo-icon.png"
                    alt="Noval Aeroethics"
                    width={64}
                    height={70}
                    className="h-9 w-auto object-contain flex-shrink-0"
                  />
                  <div className="flex flex-col leading-tight">
                    <span className="text-lg text-[#0A1F44] tracking-wide">
                      <span className="font-bold">NOVAL</span>{' '}
                      <span className="font-medium text-slate-600">AEROETHICS</span>
                    </span>
                    <span className="text-[11px] text-slate-500 mt-0.5">
                      Precision Aerospace Engineering
                    </span>
                  </div>
                </div>
              </div>

              <nav className="flex flex-col p-4">
                {navItems.map((item) => (
                  <button
                    key={item.page}
                    onClick={() => handleNav(item.page)}
                    className={`text-left px-4 py-3 rounded-lg transition ${
                      currentPage === item.page
                        ? 'bg-slate-100 text-[#0A1F44]'
                        : 'hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              <div className="p-4 mt-auto">
                <Button
                  onClick={() => handleNav('contact')}
                  className="w-full bg-[#1B5E9E] hover:bg-[#0A1F44]"
                >
                  Get Quote
                </Button>
              </div>
            </SheetContent>
          </Sheet>

        </div>
      </div>
    </header>
  );
}