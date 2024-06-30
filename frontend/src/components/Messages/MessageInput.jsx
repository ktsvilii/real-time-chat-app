import { BsSend } from 'react-icons/bs';
import { useSendMessage } from '../../hooks/useSendMessage';
import { useState } from 'react';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const { isLoading, sendMessage } = useSendMessage();

  const handleSendMessage = async e => {
    e.preventDefault();

    if (!message) return;

    await sendMessage(message);
    setMessage('');
  };

  const handleInput = e => {
    setMessage(e.target.value);
  };

  return (
    <form className='px-4 my-3' onSubmit={handleSendMessage}>
      <div className='w-full relative'>
        <input
          type='text'
          className='text-lg rounded-lg block w-full p-2.5 bg-transparent border-white border-2 text-white'
          placeholder='Send a message'
          value={message}
          onChange={handleInput}
        />
        <button type='submit' className='absolute text-yellow-500 inset-y-0 end-0 flex items-center pe-5'>
          {isLoading ? <span className='loading loading-spinner' /> : <BsSend />}
        </button>
      </div>
    </form>
  );
};
export default MessageInput;
