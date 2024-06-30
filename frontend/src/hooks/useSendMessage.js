import { useState } from 'react';

import toast from 'react-hot-toast';

import { conversationStore } from '../store/conversationStore';

export const useSendMessage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { selectedConversation, messages, setMessages } = conversationStore();

  const sendMessage = async message => {
    setIsLoading(true);

    try {
      const res = await fetch(`/api/message/send/${selectedConversation._id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setMessages([...messages, data]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, sendMessage };
};
