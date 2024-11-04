"use client";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { ChevronRight } from "lucide-react";
import React from "react";

const page = () => {
  const { isMobile, toggleSidebar } = useSidebar();
  return (
    <div className="size-full flex flex-col justify-center items-center gap-4">
      <h1 className="text-4xl font-medium text-center">
        Select a chat to start messaging
      </h1>
      {isMobile && <Button onClick={toggleSidebar}>Select Chat</Button>}
    </div>
  );
};

export default page;
