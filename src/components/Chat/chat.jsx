"use client";
import React from "react";
import Sessions from "./sessions";
import Conversation from "./conversation";
import MessageInput from "./messageInput";

const AgentChat = ({
  sessions,
  selectedSession,
  setSelectedSession,
  chats,
}) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "#0f172a",
        position: "relative",
      }}
    >
      <Sessions
        sessions={sessions}
        selectedSession={selectedSession}
        setSelectedSession={setSelectedSession}
      />
      <Conversation chats={chats} />
      <MessageInput />
    </div>
  );
};

export default AgentChat;
