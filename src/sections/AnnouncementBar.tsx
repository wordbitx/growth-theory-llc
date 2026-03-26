import { Phone, Mail, Zap } from 'lucide-react';

export function AnnouncementBar() {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-2.5 px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm">
        {/* Phone - Hidden on mobile */}
        <a 
          href="tel:+17759802622" 
          className="hidden md:flex items-center gap-1.5 hover:text-blue-200 transition-colors"
        >
          <Phone className="w-4 h-4" />
          <span>+1 775 980 2622</span>
        </a>
        
        <span className="hidden md:block text-blue-400">|</span>
        
        {/* Email - Hidden on mobile */}
        <a 
          href="mailto:info@growththeoryllc.com" 
          className="hidden md:flex items-center gap-1.5 hover:text-blue-200 transition-colors"
        >
          <Mail className="w-4 h-4" />
          <span>info@growththeoryllc.com</span>
        </a>
        
        <span className="hidden md:block text-blue-400">|</span>
        
        {/* Tagline - Always visible */}
        <div className="flex items-center gap-1.5">
          <Zap className="w-4 h-4 text-yellow-400" />
          <span className="hidden sm:inline">Digital Products Delivered to Your Email</span>
          <span className="sm:hidden">Digital Products</span>
        </div>
      </div>
    </div>
  );
}
