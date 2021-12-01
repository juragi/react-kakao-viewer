import ChatItem from './ChatItem';
import './Chat.css'

const timeStampStyle = {
    "text-align": "center"
}

export default function ChatRoom(props) {
    return (
        <div className="ChatRoom">
            {props.chats.map((chat, i) => (
                chat.DateStamp !== undefined ? <div style={timeStampStyle}>{chat.DateStamp}</div> :
                    <ChatItem key={i} chat={chat} myName={props.myName}/>
            ))}
        </div>
    )
}