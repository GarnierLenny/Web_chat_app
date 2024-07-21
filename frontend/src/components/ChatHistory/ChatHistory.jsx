import React, { Fragment } from 'react';
import './ChatHistory.css';
import Message from '../Message/Message';

const ChatHistory = ({history}) => {
  return (
    <div className="ChatHistory">
      <h2>Chat History</h2>
      {history.map((msg, index) => {
        console.log('m', msg);
        return (
          <Fragment key={index}>
            <Message message={msg} />
          </Fragment>
      )})}
    </div>
  );
};

export default ChatHistory