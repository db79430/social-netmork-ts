import React from "react";
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
debugger
    return (
        <div className={s.message}> {props.message}
            <NavLink to={"/messages/" + props.id}/>
           <div className={s.message}>

                <div>
                    {/*<textarea ref={newDialogElement}></textarea>*/}

                </div>
                <div>
                    <button onClick={addButtonClick}>Click</button>

                </div>

            </div>



        </div>

    )
}

