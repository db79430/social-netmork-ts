import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";


import {
    ActionNewMessageType,
    ActionSendMessage,
    addSendMessageAC,
    addUPDATENewMessageAC
} from "../Redux/dialogs-reducer";
import { Redirect } from "react-router-dom";
export type MessageType = {
    message: string;
    id: number;

}

export type DialogType = {
    name: string;
    id: number;

}

export type DialogsPropsType = {
    messagesData: Array<MessageType>
    dialogs: Array<DialogType>
    newMessageText: string
    addSendMessage: () => void
    addUPDATENewMessage: (text: string) => void






}

export const Dialogs = (props: DialogsPropsType) => {

    let messagesElement =
        props.messagesData.map
    (
        m => <Message key={m.id} message={m.message} id={m.id}/>
    );

    let dialogsElement = props.dialogs.map
    (
        d => <DialogItem key={d.id} id={d.id} name={d.name}/>
    );

    let newMessageText = props.newMessageText;

    let onSendMessageClick = () => {
        props.addSendMessage()

    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessageText = e.target.value;
        props.addUPDATENewMessage(newMessageText)


    }


    return (

        <div className={s.main}>
            <div className={s.dialogs}>

                {
                    dialogsElement
                }


            </div>
            <div className={s.messages}>

                <div>{
                    messagesElement
                }
                </div>

                <div><textarea value={newMessageText}
                               placeholder='Enter your message'
                               onChange={onNewMessageChange}
                >
                                 </textarea></div>
                <button onClick={onSendMessageClick}>Send</button>
                {/*<Message message={messageData[0].message} id={messageData[0].id}/>
                <Message message={messageData[1].message} id={messageData[1].id}/>
                <Message message={messageData[2].message} id={messageData[2].id}/>*/}


            </div>
        </div>

    )

}