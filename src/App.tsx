import { useState } from 'react';
import { CartProvider, useCart } from '@/context/CartContext';
import { Header } from '@/sections/Header';
import { AnnouncementBar } from '@/sections/AnnouncementBar';
import { Hero } from '@/sections/Hero';
import { TrustBadges } from '@/sections/TrustBadges';
import { FeaturedProducts } from '@/sections/FeaturedProducts';
import { Services } from '@/sections/Services';
import { Testimonials } from '@/sections/Testimonials';
import { MoreProducts } from '@/sections/MoreProducts';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import { OrderModal } from '@/components/OrderModal';
import { QuickViewModal } from '@/components/QuickViewModal';
import { Toaster } from '@/components/ui/sonner';

function AppContent() {
  const [showLegalPage, setShowLegalPage] = useState<string | null>(null);
  const { isOrderModalOpen, setIsOrderModalOpen, setSelectedProduct } = useCart();
  const [quickViewProduct, setQuickViewProduct] = useState<null | { id: number; name: string; description: string; price: number; category: string; image: string; reviews: number }>(null);

  const handleLegalClick = (page: string) => {
    setShowLegalPage(page);
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setShowLegalPage(null);
    window.scrollTo(0, 0);
  };

  if (showLegalPage) {
    return (
      <div className="min-h-screen bg-white">
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-4">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <button 
              onClick={handleBackToHome}
              className="flex items-center gap-2 text-white hover:text-blue-200 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              Back to Home
            </button>
            <h1 className="text-xl font-semibold">GROWTH THEORY LLC</h1>
          </div>
        </div>
        <LegalContent page={showLegalPage} />
        <Footer onLegalClick={handleLegalClick} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Header onLegalClick={handleLegalClick} />
      <main>
        <Hero />
        <TrustBadges />
        <FeaturedProducts onQuickView={setQuickViewProduct} />
        <Services />
        <Testimonials />
        <MoreProducts onQuickView={setQuickViewProduct} />
        <Contact />
      </main>
      <Footer onLegalClick={handleLegalClick} />
      <OrderModal 
        isOpen={isOrderModalOpen} 
        onClose={() => {
          setIsOrderModalOpen(false);
          setSelectedProduct(null);
        }} 
      />
      <QuickViewModal 
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
      <Toaster />
    </div>
  );
}

function LegalContent({ page }: { page: string }) {
  const content: Record<string, { title: string; content: React.ReactNode }> = {
    'terms': {
      title: 'Terms of Service',
      content: (
        <div className="space-y-6">
          <p className="text-gray-600">Last updated: December 2024</p>
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">1. Acceptance of Terms</h2>
            <p className="text-gray-600">By accessing and using GROWTH THEORY LLC's website and services, you accept and agree to be bound by the terms and provision of this agreement.</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">2. Use of Services</h2>
            <p className="text-gray-600">Our digital products and services are provided for your personal and business use. You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the service without express written permission.</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">3. Digital Products</h2>
            <p className="text-gray-600">All digital products are delivered via email upon successful payment. You will receive download instructions and access links within 24 hours of purchase.</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">4. Intellectual Property</h2>
            <p className="text-gray-600">All content, products, and materials available on this website are the property of GROWTH THEORY LLC and are protected by applicable copyright and trademark law.</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">5. Limitation of Liability</h2>
            <p className="text-gray-600">GROWTH THEORY LLC shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of our services.</p>
          </section>
        </div>
      )
    },
    'privacy': {
      title: 'Privacy Policy',
      content: (
        <div className="space-y-6">
          <p className="text-gray-600">Last updated: December 2024</p>
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">1. Information We Collect</h2>
            <p className="text-gray-600">We collect information you provide directly to us, including name, email address, phone number, and payment information when you make a purchase.</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">2. How We Use Your Information</h2>
            <p className="text-gray-600">We use the information we collect to process your orders, send you digital products, communicate with you, and improve our services.</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">3. Information Sharing</h2>
            <p className="text-gray-600">We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website.</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">4. Data Security</h2>
            <p className="text-gray-600">We implement appropriate security measures to protect your personal information against unauthorized access, alteration, or destruction.</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">5. Your Rights</h2>
            <p className="text-gray-600">You have the right to access, correct, or delete your personal information. Contact us at info@growththeoryllc.com for any privacy-related requests.</p>
          </section>
        </div>
      )
    },
    'cookie': {
      title: 'Cookie Policy',
      content: (
        <div className="space-y-6">
          <p className="text-gray-600">Last updated: December 2024</p>
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">1. What Are Cookies</h2>
            <p className="text-gray-600">Cookies are small text files that are stored on your computer or mobile device when you visit a website. They help us provide you with a better experience.</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">2. How We Use Cookies</h2>
            <p className="text-gray-600">We use cookies to understand how you use our website, remember your preferences, and improve your browsing experience.</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">3. Types of Cookies</h2>
            <p className="text-gray-600">Essential cookies: Required for the website to function properly.</p>
            <p className="text-gray-600">Analytics cookies: Help us understand how visitors interact with our website.</p>
            <p className="text-gray-600">Preference cookies: Remember your settings and preferences.</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">4. Managing Cookies</h2>
            <p className="text-gray-600">You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and set most browsers to prevent them from being placed.</p>
          </section>
        </div>
      )
    },
    'refund': {
      title: 'Refund Policy',
      content: (
        <div className="space-y-6">
          <p className="text-gray-600">Last updated: December 2024</p>
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">1. Digital Products</h2>
            <p className="text-gray-600">Due to the nature of digital products, all sales are final. We do not offer refunds for digital downloads once the product has been delivered.</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">2. Services</h2>
            <p className="text-gray-600">For virtual services, you may request a refund within 7 days of purchase if the service has not yet been rendered. Once work has begun, refunds are provided on a prorated basis.</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">3. Defective Products</h2>
            <p className="text-gray-600">If you receive a defective or corrupted digital file, please contact us within 48 hours of purchase for a replacement or refund.</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">4. Refund Process</h2>
            <p className="text-gray-600">To request a refund, contact us at info@growththeoryllc.com with your order number and reason for the refund request. We will review and respond within 3-5 business days.</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">5. Contact Information</h2>
            <p className="text-gray-600">Email: info@growththeoryllc.com<br />Phone: +1 775 980 2622<br />Address: 4708 Washington St, Denver, CO 80216</p>
          </section>
        </div>
      )
    },
    'legal': {
      title: 'Legal Information',
      content: (
        <div className="space-y-6">
          <p className="text-gray-600">Last updated: December 2024</p>
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Company Information</h2>
            <p className="text-gray-600">
              <strong>Company Name:</strong> GROWTH THEORY LLC<br />
              <strong>Address:</strong> 4708 Washington St, Denver, CO 80216<br />
              <strong>Email:</strong> info@growththeoryllc.com<br />
              <strong>Phone:</strong> +1 775 980 2622<br />
              <strong>Website:</strong> growththeoryllc.com
            </p>
          </section>
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Business Hours</h2>
            <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM MST<br />Saturday - Sunday: Closed</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Payment Methods</h2>
            <p className="text-gray-600">We accept major credit cards, debit cards, and bank transfers. All payments are processed securely.</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Delivery</h2>
            <p className="text-gray-600">All digital products are delivered via email within 24 hours of payment confirmation. Virtual services are scheduled upon purchase confirmation.</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Dispute Resolution</h2>
            <p className="text-gray-600">Any disputes arising from the use of our services will be governed by the laws of the State of Colorado and resolved through arbitration in Denver, Colorado.</p>
          </section>
        </div>
      )
    }
  };

  const pageData = content[page] || { title: 'Not Found', content: <p>Page not found</p> };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">{pageData.title}</h1>
      {pageData.content}
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
