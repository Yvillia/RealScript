import React, { useEffect, useState } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ChatClient from './chatClient';
import MemberList from './memberList';
import ResponseArea from './responseArea';
import "../assets/main.css";

export const SocialBar = ({ input_width }) => {
    const [pos, setPos] = useState(0);

    const chatButton = () => {
        if (pos == 0) setPos(input_width);
        else setPos(0);
    }

    useEffect(() => {
        setPos(0);
    }, []);

    return (
        <div 
        className="chat-list"
        style= {{width: `${input_width}px`, minHeight: `200px`,
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
                    <MemberList/>
                {/* </div> */}
                </ListItem>
                <ListItem button>
                    <ResponseArea/>
                </ListItem>
                <ListItem button>
                {/* <div> */}
                    <ChatClient/>
                {/* </div> */}
                </ListItem>
                </List>
            </div>
        </div>
    )
}
