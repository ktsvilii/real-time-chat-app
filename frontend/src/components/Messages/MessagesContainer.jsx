import { useEffect } from 'react';
import { conversationStore } from '../../store/conversationStore';
import MessageInput from './MessageInput';
import Messages from './Messages';

import { TiMessages } from 'react-icons/ti';

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = conversationStore();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className='w-2/3 flex flex-col'>
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className='bg-transparent p-5'>
            <span className='text-warning font-bold'>
              {selectedConversation.fullName}
            </span>
          </div>

          <div className='divider before:bg-white after:bg-white my-0 py-0 h-0 mb-4' />

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

const NoChatSelected = () => {
  const { fullName } = JSON.parse(localStorage.getItem('chat-user'));

  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-white font-semibold flex flex-col items-center gap-2'>
        <p>Welcome 👋 {fullName}</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className='text-3xl md:text-6xl text-center' />
      </div>
    </div>
  );
};

export default MessageContainer;
