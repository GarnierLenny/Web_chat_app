import React, {useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';
import { connect, sendMsg } from './api';
import Header from './components/Header/Head';
import ChatHistory from './components/ChatHistory/ChatHistory';
import ChatInput from "./components/ChatInput/ChatInput";

function App() {

  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    connect((msg) => {
      console.log("New Message", msg);
      setChatHistory([...chatHistory, msg.data]);
    });

  });

  const send = (event) => {
    if(event.keyCode === 13) {
      sendMsg(event.target.value);
      event.target.value = "";
    }
  }

  return (
    <div className="App">
      <Header />
      <ChatHistory history={chatHistory} />
      <ChatInput send={send} />
    </div>
  );
}

export default App;
