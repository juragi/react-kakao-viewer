import React, {useState} from 'react';

const labelStyle = {
    margin: "4px",
    display: "block"
}

const descriptionStyle = {
    "font-size": "12px",
    "color": "#666"
}

export default function FileHelper(props) {
    const [myName, setMyName] = useState("");
    const makeChats = (lines) => {
        //console.log(lines);
        var chats = [];
        var lastName;
        var lastTimePart;
        var chat;
        lines.forEach(x=> {
            if(x.indexOf(",") > -1) {
                var firstIndexOfComma = x.indexOf(",");
                var firstIndexOfColon = x.indexOf(":", firstIndexOfComma);
                var dateString = x.substr(0, firstIndexOfComma);
                var name = x.substr(firstIndexOfComma + 1, firstIndexOfColon - firstIndexOfComma - 2).trim();
                var chatText = x.substr(firstIndexOfColon + 1).trim();

                var dateStringSplited = dateString.split(" ");
                var time = dateStringSplited.pop();
                var ampm = dateStringSplited.pop();
                var timePart = ampm + " " + time;

                if(lastName !== name) {
                    chat = {
                        name: name,
                        items: []
                    };
                    chats.push(chat);
                } else if (lastTimePart === timePart) {
                    //console.log(chat.items[chat.items.length - 1])
                    chat.items[chat.items.length - 1].displayTime = false;
                }

                //console.log(timePart);

                
                //var chat = {name: name, items: []}
                var item = {
                    date: dateString,
                    text: chatText,
                    timePart: timePart,
                    displayTime: true
                };
                chat.items.push(item);
                lastName = name;
                lastTimePart = timePart;
            }
        });
        //console.log(chats);
        props.refreshChats(chats, myName);
    }

    const onFileChange = (e) => {
        var reader = new FileReader();
        reader.onload = (sender) => {
            var lines = sender.target.result.split("\r\n");
            makeChats(lines);
        }
        console.log(e.target.files)
        if (e.target.files.length > 0) reader.readAsText(e.target.files[0]);
        else props.refreshChats([], myName);
    }

    const onNameChange = (e) => {
        setMyName(e.target.value);
    }

    return (
        <div>
            <label style={labelStyle}>내 이름: <input type='text' onChange={onNameChange}/></label>
            <label style={labelStyle}><input type='file' onChange={onFileChange}/></label>
            <div><a href="https://github.com/juragi/react-kakao-viewer/releases/download/v0/default.eml">Download Sample file</a></div>
            <div style={descriptionStyle}>
                Sample file을 이용할 경우 이름은 '내이름'으로 입력한 다음 파일 선택
            </div>
        </div>
    )
}