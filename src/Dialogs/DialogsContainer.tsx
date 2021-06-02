import React, {ChangeEvent} from "react";


import {
    ActionNewMessageType,
    ActionSendMessage,
    addSendMessageAC,
    addUPDATENewMessageAC,
    IntialStateType
} from "../Redux/dialogs-reducer";
import {Dialogs, DialogsPropsType, DialogType, MessageType} from "./Dialogs";
import {connect} from "react-redux";
import {InitialUsersAuthType} from "../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose, Dispatch} from "redux";
import {AppStateType, store} from "../Redux/redux-store";


type MapStateDialogsType = {
    messagesData: Array<MessageType>
    dialogs: Array<DialogType>
    newMessageText: string
}

type MapDispatchDialogsType = {
    addSendMessage: () => void
    addUPDATENewMessage: (newMessageText: string) => void
}

type DialogsContainerType = MapDispatchDialogsType & MapStateDialogsType


const DialogsContainer = (props: DialogsContainerType) => {

    // let messagesElement = props.messagesData.map
    // (
    //     m => <Message key={m.id} message={m.message} id={m.id}/>
    // );
    //
    // let dialogsElement = props.dialogs.map
    // (
    //     d => <DialogItem key={d.id} id={d.id} name={d.name}/>
    // );
    //
    // let newMessageText = props.newMessageText;
    //
    // let onSendMessageClick = () => {
    //     props.store.dispatch(addSendMessage())
    //
    // }
    // let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     let newMessageText = e.target.value;
    //     props.store.dispatch(addUPDATENewMessageAC(newMessageText))
    //
    //
    // }


    return (<>
        <h1>DialogsContainer</h1>
        <Dialogs addUPDATENewMessage={props.addUPDATENewMessage}
                 addSendMessage={props.addSendMessage}
                 messagesData={props.messagesData}
                 dialogs={props.dialogs}
                 newMessageText={props.newMessageText}/>
    </>)

    /* /!*<div className={s.main}>
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
             {/!*<Message message={messageData[0].message} id={messageData[0].id}/>
             <Message message={messageData[1].message} id={messageData[1].id}/>
             <Message message={messageData[2].message} id={messageData[2].id}/>*!/}


         </div>
     </div>

 )
*/

}


let mapStateToProps = (state: AppStateType): MapStateDialogsType => {
    return {
        dialogs: state.dialogs.dialogsPage.dialogs,
        messagesData: state.dialogs.dialogsPage.messagesData,
        newMessageText: state.dialogs.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchDialogsType => {
    return {
        addSendMessage: () => {
            dispatch(addSendMessageAC())

        },
        addUPDATENewMessage: (newMessageText: string) => {
            dispatch(addUPDATENewMessageAC(newMessageText))
        }

    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), WithAuthRedirect)(DialogsContainer)

/*
const AuthRedirectComponent = WithAuthRedirect(Dialogs)

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)*/
