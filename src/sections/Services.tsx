import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  'Social Media Management',
  'Content Creation',
  'Virtual Assistance',
  'Brand Strategy',
  'Digital Marketing',
  'Web Development'
];

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="services" 
      ref={sectionRef} 
      className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h2 className={`text-3xl md:text-5xl font-bold text-white mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Services that move the needle.
          </h2>

          {/* Subheadline */}
          <p className={`text-lg md:text-xl text-blue-100 mb-12 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            From content systems to virtual assistance—built for speed, clarity, and real outcomes. Let us handle the heavy lifting while you focus on growth.
          </p>

          {/* Service Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-5 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                <Check className="w-4 h-4 text-blue-300" />
                <span className="font-medium">{service}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Button
            onClick={scrollToContact}
            size="lg"
            className={`bg-white text-blue-900 hover:bg-blue-50 px-8 py-6 text-lg rounded-xl transition-all hover:-translate-y-0.5 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            See Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
