import { useState } from 'react';
import { useConversations } from '../../hooks/useConversations';
import { conversationStore } from '../../store/conversationStore';
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [search, setSearch] = useState('');

  const { conversations } = useConversations();
  const { setSelectedConversation } = conversationStore();

  const handleSearch = e => {
    e.preventDefault();

    if (!search) {
      return;
    }

    if (search.length < 3) {
      toast.error('Enter at least 3 characters to search');
      return;
    }

    const conversation = conversations.find(conv =>
      conv.fullName.toLowerCase().includes(search.toLowerCase()),
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch('');
    } else {
      toast.error('Conversation with user is not found :(');
    }
  };

  const handleSearchInput = e => {
    setSearch(e.target.value);
  };

  return (
    <form onSubmit={handleSearch} className='flex items-center gap-2'>
      <input
        type='text'
        placeholder='Search...'
        value={search}
        onChange={handleSearchInput}
        className='rounded-lg block w-full p-2.5  bg-transparent border-white border-2 text-white'
      />
    </form>
  );
};
export default SearchInput;
