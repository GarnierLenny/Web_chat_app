import React, {useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';
import { connect, sendMsg } from './api';
import Header from './components/Header/Head';
import ChatHistory from './components/ChatHistory/ChatHistory';

function App() {

  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    connect((msg) => {
      console.log("New Message", msg);
      setChatHistory([...chatHistory, msg.data]);
    });

  });

  const sendHello = () => {
    sendMsg("Hello World!")
  }

  return (
    <div className="App">
      <Header />
      <ChatHistory history={chatHistory} />
      <button onClick={sendHello}>Send Hello</button>
    </div>
  );
}

export default App;
