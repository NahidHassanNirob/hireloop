"use client";

import React from "react";
import { StatsCard } from "./StatsCard";
import { cn } from "@heroui/react";

export function Stats({ statsData, className }) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full pt-10 ",
        className,
      )}
    >
      {statsData?.map((item) => (
        <StatsCard
          key={item.id}
          title={item.title}
          value={item.value}
          icon={item.icon}
        />
      ))}
    </div>
  );
}
