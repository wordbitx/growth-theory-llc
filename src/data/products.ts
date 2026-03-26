import type { Product, Testimonial } from '@/types';

export const products: Product[] = [
  {
    id: 1,
    name: "Social Media Growth Toolkit",
    description: "Complete guide to growing your social media presence with proven strategies, templates, and automation tools. Perfect for creators and businesses.",
    price: 29.99,
    category: "Social Media",
    image: "/images/product-1.jpg",
    reviews: 124
  },
  {
    id: 2,
    name: "Instagram Engagement Bundle",
    description: "Boost your Instagram engagement with our comprehensive bundle of tools, guides, and caption templates designed to increase reach.",
    price: 24.99,
    category: "Social Media",
    image: "/images/product-2.jpg",
    reviews: 89
  },
  {
    id: 3,
    name: "TikTok Viral Blueprint",
    description: "Learn the secrets to creating viral TikTok content that reaches millions. Includes trending formats and optimization techniques.",
    price: 34.99,
    category: "Social Media",
    image: "/images/product-3.jpg",
    reviews: 156
  },
  {
    id: 4,
    name: "LinkedIn Business Pro",
    description: "Professional LinkedIn growth system for entrepreneurs and business owners. Build authority and generate leads.",
    price: 39.99,
    category: "Social Media",
    image: "/images/product-4.jpg",
    reviews: 67
  },
  {
    id: 5,
    name: "YouTube Starter Pack",
    description: "Everything you need to start and grow a successful YouTube channel from scratch to monetization.",
    price: 49.99,
    category: "Social Media",
    image: "/images/product-5.jpg",
    reviews: 203
  },
  {
    id: 6,
    name: "Twitter/X Engagement Booster",
    description: "Increase your Twitter engagement with proven strategies for growing your audience and influence.",
    price: 19.99,
    category: "Social Media",
    image: "/images/product-6.jpg",
    reviews: 78
  },
  {
    id: 7,
    name: "Pinterest Traffic Generator",
    description: "Drive massive traffic to your website using Pinterest marketing strategies and pin optimization techniques.",
    price: 22.99,
    category: "Social Media",
    image: "/images/product-7.jpg",
    reviews: 45
  },
  {
    id: 8,
    name: "Social Media Content Calendar",
    description: "12-month content calendar with 365 post ideas for all major platforms. Never run out of content ideas again.",
    price: 14.99,
    category: "Social Media",
    image: "/images/product-8.jpg",
    reviews: 112
  },
  {
    id: 9,
    name: "Facebook Ads Mastery",
    description: "Master Facebook advertising with our comprehensive guide to creating high-converting ad campaigns.",
    price: 44.99,
    category: "Marketing",
    image: "/images/product-9.jpg",
    reviews: 92
  },
  {
    id: 10,
    name: "SEO Ranking Blueprint",
    description: "Dominate search engine rankings with our proven SEO strategies and optimization techniques.",
    price: 39.99,
    category: "Marketing",
    image: "/images/product-10.jpg",
    reviews: 134
  },
  {
    id: 11,
    name: "Email Marketing Pro",
    description: "Build and monetize your email list with high-converting templates and automation sequences.",
    price: 29.99,
    category: "Marketing",
    image: "/images/product-11.jpg",
    reviews: 87
  },
  {
    id: 12,
    name: "Canva Design Templates",
    description: "Professional Canva templates for social media, presentations, and marketing materials.",
    price: 19.99,
    category: "Design",
    image: "/images/product-12.jpg",
    reviews: 156
  },
  {
    id: 13,
    name: "Freelancer Starter Kit",
    description: "Everything you need to launch your freelance career including contracts, proposals, and pricing guides.",
    price: 34.99,
    category: "Business",
    image: "/images/product-13.jpg",
    reviews: 73
  },
  {
    id: 14,
    name: "Business Plan Template",
    description: "Professional business plan templates with financial projections and investor-ready formats.",
    price: 24.99,
    category: "Business",
    image: "/images/product-14.jpg",
    reviews: 58
  },
  {
    id: 15,
    name: "Brand Identity Guide",
    description: "Complete brand identity system including logo guidelines, color palettes, and typography rules.",
    price: 49.99,
    category: "Design",
    image: "/images/product-15.jpg",
    reviews: 42
  },
  {
    id: 16,
    name: "Analytics Dashboard Pro",
    description: "Custom analytics dashboard templates to track and visualize your business metrics.",
    price: 59.99,
    category: "Business",
    image: "/images/product-16.jpg",
    reviews: 38
  },
  {
    id: 17,
    name: "Kids Learning Bundle",
    description: "Fun and educational resources for children including alphabet books, math activities, and interactive games.",
    price: 19.99,
    category: "Kids Learning",
    image: "/images/product-17.jpg",
    reviews: 189
  },
  {
    id: 18,
    name: "Coding for Kids Ebook",
    description: "Introduce your children to programming with this fun and interactive coding guide for kids.",
    price: 14.99,
    category: "Kids Learning",
    image: "/images/product-18.jpg",
    reviews: 145
  },
  {
    id: 19,
    name: "Virtual Assistant Service",
    description: "Professional virtual assistant services to help you manage tasks and grow your business.",
    price: 99.00,
    category: "Virtual Services",
    image: "/images/product-19.jpg",
    reviews: 67
  },
  {
    id: 20,
    name: "Social Media Audit Service",
    description: "Comprehensive social media audit with actionable recommendations to improve your presence.",
    price: 79.00,
    category: "Virtual Services",
    image: "/images/product-20.jpg",
    reviews: 54
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Growth Theory turned our content chaos into a system we actually use. The social media toolkit paid for itself in the first week!",
    name: "Sarah Mitchell",
    role: "Marketing Director",
    company: "Growth Labs"
  },
  {
    id: 2,
    quote: "Fast, clear, and weirdly fun to work with. The virtual assistant service saved me 20 hours a month.",
    name: "Michael Chen",
    role: "Founder",
    company: "TechStart Inc"
  },
  {
    id: 3,
    quote: "The TikTok Viral Blueprint helped me gain 100K followers in just 3 months. Absolutely worth every penny!",
    name: "Emily Rodriguez",
    role: "Content Creator",
    company: "Creative Studio"
  },
  {
    id: 4,
    quote: "Professional quality products that deliver real results. Their dev kits accelerated our project timeline by weeks.",
    name: "David Park",
    role: "CEO",
    company: "Digital Ventures"
  }
];

export const services = [
  "Social Media Management",
  "Content Creation",
  "Virtual Assistance",
  "Brand Strategy",
  "Digital Marketing",
  "Web Development"
];
