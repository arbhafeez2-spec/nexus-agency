import Link from "next/link";

export default function CareersPage() {
  const jobs = [
    {
      title: "Senior AI & LLM Systems Engineer",
      department: "Artificial Intelligence",
      location: "Remote (Global) / San Francisco",
      type: "Full-Time",
      description: "Build autonomous multi-agent systems, fine-tune frontier open-source LLMs, and architect high-scale RAG pipelines for enterprise clients."
    },
    {
      title: "Lead Full-Stack & Next.js Architect",
      department: "Engineering",
      location: "Remote (Global)",
      type: "Full-Time",
      description: "Spearhead high-performance web application development using Next.js 15, React Server Components, TailwindCSS, and serverless edge functions."
    },
    {
      title: "Senior React Native / Mobile Lead",
      department: "Mobile Development",
      location: "Remote (Global) / New York",
      type: "Full-Time",
      description: "Architect and ship buttery-smooth cross-platform mobile applications integrating complex AI features, real-time WebSockets, and secure device storage."
    },
    {
      title: "Cloud & DevOps Reliability Engineer",
      department: "Infrastructure",
      location: "Remote (Global)",
      type: "Full-Time",
      description: "Manage multi-region Kubernetes clusters, automated CI/CD pipelines, zero-trust cloud security protocols, and high-availability AWS architectures."
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-gray-100 selection:bg-[#00ff66] selection:text-black">
      {/* Hero */}
      <section className="relative pt-24 pb-16 overflow-hidden border-b border-[#1a1a1a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(0,255,102,0.08),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a1a1a] border border-[#00ff66]/30 text-[#00ff66] text-xs font-semibold mb-6 shadow-[0_0_15px_rgba(0,255,102,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#00ff66] animate-pulse" />
            Join The Elite Engineering Squad
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6">
            Build The Future <span className="text-[#00ff66]">With Us</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-400 font-normal leading-relaxed">
            We are always looking for exceptional engineers, AI researchers, and digital architects who thrive at the absolute frontier of technology.
          </p>
        </div>
      </section>

      {/* Openings */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#0a0a0a] border border-[#1a1a1a] p-8 hover:border-[#00ff66]/50 transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-lg"
            >
              <div className="space-y-3 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-md bg-[#00ff66]/10 border border-[#00ff66]/30 text-[#00ff66] text-xs font-semibold">
                    {job.department}
                  </span>
                  <span className="text-xs font-mono text-gray-400">{job.location}</span>
                  <span className="text-xs font-mono text-gray-400">• {job.type}</span>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#00ff66] transition-colors">
                  {job.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
                  {job.description}
                </p>
              </div>

              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-[#141414] border border-[#2a2a2a] text-white font-bold text-sm hover:bg-[#00ff66] hover:text-black hover:border-[#00ff66] transition-all whitespace-nowrap shadow-md"
              >
                Apply Now &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0a0a0a] border-t border-[#1a1a1a] text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-white mb-6">Don't See Your Exact Role?</h2>
          <p className="text-gray-400 text-lg mb-8">
            If you are an elite talent in AI, systems, or design, drop us your resume and GitHub profile anyway. We always make room for brilliance.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-base bg-[#00ff66] text-black hover:bg-[#00cc52] transition-all shadow-[0_0_25px_rgba(0,255,102,0.4)]"
          >
            Send Open Application &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
