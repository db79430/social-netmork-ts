import React from "react";


import {
    addSendMessageAC,
} from "../Redux/dialogs-reducer";
import {Dialogs, DialogType, MessageType} from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose, Dispatch} from "redux";
import {AppStateType, store} from "../Redux/redux-store";


type MapStateDialogsType = {
    dialogs: Array<DialogType>
    messagesData: Array<MessageType>

}

type MapDispatchDialogsType = {
    addSendMessage: (newMessageText: string) => void
    /*ddUPDATENewMessage: (newMessageText: string) => void*/
}

type DialogsContainerType = MapDispatchDialogsType & MapStateDialogsType


const DialogsContainer = (props: DialogsContainerType) => {
    return (<>
        <Dialogs messagesData={props.messagesData}  addSendMessage={props.addSendMessage}  dialogs={props.dialogs}/>
    </>)

}


let mapStateToProps = (state: AppStateType):MapStateDialogsType => {
    return {
        dialogs: state.dialogs.dialogsPage.dialogs,
        messagesData: state.dialogs.dialogsPage.messagesData
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchDialogsType => {
    return {
        addSendMessage: (newMessageText: string) => {
            dispatch(addSendMessageAC(newMessageText))

        }

    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), WithAuthRedirect)(DialogsContainer)

/*
addUPDATENewMessage: (newMessageText: string) => {
    dispatch(addUPDATENewMessageAC(newMessageText))
}*/
