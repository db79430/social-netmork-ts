import React, {useState} from "react";
import {DialogType, MessageType} from "../Dialogs/Dialogs";
import {InitialUsersAuthType} from "./auth-reducer";


export type DialogsPropsType = {
    messagesData: Array<MessageType>
    dialogs: Array<DialogType>


}


/*type UpdateNewMessageTextStateType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newMessageText: string


}*/

type SendMessageType = {
    type: 'SEND-MESSAGE'
    newMessageText: string
}

export type ACDialogsType = {
    dispatch: (action:  /*ActionNewMessageType*/  ActionSendMessage) => void
}

export type ActionDialogsType = /*UpdateNewMessageTextStateType*/ | SendMessageType
export type IntialStateType = {

    dialogsPage: DialogsPropsType

}


const initialState: IntialStateType = {
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dasha'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Svetlana'},
            {id: 4, name: 'Dmitriy'},
            {id: 5, name: 'Petr'}
        ],


        messagesData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hello'},
            {id: 3, message: 'How are you'},
        ],

    }
}


export const DialogsReducer = (state: IntialStateType = initialState, action: ActionDialogsType) => {

    switch (action.type) {
        /*case "UPDATE-NEW-MESSAGE-TEXT":
            return {
                ...state,
                newMessageText: action.newMessageText
            }*/

        case "SEND-MESSAGE":
            let newMessage = action.newMessageText;
            return {
                ...state,
                messagesData: [...state.dialogsPage.messagesData, {id: 4, message: newMessage}],

            }

        default:
            return state;


    }
}
/*export const addUPDATENewMessageAC = (newMessageText: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        newMessageText: newMessageText
    } as const*/
// }
export const addSendMessageAC = (newMessageText: string) => {
    return {
        type: "SEND-MESSAGE",
        newMessageText
    } as const
}


/*export type ActionNewMessageType = ReturnType<typeof addUPDATENewMessageAC>*/
export type ActionSendMessage = ReturnType<typeof addSendMessageAC>

