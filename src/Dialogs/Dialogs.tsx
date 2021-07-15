import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

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
    addSendMessage: (newMessageText: string) => void
}

type MessageFormDataType = {
    newMessageText: string,

}

export const Dialogs = (props: DialogsPropsType) => {
    let messagesElement = props.messagesData.map(m => <Message key={m.id} message={m.message} id={m.id}/>);

    let dialogsElement = props.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>);

    let addMessageData = (values: MessageFormDataType) => {
        props.addSendMessage(values.newMessageText)
    }


    const onSubmit = (formData: MessageFormDataType) => {
        console.log(formData)

    }


    return (
        <div className={s.main}>
            <div className={s.dialogs}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
            </div>
            <AddMessageFormRedux onSubmit={addMessageData}/>
        </div>

    )
}
export const AddMessageForm: React.FC<InjectedFormProps<MessageFormDataType>> = (props ) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name={'newMessageText'} placeholder='Enter your message'/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<MessageFormDataType>({form: 'newMessage' })(AddMessageForm)