"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [activePortfolio, setActivePortfolio] = useState(0);
  const [activeServiceSlide, setActiveServiceSlide] = useState(0);
  const [activeTestimonialSlide, setActiveTestimonialSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Floating AI Assistant Chatbot Widget State
  const [chatOpen, setChatOpen] = useState(false);
  const [chatStep, setChatStep] = useState<'collect_name' | 'collect_email' | 'collect_requirements' | 'collect_details' | 'chatting'>('collect_name');
  const [leadData, setLeadData] = useState({ name: '', email: '', requirements: '', details: '' });
  const [chatMessages, setChatMessages] = useState([
    { sender: "bot", text: "Hello! Welcome to NexusAgency assistant. How can I help you today?" }
  ]);
  const [chatInput, setChatInput] = useState("");
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

  const services = [
    { title: "NEXT.JS DEVELOPMENT", subtitle: "Lightning-Fast Web Apps", description: "High-performance server-rendered React applications with optimal Core Web Vitals.", badge: "⚡" },
    { title: "WORDPRESS SOLUTIONS", subtitle: "Custom CMS & Headless API", description: "Custom WordPress themes, robust headless CMS architectures, and high-security plugins.", badge: "🌐" },
    { title: "REACT NATIVE APPS", subtitle: "Cross-Platform Mobile Apps", description: "Cross-platform iOS and Android mobile apps engineered for native 120Hz performance.", badge: "📱" },
    { title: "ENTERPRISE SEO", subtitle: "Organic Rank Dominance", description: "Data-driven SEO strategies and programmatic keyword dominance to maximize organic search revenue.", badge: "📈" },
    { title: "AI CHATBOTS", subtitle: "Conversational Intelligence", description: "Custom conversational AI chatbots trained on your business data to handle support 24/7.", badge: "🤖" },
    { title: "WEBSITE DEVELOPMENT", subtitle: "Full-Stack Custom Sites", description: "End-to-end custom website development featuring stunning UI/UX design and robust backends.", badge: "💻" },
    { title: "AI AGENTS", subtitle: "Autonomous Workflow Automation", description: "Autonomous multi-agent workflows and RAG pipelines that automate complex enterprise operations.", badge: "🧠" }
  ];

  const testimonials = [
    { title: "ANANYA SHARMA", subtitle: "Founder, Aradhya Fashion", description: "NexusAgency built our Aradhya luxury e-commerce platform in Next.js. Our conversion rate tripled in the first month.", badge: "💬" },
    { title: "VIKRAMADITYA ROY", subtitle: "CEO, Rudra Tourism", description: "Their WordPress and SEO expertise took Rudra Tourism to the #1 spot on Google for major travel keywords. Absolute elite talent.", badge: "⭐" },
    { title: "DR. JONATHAN VANCE", subtitle: "CTO, NexusScale Systems", description: "The React Native app and AI agents delivered by NexusAgency revolutionized our enterprise workflow efficiency.", badge: "🚀" }
  ];

  const faqs = [
    { q: "What technologies do you specialize in?", a: "We specialize exclusively in Next.js, WordPress, React Native, SEO, AI Chatbots, Website Development, and Autonomous AI Agents." },
    { q: "How long does a typical project take?", a: "Typical projects take between 3 to 8 weeks depending on complexity and scope." },
    { q: "Do you provide ongoing support and maintenance?", a: "Yes, we offer 24/7 autonomous monitoring, security updates, and continuous optimization." },
    { q: "What is your pricing model?", a: "We offer milestone-based fixed pricing and dedicated engineering retainers tailored to your project requirements." },
    { q: "How do we get started?", a: "Simply fill out our enquiry form below or chat with our AI assistant to book a discovery call with our lead engineers." }
  ];

  const handleChatSubmit = (text: string) => {
    if (!text.trim()) return;
    const newMessages = [...chatMessages, { sender: "user", text }];
    setChatMessages(newMessages);
    setChatInput("");

    setTimeout(() => {
      let nextBotMsg = "";
      let updatedLead = { ...leadData };

      if (chatStep === 'collect_name') {
        updatedLead.name = text;
        setLeadData(updatedLead);
        setChatStep('collect_email');
        nextBotMsg = `Thanks ${text}! What is your email address?`;
      } else if (chatStep === 'collect_email') {
        updatedLead.email = text;
        setLeadData(updatedLead);
        setChatStep('collect_requirements');
        nextBotMsg = "Great! Please describe your project requirements:";
      } else if (chatStep === 'collect_requirements') {
        updatedLead.requirements = text;
        setLeadData(updatedLead);
        setChatStep('collect_details');
        nextBotMsg = "Almost done! Any specific timeline, budget, or technical details?";
      } else if (chatStep === 'collect_details') {
        updatedLead.details = text;
        setLeadData(updatedLead);
        setChatStep('chatting');
        nextBotMsg = "Thank you! All your requirements have been captured and instantly dispatched to WhatsApp (+91 9731720585) & Email (arbhafeez2@gmail.com). How else can I assist you today?";

        // Dispatch WhatsApp & Email
        const textSummary = `💬 *CHATBOT LEAD - NEXUSAGENCY*\n\n👤 *Name:* ${updatedLead.name}\n📧 *Email:* ${updatedLead.email}\n📝 *Requirements:* ${updatedLead.requirements}\n🔍 *Details:* ${updatedLead.details}`;
        
        window.open(`https://api.whatsapp.com/send?phone=919731720585&text=${encodeURIComponent(textSummary)}`, "_blank");
        
        const mailLink = document.createElement('a');
        mailLink.href = `mailto:arbhafeez2@gmail.com?subject=${encodeURIComponent(`Chatbot Lead: ${updatedLead.name}`)}&body=${encodeURIComponent(textSummary)}`;
        document.body.appendChild(mailLink);
        mailLink.click();
        document.body.removeChild(mailLink);
      } else {
        nextBotMsg = "Our engineering team has received your message and will connect with you shortly!";
      }

      setChatMessages(prev => [...prev, { sender: "bot", text: nextBotMsg }]);
    }, 600);
  };

  const handleMainEnquirySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const service = String(formData.get("service") || "General Enquiry");
    const requirements = String(formData.get("requirements") || "");

    const text = `🔔 *NEW ENQUIRY - NEXUSAGENCY*\n\n👤 *Name:* ${name}\n📧 *Email:* ${email}\n⚙️ *Service:* ${service}\n📝 *Requirements:* ${requirements}`;

    window.open(`https://api.whatsapp.com/send?phone=919731720585&text=${encodeURIComponent(text)}`, "_blank");

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
            <Link href="/solutions" className="hover:text-[#ff6600] transition-colors">SOLUTIONS</Link>
            <Link href="#faq" className="hover:text-[#ff6600] transition-colors">FAQ</Link>
            <Link href="/contact" className="hover:text-[#ff6600] transition-colors">CONTACT US</Link>
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
      <section className="relative pt-44 pb-28 px-6 text-center max-w-5xl mx-auto">
        <div className="inline-block px-4 py-1.5 rounded-full bg-[#ff6600]/10 border border-[#ff6600]/30 text-[#ff6600] text-xs font-bold uppercase tracking-widest mb-6">
          Next.js &bull; WordPress &bull; React Native &bull; SEO &bull; AI Chatbots &bull; Website Dev &bull; AI Agents
        </div>
        <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[1.08] mb-6">
          The Premier Digital Agency for <span className="text-[#ff6600]">Elite Engineering</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          We specialize exclusively in Next.js web applications, WordPress solutions, React Native mobile apps, Enterprise SEO, AI Chatbots, Full-Stack Website Development, and Autonomous AI Agents.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="#enquiry"
            className="px-8 py-4 rounded-2xl font-bold text-sm bg-[#ff6600] text-white hover:bg-[#e65c00] transition-all shadow-xl"
          >
            Book Consultation &rarr;
          </Link>
          <Link
            href="/services"
            className="px-8 py-4 rounded-2xl font-bold text-sm bg-white border border-[#1a1a1a]/10 hover:border-[#ff6600] transition-all shadow-sm"
          >
            Explore Services
          </Link>
        </div>
      </section>

      {/* Markitup Style Portfolio Slider Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full border-t border-[#1a1a1a]/10">
        <div className="text-center mb-12">
          <h2 className="text-xs uppercase font-bold tracking-widest text-gray-500 mb-2">// FEATURED PORTFOLIO SLIDER</h2>
          <h3 className="text-3xl sm:text-4xl font-black">Our Top 3 Flagship Projects</h3>
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
                  href="/portfolio"
                  className="text-xs font-bold uppercase tracking-wider text-black hover:underline"
                >
                  View Case Study &rarr;
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

      {/* Markitup Style Services Slider Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full border-t border-[#1a1a1a]/10">
        <div className="text-center mb-12">
          <h2 className="text-xs uppercase font-bold tracking-widest text-gray-500 mb-2">// OUR CAPABILITIES SLIDER</h2>
          <h3 className="text-3xl sm:text-4xl font-black">Swipe Through Our Core Services</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            services[activeServiceSlide],
            services[(activeServiceSlide + 1) % services.length],
            services[(activeServiceSlide + 2) % services.length],
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[32px] p-8 border border-[#1a1a1a]/10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] flex flex-col justify-between relative transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] min-h-[380px]"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-black tracking-tight text-[#1a1a1a]">{item.title}</h3>
                  <span className="text-2xl">{item.badge}</span>
                </div>
                <h4 className="text-lg font-bold text-[#1a1a1a] mb-4">{item.subtitle}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
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
                  href="/services"
                  className="text-xs font-bold uppercase tracking-wider text-black hover:underline"
                >
                  Learn More &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Connected Pagination Bar */}
        <div className="flex items-center justify-center gap-3">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveServiceSlide(index)}
              className={`w-4 h-4 rounded-full border-2 border-[#1a1a1a] transition-all flex items-center justify-center ${
                activeServiceSlide === index ? "bg-[#1a1a1a]" : "bg-transparent"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {activeServiceSlide === index && <span className="w-1.5 h-1.5 rounded-full bg-[#f5f2eb]" />}
            </button>
          ))}
        </div>
      </section>

      {/* Markitup Style Testimonials Slider Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full border-t border-[#1a1a1a]/10">
        <div className="text-center mb-12">
          <h2 className="text-xs uppercase font-bold tracking-widest text-gray-500 mb-2">// TESTIMONIALS SLIDER</h2>
          <h3 className="text-3xl sm:text-4xl font-black">Trusted by Industry Leaders</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            testimonials[activeTestimonialSlide],
            testimonials[(activeTestimonialSlide + 1) % testimonials.length],
            testimonials[(activeTestimonialSlide + 2) % testimonials.length],
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[32px] p-8 border border-[#1a1a1a]/10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] flex flex-col justify-between relative transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] min-h-[380px]"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-black tracking-tight text-[#1a1a1a]">{item.title}</h3>
                  <span className="text-2xl">{item.badge}</span>
                </div>
                <h4 className="text-sm font-bold text-[#ff6600] uppercase mb-4">{item.subtitle}</h4>
                <p className="text-gray-600 text-sm leading-relaxed italic">"{item.description}"</p>
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
                <span className="text-xs font-bold uppercase tracking-wider text-black">Verified Client</span>
              </div>
            </div>
          ))}
        </div>

        {/* Connected Pagination Bar */}
        <div className="flex items-center justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonialSlide(index)}
              className={`w-4 h-4 rounded-full border-2 border-[#1a1a1a] transition-all flex items-center justify-center ${
                activeTestimonialSlide === index ? "bg-[#1a1a1a]" : "bg-transparent"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {activeTestimonialSlide === index && <span className="w-1.5 h-1.5 rounded-full bg-[#f5f2eb]" />}
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

      {/* Enquiry Form Section */}
    

      {/* Floating AI Chatbot Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {!chatOpen ? (
          <button
            onClick={() => setChatOpen(true)}
            className="w-14 h-14 rounded-full bg-[#ff6600] text-white flex items-center justify-center shadow-[0_4px_25px_rgba(255,102,0,0.4)] hover:scale-105 transition-all text-2xl"
            aria-label="Open AI Assistant"
          >
            💬
          </button>
        ) : (
          <div className="w-[360px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col">
            <div className="bg-[#ff6600] text-white p-4 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-sm">NexusAgency Assistant</h4>
                <div className="text-[10px] text-white/80 flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" /> Online &bull; Ready to help
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => setChatOpen(false)} className="text-white hover:opacity-80 text-sm font-bold px-1">&#8722;</button>
                <button onClick={() => setChatOpen(false)} className="text-white hover:opacity-80 text-sm font-bold px-1">&#10005;</button>
              </div>
            </div>

            <div className="p-4 h-72 overflow-y-auto space-y-3 bg-[#faf8f5] text-xs">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`p-3 rounded-xl max-w-[85%] ${msg.sender === "user" ? "bg-[#ff6600] text-white rounded-br-none" : "bg-white text-gray-800 border border-gray-200 rounded-bl-none shadow-sm"}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 bg-white border-t border-gray-200 flex items-center gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleChatSubmit(chatInput)}
                placeholder={
                  chatStep === 'collect_name' ? "Enter your name..." :
                  chatStep === 'collect_email' ? "Enter your email..." :
                  chatStep === 'collect_requirements' ? "Enter requirements..." :
                  chatStep === 'collect_details' ? "Enter project details..." :
                  "Type your message..."
                }
                className="flex-1 bg-gray-100 border border-gray-200 rounded-xl px-3 py-2 text-xs text-gray-800 focus:outline-none focus:border-[#ff6600]"
              />
              <button
                onClick={() => handleChatSubmit(chatInput)}
                className="w-9 h-9 rounded-xl bg-[#ff6600] text-white flex items-center justify-center hover:bg-[#e65c00] transition-all"
              >
                &#10148;
              </button>
            </div>
          </div>
        )}
      </div>

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
              <li><Link href="/services" className="hover:text-white transition-colors">AI Chatbot Development</Link></li>
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
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
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
