import GenderCheckbox from './GenderCheckbox';

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='h-full p-6 w-full bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30'>
        <h1 className='text-3xl font-semibold text-center text-gray-200'>
          Sign Up<span className='text-yellow-400'> ChatApp</span>
        </h1>

        <form>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-gray-200'>Full Name</span>
            </label>
            <input type='text' placeholder='John Doe' className='w-full input input-bordered  h-15' />
          </div>

          <div>
            <label className='label p-2 '>
              <span className='text-base label-text text-gray-200'>Username</span>
            </label>
            <input type='text' placeholder='johndoe' className='w-full input input-bordered h-15' />
          </div>

          <div>
            <label className='label'>
              <span className='text-base label-text text-gray-200'>Password</span>
            </label>
            <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-15' />
          </div>

          <div>
            <label className='label'>
              <span className='text-base label-text text-gray-200'>Confirm Password</span>
            </label>
            <input type='password' placeholder='Confirm Password' className='w-full input input-bordered h-15' />
          </div>

          <GenderCheckbox />

          <a className='text-md  text-gray-200 hover:underline hover:text-yellow-300 mt-2 inline-block' href='#'>
            Already have an account?
          </a>

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
export default SignUp;
