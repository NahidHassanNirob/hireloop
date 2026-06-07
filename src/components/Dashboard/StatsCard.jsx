"use client";

import React from 'react';
import { Card } from '@heroui/react';
import { cn } from '@heroui/react';

export function StatsCard({ title, value, icon, className }) {
  return (
    <Card
      className={cn(
        "flex-1 bg-neutral-900 border border-neutral-800 rounded-xl p-6 text-left shadow-sm",
        className
      )}
    >
      {/* Icon Wrapper */}
      <div className="w-10 h-10 flex items-center justify-center bg-neutral-800/60 rounded-lg text-neutral-300 mb-6">
        {icon}
      </div>
      
      {/* Metrics Content */}
      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-neutral-400">
          {title}
        </span>
        <h3 className="text-3xl font-semibold text-white tracking-tight">
          {value}
        </h3>
      </div>
    </Card>
  );
}