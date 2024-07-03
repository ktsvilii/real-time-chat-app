import { useAuthContext } from '../../context/AuthContext';
import { conversationStore } from '../../store/conversationStore';
import { extractTime } from '../../utils/timeFormatter';

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = conversationStore();

  const { message: messageText, createdAt, senderId } = message;
  const formattedTime = extractTime(createdAt);

  const isMyMessage = authUser._id === senderId;

  const chatClassName = isMyMessage ? 'chat-end' : 'chat-start';
  const messageClassName = isMyMessage ? 'chat-bubble-warning' : '';

  const profilePic = isMyMessage
    ? authUser.profilePic
    : selectedConversation.profilePic;

  return (
    <div className={`chat ${chatClassName}`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img alt='Chat bubble component' src={`${profilePic}`} />
        </div>
      </div>
      <div className={`chat-bubble ${messageClassName}`}>{messageText}</div>
      <div className='chat-footer text-xs text-gray-400'>{formattedTime}</div>
    </div>
  );
};
export default Message;
