import { useState } from 'react';

import { Link } from 'react-router-dom';

import GenderCheckbox from './GenderCheckbox';
import { useSignup } from '../../hooks/useSignup';

const SignUp = () => {
  const [values, setValues] = useState({
    fullName: '',
    userName: '',
    password: '',
    confirmPassword: '',
    gender: '',
  });

  const { isLoading, signup } = useSignup();

  const handleInputChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = gender => {
    setValues({ ...values, gender });
  };

  const handleSubmit = e => {
    e.preventDefault();
    signup(values);
  };

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='h-full p-6 w-full bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border-2 border-gray-100'>
        <h1 className='text-3xl mb-3 font-semibold text-center text-white'>
          Sign Up<span className='text-yellow-500'> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Full Name</span>
            </label>
            <input
              type='text'
              placeholder='John Doe'
              name='fullName'
              className='border text-lg rounded-lg block w-full p-2.5 bg-transparent border-white text-yellow-500'
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className='label p-2 '>
              <span className='text-base label-text text-white'>Username</span>
            </label>
            <input
              type='text'
              placeholder='john.doe'
              name='userName'
              className='border text-lg rounded-lg block w-full p-2.5 bg-transparent border-white text-yellow-500'
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className='label'>
              <span className='text-base label-text text-white'>Password</span>
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              name='password'
              className='border text-lg rounded-lg block w-full p-2.5 bg-transparent border-white text-yellow-500'
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className='label'>
              <span className='text-base label-text text-white'>Confirm Password</span>
            </label>
            <input
              type='password'
              placeholder='Confirm Password'
              name='confirmPassword'
              className='border text-lg rounded-lg block w-full p-2.5 bg-transparent border-white text-yellow-500'
              onChange={handleInputChange}
            />
          </div>

          <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={values.gender} />

          <Link to='/login' className='text-md text-white hover:underline hover:text-yellow-500 mt-2 inline-block'>
            Already have an account?
          </Link>

          <div>
            <button
              disabled={isLoading}
              className='btn btn-block btn-md mt-4 border btn-outline btn-warning border-slate-200'
            >
              {isLoading ? <span className='loading loading-spinner '></span> : <span>Signup</span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
