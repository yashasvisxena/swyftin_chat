import React from "react";
import { Smile, Paperclip, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const ActionSection = () => {
  return (
    <div className="flex gap-2 p-4 border-t">
      <Button variant="outline" size="icon" className="shrink-0">
        <Smile className="h-5 w-5 text-muted-foreground" />
      </Button>

      <Input placeholder="Message..." className="flex-1" />
      <Button variant="outline" size="icon" className="shrink-0">
        <Paperclip className="h-5 w-5 text-muted-foreground" />
      </Button>

      <Button size="icon" className="shrink-0 bg-green-500">
        <Send className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default ActionSection;
