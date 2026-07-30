'use client';

import { NavigationProvider, useNavigation } from '@/lib/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HomePage from '@/components/pages/HomePage';
import AboutPage from '@/components/pages/AboutPage';
import ServicesPage from '@/components/pages/ServicesPage';
import CapabilitiesPage from '@/components/pages/CapabilitiesPage';
import ProductsPage from '@/components/pages/ProductsPage';
import QualityPage from '@/components/pages/QualityPage';
import ContactPage from '@/components/pages/ContactPage';

function PageRouter() {
  const { currentPage } = useNavigation();

  const pages = {
    home: <HomePage />,
    about: <AboutPage />,
    services: <ServicesPage />,
    capabilities: <CapabilitiesPage />,
    products: <ProductsPage />,
    quality: <QualityPage />,
    contact: <ContactPage />,
    enquiry: <ContactPage />,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{pages[currentPage]}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <NavigationProvider>
      <PageRouter />
    </NavigationProvider>
  );
}
