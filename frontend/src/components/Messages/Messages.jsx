import { useGetMessages } from '../../hooks/useGetMessages';
import Message from './Message';

const Messages = () => {
  const { isLoading, messages } = useGetMessages();
  return (
    <>
      {isLoading ? (
        <div className='px-4 flex-1 flex overflow-auto items-center justify-center'>
          <span className='w-20 loading text-yellow-400 loading-spinner' />
        </div>
      ) : (
        <div className='px-4 flex-1 overflow-auto'>
          {messages.map(message => (
            <Message key={`${message.message}${message.senderId}`} message={message} />
          ))}
        </div>
      )}
    </>
  );
};

export default Messages;
