const Message = () => {
  return (
    <div className='chat chat-end'>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img
            alt='Chat bubble component'
            src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
          />
        </div>
      </div>
      <div className='chat-bubble chat-bubble-warning'>To be on the Council at your age.</div>
      <div className='chat-footer text-xs text-black'>15:30</div>
    </div>
  );
};
export default Message;
