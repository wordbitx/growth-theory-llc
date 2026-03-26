import { FileText, Shield, Cookie, RotateCcw, Scale } from 'lucide-react';

interface FooterProps {
  onLegalClick: (page: string) => void;
}

const legalLinks = [
  { label: 'Terms of Service', id: 'terms', icon: FileText },
  { label: 'Privacy Policy', id: 'privacy', icon: Shield },
  { label: 'Cookie Policy', id: 'cookie', icon: Cookie },
  { label: 'Refund Policy', id: 'refund', icon: RotateCcw },
  { label: 'Legal Information', id: 'legal', icon: Scale },
];

const companyLinks = [
  { label: 'Home', id: 'hero' },
  { label: 'Products', id: 'featured-products' },
  { label: 'Services', id: 'services' },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'Contact', id: 'contact' },
];

const categories = [
  'Social Media',
  'Virtual Services',
  'Dev Kits',
  'Ebooks',
  'Kids Learning'
];

export function Footer({ onLegalClick }: FooterProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      {/* Legal Cards */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {legalLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onLegalClick(link.id)}
                className="flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all hover:-translate-y-1 text-left group"
              >
                <link.icon className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                <span className="text-sm font-medium">{link.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center text-white font-bold">
                GT
              </div>
              <div>
                <div className="font-bold">GROWTH THEORY</div>
                <div className="text-xs text-gray-400">Digital Solutions</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner for premium digital products and services. Delivering quality solutions for social media, education, and business growth.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category}>
                  <span className="text-gray-400 text-sm">{category}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onLegalClick(link.id)}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>© 2024 GROWTH THEORY LLC. All rights reserved.</p>
            <p>4708 Washington St, Denver, CO 80216</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
