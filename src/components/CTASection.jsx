import Image from "next/image";
import ctaBg from "@/images/cta-bg.png"; // আপনার গ্রিড ইমেজ

export default function CTASection() {
  return (
    <section className="relative w-full px-4 overflow-hidden bg-[#050505] py-20 md:py-28">
      {/* Background Container */}
      <div className="absolute inset-0 z-0">
        {/* গ্র্যাডিয়েন্ট গ্লো: মোবাইলে ছোট এবং ডেস্কটপে বড় */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px]  md:h-[300px] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.4),transparent_80%)] blur-3xl" />
        
        {/* ইমেজ কন্টেইনার: সব ডিভাইসে রেসপনসিভ হাইট */}
        <div className="relative w-full h-[300px] md:h-[500px]">
          <Image
            src={ctaBg}
            alt="Background Grid"
            fill
            priority
            className="object-contain object-top opacity-80"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center  text-center">
        <h2 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-white">
          Your next role is
          <br />
          already looking for you
        </h2>

        <p className="mt-6 max-w-2xl text-base md:text-lg text-gray-400">
          Build a profile in three minutes. The matches start
          arriving tomorrow morning.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button className="rounded-xl bg-white px-7 py-4 text-sm font-medium text-black transition hover:bg-gray-200">
            Create a free account
          </button>

          <button className="rounded-xl border border-white/10 bg-white/5 px-7 py-4 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/10">
            View pricing
          </button>
        </div>
      </div>
    </section>
  );
}