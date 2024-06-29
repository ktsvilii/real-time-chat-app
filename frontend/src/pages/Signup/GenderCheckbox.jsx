const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  const handleChange = e => {
    onCheckboxChange(e.target.name);
  };

  return (
    <div className='flex mt-4 gap-5'>
      <div className='form-control'>
        <label className='label gap-2 cursor-pointer'>
          <span className='label-text text-white'>Male</span>
          <input
            type='checkbox'
            className='checkbox checkbox-warning border-slate-100'
            checked={selectedGender === 'male'}
            name='male'
            onChange={handleChange}
          />
        </label>
      </div>
      <div className='form-control'>
        <label className='label gap-2 cursor-pointer'>
          <span className='label-text text-white'>Female</span>
          <input
            type='checkbox'
            className='checkbox checkbox-warning border-slate-200'
            checked={selectedGender === 'female'}
            name='female'
            onChange={handleChange}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
