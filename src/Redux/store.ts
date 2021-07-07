

import {ActionType} from "./profile-reducer";
import {ActionDialogsType} from "./dialogs-reducer";

/*
export type MessageType = {
    message: string;
    id: number;

}

export type DialogType = {
    name: string;
    id: number;

}

export type MyPostsType = {
    message: string;
    id: number;


}
export type DialogsPropsType = {
    messagesData: Array<MessageType>
    dialogs: Array<DialogType>
    newMessageText: string

}

export type PostPageType = {
    messagesPost: Array<MyPostsType>,
    messageNewPostText: string


}


export type RootStateType = {
    dialogsPage: DialogsPropsType
    postPage: PostPageType
    sidebar: string



}

export type StoreType = {
    _state: RootStateType
    addPostMessage: (postText: string) => void
    onPostChange: (newText: string) => void
    Subscribe: (observer: () => void) => void
    _callSubscribe: () => void
    getState: () => RootStateType
    dispatch: (action: ActionType | ActionDialogsType ) => void

}


export const store: StoreType = {
    _state:  {
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
            newMessageText: ''
        },
        postPage: {
            messageNewPostText: '',
            messagesPost: [
                {"id": 1, "message": 'Hi',},
                {"id": 2, "message": 'How are you?'}]


        },

        sidebar: " "
    },


    getState() {
        return this._state;
    },
    addPostMessage(postText: string) {
        const newPost: MyPostsType = {
            id: new Date().getTime(),
            message: postText // this._state.newPost.
        }
        /!* /!* state.dialogsPage.dialogs.push()*!/!*!/
        this._state.postPage.messagesPost.push(newPost)

        this._callSubscribe();
    },
    onPostChange(newText: string) {
        this._state.postPage.messageNewPostText = newText;
        this._callSubscribe();

    },
    Subscribe(observer) {
        this._callSubscribe = observer; // паттерн наблюдатель

    },
    _callSubscribe() {
        this._state

    },


    dispatch(action) {

    }
}
*/

