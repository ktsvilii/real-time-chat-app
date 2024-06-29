const GenderCheckbox = () => {
  return (
    <div className='flex mt-4 gap-5'>
      <div className='form-control'>
        <label className='label gap-2 cursor-pointer'>
          <span className='label-text text-white'>Male</span>
          <input type='checkbox' className='checkbox checkbox-warning border-slate-100' />
        </label>
      </div>
      <div className='form-control'>
        <label className='label gap-2 cursor-pointer'>
          <span className='label-text text-white'>Female</span>
          <input type='checkbox' className='checkbox checkbox-warning border-slate-200' />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
