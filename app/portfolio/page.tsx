"use client";

import Link from "next/link";
import { useState } from "react";

export default function PortfolioPage() {
  const [activePortfolio, setActivePortfolio] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);

  const portfolioProjects = [
    {
      title: "ARADHYA LUXURY FASHION",
      subtitle: "Next.js & Headless E-Commerce",
      description: "An immersive luxury e-commerce platform built with Next.js featuring 3D product showcases and sub-second page loads.",
      metrics: "3.2x Conversion Boost • 60 FPS Animations • Sub-0.5s Load",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "RUDRA TOURISM PORTAL",
      subtitle: "WordPress & Destination CMS",
      description: "A breathtaking travel portal built on custom WordPress CMS, featuring integrated bookings, car rentals, and fast itinerary planning.",
      metrics: "500K+ Monthly Visits • 4.9 Star Rating • Multilingual Support",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "NEXUSSCALE ENTERPRISE ERP",
      subtitle: "React Native, AI Agents & SEO",
      description: "Enterprise-grade digital transformation suite featuring autonomous AI workflow agents, real-time analytics, and mobile app sync.",
      metrics: "99.99% Uptime • $500M+ Value Generated • 24/7 AI Support",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  const faqs = [
    { q: "What technologies do you specialize in?", a: "We specialize exclusively in Next.js, WordPress, React Native, SEO, AI Chatbots, Website Development, and Autonomous AI Agents." },
    { q: "How long does a typical project take?", a: "Typical projects take between 3 to 8 weeks depending on complexity and scope." },
    { q: "Do you provide ongoing support and maintenance?", a: "Yes, we offer 24/7 autonomous monitoring, security updates, and continuous optimization." },
    { q: "What is your pricing model?", a: "We offer milestone-based fixed pricing and dedicated engineering retainers tailored to your project requirements." }
  ];

  const handleEnquirySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const service = String(formData.get("service") || "Portfolio Enquiry");
    const requirements = String(formData.get("requirements") || "");

    const text = `🔔 *PORTFOLIO ENQUIRY - NEXUSAGENCY*\n\n👤 *Name:* ${name}\n📧 *Email:* ${email}\n⚙️ *Service:* ${service}\n📝 *Requirements:* ${requirements}`;

    // WhatsApp + Email Dispatch
    const waLink = document.createElement('a');
    waLink.href = `https://api.whatsapp.com/send?phone=919731720585&text=${encodeURIComponent(text)}`;
    waLink.target = '_blank';
    document.body.appendChild(waLink);
    waLink.click();
    document.body.removeChild(waLink);

    const mailLink = document.createElement('a');
    mailLink.href = `mailto:arbhafeez2@gmail.com?subject=${encodeURIComponent(`Enquiry: ${service} from ${name}`)}&body=${encodeURIComponent(text)}`;
    document.body.appendChild(mailLink);
    mailLink.click();
    document.body.removeChild(mailLink);

    setEnquirySubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f5f2eb] text-[#1a1a1a] font-sans selection:bg-[#ff6600] selection:text-white relative">
      {/* Top Navbar Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f5f2eb]/90 backdrop-blur-md border-b border-[#1a1a1a]/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-black tracking-tight uppercase flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff6600]" />
            NEXUSAGENCY
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold tracking-wide">
            <Link href="/" className="hover:text-[#ff6600] transition-colors">HOME</Link>
            <Link href="/services" className="hover:text-[#ff6600] transition-colors">SERVICES</Link>
            <Link href="/portfolio" className="text-[#ff6600] transition-colors">PORTFOLIO</Link>
            <Link href="#faq" className="hover:text-[#ff6600] transition-colors">FAQ</Link>
            <Link href="#enquiry" className="hover:text-[#ff6600] transition-colors">CONTACT US</Link>
          </nav>
          <Link
            href="#enquiry"
            className="px-6 py-3 rounded-xl font-bold text-xs bg-[#ff6600] text-white hover:bg-[#e65c00] transition-all shadow-[0_4px_20px_rgba(255,102,0,0.3)]"
          >
            ENQUIRE NOW
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-44 pb-20 px-6 text-center max-w-5xl mx-auto">
        <div className="inline-block px-4 py-1.5 rounded-full bg-[#ff6600]/10 border border-[#ff6600]/30 text-[#ff6600] text-xs font-bold uppercase tracking-widest mb-6">
          Our Proven Track Record
        </div>
        <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[1.08] mb-6">
          Featured <span className="text-[#ff6600]">Portfolio</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Explore our flagship case studies in Next.js, WordPress, React Native, SEO, AI Chatbots, Website Development, and AI Agents.
        </p>
      </section>

      {/* Markitup Style Portfolio Slider */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full border-t border-[#1a1a1a]/10">
        <div className="text-center mb-12">
          <h2 className="text-xs uppercase font-bold tracking-widest text-gray-500 mb-2">// PORTFOLIO SLIDER</h2>
          <h3 className="text-3xl sm:text-4xl font-black">Swipe Through Our Flagship Projects</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            portfolioProjects[activePortfolio],
            portfolioProjects[(activePortfolio + 1) % portfolioProjects.length],
            portfolioProjects[(activePortfolio + 2) % portfolioProjects.length],
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[32px] p-8 border border-[#1a1a1a]/10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] flex flex-col justify-between relative transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] min-h-[420px]"
            >
              <div>
                <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-black tracking-tight text-[#1a1a1a]">{item.title}</h3>
                </div>
                <h4 className="text-xs font-bold text-[#ff6600] uppercase mb-2">{item.subtitle}</h4>
                <p className="text-gray-600 text-xs leading-relaxed">{item.description}</p>
              </div>

              <div className="flex items-end justify-between mt-8 pt-6 border-t border-gray-100">
                <div className="grid grid-cols-3 gap-1.5 opacity-40">
                  <div className="w-1.5 h-1.5 rounded-full bg-black" />
                  <div className="w-1.5 h-1.5 rounded-full bg-black" />
                  <div className="w-1.5 h-1.5 rounded-full bg-black" />
                  <div className="w-1.5 h-1.5 rounded-full bg-black" />
                  <div className="w-1.5 h-1.5 rounded-full bg-black" />
                  <div className="w-1.5 h-1.5 rounded-full bg-black" />
                </div>
                <Link
                  href="#enquiry"
                  className="text-xs font-bold uppercase tracking-wider text-black hover:underline"
                >
                  Discuss Similar &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Connected Pagination Bar */}
        <div className="flex items-center justify-center gap-3">
          {portfolioProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActivePortfolio(index)}
              className={`w-4 h-4 rounded-full border-2 border-[#1a1a1a] transition-all flex items-center justify-center ${
                activePortfolio === index ? "bg-[#1a1a1a]" : "bg-transparent"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {activePortfolio === index && <span className="w-1.5 h-1.5 rounded-full bg-[#f5f2eb]" />}
            </button>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 bg-white border-t border-[#1a1a1a]/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xs uppercase font-bold text-[#ff6600] tracking-widest mb-2">// FAQ</h2>
            <h3 className="text-3xl sm:text-5xl font-black tracking-tight">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-4">
            {faqs.map((item, idx) => (
              <div key={idx} className="bg-[#faf8f5] rounded-2xl border border-[#1a1a1a]/10 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left font-bold flex justify-between items-center text-[#1a1a1a]"
                >
                  <span>{item.q}</span>
                  <span className="text-[#ff6600] text-xl font-black">{openFaq === idx ? "-" : "+"}</span>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-[#1a1a1a]/5 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us / Enquiry Form Section */}
   

      {/* Desktop & Mobile Responsive Footer */}
      <footer className="bg-black text-white pt-20 pb-12 border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="text-xl font-black uppercase tracking-tight flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-[#ff6600]" />
              NexusAgency
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Specializing in Next.js, WordPress, React Native, SEO, AI Chatbots, Website Development, and AI Agents.
            </p>
            <div className="text-xs font-mono text-[#ff6600]">arbhafeez2@gmail.com &bull; +91 9731720585</div>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 font-mono">Core Services</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link href="/services" className="hover:text-white transition-colors">Next.js Development</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">WordPress Solutions</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">React Native Apps</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Enterprise SEO</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 font-mono">Advanced Tech</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link href="/services" className="hover:text-white transition-colors">AI Chatbots</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Website Development</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Autonomous AI Agents</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Client Portfolio</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 font-mono">Company</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#enquiry" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <div>&copy; 2026 NexusAgency. All rights reserved. Email: arbhafeez2@gmail.com | WhatsApp: +91 9731720585</div>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
