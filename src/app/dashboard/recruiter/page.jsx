"use client";
import { FileText, Users, Zap, CheckCircle2 } from 'lucide-react';
import { authClient } from "@/lib/auth-client";
import { Stats } from '@/components/Dashboard/Stats';

export default function RecruiterPage() {
  const { data: session, isPending } = authClient.useSession();
  if (isPending) {
    return <p>loading...</p>;
  }
  const user = session?.user;
  const statsData = [
    {
      id: 1,
      title: "Total Job Posts",
      value: 48,
      icon: <FileText size={20} className="stroke-[1.75]" />,
    },
    {
      id: 2,
      title: "Total Applicants",
      value: "1,284",
      icon: <Users size={20} className="stroke-[1.75]" />,
    },
    {
      id: 3,
      title: "Active Jobs",
      value: 18,
      icon: <Zap size={20} className="stroke-[1.75]" />,
    },
    {
      id: 4,
      title: "Jobs Closed",
      value: 32,
      icon: <CheckCircle2 size={20} className="stroke-[1.75]" />,
    },
  ];

  return (
    <div>
      <div>
        <h2 className=" text-3xl">
          Welcome Back, <span>{user?.name}</span>
        </h2>

      </div>
      <div>
        <Stats statsData={statsData}></Stats>
      </div>
    </div>
  );
}
