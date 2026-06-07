
import DashboardSideBar from "@/components/Dashboard/DashboardSideBar";
import React from "react";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <DashboardSideBar />

      <div className="flex-1 p-6">{children}</div>
    </div>
  );
}
