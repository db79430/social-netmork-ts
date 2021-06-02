import React, {useState} from "react";
import s from './Message.module.css';
import {NavLink} from "react-router-dom";


type MessageType = {
    message: string;
    id: number;


}


export const Message = (props: MessageType) => {
    let newDialogElement = React.createRef<HTMLTextAreaElement>()
    let addButtonClick = () => {
        let text = newDialogElement.current?.value;
        alert(text)
    }

    return (
        <div className={s.message}> {props.message}
            <NavLink to={"/message/" + props.id}></NavLink>
            <div className={s.message}>

                <div>
                    <textarea ref={newDialogElement}>Add Message</textarea>

                </div>
                <div>
                    <button onClick={addButtonClick}>Click</button>

                </div>

            </div>


        </div>

    )
}

