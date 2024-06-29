import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
  };

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='h-full p-6 w-full bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border-2 border-gray-100'>
        <h1 className='text-3xl font-semibold text-center text-white'>
          Login
          <span className='text-yellow-400'> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Username</span>
            </label>
            <input
              type='text'
              placeholder='Enter username'
              className='w-full input input-bordered h-15'
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className='label'>
              <span className='text-base label-text text-white'>Password</span>
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              className='w-full input input-bordered h-15'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <Link to='/signup' className='text-md text-white hover:underline hover:text-yellow-300 mt-2 inline-block'>
            {"Don't"} have an account?
          </Link>

          <div>
            <button className='btn btn-block btn-md mt-4 border btn-outline btn-warning border-slate-200'>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
