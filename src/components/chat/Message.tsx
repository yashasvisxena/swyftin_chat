import React from "react";

interface MessageProps {
  message: string;
  timestamp: string;
  sender: string;
  isOwn: boolean;
}

const Message: React.FC<MessageProps> = ({
  message,
  timestamp,
  sender,
  isOwn,
}) => {
  return (
    <div className={`flex ${isOwn ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[70%] ${
          isOwn
            ? "bg-green-500 text-background rounded-l-lg rounded-tr-lg"
            : "bg-primary-foreground rounded-r-lg rounded-tl-lg"
        } p-3 space-y-1 flex flex-col`}
      >
        {!isOwn && (
          <span className="text-xs font-medium">
            {sender}
          </span>
        )}
        <span className="text-sm">{message}</span>
        <span className="text-xs text-right">
          {new Date(timestamp).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
    </div>
  );
};

export default Message;
