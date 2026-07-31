'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useNavigation } from '@/lib/navigation';
import { productsData } from '@/lib/company-data';

export default function ProductsPage() {
  const { navigate } = useNavigation();


  return (
    <div>
      {/* Hero Banner */}
<section className="relative overflow-hidden h-[320px] lg:h-[360px] flex items-center">

  {/* Background Image */}
  <Image
    src="/images/products-banner.jpg"
    alt="Precision Products"
    fill
    priority
    className="object-cover object-center"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#081A3A]/90 via-[#0A1F44]/75 to-[#0A1F44]/35" />

  {/* Hero Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

    <p className="text-[#10B981] font-semibold tracking-[0.25em] uppercase text-sm mb-5">
      Our Products
    </p>

    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl">
      Precision Components
      <br />
      Built to Perform
    </h1>

    <p className="mt-5 text-lg text-slate-200 max-w-2xl leading-relaxed">
      High-quality machined components manufactured for aerospace,
      defense, automotive, and precision engineering applications with
      exceptional dimensional accuracy and surface finish.
    </p>

  </div>

</section>

      

      {/* Product Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {productsData.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="aspect-square overflow-hidden bg-slate-50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs text-[#1B5E9E] font-semibold uppercase tracking-wide mb-2">
                    {product.category}
                  </p>
                  <h3 className="text-xl font-bold text-[#0A1F44] mb-3">
                    {product.name}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Download Catalogue CTA */}
          <div className="mt-16 bg-[#F8FAFC] rounded-2xl p-8 lg:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-100">
            <div>
              <h3 className="text-xl font-bold text-[#0A1F44] mb-2">Need More Information?</h3>
              <p className="text-slate-500">
                Contact us for detailed product specifications, material options, and custom manufacturing inquiries.
              </p>
            </div>
            <Button
              onClick={() => navigate('contact')}
              className="bg-[#1B5E9E] hover:bg-[#0D2B5E] text-white px-8 py-3 rounded-lg text-base font-semibold whitespace-nowrap"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
