import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a1a1a]/80 border border-[#00ff66]/30 text-[#00ff66] text-xs font-semibold mb-6 uppercase tracking-wide shadow-[0_0_20px_rgba(0,255,102,0.15)]">
            About InnovateNex
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
            Engineering the <span className="text-[#00ff66] drop-shadow-[0_0_30px_rgba(0,255,102,0.4)]">Digital Future</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            We are a collective of elite software engineers, AI researchers, and cyberpunk designers dedicated to building category-defining digital solutions.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
          <div className="bg-[#0c0c0c] border border-[#1a1a1a] hover:border-[#00ff66]/40 rounded-3xl p-10 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#00ff66]/10 border border-[#00ff66]/30 flex items-center justify-center text-[#00ff66] font-bold text-xl mb-6">
              01
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              To empower ambitious enterprises with artificial intelligence and high-performance engineering that scales effortlessly, reduces friction, and creates undeniable competitive advantage.
            </p>
          </div>

          <div className="bg-[#0c0c0c] border border-[#1a1a1a] hover:border-[#00ff66]/40 rounded-3xl p-10 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#00ff66]/10 border border-[#00ff66]/30 flex items-center justify-center text-[#00ff66] font-bold text-xl mb-6">
              02
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              To be the premier global innovation partner for next-generation tech ecosystems, where autonomous AI systems and human ingenuity unite to solve complex industrial challenges.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs uppercase font-bold text-[#00ff66] tracking-widest mb-3">Core Principles</h2>
            <h3 className="text-3xl font-extrabold">What Drives Our Engineering</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0c0c0c] border border-[#1a1a1a] p-8 rounded-2xl">
              <div className="text-[#00ff66] font-mono text-xs mb-2">01 / SPEED</div>
              <h4 className="text-xl font-bold mb-3">Relentless Velocity</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                We believe speed is a feature. From architecture to deployment, we move with extreme agility without sacrificing quality.
              </p>
            </div>

            <div className="bg-[#0c0c0c] border border-[#1a1a1a] p-8 rounded-2xl">
              <div className="text-[#00ff66] font-mono text-xs mb-2">02 / PRECISION</div>
              <h4 className="text-xl font-bold mb-3">Uncompromising Quality</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Every line of code is written with rigorous attention to detail, security, and scalability.
              </p>
            </div>

            <div className="bg-[#0c0c0c] border border-[#1a1a1a] p-8 rounded-2xl">
              <div className="text-[#00ff66] font-mono text-xs mb-2">03 / MASTERY</div>
              <h4 className="text-xl font-bold mb-3">AI-First Approach</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                We leverage state-of-the-art AI tooling and agentic workflows to multiply engineering output and user engagement.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#0c0c0c] border border-[#1a1a1a] rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-black mb-4">Want to Work with Our Elite Team?</h3>
          <p className="text-gray-400 max-w-xl mx-auto mb-8 text-sm">
            Let's discuss how InnovateNex can accelerate your technological roadmap.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-bold text-sm bg-[#00ff66] text-black hover:bg-[#00cc52] transition-all shadow-[0_0_25px_rgba(0,255,102,0.4)]"
          >
            Get in Touch &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
