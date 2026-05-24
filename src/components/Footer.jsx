import Link from "next/link";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  const sections = [
    { title: "Product", links: ["Job discovery", "Worker AI", "Companies", "Salary data"] },
    { title: "Navigations", links: ["Help center", "Career library", "Contact"] },
    { title: "Resources", links: ["Brand Guideline", "Newsroom"] },
  ];

  return (
    <footer className="bg-[#050505] text-white py-16 px-4 w-full">
      <div className="max-w-6xl mx-auto">
     
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Section - Takes 4 cols on desktop */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-tr from-pink-500 to-blue-500 rounded-lg" />
              <span className="font-bold text-xl">Hire<span className="text-gray-400">Loop</span></span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              The AI-native career platform. Built for people who take their work seriously.
            </p>
          </div>

          
          <div className="lg:col-span-8 flex flex-wrap justify-between gap-10">
            {sections.map((section) => (
              <div key={section.title} className="flex flex-col gap-4 min-w-[140px]">
                <h3 className="text-blue-500 font-medium">{section.title}</h3>
                <ul className="flex flex-col gap-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm block">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
          <div className="flex gap-4">
            {[FaFacebook, FaLinkedin, FaGithub].map((Icon, idx) => (
              <a key={idx} href="#" className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center hover:bg-gray-800 transition-all">
                <Icon size={20} />
              </a>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm text-gray-500 text-center">
            <p>© 2024 — Hire Loop</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition-colors">Terms</Link>
              <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}