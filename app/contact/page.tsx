"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);

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
    const service = String(formData.get("service") || "Contact Enquiry");
    const requirements = String(formData.get("requirements") || "");

    const text = `🔔 *CONTACT US ENQUIRY - NEXUSAGENCY*\n\n👤 *Name:* ${name}\n📧 *Email:* ${email}\n⚙️ *Service:* ${service}\n📝 *Requirements:* ${requirements}`;

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
            <Link href="/portfolio" className="hover:text-[#ff6600] transition-colors">PORTFOLIO</Link>
            <Link href="#faq" className="hover:text-[#ff6600] transition-colors">FAQ</Link>
            <Link href="#enquiry" className="text-[#ff6600] transition-colors">CONTACT US</Link>
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
          Get In Touch
        </div>
        <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[1.08] mb-6">
          Contact <span className="text-[#ff6600]">NexusAgency</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Ready to elevate your digital trajectory? Send us your project requirements and connect instantly with our elite engineering team.
        </p>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 max-w-4xl mx-auto w-full border-t border-[#1a1a1a]/10">
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase font-bold tracking-widest text-gray-500 mb-2">// FAQ</h2>
          <h3 className="text-3xl sm:text-4xl font-black">Frequently Asked Questions</h3>
        </div>

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

      {/* Contact Us / Enquiry Form Section */}
      <section id="enquiry" className="py-24 px-6 max-w-4xl mx-auto w-full">
        <div className="bg-[#1a1a1a] text-white rounded-[36px] p-8 sm:p-16 shadow-2xl relative overflow-hidden">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h3 className="text-3xl sm:text-4xl font-black mb-4">Request a Free Consultation</h3>
            <p className="text-gray-400 text-sm">Submissions instantly open WhatsApp (+91 9731720585) & email arbhafeez2@gmail.com.</p>
          </div>

          {enquirySubmitted ? (
            <div className="bg-[#ff6600]/10 border border-[#ff6600]/30 rounded-2xl p-8 text-center text-white">
              <h4 className="text-2xl font-bold mb-3 text-[#ff6600]">Enquiry Triggered Successfully!</h4>
              <p className="text-gray-300 text-sm mb-6">WhatsApp and Email clients have been opened with your pre-filled enquiry.</p>
              <button onClick={() => setEnquirySubmitted(false)} className="px-6 py-3 bg-[#ff6600] text-white rounded-xl font-bold text-xs">Submit Another Enquiry</button>
            </div>
          ) : (
            <form onSubmit={handleEnquirySubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">Your Name</label>
                  <input name="name" required type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#ff6600]" />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">Email Address</label>
                  <input name="email" required type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#ff6600]" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">Select Service</label>
                <select name="service" className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#ff6600]">
                  <option>Next.js Development</option>
                  <option>WordPress Solutions</option>
                  <option>React Native Apps</option>
                  <option>Enterprise SEO</option>
                  <option>AI Chatbots</option>
                  <option>Website Development</option>
                  <option>AI Agents</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">Take Down Your Requirements</label>
                <textarea name="requirements" rows={5} placeholder="Describe your project scope, timeline, goals, and specific technical requirements..." className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#ff6600]" required />
              </div>
              <button type="submit" className="w-full py-4 rounded-xl font-bold text-sm bg-[#ff6600] text-white hover:bg-[#e65c00] transition-all shadow-lg">
                Submit & Send to WhatsApp (+91 9731720585) & Email &rarr;
              </button>
            </form>
          )}
        </div>
      </section>

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
