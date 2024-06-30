import { conversationStore } from '../../store/conversationStore';
import Message from './Message';

const Messages = () => {
  const { messages } = conversationStore();
  return (
    <div className='px-4 flex-1 overflow-auto'>
      {messages.map(message => (
        <Message key={`${message.message}${message.senderId}`} message={message} />
      ))}
    </div>
  );
};
export default Messages;
