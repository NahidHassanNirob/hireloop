'use client'
import { motion } from "motion/react";
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

 
  const container = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    }
  };


  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="bg-[#050505] py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-semibold tracking-widest uppercase text-sm"
          >
            Features
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mt-4"
          >
            Everything you need to succeed
          </motion.h2>
        </div>
        
        <motion.div 
          variants={container} 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true, amount: 0.2 }} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feat, idx) => (
            <motion.div 
              variants={item} 
              key={idx} 
              whileHover={{ y: -8 }}
              className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 cursor-pointer"
            >
              <feat.icon className="text-blue-400 mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">{feat.title}</h3>
              <p className="text-gray-400 text-sm">{feat.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}