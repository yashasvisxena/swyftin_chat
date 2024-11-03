"use client";

import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface InSearchProps {
  width?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  className?: string;
}

const InSearch = ({
  width = "w-5/12",
  placeholder = "Search here",
  onChange,
  className,
}: InSearchProps) => {
  return (
    <div className={`relative flex items-center ${width}`}>
      <Search className="absolute right-2 top-1/2 w-4 md:w-5 -translate-y-1/2 transform" />
      <Input
        placeholder={placeholder}
        className={`text-xs md:text-sm ${className}`}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
};

export default InSearch;
