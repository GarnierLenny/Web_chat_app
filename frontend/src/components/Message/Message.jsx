import React from "react";
import './Message.css';

const Message = ({message}) => {

  return (
    <div className="Message">
      {message}
    </div>
  );
};

export default Message;
