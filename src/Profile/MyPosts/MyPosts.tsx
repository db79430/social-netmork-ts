import React, {ChangeEvent, useState} from "react";
import s from './MyPosts.module.css';
import {Post} from "./Posts/Post";
/*import {
    PostPageType,
    RootStateType,
    StoreType,
    store,


} from "../../Redux/store";*/
import {
    ActionUpdatePostType,
    ActionAddPostType,
    addActionCreater,
    addUPDATEActionCreater
} from "../../Redux/post-reducer";


type MyPostsType = {
    message: string;
    id: number;


}

export type MessagePosts = {
    messagesPost: Array<MyPostsType>
    messageNewPostText: string;
    addUPDATE: () => void
    addAction: (messageNewPostText: string) => void


}


export const MyPosts = (props: MessagePosts) => {


    let postElement = props.messagesPost
        .map(p => <Post key={p.id} message={p.message}/>)
    let addButtonClick = () => {

        {
            props.addUPDATE()


        }


    }

    let onPostChangeValue = (e: ChangeEvent<HTMLTextAreaElement>) => {

        props.addAction(props.messageNewPostText)
    }

    return (

        <div className={s.posts}>
            <div className={s.MyName}>
                My posts
            </div>
            <div>
                <textarea onChange={onPostChangeValue} value={props.messageNewPostText}></textarea>

            </div>
            <div>
                <button onClick={addButtonClick}>Click</button>

            </div>
            {
                postElement
            }


            {/* <Post message="Hey!"/>
            <Post message="How are you?"/>*/}

        </div>


    )
}