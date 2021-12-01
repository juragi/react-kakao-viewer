import React from 'react';
import ChatItem from './ChatItem';

export default function Container(props) {
    return (
        <div>
            {props.chats.map((chat, i) => (
                <ChatItem key={i} content={chat.content}/>
            ))}
        </div>
    )
}

