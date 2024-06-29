import { BsSend } from 'react-icons/bs';

const MessageInput = () => {
  return (
    <form className='px-4 my-3'>
      <div className='w-full relative'>
        <input
          type='text'
          className='border text-md rounded-lg block w-full p-2.5  bg-gray-500 border-black border-2 text-white'
          placeholder='Send a message'
        />
        <button type='submit' className='absolute text-yellow-400 inset-y-0 end-0 flex items-center pe-3'>
          <BsSend />
        </button>
      </div>
    </form>
  );
};
export default MessageInput;
