"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client"; // আপনার কনফিগারেশন পাথ অনুযায়ী পরিবর্তন করুন
import { toast } from "sonner";
import Link from "next/link";
import { Mail, Lock, User, ArrowRight, Eye, EyeOff, UserPlus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SignUp() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router =useRouter()

  const handleSignUp = async () => {
    
    if (!formData.name || !formData.email || !formData.password) {
      return toast.error("Please fill in all fields");
    }

    setLoading(true);
    const { error } = await authClient.signUp.email({
      email: formData.email,
      password: formData.password,
      name: formData.name,
    },{
        onSuccess:()=>{
            setFormData({ name: "", email: "", password: "" });
            authClient.signOut()
            router.push('/auth/sign-in')
            router.refresh()
        }
    });

    setLoading(false);

    if (error) {
      toast.error(error.message || "Something went wrong during sign up");
    } else {
      toast.success("Account created successfully! Welcome aboard.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050505] px-6 py-12">
      <div className="w-full max-w-md p-8 border border-white/10 rounded-3xl bg-[#1a1a1a]">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white">Create Account</h1>
          <p className="text-gray-400 text-sm mt-2">Join us to get started with your journey.</p>
        </div>
        
        <div className="space-y-4">
          {/* Name Field */}
          <div className="relative flex items-center">
            <User className="absolute left-3 text-gray-500" size={18} />
            <input 
              className="w-full pl-10 p-3 bg-black rounded-xl border border-white/10 text-white outline-none focus:border-blue-500 transition-colors" 
              placeholder="Full Name" 
              onChange={(e) => setFormData({...formData, name: e.target.value})} 
            />
          </div>

          {/* Email Field */}
          <div className="relative flex items-center">
            <Mail className="absolute left-3 text-gray-500" size={18} />
            <input 
              type="email"
              className="w-full pl-10 p-3 bg-black rounded-xl border border-white/10 text-white outline-none focus:border-blue-500 transition-colors" 
              placeholder="Email" 
              onChange={(e) => setFormData({...formData, email: e.target.value})} 
            />
          </div>
          
          {/* Password Field */}
          <div className="relative flex items-center">
            <Lock className="absolute left-3 text-gray-500" size={18} />
            <input 
              type={showPassword ? "text" : "password"} 
              className="w-full pl-10 pr-10 p-3 bg-black rounded-xl border border-white/10 text-white outline-none focus:border-blue-500 transition-colors" 
              placeholder="Password" 
              onChange={(e) => setFormData({...formData, password: e.target.value})} 
            />
            <button 
              type="button" 
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 text-gray-500 hover:text-gray-300"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Sign Up Button */}
        <button 
          onClick={handleSignUp} 
          disabled={loading} 
          className="w-full py-3 mt-8 bg-white text-black font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Creating Account..." : <>Create Account <UserPlus size={18} /></>}
        </button>

        {/* Divider */}
        <div className="relative my-8 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/5"></div>
          </div>
          <span className="relative px-4 bg-[#1a1a1a] text-gray-500 text-xs uppercase tracking-widest">Or continue with</span>
        </div>

        {/* Google Sign In (Alternative) */}
        <button 
          type="button"
          onClick={() => authClient.signIn.social({ provider: "google" })} 
          className="w-full py-3 border border-white/10 rounded-xl text-white hover:bg-white/5 transition flex items-center justify-center gap-3"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
          </svg>
          Google
        </button>

        {/* Redirect to Sign In */}
        <p className="text-sm text-gray-400 text-center mt-8">
          Already have an account?{" "} 
          <Link href="/auth/sign-in" className="text-blue-400 font-semibold inline-flex items-center gap-1 hover:underline">
            Sign In <ArrowRight size={14} />
          </Link>
        </p>
      </div>
    </div>
  );
}