const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
      <input
        type='text'
        placeholder='Search conversation…'
        className='rounded-lg block w-full p-2.5  bg-transparent border-white border-2 text-white'
      />
    </form>
  );
};
export default SearchInput;
