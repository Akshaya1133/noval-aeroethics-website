'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useNavigation } from '@/lib/navigation';
import { productsData } from '@/lib/company-data';

export default function ProductsPage() {
  const { navigate } = useNavigation();

  const categories = Array.from(new Set(productsData.map((p) => p.category)));

  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-[#0A1F44] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#10B981] font-semibold text-sm tracking-wide uppercase mb-3">
            Our Products
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white max-w-3xl">
            We Deliver the Best... Always
          </h1>
          <p className="mt-4 text-slate-300 text-lg max-w-2xl">
            Precision machined components for aerospace, defense, and precision engineering applications.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-8 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-1.5 bg-[#0A1F44] text-white text-sm font-medium rounded-full">
              All Products
            </span>
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-1.5 bg-white text-slate-600 text-sm font-medium rounded-full border border-slate-200"
              >
                {cat}
              </span>
            ))}
          </div>
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
