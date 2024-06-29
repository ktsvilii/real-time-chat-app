import MessageInput from './MessageInput';
import Messages from './Messages';

import { TiMessages } from 'react-icons/ti';

const MessageContainer = () => {
  const chatSelected = false;
  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {chatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className='bg-transparent p-4'>
            <span className='label-text text-white'>To:</span> <span className='text-warning font-bold'> John doe</span>
          </div>

          <div className='divider before:bg-white after:bg-white  my-0 py-0 h-0 mb-4' />

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

const NoChatSelected = () => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-white font-semibold flex flex-col items-center gap-2'>
        <p>Welcome 👋 John Doe ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className='text-3xl md:text-6xl text-center' />
      </div>
    </div>
  );
};

export default MessageContainer;
