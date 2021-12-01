import ChatItem from './ChatItem';
import './Chat.css'

export default function ChatRoom(props) {
    return (
        <div className="ChatRoom">
            {props.chats.map((chat, i) => (
                <ChatItem key={i} chat={chat} myName={props.myName}/>
            ))}
        </div>
    )
}