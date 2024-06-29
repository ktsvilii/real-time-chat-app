import { IoSearchSharp } from 'react-icons/io5';

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
      <input type='text' placeholder='Search…' className='input input-bordered rounded-full' />
      <button
        type='submit'
        className='btn btn-circle bg-transparent hover:bg-yellow-400 hover:text-gray-600 text-yellow-400'
      >
        <IoSearchSharp className='w-6 h-6 outline-none' />
      </button>
    </form>
  );
};
export default SearchInput;
