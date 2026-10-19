import Link from "next/link";

export default function AiMobilePage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white py-20 px-4 sm:px-6 lg:px-8 selection:bg-[#00ff66] selection:text-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#121212] border border-[#00ff66]/30 text-[#00ff66] text-xs font-semibold mb-6 uppercase tracking-widest shadow-[0_0_20px_rgba(0,255,102,0.15)] font-mono">
            // INNOVATENEX TECH SUITE
          </div>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-6">
            AI Agents & <span className="text-[#00ff66] drop-shadow-[0_0_35px_rgba(0,255,102,0.4)]">Mobile Solutions</span>
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl leading-relaxed">
            Harnessing state-of-the-art machine learning architectures and building ultra-responsive cross-platform mobile apps that captivate users worldwide.
          </p>
        </div>

        {/* AI Agents Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#00ff66]/10 border border-[#00ff66]/30 text-[#00ff66] text-xs font-bold uppercase tracking-wider font-mono">
              // ARTIFICIAL INTELLIGENCE DIVISION
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Autonomous AI Agents & Enterprise LLMs
            </h2>
            <p className="text-gray-400 text-base leading-relaxed">
              We engineer custom cognitive architectures that integrate seamlessly into your existing workflows. From customer-facing autonomous support agents to internal RAG data synthesizers, our AI solutions operate 24/7 with zero human latency.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#00ff66]/20 text-[#00ff66] flex items-center justify-center font-bold text-xs mt-1 shrink-0">✓</div>
                <div>
                  <h4 className="font-bold text-white mb-1">Proprietary RAG Pipelines</h4>
                  <p className="text-gray-400 text-xs">Connect your enterprise knowledge base securely to state-of-the-art LLMs with zero hallucination.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#00ff66]/20 text-[#00ff66] flex items-center justify-center font-bold text-xs mt-1 shrink-0">✓</div>
                <div>
                  <h4 className="font-bold text-white mb-1">Multi-Agent Orchestration</h4>
                  <p className="text-gray-400 text-xs">Deploy teams of specialized AI agents that collaborate to solve complex business operations.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#00ff66]/20 text-[#00ff66] flex items-center justify-center font-bold text-xs mt-1 shrink-0">✓</div>
                <div>
                  <h4 className="font-bold text-white mb-1">Secure Enterprise Deployment</h4>
                  <p className="text-gray-400 text-xs">SOC2 compliant on-premise or cloud model hosting ensuring absolute data privacy.</p>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-sm bg-[#00ff66] text-black hover:bg-[#00cc52] transition-all shadow-[0_0_25px_rgba(0,255,102,0.4)]"
              >
                Deploy AI Agents &rarr;
              </Link>
            </div>
          </div>

          <div className="bg-[#0c0c0c] border border-[#1a1a1a] rounded-3xl p-8 sm:p-10 shadow-[0_0_50px_rgba(0,255,102,0.1)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00ff66]/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="font-mono text-xs text-[#00ff66] mb-6">// INNOVATENEX_AI_RUNTIME.log</div>
            <div className="space-y-4 font-mono text-xs text-gray-300 bg-[#050505] p-6 rounded-2xl border border-[#1a1a1a]">
              <p className="text-[#00ff66]">&gt; Initializing neural weights and embedding models...</p>
              <p>&gt; Connecting to vector database (Pinecone/Milvus)... OK</p>
              <p>&gt; Loading LLM weights (GPT-4o / Claude 3.5 Sonnet)... OK</p>
              <p className="text-[#00ff66]">&gt; Autonomous agent swarm active and listening for requests.</p>
              <div className="pt-4 border-t border-[#1a1a1a] text-gray-500">
                System Status: 99.99% Uptime | Avg Latency: 38ms
              </div>
            </div>
          </div>
        </div>

        {/* Cross-Platform Mobile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 bg-[#0c0c0c] border border-[#1a1a1a] rounded-3xl p-8 sm:p-10 shadow-[0_0_50px_rgba(0,255,102,0.1)] relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00ff66]/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="font-mono text-xs text-[#00ff66] mb-6">// MOBILE_APP_METRICS.json</div>
            <div className="space-y-4 font-mono text-xs text-gray-300 bg-[#050505] p-6 rounded-2xl border border-[#1a1a1a]">
              <div className="flex justify-between items-center border-b border-[#1a1a1a] pb-3">
                <span className="text-gray-500">Framework:</span>
                <span className="text-[#00ff66]">React Native / Flutter</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#1a1a1a] pb-3">
                <span className="text-gray-500">Target Frame Rate:</span>
                <span className="text-white">120 FPS Locked</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#1a1a1a] pb-3">
                <span className="text-gray-500">App Store Rating:</span>
                <span className="text-[#00ff66]">4.9 / 5.0</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Crash-Free Users:</span>
                <span className="text-white">99.98%</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#00ff66]/10 border border-[#00ff66]/30 text-[#00ff66] text-xs font-bold uppercase tracking-wider font-mono">
              // MOBILE ENGINEERING DIVISION
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              High-Performance Cross-Platform Mobile Apps
            </h2>
            <p className="text-gray-400 text-base leading-relaxed">
              We engineer polished, responsive mobile applications that combine native performance with breathtaking cyberpunk UI/UX design. Every animation is meticulously tuned for 120Hz displays.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#00ff66]/20 text-[#00ff66] flex items-center justify-center font-bold text-xs mt-1 shrink-0">✓</div>
                <div>
                  <h4 className="font-bold text-white mb-1">Unified Codebase</h4>
                  <p className="text-gray-400 text-xs">Write once with React Native or Flutter, deploy natively to both iOS and Android app stores.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#00ff66]/20 text-[#00ff66] flex items-center justify-center font-bold text-xs mt-1 shrink-0">✓</div>
                <div>
                  <h4 className="font-bold text-white mb-1">Offline-First Architecture</h4>
                  <p className="text-gray-400 text-xs">Robust local database synchronization ensuring full app functionality without internet connectivity.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#00ff66]/20 text-[#00ff66] flex items-center justify-center font-bold text-xs mt-1 shrink-0">✓</div>
                <div>
                  <h4 className="font-bold text-white mb-1">Enterprise Security</h4>
                  <p className="text-gray-400 text-xs">Biometric authentication, secure keychain storage, and end-to-end encrypted API requests.</p>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-sm bg-[#00ff66] text-black hover:bg-[#00cc52] transition-all shadow-[0_0_25px_rgba(0,255,102,0.4)]"
              >
                Build Mobile App &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
