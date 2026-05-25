"use client";

import { useState } from "react";
import { Button, Skeleton } from "@heroui/react"; // HeroUI Skeleton ইমপোর্ট
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            toast.success("Signed out successfully!");
            router.push('/auth/sign-in');
            router.refresh();
          },
          onError: (ctx) => {
            toast.error(ctx.error.message || "Failed to sign out");
          }
        }
      });
    } catch (err) {
      toast.error("An error occurred during sign out");
    }
  };

  return (
    <nav className="w-full px-4 py-6 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-pink-500 to-blue-500 rounded-lg" />
          <span className="text-white font-bold text-xl tracking-tight">Hire<span className="text-gray-400">Loop</span></span>
        </Link>

        {/* Desktop Right */}
        <div className="hidden lg:flex items-center gap-6 bg-[#1a1a1a] px-6 py-2 rounded-2xl border border-white/10 shadow-lg">
          <Link href="/jobs" className="text-white text-sm hover:text-blue-400 transition-colors">Browse Jobs</Link>
          <Link href="/company" className="text-white text-sm hover:text-blue-400 transition-colors">Company</Link>
          <Link href="/pricing" className="text-white text-sm hover:text-blue-400 transition-colors">Pricing</Link>
          <div className="w-px h-4 bg-white/20" />

          {/* Authentication Section with Skeleton */}
          {isPending ? (
            <div className="flex items-center gap-4">
              <Skeleton className="h-8 w-20 rounded-xl" />
              <Skeleton className="h-8 w-24 rounded-xl" />
            </div>
          ) : (
            <>
              {user ? (
                <Button onClick={handleSignOut} variant="light" className="text-red-400 text-sm">Sign Out</Button>
              ) : (
                <Link href="/auth/sign-in" className="text-blue-400 text-sm font-medium hover:text-blue-300">Sign In</Link>
              )}
              <Button className="bg-white text-black font-semibold rounded-xl" size="sm">Get Started</Button>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 bg-[#1a1a1a] border border-white/10 p-6 rounded-2xl flex flex-col gap-4">
          <Link href="/jobs" onClick={() => setIsMenuOpen(false)} className="text-white">Browse Jobs</Link>
          {isPending ? (
            <Skeleton className="h-10 w-full rounded-xl" />
          ) : user ? (
            <Button onClick={handleSignOut} className="bg-red-500/10 text-red-400 w-full">Sign Out</Button>
          ) : (
            <Link href="/auth/sign-in" onClick={() => setIsMenuOpen(false)} className="text-blue-400">Sign In</Link>
          )}
        </div>
      )}
    </nav>
  );
}