import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import ChatbotWidget from "./components/ChatbotWidget";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NexusAgency | Next.js, WordPress, React Native & SEO Experts",
  description: "Specialized digital agency focusing exclusively on Next.js, WordPress, React Native, SEO, AI Chatbots, Website Development, and AI Agents.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f5f2eb] text-[#1a1a1a] selection:bg-[#ff6600] selection:text-white">
        {/* Navigation Bar */}
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#f5f2eb]/90 border-b border-[#1a1a1a]/10">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="w-3 h-3 rounded-full bg-[#ff6600]" />
              <span className="text-xl font-black tracking-tight uppercase">
                NEXUSAGENCY
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8 font-bold text-sm tracking-wide">
              <Link href="/" className="hover:text-[#ff6600] transition-colors">
                Home
              </Link>
              <Link href="/services" className="hover:text-[#ff6600] transition-colors">
                Services
              </Link>
              <Link href="/portfolio" className="hover:text-[#ff6600] transition-colors">
                Portfolio
              </Link>
              <Link href="/blog" className="hover:text-[#ff6600] transition-colors">
                Blog
              </Link>
              <Link href="/faq" className="hover:text-[#ff6600] transition-colors">
                FAQ
              </Link>
              <Link href="/contact" className="hover:text-[#ff6600] transition-colors">
                Contact
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-full font-bold text-xs bg-[#ff6600] text-white hover:bg-[#e65c00] transition-all shadow-md"
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 pt-20">{children}</main>

        {/* Global AI Chatbot Widget */}
        <ChatbotWidget />
      </body>
    </html>
  );
}
