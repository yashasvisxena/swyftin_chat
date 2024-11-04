import { ChevronRight, CircleUser } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { useSidebar } from "../ui/sidebar";

interface headerProps {
  name: string;
  number: string;
}
const Header = ({ name, number }: headerProps) => {
  const { isMobile,toggleSidebar } = useSidebar();
  return (
    <div className="p-4 bg-sidebar flex justify-start items-center gap-4">
      {isMobile && <Button variant="outline" size="icon" onClick={toggleSidebar}>
        <ChevronRight size={40} />
      </Button>}
      <CircleUser size={40} className="text-muted-foreground" />
      <div className="flex items-center gap-2">
        <span className="text-base">{name}</span>
        <span className="md:text-sm text-xs">{number}</span>
      </div>
    </div>
  );
};

export default Header;
