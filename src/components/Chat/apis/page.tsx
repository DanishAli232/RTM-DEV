'use client';
export let getAgentsApi = async () => {
  try {
    const response = await fetch(`http://85.215.211.54:3000/api/v1/chatflows`, {
      method: 'GET',
    });

    if (response.ok) {
      const data = await response.json();
      console.log('🚀 ~ file: sidebar.jsx:22 ~ getAgents ~ data:', data);
      return data;
    }
  } catch (error) {
    console.log(error);
  } finally {
  }
};

export let getSessionsApi = async (id: any) => {
  try {
    const response = await fetch(
      `http://85.215.211.54:3000/api/v1/chatmessage/${id}?order=DESC`,
      {
        method: 'GET',
      },
    );

    if (response.ok) {
      const data = await response.json();
      console.log('🚀 ~ file: pages.jsx:29 ~ getSessionsApi ~ data:', data);
      return data;
    }
  } catch (error) {
    console.log(error);
  } finally {
  }
};

export let chatMessagesApi = async (session: any) => {
  try {
    const response = await fetch(
      `http://85.215.211.54:3000/api/v1/chatmessage/${session.chatflowid}?order=ASC&chatId=${session.chatId}&sessionId=${session.sessionId}&type=Zep Memory
        `,
      {
        method: 'GET',
      },
    );

    if (response.ok) {
      const data = await response.json();
      console.log('🚀 ~ file: pages.jsx:50 ~ chatMessagesApi ~ data:', data);
      return data;
    }
  } catch (error) {
    console.log(error);
  } finally {
  }
};
