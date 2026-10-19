import Link from "next/link";

export default function FAQPage() {
  const faqs = [
    {
      question: "What types of AI and machine learning solutions do you build?",
      answer: "We specialize in autonomous multi-agent AI workflows, custom LLM fine-tuning and deployment, Retrieval-Augmented Generation (RAG) pipelines, and real-time AI computer vision integrations tailored for enterprise applications."
    },
    {
      question: "How long does a typical project take from kickoff to production?",
      answer: "Timelines depend on scope. Proof of Concept (PoC) and MVP builds typically take 2 to 4 weeks, while comprehensive enterprise-scale applications and multi-platform solutions generally range from 8 to 16 weeks."
    },
    {
      question: "Do you offer post-launch maintenance and continuous support?",
      answer: "Yes. All our engagement tiers include dedicated post-launch support SLAs, performance monitoring, security patches, and continuous feature expansion options through our dedicated engineering squads."
    },
    {
      question: "What is your technology stack for web and mobile development?",
      answer: "We leverage industry-leading modern stacks including Next.js, React, React Native, TypeScript, Python (PyTorch/TensorFlow), Go, Rust, AWS, Kubernetes, and secure decentralized cloud architectures."
    },
    {
      question: "How do we get started working with InnovateNex?",
      answer: "Simply reach out via our contact page to schedule a discovery consultation with our senior engineering architects. We will analyze your requirements, review technical feasibility, and propose an optimized roadmap."
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-gray-100 selection:bg-[#00ff66] selection:text-black">
      {/* Hero */}
      <section className="relative pt-24 pb-16 overflow-hidden border-b border-[#1a1a1a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,102,0.08),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a1a1a] border border-[#00ff66]/30 text-[#00ff66] text-xs font-semibold mb-6 shadow-[0_0_15px_rgba(0,255,102,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#00ff66] animate-pulse" />
            Frequently Asked Questions
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6">
            Everything You Need To <span className="text-[#00ff66]">Know</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-400 font-normal leading-relaxed">
            Got questions about our engineering process, AI capabilities, or engagement models? Find clear answers below.
          </p>
        </div>
      </section>

      {/* FAQ Accordion List */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#0a0a0a] border border-[#1a1a1a] p-8 hover:border-[#00ff66]/40 transition-all duration-300 shadow-lg"
            >
              <h3 className="text-xl font-bold text-white mb-3 flex items-start gap-4">
                <span className="text-[#00ff66] font-mono text-sm mt-1">0{idx + 1}.</span>
                <span>{faq.question}</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed pl-7">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0a0a0a] border-t border-[#1a1a1a] text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-white mb-6">Still Have Questions?</h2>
          <p className="text-gray-400 text-lg mb-8">
            Our technical architects are ready to answer any specific inquiries regarding your enterprise architecture.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-base bg-[#00ff66] text-black hover:bg-[#00cc52] transition-all shadow-[0_0_25px_rgba(0,255,102,0.4)]"
          >
            Speak With Our Team &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
