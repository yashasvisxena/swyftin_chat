import React from "react";
import ModeToggle from "@/components/theme/ModeToggle";

const Navbar = () => {
  return (
    <div className="w-full justify-between items-center flex py-2">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Chat App</h1>
      </div>
      <div className="flex gap-4">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
