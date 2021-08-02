import React, {ChangeEvent, useState} from "react";
import s from './MyPosts.module.css';
import {Post} from "./Posts/Post";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreater, requiredField} from "../../utils/validators/Validation";
import {Textarea} from "../../common/FormsControls/Formscontrols";

type MyPostsType = {
    message: string;
    id: number;


}

export type MessagePosts = {
    messagesPost: Array<MyPostsType>
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

let maxLength10 = maxLengthCreater(10)

export const MyPostForm: React.FC<InjectedFormProps<PostDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'messageNewPostText'} placeholder='Enter your post' validate={[requiredField, maxLength10]}/>
            </div>
            <div>
                <button>Click</button>
            </div>
        </form>
    )
}

const MyPostReduxForm = reduxForm<PostDataType>({form: 'addMessagePost'})(MyPostForm)