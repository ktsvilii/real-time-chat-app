import { useSocketContext } from '../../context/SocketContext';
import { conversationStore } from '../../store/conversationStore';

const Conversation = ({ conversation }) => {
  const { selectedConversation, setSelectedConversation } = conversationStore();
  const isSelected = selectedConversation?._id === conversation._id;
  const handleSetSelectedConversation = () => {
    setSelectedConversation(conversation);
  };
  const { onlineUsers } = useSocketContext();
  const isUserOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`${
          isSelected ? 'bg-yellow-400 text-black' : ''
        } flex gap-2 items-center text-white hover:bg-yellow-400 rounded p-2 py-1 cursor-pointer`}
        onClick={handleSetSelectedConversation}
      >
        <div className={`avatar ${isUserOnline && 'online'}`}>
          <div className='w-12 rounded-full'>
            <img src={conversation.profilePic} alt='User avatar' />
          </div>
        </div>

        <div className='flex flex-col flex-1'>
          <div className='flex gap-3 justify-between'>
            <p className='font-bold'>{conversation.fullName}</p>
          </div>
        </div>
      </div>

      <div className='divider before:bg-white after:bg-white my-0 py-0 h-1' />
    </>
  );
};

export default Conversation;
