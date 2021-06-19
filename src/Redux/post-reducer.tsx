import React from "react";
import {MyPostsType} from "../Profile/MyPosts/MyPostsContainer";
import {getProfileUsers, profileApi} from "../api/API";
import {Dispatch} from "redux";

export type PostPageType = {
    messagesPost: Array<MyPostsType>,
    messageNewPostText: string


}

type AddPostType = {
    type: 'ADD-POST'

    postText: string
}

type UpdateNewPostType = {
    type: 'UPDATE-NEW-POST',
    newText: string

}

type UsersProfileType = {
    type: 'SET-USERS-PROFILE'
    profile: any
}
type StatusProfileType = {
    type: 'SET-STATUS'
    status: string
}


 export type ActionType = AddPostType | UpdateNewPostType | UsersProfileType | StatusProfileType

 export type InitialStatePostType = {
    postPage: PostPageType
     profile: any
     status: string

}

const initialState: InitialStatePostType = {
    profile: null,
    postPage: {
        messageNewPostText: '',
        messagesPost: [
            {"id": 1, "message": 'Hi',},
            {"id": 2, "message": 'How are you?'}],

    },
    status: ''

}


export const PostReducer = (state: InitialStatePostType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 5,
                message: action.postText /*action.postText*/ //this._state.newPost;
            }
            let copyState = {...state}
            copyState.postPage.messagesPost = [...state.postPage.messagesPost]
            copyState.postPage.messagesPost.push(newPost)


            /*state.postPage.messagesPost.push(newPost)*/
            return copyState;


        case "UPDATE-NEW-POST":
            let newCopyState = {...state}
            newCopyState.postPage.messageNewPostText = action.newText


            /*state.postPage.messageNewPostText = action.newText*/
            return newCopyState
        case "SET-USERS-PROFILE":
            return {
                ...state,
                profile: action.profile
            }
        case "SET-STATUS":
            return {
                ...state,
                status: action.status
            }


        default:
            return state
    }
};




export const addActionCreater = (postText: string) => {
    return {
        type: "ADD-POST",
        postText: postText
    } as const
}

export const addUPDATEActionCreater = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST",
        newText: newText
    } as const
}

export const setUsersProfileAC = (profile: any) => {
    return {
        type: 'SET-USERS-PROFILE',
        profile
    }
}
export const setStatusProfileAC = (status: string) => {
    return {
        type: 'SET-STATUS',
        status
    }

}



export const getUsersProfile = (usersId: number) => {
    return (dispatch:Dispatch) => {
        getProfileUsers(usersId).then(data => {
           dispatch(setUsersProfileAC(data))

        })

    }
}


export const getUserStatus = (usersId: number) => {
    return (dispatch:Dispatch) => {
        profileApi.getStatus(usersId).then(response=> {
            dispatch(setStatusProfileAC(response.data))

        })

    }
}

export const updateUserStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileApi.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusProfileAC(response.data))
            }

        })
    }

}


export type ActionAddPostType = ReturnType<typeof addActionCreater>

export type ActionUpdatePostType = ReturnType<typeof addUPDATEActionCreater>