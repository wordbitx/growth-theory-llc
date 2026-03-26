import { useEffect, useRef, useState } from 'react';
import { Zap, Shield, Headphones, Users } from 'lucide-react';

const badges = [
  {
    icon: Zap,
    title: 'Instant Delivery',
    description: 'Get your products immediately via email'
  },
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description: 'Premium products that deliver results'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'We are here to help you anytime'
  },
  {
    icon: Users,
    title: 'Trusted by Thousands',
    description: 'Join our growing community'
  }
];

export function TrustBadges() {
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

  return (
    <section ref={sectionRef} className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className={`group text-center p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-blue-100 group-hover:bg-blue-200 rounded-xl flex items-center justify-center transition-colors">
                <badge.icon className="w-7 h-7 text-blue-600 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{badge.title}</h3>
              <p className="text-sm text-gray-500">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
