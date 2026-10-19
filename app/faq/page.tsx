"use client";

import Link from "next/link";
import { useState } from "react";

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "What technologies do you specialize in?",
      a: "We specialize exclusively in Next.js web applications, WordPress solutions, React Native mobile apps, Enterprise SEO, AI Chatbots, Website Development, and Autonomous AI Agents."
    },
    {
      q: "How long does a typical project take from kickoff to production?",
      a: "Timelines depend on scope. Proof of Concept (PoC) and MVP builds typically take 2 to 4 weeks, while comprehensive enterprise-scale applications and multi-platform solutions generally range from 8 to 16 weeks."
    },
    {
      q: "Do you offer post-launch maintenance and continuous support?",
      a: "Yes. All our engagement tiers include dedicated post-launch support SLAs, performance monitoring, security patches, and continuous feature expansion options through our dedicated engineering squads."
    },
    {
      q: "What is your technology stack for web and mobile development?",
      a: "We leverage industry-leading modern stacks including Next.js, WordPress, React Native, TypeScript, Python, AWS, and secure scalable cloud architectures."
    },
    {
      q: "How do we get started working with NexusAgency?",
      a: "Simply reach out via our contact page or WhatsApp (+91 9731720585) to schedule a discovery consultation with our senior engineering architects."
    }
  ];

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
            <Link href="/portfolio" className="hover:text-[#ff6600] transition-colors">PORTFOLIO</Link>
            
            <Link href="/faq" className="text-[#ff6600] transition-colors">FAQ</Link>
            <Link href="/contact" className="hover:text-[#ff6600] transition-colors">CONTACT US</Link>
          </nav>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl font-bold text-xs bg-[#ff6600] text-white hover:bg-[#e65c00] transition-all shadow-[0_4px_20px_rgba(255,102,0,0.3)]"
          >
            ENQUIRE NOW
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-44 pb-20 px-6 text-center max-w-5xl mx-auto">
        <div className="inline-block px-4 py-1.5 rounded-full bg-[#ff6600]/10 border border-[#ff6600]/30 text-[#ff6600] text-xs font-bold uppercase tracking-widest mb-6">
          Frequently Asked Questions
        </div>
        <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[1.08] mb-6">
          Everything You Need To <span className="text-[#ff6600]">Know</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Got questions about our engineering process, AI capabilities, or engagement models? Find clear answers below.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto w-full border-t border-[#1a1a1a]/10">
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-[#1a1a1a]/10 overflow-hidden shadow-sm">
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
      </section>

      {/* Footer */}
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
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <div>&copy; 2026 NexusAgency. All rights reserved. Email: arbhafeez2@gmail.com | Location: Bangalore</div>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
