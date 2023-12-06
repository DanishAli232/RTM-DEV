'use client';
import React, { useEffect, useState } from 'react';
import MessageInput from './messageInput';
import Conversation from './conversation';
import Sessions from './sessions';
import Sidebar from './sidebar';
import AgentChat from './chat';

import { useRouter } from 'next/navigation';
import { chatMessagesApi, getAgentsApi, getSessionsApi } from './apis/page';

const Chat = () => {
  const router = useRouter();
  const [agentid, setagentid] = useState('');
  const [agents, setagents] = useState([
    {
      id: '5569a5ed-40a9-4af4-bf5e-6f04d249690c',
      isPublic: false,
      name: 'Pinecone interactions',
      createdDate: '2023-09-03T21:10:54.000Z',
    },
    {
      id: 'db118a27-a909-4989-ad18-901f184b8714',
      isPublic: false,
      name: 'Pinecone Conversation',
      createdDate: '2023-09-03T21:18:13.000Z',
    },
    {
      id: 'f7e59a7e-6296-4c31-ab4a-04da1f51117c',
      isPublic: false,
      name: 'another conversation',
      createdDate: '2023-09-03T21:34:54.000Z',
    },
    {
      id: 'c09d8a16-38b6-43a0-989b-13ab68d51685',
      isPublic: false,
      name: 'Fahad Last Try',
      createdDate: '2023-09-03T22:51:01.000Z',
    },
  ]);

  const [sessions, setsessions] = useState([]);
  const [chats, setchats] = useState([]);
  const [selectedSession, setSelectedSession] = useState([]);

  const getAgents = async () => {
    let agentsResult = await getAgentsApi();
    setagents(agentsResult);
  };

  const handleAgentClick = async (id, name) => {
    router.push(`?agent=${name.replaceAll(' ', '_')}`);
    setagentid(id);
    let sessionsResult = await getSessionsApi(id);
    setsessions(sessionsResult);
    setSelectedSession(sessionsResult[0]);
    handleSessionClick(sessionsResult[0]);
  };

  const handleSessionClick = async (session) => {
    let chatResult = await chatMessagesApi(session);
    setchats(chatResult);
  };

  useEffect(() => {
    handleSessionClick(selectedSession);
    console.log(
      '🚀 ~ file: page.jsx:70 ~ useEffect ~ selectedSession:',
      selectedSession,
    );
  }, [selectedSession]);

  useEffect(() => {
    getAgents();
    handleAgentClick(
      '5569a5ed-40a9-4af4-bf5e-6f04d249690c',
      'Pinecone interactions',
    );
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Sidebar agents={agents} handleAgentClick={handleAgentClick} />
      <AgentChat
        sessions={sessions}
        selectedSession={selectedSession}
        setSelectedSession={setSelectedSession}
        chats={chats}
        handleSessionClick={handleSessionClick}
      />
    </div>
  );
};

export default Chat;
