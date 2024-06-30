import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogin } from '../../hooks/useLogin';

const Login = () => {
  const { isLoading, login } = useLogin();
  const [values, setValues] = useState({
    userName: '',
    password: '',
  });

  const handleInput = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleLogin = async e => {
    e.preventDefault();
    await login(values);
  };

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='h-full p-6 w-full bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border-2 border-gray-100'>
        <h1 className='text-3xl mb-3 font-semibold text-center text-white'>
          Login
          <span className='text-yellow-500'> ChatApp</span>
        </h1>

        <form onSubmit={handleLogin}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Username</span>
            </label>
            <input
              type='text'
              placeholder='Enter username'
              className='border text-lg rounded-lg block w-full p-2.5 bg-transparent border-white text-yellow-500'
              name='userName'
              onChange={handleInput}
            />
          </div>

          <div>
            <label className='label'>
              <span className='text-base label-text text-white'>Password</span>
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              className='border text-lg rounded-lg block w-full p-2.5 bg-transparent border-white text-yellow-500'
              name='password'
              onChange={handleInput}
            />
          </div>
          <Link to='/signup' className='text-md text-white hover:underline hover:text-yellow-500 mt-2 inline-block'>
            {"Don't"} have an account?
          </Link>

          <div>
            <button
              disabled={isLoading}
              className='btn btn-block btn-md mt-4 border btn-outline btn-warning border-slate-200'
            >
              {isLoading ? <span className='loading loading-spinner '></span> : <span>Login</span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
