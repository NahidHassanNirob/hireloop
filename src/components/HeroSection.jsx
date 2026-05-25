import {
  Search,
  MapPin,
  Briefcase,
  Building2,
  Users,
  Star,
} from "lucide-react";
import bgImage from "@/images/globe.png";
import Image from "next/image";

export default function HeroSection() {
  const stats = [
    { icon: Briefcase, count: "50K", label: "Active Jobs" },
    { icon: Building2, count: "12K", label: "Companies" },
    { icon: Users, count: "2M", label: "Job Seekers" },
    { icon: Star, count: "97%", label: "Satisfaction Rate" },
  ];

  return (
   <div className="">
     <div className="relative w-full mx-auto bg-[#050505] overflow-hidden">
     
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={bgImage}
          alt="Globe Background"
          fill
          priority
          className="object-cover object-top opacity-50"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/10 to-[#050505]/80" />
      </div>

      
      <section className="relative z-10 w-full pt-24 pb-16 px-4 flex flex-col items-center text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 bg-[#1a1a1a] px-4 py-2 rounded-full border border-white/10 mb-8">
          <Briefcase className="text-orange-500" size={16} />
          <span className="text-white text-xs md:text-sm font-medium tracking-wide">
            50,000+ NEW JOBS THIS MONTH
          </span>
        </div>

        
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 max-w-3xl leading-[1.1]">
          Find Your Dream Job Today
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12">
          HireLoop connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role — faster.
        </p>

        
       <div className="w-full max-w-4xl bg-[#1a1a1a] p-2 rounded-2xl border border-white/10 flex flex-col md:flex-row items-center gap-2 shadow-2xl mb-24">
  {/* Job Title Input - flex-1 নিশ্চিত করে যে এটি অর্ধেক জায়গা নেবে */}
  <div className="flex-1 flex items-center gap-3 px-4 py-4 w-full border-b md:border-b-0 md:border-r border-white/10">
    <Search className="text-gray-500" size={20} />
    <input
      type="text"
      placeholder="Job title, skill or company"
      className="bg-transparent border-none outline-none text-white w-full placeholder-gray-600"
    />
  </div>

  {/* Location + Button Container */}
  <div className="flex flex-1 flex-col sm:flex-row w-full items-center gap-2">
    {/* Location Input - flex-1 দিলে এটি এবং ওপরের ইনপুটটি সমান চওড়া হবে */}
    <div className="flex-1 flex items-center gap-3 px-4 py-4 w-full">
      <MapPin className="text-gray-500" size={20} />
      <input
        type="text"
        placeholder="Location"
        className="bg-transparent border-none outline-none text-white w-full placeholder-gray-600"
      />
    </div>

    
    <button className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto px-8 py-4 rounded-xl md:rounded-full font-medium transition-all whitespace-nowrap">
      Search
    </button>
  </div>
</div>

        {/* Stats Section */}
        <div className="w-full max-w-6xl mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight mb-16">
            Assisting over{" "}
            <span className="text-blue-400">15,000 job seekers</span> find their
            dream positions.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a]/80 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <stat.icon className="text-gray-400 mb-6" size={24} />
                <h3 className="text-4xl font-bold text-white mb-2">
                  {stat.count}
                </h3>
                <p className="text-gray-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
   </div>
  );
}
