import { useConversations } from '../../hooks/useConversations';
import Conversation from './Conversation';

const Conversations = () => {
  const { loading, conversations } = useConversations();

  return (
    <div className='py-2 mt-4 flex flex-col overflow-auto'>
      {conversations.map(conversation => (
        <Conversation key={conversation._id} conversation={conversation} />
      ))}

      {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    </div>
  );
};
export default Conversations;
