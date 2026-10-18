'use client';

import React, { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: 'AI Agentic Chatbots', message: '' });

  const services = [
    {
      category: 'AI & Automation',
      title: 'AI Agentic Chatbots',
      description: 'Smart 24/7 autonomous agentic AI bots for advanced support, lead qualification, and complex workflow automation.',
      badge: 'Popular'
    },
    {
      category: 'SEO & Growth',
      title: 'Enterprise SEO & Ranking',
      description: 'Dominating organic search results with high-impact technical SEO, keyword strategy, and authority link building.',
      badge: 'High Traffic'
    },
    {
      category: 'Mobile',
      title: 'React Native Apps',
      description: 'High-performance native & cross-platform mobile app UI/UX design and full-stack builds for iOS & Android.',
      badge: 'High ROI'
    },
    {
      category: 'Web Development',
      title: 'Next.js Web Development',
      description: 'Lightning-fast, server-side rendered, SEO-optimized web applications built with the modern Next.js framework.',
      badge: 'Cutting Edge'
    },
    {
      category: 'Web Development',
      title: 'React.js Web Development',
      description: 'Scalable, interactive single-page applications and custom dynamic web interfaces engineered for growth.',
      badge: 'Robust'
    },
    {
      category: 'Web Development',
      title: 'WordPress Web Development',
      description: 'Custom WordPress theme development, WooCommerce stores, secure enterprise setups, and lightning-fast speed optimization.',
      badge: 'Enterprise'
    }
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(s => s.category.toLowerCase().includes(activeTab.toLowerCase()));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi Nexus Agency, I'd like to start an enquiry.%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Service:* ${formData.service}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/919731720585?text=${whatsappMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#070b19] text-white selection:bg-[#B1FF03] selection:text-[#111111] font-sans">
      
      {/* Top Banner WhatsApp / Phone info */}
      <div className="bg-[#0a0f25] border-b border-[#1e293b] py-2 px-4 text-xs md:text-sm text-[#B1FF03]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center font-mono">📞 +91 9731720585</span>
            <span className="hidden md:flex items-center font-mono">✉️arbhafeez2@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="bg-[#B1FF03]/20 text-[#B1FF03] px-3 py-1 rounded-full font-bold border border-[#B1FF03]/40 flex items-center text-xs tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#B1FF03] animate-pulse mr-2"></span> TAKING ON SELECT PROJECTS — 2026
            </span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#070b19]/90 backdrop-blur-md border-b border-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center space-x-3">
              <span className="w-3 h-3 rounded-full bg-[#B1FF03] inline-block animate-ping"></span>
              <span className="text-2xl font-black tracking-tighter text-white">
                NEXUS<span className="text-[#B1FF03]"> / AGENCY</span>
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-[#B1FF03] transition font-semibold text-sm">Home</a>
              <a href="/services" className="text-slate-300 hover:text-[#B1FF03] transition font-semibold text-sm">Services</a>
              <a href="/ai-mobile" className="text-slate-300 hover:text-[#B1FF03] transition font-semibold text-sm">AI & Mobile</a>
              <a href="/about" className="text-slate-300 hover:text-[#B1FF03] transition font-semibold text-sm">About Us</a>
              <a href="/contact" className="text-slate-300 hover:text-[#B1FF03] transition font-semibold text-sm">Contact</a>
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

            <div className="md:hidden flex items-center">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white focus:outline-none text-2xl font-bold">
                {mobileMenuOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a0f25] border-b border-[#1e293b] px-4 pt-4 pb-6 space-y-3">
            <a href="/" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-white font-bold text-lg">Home</a>
            <a href="/services" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-white font-bold text-lg">Services</a>
            <a href="/ai-mobile" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-white font-bold text-lg">AI & Mobile</a>
            <a href="/about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-white font-bold text-lg">About Us</a>
            <a href="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-white font-bold text-lg">Contact</a>
            <div className="pt-4">
              <a 
                href="https://wa.me/919731720585?text=Hi%20Nexus%20Agency,%20I'd%20like%20to%20start%20an%20enquiry." 
                target="_blank" 
                rel="noreferrer"
                className="w-full text-center bg-[#B1FF03] text-[#111111] font-bold py-3.5 rounded-xl block shadow-lg"
              >
                Start an enquiry ↗
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-28 lg:pb-36 bg-[#070b19]">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-6 max-w-5xl">
            
            <div className="text-xs uppercase tracking-widest text-[#B1FF03] font-mono font-semibold">
              INDEPENDENT DIGITAL STUDIO / DIGITAL PRODUCTS & BRAND EXPERIENCES
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-none text-white">
              Make your <span className="text-[#B1FF03] block sm:inline font-black">next move.</span>
            </h1>

            <p className="text-xl sm:text-2xl text-slate-300 max-w-2xl font-normal leading-relaxed pt-4">
              We design and build high-converting digital experiences that make ambitious businesses impossible to ignore. Powered by Nexus Agency.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-6">
              <a 
                href="https://wa.me/919731720585?text=Hi%20Nexus%20Agency,%20I'd%20like%20to%20start%20an%20enquiry." 
                target="_blank" 
                rel="noreferrer"
                className="bg-[#B1FF03] hover:bg-[#9de000] text-[#111111] font-extrabold px-8 py-4 rounded-xl shadow-xl shadow-[#B1FF03]/20 transition flex items-center justify-center space-x-3 text-base"
              >
                <span>Start an enquiry</span>
                <span>↗</span>
              </a>

              <a 
                href="https://wa.me/919731720585?text=Hi%20Nexus%20Agency,%20let's%20chat%20on%20WhatsApp." 
                target="_blank"
                rel="noreferrer"
                className="bg-[#0a0f25] hover:bg-[#121a38] text-white border border-[#1e293b] font-bold px-8 py-4 rounded-xl transition flex items-center justify-center space-x-3 text-base shadow-sm"
              >
                <span>💬 Chat on WhatsApp</span>
              </a>

              <a 
                href="/services" 
                className="text-[#B1FF03] hover:underline font-bold px-4 py-2 flex items-center justify-center space-x-1 text-sm font-mono"
              >
                <span>Visit nexusagency.co.in ↗</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-10 text-xs sm:text-sm text-slate-400 font-mono border-t border-[#1e293b]">
              <span className="flex items-center"><span className="text-[#B1FF03] font-bold mr-2">✓</span> Clear scope before we build</span>
              <span className="flex items-center"><span className="text-[#B1FF03] font-bold mr-2">✓</span> WordPress + Wix specialists</span>
              <span className="flex items-center"><span className="text-[#B1FF03] font-bold mr-2">✓</span> AI Agents & Next.js Experts</span>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#050814] border-t border-[#1e293b] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-4 mb-16">
            <h2 className="text-xs uppercase tracking-widest text-[#B1FF03] font-mono font-bold">Our Core Expertise</h2>
            <h3 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Engineered For Scale & Maximum Conversion
            </h3>
            <p className="text-slate-400 text-base sm:text-lg">
              Combining advanced AI agent chatbots with ultra-fast Next.js apps, mobile solutions, and enterprise SEO.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 pt-6">
              {['all', 'AI & Automation', 'SEO & Growth', 'Mobile', 'Web Development'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold transition capitalize ${
                    activeTab === tab 
                      ? 'bg-[#B1FF03] text-[#111111] shadow-lg shadow-[#B1FF03]/20' 
                      : 'bg-[#0a0f25] text-slate-300 hover:text-white border border-[#1e293b]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div 
                key={index}
                className="bg-[#0a0f25] border border-[#1e293b] hover:border-[#B1FF03] p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1 shadow-lg group flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-2xl bg-[#070b19] border border-[#1e293b] flex items-center justify-center text-[#B1FF03] group-hover:bg-[#B1FF03] group-hover:text-[#111111] transition-all duration-300 text-xl font-black">
                      ⚡
                    </div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#070b19] text-[#B1FF03] border border-[#1e293b]">
                      {service.badge}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-white">{service.title}</h4>
                    <p className="text-slate-400 text-sm mt-3 leading-relaxed">{service.description}</p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#1e293b] flex items-center justify-between">
                  <a 
                    href={`https://wa.me/919731720585?text=Hi%20Nexus%20Agency,%20I'm%20interested%20in%20${encodeURIComponent(service.title)}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold font-mono text-[#B1FF03] hover:underline flex items-center space-x-1.5 transition"
                  >
                    <span>Inquire via WhatsApp</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Timeline Process Section (Green & Black theme with Exact UI/UX Match) */}
      <section className="py-28 bg-[#070b19] border-t border-[#1e293b] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
            <h2 className="text-xs uppercase tracking-widest text-[#B1FF03] font-mono font-bold">Execution Roadmap</h2>
            <h3 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              How We Build Your Solution
            </h3>
          </div>

          <div className="relative">
            {/* Center Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-[#1e293b] hidden md:block"></div>

            <div className="space-y-20 relative">
              
              {/* Step 1 (Left Card, Dot on Right) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
                <div className="md:pr-12 md:text-right">
                  <div className="bg-[#0a0f25] border border-[#1e293b] p-8 rounded-3xl shadow-xl inline-block text-left relative">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#B1FF03] text-[#111111] flex items-center justify-center font-bold font-mono text-lg shadow-md">
                        1
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">Discovery & Strategy</h4>
                        <span className="text-xs font-mono font-bold text-[#B1FF03] uppercase tracking-wider">&lt;&gt; Phase 1</span>
                      </div>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      We start by deeply understanding your business processes, challenges, and goals to create a tailored implementation roadmap.
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex justify-start relative">
                  <div className="absolute -left-4 w-8 h-8 rounded-full bg-[#0a0f25] border-4 border-[#B1FF03] shadow-lg flex items-center justify-center z-10 animate-pulse">
                    <div className="w-2 h-2 rounded-full bg-[#B1FF03]"></div>
                  </div>
                </div>
              </div>

              {/* Step 2 (Right Card, Dot on Left) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
                <div className="hidden md:flex justify-end relative">
                  <div className="absolute -right-4 w-8 h-8 rounded-full bg-[#0a0f25] border-4 border-[#B1FF03] shadow-lg flex items-center justify-center z-10 animate-pulse">
                    <div className="w-2 h-2 rounded-full bg-[#B1FF03]"></div>
                  </div>
                </div>
                <div className="md:pl-12">
                  <div className="bg-[#0a0f25] border border-[#1e293b] p-8 rounded-3xl shadow-xl inline-block text-left relative">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#B1FF03] text-[#111111] flex items-center justify-center font-bold font-mono text-lg shadow-md">
                        2
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">Design & Configuration</h4>
                        <span className="text-xs font-mono font-bold text-[#B1FF03] uppercase tracking-wider">&lt;&gt; Phase 2</span>
                      </div>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Transform your requirements into a fully customized environment that matches your unique business workflows.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 (Left Card, Dot on Right) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
                <div className="md:pr-12 md:text-right">
                  <div className="bg-[#0a0f25] border border-[#1e293b] p-8 rounded-3xl shadow-xl inline-block text-left relative">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#B1FF03] text-[#111111] flex items-center justify-center font-bold font-mono text-lg shadow-md">
                        3
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">Development & Testing</h4>
                        <span className="text-xs font-mono font-bold text-[#B1FF03] uppercase tracking-wider">⚙️ Phase 3</span>
                      </div>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Rigorous development and testing phase ensuring every component works seamlessly before go-live.
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex justify-start relative">
                  <div className="absolute -left-4 w-8 h-8 rounded-full bg-[#0a0f25] border-4 border-[#B1FF03] shadow-lg flex items-center justify-center z-10 animate-pulse">
                    <div className="w-2 h-2 rounded-full bg-[#B1FF03]"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Contact & Booking Section */}
      <section id="contact" className="py-24 bg-[#050814] border-t border-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-[#0a0f25] border border-[#1e293b] px-4 py-1.5 rounded-full text-[#B1FF03] text-xs font-mono font-bold uppercase">
                <span>💬</span>
                <span>Get In Touch</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
                Let's Build Something Extraordinary Together
              </h2>

              <p className="text-slate-300 text-base leading-relaxed">
                Fill out the quick enquiry form or connect with us directly on WhatsApp. We respond within minutes to discuss your project requirements.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#0a0f25] border border-[#1e293b] text-[#B1FF03] flex items-center justify-center text-xl font-bold font-mono">📞</div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Call / WhatsApp Us</div>
                    <div className="text-lg font-bold text-white font-mono">+91 9731720585</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#0a0f25] border border-[#1e293b] text-[#B1FF03] flex items-center justify-center text-xl font-bold font-mono">✉️</div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Email Address</div>
                    <div className="text-lg font-bold text-white font-mono">arbhafeez2@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#0a0f25] border border-[#1e293b] text-[#B1FF03] flex items-center justify-center text-xl font-bold font-mono">🌐</div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Official Website</div>
                    <div className="text-lg font-bold text-white font-mono">nexusagency.co.in</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-6">
              <div className="bg-[#0a0f25] border border-[#1e293b] p-8 sm:p-10 rounded-3xl shadow-xl relative">
                <h3 className="text-2xl font-bold text-white mb-6">Send Project Enquiry</h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-mono">Your Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="John Doe" 
                      className="w-full bg-[#070b19] border border-[#1e293b] rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-[#B1FF03] transition"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-mono">Email Address</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="john@example.com" 
                        className="w-full bg-[#070b19] border border-[#1e293b] rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-[#B1FF03] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-mono">Phone Number</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+91 98765 43210" 
                        className="w-full bg-[#070b19] border border-[#1e293b] rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-[#B1FF03] transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-mono">Select Service</label>
                    <select 
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full bg-[#070b19] border border-[#1e293b] rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#B1FF03] transition font-sans"
                    >
                      <option>AI Agentic Chatbots</option>
                      <option>Enterprise SEO & Ranking</option>
                      <option>React Native Mobile App</option>
                      <option>Next.js Website Development</option>
                      <option>React.js Website Development</option>
                      <option>WordPress Web Development</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-mono">Project Details</label>
                    <textarea 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tell us about your project goals..."
                      className="w-full bg-[#070b19] border border-[#1e293b] rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-[#B1FF03] transition"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-[#B1FF03] hover:bg-[#9de000] text-[#111111] font-extrabold py-4 rounded-xl shadow-lg shadow-[#B1FF03]/20 transition flex items-center justify-center space-x-2 text-base"
                  >
                    <span>Submit & Enquire on WhatsApp (+91 9731720585)</span>
                    <span>↗</span>
                  </button>
                </form>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#03050c] border-t border-[#1e293b] py-12 text-slate-400 text-sm">
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
