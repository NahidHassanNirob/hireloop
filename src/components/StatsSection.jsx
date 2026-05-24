import { Briefcase, Building2, Users, Star } from "lucide-react";
import bgImage from '@/images/globe.png'
import Image from "next/image";

export default function StatsSection() {
  const stats = [
    { icon: Briefcase, count: "50K", label: "Active Jobs" },
    { icon: Building2, count: "12K", label: "Companies" },
    { icon: Users, count: "2M", label: "Job Seekers" },
    { icon: Star, count: "97%", label: "Satisfaction Rate" },
  ];

  return (
    <section className="relative px-4 py-24 bg-[#050505] overflow-hidden">
      
      {/* Background Globe Container: inset-0 দিয়ে পুরো সেকশন জুড়ে রাখা হয়েছে */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src={bgImage} 
          alt="Globe Background" 
          fill
          className="object-contain object-top opacity-60" 
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto ">
        {/* Header Text */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight">
            Assisting over <span className="text-blue-400">15,000 job seekers</span> find their dream positions.
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-[#1a1a1a] p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all duration-300"
            >
              <stat.icon className="text-gray-400 mb-6" size={24} />
              <h3 className="text-4xl font-bold text-white mb-2">{stat.count}</h3>
              <p className="text-gray-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}