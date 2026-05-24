import { Search, BarChart3, Building2, Bookmark, MousePointerClick, FileText, Target, TrendingUp } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    { icon: Search, title: "Smart Search", desc: "Find your ideal job with advanced filters." },
    { icon: BarChart3, title: "Salary Insights", desc: "Get real salary data to negotiate confidently." },
    { icon: Building2, title: "Top Companies", desc: "Apply to vetted companies that are hiring." },
    { icon: Bookmark, title: "Saved Jobs", desc: "Manage apps & favorites on your dashboard." },
    { icon: MousePointerClick, title: "One-Click Apply", desc: "Simplify your job applications for an easier process!" },
    { icon: FileText, title: "Resume Builder", desc: "Create professional resumes with modern templates." },
    { icon: Target, title: "Skill-Based Matching", desc: "Discover jobs that match your skills." },
    { icon: TrendingUp, title: "Career Growth", desc: "Boost your career with quick interview tips." },
  ];

  return (
    <section className="bg-[#050505] py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-5xl font-bold text-white mb-16">Everything you need to succeed</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <div key={idx} className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all">
              <item.icon className="text-blue-400 mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}