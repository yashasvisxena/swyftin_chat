"use client";

import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import Navbar from "../Header/Navbar";
import InSearch from "../common/Insearch";
import Chat from "./Chat";
import messageHistory from "@/data.json";
import { useRouter, useParams } from "next/navigation";

const getLastMessage = (messages: any[]) => {
  const latestDateMessages = messages[0];
  const lastMessage =
    latestDateMessages.messages[latestDateMessages.messages.length - 1];
  return {
    content: lastMessage.content,
    time: lastMessage.time,
  };
};

const getLastMessageDate = (messages: any[]) => {
  const latestDateMessages = messages[0];
  const lastMessage =
    latestDateMessages.messages[latestDateMessages.messages.length - 1];
  return new Date(`${latestDateMessages.date}T${lastMessage.time}`);
};

const truncateMessage = (message: string, maxLength: number = 30) => {
  if (message.length <= maxLength) return message;
  return message.substring(0, maxLength) + "...";
};

export function AppSidebar() {
  const router = useRouter();
  const params = useParams();
  const currentContactId = params?.contactId as string;

  const sortedMessageHistory = [...messageHistory.messageHistory].sort(
    (a, b) => getLastMessageDate(b.messages) - getLastMessageDate(a.messages)
  );

  return (
    <Sidebar>
      <SidebarHeader>
        <Navbar />
        <InSearch width="w-full" placeholder="Search a chat" />
      </SidebarHeader>
      <SidebarContent >
        <SidebarGroup>
          <SidebarGroupLabel>Chats</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sortedMessageHistory.map((chat) => {
                const lastMessage = getLastMessage(chat.messages);
                const isActive = currentContactId === chat.contactId;

                return (
                  <SidebarMenuItem
                    key={chat.contactId}
                    onClick={() => router.push(`/chat/${chat.contactId}`)}
                    className={isActive ? "bg-background border-2 rounded-lg" : ""}
                  >
                    <SidebarMenuButton asChild>
                      <Chat
                        phoneNumber={chat.phoneNumber}
                        name={chat.name}
                        message={truncateMessage(lastMessage.content)}
                        time={lastMessage.time}
                        isActive={isActive}
                      />
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default AppSidebar;
