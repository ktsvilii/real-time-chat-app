import { useEffect } from 'react';

import { useSocketContext } from '../context/SocketContext';
import { conversationStore } from '../store/conversationStore';

import notificationSound from '../assets/sound/notification.mp3';

export const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = conversationStore();

  useEffect(() => {
    socket?.on('newMessage', newMessage => {
      const sound = new Audio(notificationSound);
      sound.play();
      setMessages([...messages, newMessage]);
    });

    return () => socket?.off('newMessage');
  }, [socket, setMessages, messages]);
};
