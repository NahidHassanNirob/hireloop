"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full px-4 py-6 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Left: Brand */}
        <div className="">
          <Link href="/" className="flex items-center gap-2">
          <div  className="w-8 h-8 bg-gradient-to-tr from-pink-500 to-blue-500 rounded-lg" />
          <span className="text-white font-bold text-xl tracking-tight">
            Programming<span className="text-gray-400">Hero</span>
          </span></Link>
        </div>

        {/* Right */}
        <div className="hidden lg:flex items-center gap-6 bg-[#1a1a1a] px-6 py-2 rounded-2xl border border-white/10 shadow-lg">
          <Link href="/jobs" className="text-white text-sm hover:text-blue-400 transition-colors">Browse Jobs</Link>
          <Link href="/company" className="text-white text-sm hover:text-blue-400 transition-colors">Company</Link>
          <Link href="/pricing" className="text-white text-sm hover:text-blue-400 transition-colors">Pricing</Link>
          <div className="w-px h-4 bg-white/20" />
          <Link href="/sign-in" className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors">Sign In</Link>
          <Button 
            className="bg-white text-black font-semibold rounded-xl"
            size="sm"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 bg-[#1a1a1a] border border-white/10 p-6 rounded-2xl flex flex-col gap-4">
          <Link href="/jobs" className="text-white" onClick={() => setIsMenuOpen(false)}>Browse Jobs</Link>
          <Link href="/company" className="text-white" onClick={() => setIsMenuOpen(false)}>Company</Link>
          <Link href="/pricing" className="text-white" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
          <Link href="/sign-in" className="text-blue-400" onClick={() => setIsMenuOpen(false)}>Sign In</Link>
          <Button className="bg-white text-black w-full" onClick={() => setIsMenuOpen(false)}>Get Started</Button>
        </div>
      )}
    </nav>
  );
}