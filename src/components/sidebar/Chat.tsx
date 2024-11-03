import { CircleUser } from "lucide-react";
import React from "react";

type ChatProps = {
  phoneNumber: string;
  name: string;
  message: string;
  time: string;
  isActive?: boolean;
};

const Chat: React.FC<ChatProps> = ({
  phoneNumber,
  name,
  message,
  time,
  isActive = false,
}) => {
  return (
    <div className="flex p-2 justify-between items-center hover:bg-accent rounded-lg cursor-pointer">
      <div className="flex gap-2 items-center">
        <CircleUser size={40} className="text-muted-foreground" />
        <div className="flex flex-col">
          <h1 className="font-bold">{phoneNumber}</h1>
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs text-muted-foreground">{message}</p>
        </div>
      </div>
      <div className="text-sm text-muted-foreground">{time}</div>
    </div>
  );
};

export default Chat;
