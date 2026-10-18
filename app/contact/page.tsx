'use client';

import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: 'AI Agentic Chatbots', message: '' });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: 'How fast do you respond to enquiries?', a: 'We typically respond to all project enquiries via WhatsApp or email within 15 minutes during business hours.' },
    { q: 'Can we schedule a discovery call?', a: 'Yes! Simply fill out the form or click our WhatsApp button to book a direct 1-on-1 strategy call with our engineering leads.' },
    { q: 'What payment terms do you accept?', a: 'We offer flexible milestone-based payment structures for all custom web, mobile, and AI agent projects.' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi Nexus Agency, I'd like to start an enquiry.%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Service:* ${formData.service}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/919731720585?text=${whatsappMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#070b19] text-white selection:bg-[#B1FF03] selection:text-[#111111] font-sans">
      <nav className="sticky top-0 z-50 bg-[#070b19]/90 backdrop-blur-md border-b border-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-20 items-center">
          <a href="/" className="flex items-center space-x-3">
            <span className="w-3 h-3 rounded-full bg-[#B1FF03] inline-block animate-ping"></span>
            <span className="text-2xl font-black tracking-tighter text-white">
              NEXUS<span className="text-[#B1FF03]"> / AGENCY</span>
            </span>
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="block py-2 text-white font-bold text-lg">Home</a>
            <a href="/services" className="text-slate-300 hover:text-[#B1FF03] transition font-semibold text-sm">Services</a>
            <a href="/ai-mobile" className="text-slate-300 hover:text-[#B1FF03] transition font-semibold text-sm">AI & Mobile</a>
            <a href="/about" className="text-slate-300 hover:text-[#B1FF03] transition font-semibold text-sm">About Us</a>
            <a href="/contact" className="text-[#B1FF03] transition font-semibold text-sm">Contact</a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://wa.me/919731720585?text=Hi%20Nexus%20Agency,%20I'd%20like%20to%20start%20an%20enquiry." 
              target="_blank" 
              rel="noreferrer"
              className="bg-[#B1FF03] hover:bg-[#9de000] text-[#111111] font-bold px-6 py-3 rounded-xl shadow-lg shadow-[#B1FF03]/20 transition flex items-center space-x-2 text-sm"
            >
              <span>Start an enquiry</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-4xl sm:text-6xl font-black tracking-tighter text-white">Get in Touch</h1>
            <p className="text-slate-300 text-base leading-relaxed">
              Fill out the enquiry form or connect with us directly on WhatsApp. We respond within minutes.
            </p>
            <div className="space-y-4 pt-4 font-mono">
              <div className="text-sm text-slate-300">📞 +91 9731720585</div>
              <div className="text-sm text-slate-300">✉️ arbhafeez2@gmail.com</div>
              <div className="text-sm text-slate-300">🌐 nexusagency.co.in</div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-[#0a0f25] border border-[#1e293b] p-8 sm:p-10 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-white">Send Project Enquiry</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-mono">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe" 
                    className="w-full bg-[#070b19] border border-[#1e293b] rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-[#B1FF03]"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-mono">Email</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="john@example.com" 
                      className="w-full bg-[#070b19] border border-[#1e293b] rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-[#B1FF03]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-mono">Phone</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+91 98765 43210" 
                      className="w-full bg-[#070b19] border border-[#1e293b] rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-[#B1FF03]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-mono">Select Service</label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full bg-[#070b19] border border-[#1e293b] rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#B1FF03]"
                  >
                    <option>AI Agentic Chatbots</option>
                    <option>Enterprise SEO & Ranking</option>
                    <option>React Native Mobile App</option>
                    <option>Next.js Website Development</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-mono">Message</label>
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your project..."
                    className="w-full bg-[#070b19] border border-[#1e293b] rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-[#B1FF03]"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-[#B1FF03] hover:bg-[#9de000] text-[#111111] font-extrabold py-4 rounded-xl shadow-lg shadow-[#B1FF03]/20 transition"
                >
                  Submit & Enquire on WhatsApp ↗
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2 mb-10">
            <h2 className="text-xs uppercase tracking-widest text-[#B1FF03] font-mono font-bold">Quick Help</h2>
            <h3 className="text-3xl font-black tracking-tight text-white">Contact FAQs</h3>
          </div>

          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#0a0f25] border border-[#1e293b] rounded-2xl p-6 transition">
              <button 
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex justify-between items-center text-left font-bold text-lg text-white focus:outline-none"
              >
                <span>{faq.q}</span>
                <span className="text-[#B1FF03] text-xl">{openFaq === index ? '−' : '+'}</span>
              </button>
              {openFaq === index && (
                <p className="mt-4 text-slate-400 text-sm leading-relaxed border-t border-[#1e293b] pt-4">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#03050c] border-t border-[#1e293b] py-12 text-slate-400 text-sm mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B1FF03] inline-block"></span>
              <span className="text-lg font-black text-white tracking-wider">NEXUS<span className="text-[#B1FF03]"> / AGENCY</span></span>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm text-slate-400 font-mono">
              <a href="/services" className="hover:text-[#B1FF03] transition">Services</a>
              <a href="/ai-mobile" className="hover:text-[#B1FF03] transition">AI & Mobile</a>
              <a href="/contact" className="hover:text-[#B1FF03] transition">Contact</a>
              <a href="https://wa.me/919731720585" target="_blank" rel="noreferrer" className="hover:text-[#B1FF03] transition">WhatsApp (+91 9731720585)</a>
            </div>

            <div className="text-xs text-slate-500 text-center md:text-right font-mono">
              © 2026 nexusagency.co.in. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
