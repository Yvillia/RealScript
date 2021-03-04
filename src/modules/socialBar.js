import React, { useEffect, useState } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ChatClient from './chatClient';
import MemberList from './memberList';
import ResponseArea from './responseArea';
import "../assets/main.css";


export const SocialBar = ({ ws, input_width }) => {
    const [pos, setPos] = useState(-input_width);

    const chatButton = () => {
        if (pos < 0) setPos(0);
        else setPos(-input_width);
    }

    useEffect(() => {
        setPos(0);
    }, []);

    return (
        <div 
        className="chat-list"
        style= {{width: `${pos}px`, minHeight: `200px`,
            transform: `translatex(${pos}px)`, transition: `1s ease`}}
        >
            <button
              className = "chatButton"
              onClick = {() => chatButton()}
              style = {{
                  transform: `translatex(${pos}px 5vh)`
              }}
             />
            <div className="chat-sep">
                <List disablePadding dense>
                <ListItem button>
                {/* <div> */}
                    <MemberList />
                {/* </div> */}
                </ListItem>
                <ListItem button>
                    <ResponseArea ws={ws}/>
                </ListItem>
                <ListItem button>
                {/* <div> */}
                    <ChatClient ws={ws}/>
                {/* </div> */}
                </ListItem>
                </List>
            </div>
        </div>
    )
}
