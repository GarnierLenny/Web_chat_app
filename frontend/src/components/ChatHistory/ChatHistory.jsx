import React from 'react';
import './ChatHistory.css';

const ChatHistory = ({history}) => {
  return (
    <div className="ChatHistory">
      <h2>Chat History</h2>
      {history.map((msg, index) => (
        <p key={index}>{msg}</p>
      ))}
    </div>
  );
};

export default ChatHistory