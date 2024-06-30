import { useState, useEffect } from 'react';

import toast from 'react-hot-toast';

import { conversationStore } from '../store/conversationStore';

export const useGetMessages = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { selectedConversation, messages, setMessages } = conversationStore();

  useEffect(() => {
    async function getMessages() {
      setIsLoading(true);

      try {
        const res = await fetch(`/api/message/${selectedConversation._id}`);

        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }

        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (selectedConversation._id) getMessages();
  }, [selectedConversation._id, setMessages]);

  return { isLoading, messages };
};
