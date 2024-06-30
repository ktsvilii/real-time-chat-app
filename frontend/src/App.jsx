import { Navigate, Route, Routes } from 'react-router-dom';

import { Toaster } from 'react-hot-toast';

import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Home from './pages/Home/Home';

import { useAuthContext } from './context/AuthContext';

import './App.css';

function App() {
  const { authUser } = useAuthContext();
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to='/login' />} />
        <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to='/' /> : <Signup />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
