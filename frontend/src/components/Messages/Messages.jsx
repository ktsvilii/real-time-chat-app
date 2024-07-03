import { useEffect, useRef } from 'react';
import { useGetMessages } from '../../hooks/useGetMessages';
import Message from './Message';
import MessageSkeleton from '../Skeleton/Skeleton';
import { useListenMessages } from '../../hooks/useListenMessages';

const Messages = () => {
  const { isLoading, messages } = useGetMessages();
  const lastMessage = useRef(null);

  useListenMessages();

  useEffect(() => {
    setTimeout(() => {
      lastMessage.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, [messages]);

  return (
    <div className='px-4 flex-1 overflow-auto'>
      {isLoading &&
        [...Array(4)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!isLoading && messages.length === 0 && (
        <p className='text-center text-yellow-400'>
          Send a message to start the conversation
        </p>
      )}

      {!isLoading &&
        messages.length &&
        messages.map(message => (
          <div ref={lastMessage} key={`${message.message}${message.senderId}`}>
            <Message message={message} />
          </div>
        ))}
    </div>
  );
};

export default Messages;
