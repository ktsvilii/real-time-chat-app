import { IoSearchSharp } from 'react-icons/io5';

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
      <input
        type='text'
        placeholder='Search…'
        className='border text-md rounded-lg block w-full p-2.5  bg-transparent border-white border-2 text-white'
      />
      <button
        type='submit'
        className='btn btn-circle border-2 bg-transparent hover:bg-yellow-400 hover:text-black text-yellow-400'
      >
        <IoSearchSharp className='w-6 h-6 outline-none' />
      </button>
    </form>
  );
};
export default SearchInput;
