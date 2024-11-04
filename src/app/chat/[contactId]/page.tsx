"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useRef } from "react";
import messageHistoryData from "@/data.json";
import Header from "@/components/chat/Header";
import ActionSection from "@/components/chat/ActionSection";
import Message from "@/components/chat/Message";

const Home = () => {
  const { contactId } = useParams();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const contactData = messageHistoryData.messageHistory.find(
    (chat) => chat.contactId === contactId
  );

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [contactId]);

  if (!contactData) {
    return <div>Contact not found</div>;
  }

  const sortedDateGroups = [...contactData.messages].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-none">
        <Header name={contactData.name} number={contactData.phoneNumber} />
      </div>

      <div className="flex-1 overflow-y-auto flex-col justify-end">
        <div className="p-1">
          <div className="space-y-4 h-full flex flex-col justify-end">
            {sortedDateGroups.map((dateGroup) => (
              <div key={dateGroup.date}>
                <div className="flex items-center justify-center my-6">
                  <div className="bg-muted px-3 py-1 rounded-full">
                    <span className="text-xs font-medium text-muted-foreground">
                      {dateGroup.date}
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  {dateGroup.messages
                    .sort(
                      (a, b) =>
                        new Date(`${dateGroup.date} ${a.time}`).getTime() -
                        new Date(`${dateGroup.date} ${b.time}`).getTime()
                    )
                    .map((msg, idx) => (
                      <Message
                        key={`${dateGroup.date}-${idx}`}
                        message={msg.content}
                        timestamp={`${dateGroup.date} ${msg.time}`}
                        sender={
                          msg.type === "received" ? contactData.name : "You"
                        }
                        isOwn={msg.type === "sent"}
                      />
                    ))}
                </div>
              </div>
            ))}
          </div>
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="flex-none">
        <ActionSection />
      </div>
    </div>
  );
};

export default Home;
