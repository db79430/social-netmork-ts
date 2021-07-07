import React from "react";


import {
    addSendMessageAC,
    addUPDATENewMessageAC,
} from "../Redux/dialogs-reducer";
import {Dialogs, DialogType, MessageType} from "./Dialogs";
import {connect} from "react-redux";
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



    return (<>
        <Dialogs addUPDATENewMessage={props.addUPDATENewMessage}
                 addSendMessage={props.addSendMessage}
                 messagesData={props.messagesData}
                 dialogs={props.dialogs}
                 newMessageText={props.newMessageText}/>
    </>)

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

