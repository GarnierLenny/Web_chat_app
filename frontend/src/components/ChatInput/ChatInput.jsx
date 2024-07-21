import React from "react"
import './ChatInput.css';

const ChatInput = ({send}) => {
  return (
    <div className="ChatInput">
      <input placeholder="Type a message then press Enter" onKeyDown={send} />
    </div>
  );
};

export default ChatInput;
