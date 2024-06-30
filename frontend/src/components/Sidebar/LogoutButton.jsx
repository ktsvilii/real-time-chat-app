import { BiLogOut } from 'react-icons/bi';

import { useLogout } from '../../hooks/useLogout';

const LogoutButton = () => {
  const { isLoading, logout } = useLogout();

  return (
    <button disabled={isLoading} onClick={logout} className='mt-auto'>
      <BiLogOut className='w-6 h-6 text-white hover:text-yellow-400 cursor-pointer' />
    </button>
  );
};
export default LogoutButton;
