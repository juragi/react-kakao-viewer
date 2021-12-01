import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './components/Container'

function App() {
  const [chats, setChats] = useState([]);
  function handleFileChange(e) {
    console.log(e);
    setChats([{content: "test"}, {content: "test2"}]);
  }

  return (
    <div className="App">
      <input type='file' onChange={handleFileChange}/>
      <Container chats={chats}/>
    </div>
  );
}

export default App;
