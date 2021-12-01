import React, {useState} from 'react';
import ChatRoom from './ChatRoom';
import FileHelper from './FileHelper';

const containerStyle = {
    width: "400px",
    margin: "0 auto"
}

export default function Container(props) {
    const [chats, setChats] = useState([]);
    const [myName, setMyName] = useState("");
    const refreshChats = (chats, myName) => {
        setChats(chats);
        setMyName(myName);
        //console.log(chats);
    }

    return (
        <div style={containerStyle}>
            <FileHelper refreshChats={refreshChats}/>
            <ChatRoom chats={chats} myName={myName}/>
        </div>
    )
}

