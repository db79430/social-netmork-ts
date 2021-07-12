import React, {ChangeEvent, useState} from "react";
import s from './MyPosts.module.css';
import {Post} from "./Posts/Post";
import {addActionCreater} from "../../Redux/profile-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {DialogsPropsType} from "../../Dialogs/Dialogs";

type MyPostsType = {
    message: string;
    id: number;


}

export type MessagePosts = {
    messagesPost: Array<MyPostsType>
    messageNewPostText: string;
    addActionCreater: (messageNewPostText: string) => void


}

export type PostDataType = {
    messageNewPostText: string;
}


export const MyPosts = (props: MessagePosts) => {


    let postElement = props.messagesPost
        .map(p => <Post key={p.id} messages={p.message}/>)

    let addPostMessage = (values: PostDataType) => {
        props.addActionCreater(values.messageNewPostText)

    }
    return (

        <div className={s.posts}>
            {postElement}
            <div>
                <MyPostReduxForm onSubmit={addPostMessage}/>
            </div>

        </div>

    )
}


export const MyPostForm: React.FC<InjectedFormProps<MessagePosts>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name={'messageNewPostText'} placeholder='Enter your post'/>
            </div>
            <div>
                <button>Click</button>
            </div>
        </form>
    )
}

const MyPostReduxForm = reduxForm<MessagePosts>({form: 'addMessagePost'})(MyPostForm)