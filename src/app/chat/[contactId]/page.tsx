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
    messagesEndRef.current?.scrollIntoView();
  }, [contactId]);

  if (!contactData) {
    return <div>Contact not found</div>;
  }

  // Sort date groups in ascending order
  const sortedDateGroups = [...contactData.messages].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <div className="size-full flex flex-col">
      <Header name={contactData.name} number={contactData.phoneNumber} />
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4 min-h-full flex flex-col justify-end">
          {sortedDateGroups.map((dateGroup) => (
            <div key={dateGroup.date}>
              <div className="flex items-center justify-center my-6">
                <div className="bg-muted px-3 py-1 rounded-full">
                  <span className="text-xs font-medium text-muted-foreground">
                    {dateGroup.date}
                  </span>
                </div>
              </div>
              <div className="space-y-4">
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
          <div ref={messagesEndRef} />
        </div>
      </div>
      <ActionSection />
    </div>
  );
};

export default Home;
