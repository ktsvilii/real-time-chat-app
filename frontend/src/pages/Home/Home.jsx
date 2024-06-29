import MessageContainer from '../../components/Messages/MessagesContainer';
import Sidebar from '../../components/Sidebar/Sidebar';

const Home = () => {
  return (
    <div
      className='flex sm:h-[450px] md:h-[550px] w-2/3 rounded-lg overflow-hidden bg-black bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 border-2 border-gray-100
'
    >
      <Sidebar />
      <MessageContainer />
    </div>
  );
};
export default Home;
