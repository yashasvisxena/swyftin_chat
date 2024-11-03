"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-2">
      <div className="text-center text-xl">
        <h1>Made By: Yashasvi Saxena</h1>
        <h1>For: Swyftin Internship Application</h1>
      </div>
      <Button
        onClick={() => {
          router.push("/chat");
        }}
      >
        Get Started
      </Button>
    </div>
  );
}
