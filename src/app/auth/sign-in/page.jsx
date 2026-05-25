"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import Link from "next/link";
import { Mail, Lock, ArrowRight, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); 
  const [loading, setLoading] = useState(false);
  const router=useRouter()

  const handleSignIn = async () => {
    setLoading(true);
    const { error } = await authClient.signIn.email({ email, password },{
        onSuccess:()=>{
            router.push('/')
            router.refresh()
        }
    });
    setLoading(false);
    if (error) toast.error(error.message);
    else toast.success("Signed in successfully!");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050505] px-6">
      <div className="w-full max-w-md p-8 border border-white/10 rounded-3xl bg-[#1a1a1a]">
        <h1 className="text-2xl font-bold text-center text-white mb-6">Welcome Back</h1>
        
        <div className="space-y-4">
          <div className="relative flex items-center">
            <Mail className="absolute left-3 text-gray-500" size={18} />
            <input 
              className="w-full pl-10 p-3 bg-black rounded-xl border border-white/10 text-white outline-none focus:border-blue-500" 
              placeholder="Email" 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          
          <div className="relative flex items-center">
            <Lock className="absolute left-3 text-gray-500" size={18} />
            <input 
              type={showPassword ? "text" : "password"} // টগল লজিক
              className="w-full pl-10 pr-10 p-3 bg-black rounded-xl border border-white/10 text-white outline-none focus:border-blue-500" 
              placeholder="Password" 
              onChange={(e) => setPassword(e.target.value)} 
            />
            {/* Show/Hide Button */}
            <button 
              type="button" 
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 text-gray-500 hover:text-gray-300"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <button 
          onClick={handleSignIn} 
          disabled={loading} 
          className="w-full py-3 mt-6 bg-white text-black font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 transition"
        >
          {loading ? "Sign in..." : <>Sign In <ArrowRight size={18} /></>}
        </button>

        <div className="relative my-6 text-center text-gray-500 text-sm">Or continue with</div>

        <button 
          onClick={() => authClient.signIn.social({ provider: "google" })} 
          className="w-full py-3 border border-white/10 rounded-xl text-white hover:bg-white/5 transition flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/></svg>
          Google
        </button>

        <p className="text-sm text-gray-400 text-center mt-6">
          Don't have an account?{" "} 
          <Link href={'/auth/sign-up'} className="text-blue-400 font-semibold inline-flex items-center gap-1 hover:underline">
            Sign Up <ArrowRight size={14} />
          </Link>
        </p>
      </div>
    </div>
  );
}