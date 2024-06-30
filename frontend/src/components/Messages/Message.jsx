const Message = ({ message }) => {
  const { message: messageText, createdAt } = message;
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
      <div className='chat-bubble chat-bubble-warning'>{messageText}</div>
      <div className='chat-footer text-xs text-black'>{createdAt}</div>
    </div>
  );
};
export default Message;
