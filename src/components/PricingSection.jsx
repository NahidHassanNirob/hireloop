'use client'
import { Check, Zap, BarChart3, Crown } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

export default function PricingSection() {
  const [billing, setBilling] = useState("monthly");

  const plans = [
    {
      name: "Starter",
      price: "$0",
      icon: Crown,
      features: ["Daily AI match brief (top 5)", "Verified salary bands", "Company insight dashboards", "1-click apply, unlimited"],
    },
    {
      name: "Growth",
      price: "$17",
      icon: BarChart3,
      features: ["Daily AI match brief (top 5)", "Verified salary bands", "Company insight dashboards", "1-click apply, unlimited"],
      highlight: true,
    },
    {
      name: "Premium",
      price: "$99",
      icon: Zap,
      features: ["Everything in Pro", "Multi-profile career portfolios", "Shared talent rooms", "Recruiter view (read-only)"],
    },
  ];

  return (
    <section className="bg-[#050505] py-24 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-blue-500 font-semibold tracking-widest uppercase text-sm">Pricing</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">Pay for the leverage,<br/>not the listings</h2>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-16">
          <div className="bg-[#1a1a1a] p-1 rounded-full flex gap-1 border border-white/10">
            <button onClick={() => setBilling("monthly")} className={`px-6 py-2 rounded-full ${billing === "monthly" ? "bg-white text-black" : "text-gray-400"}`}>Monthly</button>
            <button onClick={() => setBilling("yearly")} className={`px-6 py-2 rounded-full flex items-center gap-2 ${billing === "yearly" ? "bg-white text-black" : "text-gray-400"}`}>
              Yearly <span className="bg-pink-500 text-white text-[10px] px-2 py-0.5 rounded-full">25%</span>
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.02 }} className={`p-8 rounded-3xl border ${plan.highlight ? "bg-[#1a1a1a] border-blue-500/50" : "bg-transparent border-white/20"}`}>
              <div className="flex justify-between items-start mb-6">
                <plan.icon size={24} className="text-gray-400" />
                <h3 className="text-xl font-semibold">{plan.name}</h3>
              </div>
              <div className="text-4xl font-bold mb-8">{plan.price}<span className="text-lg text-gray-500 font-normal">/month</span></div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                    <span className="bg-white/10 p-1 rounded"><Check size={12}/></span> {feat}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl ${plan.highlight ? "bg-white" : "bg-white/20 text-white"} text-black font-semibold hover:bg-gray-200 transition`}>Choose This Plan </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}