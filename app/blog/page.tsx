import Link from "next/link";

export default function BlogPage() {
  const articles = [
    {
      title: "The Rise of Autonomous Multi-Agent Systems in Enterprise Software",
      excerpt: "How large language models are evolving from chat interfaces into autonomous workers capable of managing complete backend pipelines.",
      date: "October 18, 2026",
      readTime: "6 min read",
      category: "Artificial Intelligence",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Optimizing Next.js App Router for Sub-100ms Global Edge Delivery",
      excerpt: "Advanced caching strategies, server components optimization, and global CDN tuning for lightning-fast user experiences.",
      date: "October 12, 2026",
      readTime: "8 min read",
      category: "Web Engineering",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Zero-Trust Cloud Security in the Era of Quantum-Resistant Encryption",
      excerpt: "Preparing enterprise cloud infrastructure for upcoming cryptographic shifts with automated anomaly detection.",
      date: "October 05, 2026",
      readTime: "5 min read",
      category: "Cybersecurity",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Building Cross-Platform Mobile Apps with Native Performance",
      excerpt: "Leveraging React Native architecture and custom native modules to achieve buttery 60 FPS animations and deep hardware access.",
      date: "September 28, 2026",
      readTime: "7 min read",
      category: "Mobile Development",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-gray-100 selection:bg-[#00ff66] selection:text-black">
      {/* Hero */}
      <section className="relative pt-24 pb-16 overflow-hidden border-b border-[#1a1a1a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,255,102,0.08),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a1a1a] border border-[#00ff66]/30 text-[#00ff66] text-xs font-semibold mb-6 shadow-[0_0_15px_rgba(0,255,102,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#00ff66] animate-pulse" />
            Insights & Engineering Thought Leadership
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6">
            The InnovateNex <span className="text-[#00ff66]">Journal</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-400 font-normal leading-relaxed">
            Deep dives into artificial intelligence engineering, cloud architecture, and high-performance software development.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="group rounded-2xl bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#00ff66]/50 transition-all duration-300 overflow-hidden flex flex-col shadow-lg hover:shadow-[0_0_30px_rgba(0,255,102,0.15)]"
            >
              <div className="relative h-60 overflow-hidden bg-gray-900">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-md bg-black/70 backdrop-blur-md border border-[#00ff66]/30 text-[#00ff66] text-xs font-semibold">
                  {article.category}
                </span>
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs font-mono text-gray-400 mb-3">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00ff66] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-[#00ff66] transition-colors"
                >
                  Read Full Article &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
