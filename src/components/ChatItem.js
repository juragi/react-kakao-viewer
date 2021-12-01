import React, {Fragment} from 'react';
import './Chat.css';

function MyChat(props) {
    return (
        <Fragment>
            {props.displayTime ? <span className="Time">{props.timePart}</span> : ""}
            <span className="ChatText">{props.text}</span>
        </Fragment>
    )
}

function OtherChat(props) {
    return (
        <Fragment>
            <span className="ChatText">{props.text}</span>
            {props.displayTime ? <span className="Time">{props.timePart}</span> : ""}
        </Fragment>
    )
}

export default function ChatItem(props) {
    const isMyChat = props.myName === props.chat.name;
    var chat = isMyChat ? <MyChat /> : <OtherChat />;
    return (
        <div className={isMyChat ? 'ChatItem MyChat' : 'ChatItem'}>
            <div className="Name">{props.chat.name}</div>
            <div>
                <div className="chats">
                    {props.chat.items.map((item, i) => (
                        <div className="Chat" key={i} title={item.date}>
                            {isMyChat ? <MyChat text={item.text} displayTime={item.displayTime} timePart={item.timePart}/> 
                                : <OtherChat text={item.text} displayTime={item.displayTime} timePart={item.timePart}/>}
                            
                        </div>
                    ))}
                </div>
            </div>
            {props.content}
        </div>
    )
}