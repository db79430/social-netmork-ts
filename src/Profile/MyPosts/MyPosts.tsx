import React, {ChangeEvent, useState} from "react";
import s from './MyPosts.module.css';
import {Post} from "./Posts/Post";
import {addActionCreater} from "../../Redux/profile-reducer";

type MyPostsType = {
    message: string;
    id: number;


}

export type MessagePosts = {
    messagesPost: Array<MyPostsType>
    messageNewPostText: string;
    addActionCreater: (postText: string) => void
    addUPDATEActionCreater : (newText: string) => void



}


export const MyPosts = (props: MessagePosts) => {


    let postElement = props.messagesPost
        .map(p => <Post key={p.id} message={p.message}/>)
    let addButtonClick = () => {

        {
            props.addActionCreater(props.messageNewPostText)



        }


    }

    let onPostChangeValue = (e: ChangeEvent<HTMLTextAreaElement>) => {

        props.addUPDATEActionCreater(props.messageNewPostText)
    }

    return (

        <div className={s.posts}>
            <div className={s.MyName}>
                My posts
            </div>
            <div>
                <textarea onChange={onPostChangeValue} value={props.messageNewPostText}>{props.messageNewPostText}</textarea>

            </div>
            <div>
                <button onClick={addButtonClick}>Click</button>

            </div>
            {
                postElement
            }

       </div>


    )
}