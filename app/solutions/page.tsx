import Link from "next/link";

export default function SolutionsPage() {
  const solutions = [
    {
      title: "Autonomous AI Agent Workflows",
      description: "Deploy self-learning autonomous agents that execute complex multi-step business logic, customer support triage, and data analysis 24/7.",
      icon: "🤖",
      tags: ["LLM Orchestration", "LangChain", "Vector DBs"]
    },
    {
      title: "High-Frequency Web3 Infrastructure",
      description: "Enterprise-grade decentralized architectures, smart contract auditing, and real-time ledger synchronization engines.",
      icon: "⚡",
      tags: ["Solidity", "Rust", "Zero-Knowledge Proofs"]
    },
    {
      title: "Next-Gen Cloud & Microservices",
      description: "Scalable containerized microservices on Kubernetes with sub-millisecond edge routing and automated self-healing clusters.",
      icon: "☁️",
      tags: ["AWS", "Kubernetes", "Docker", "Terraform"]
    },
    {
      title: "Spatial Computing & Immersive UI",
      description: "Cutting-edge WebGL, Three.js, and spatial XR interfaces that transform standard web browsing into immersive brand experiences.",
      icon: "🔮",
      tags: ["Three.js", "WebGL", "React Three Fiber"]
    },
    {
      title: "Real-Time Biometric & IoT Sync",
      description: "Secure, low-latency data pipelines connecting IoT hardware sensors and wearable biometrics directly to enterprise clouds.",
      icon: "📡",
      tags: ["MQTT", "GraphQL", "WebSockets", "Go"]
    },
    {
      title: "Zero-Trust Cybersecurity Architecture",
      description: "Advanced anomaly detection systems and automated threat mitigation safeguarding enterprise assets against sophisticated vectors.",
      icon: "🛡️",
      tags: ["AI Threat Detection", "SOC2", "Encryption"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-gray-100 selection:bg-[#00ff66] selection:text-black">
      {/* Hero */}
      <section className="relative pt-24 pb-16 overflow-hidden border-b border-[#1a1a1a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,255,102,0.08),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a1a1a] border border-[#00ff66]/30 text-[#00ff66] text-xs font-semibold mb-6 shadow-[0_0_15px_rgba(0,255,102,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#00ff66] animate-pulse" />
            Cutting-Edge Enterprise Solutions
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6">
            Architecting The <span className="text-[#00ff66]">Digital Future</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-400 font-normal leading-relaxed">
            We deliver state-of-the-art technology solutions tailored to solve complex business bottlenecks and drive exponential growth.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-2xl p-8 bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#00ff66]/50 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-[0_0_30px_rgba(0,255,102,0.15)]"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-[#00ff66]/10 border border-[#00ff66]/30 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00ff66] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-[#141414] border border-[#222] text-gray-300 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-[#00ff66] transition-colors"
                >
                  Explore Solution &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0a0a0a] border-t border-[#1a1a1a] text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-6">
            Ready to Transform Your Stack?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Schedule an architectural discovery session with our senior engineers today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-base bg-[#00ff66] text-black hover:bg-[#00cc52] transition-all shadow-[0_0_25px_rgba(0,255,102,0.4)]"
          >
            Book Discovery Session &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
