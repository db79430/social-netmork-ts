import React from "react";
import {MyPostsType} from "../Profile/MyPosts/MyPostsContainer";
import {getProfileUsers, profileApi} from "../api/API";
import {Dispatch} from "redux";

export type PostPageType = {
    messagesPost: Array<MyPostsType>,



}

type AddPostType = {
    type: 'ADD-POST'
    messageNewPostText: string
}



type UsersProfileType = {
    type: 'SET-USERS-PROFILE'
    profile: null


}
type StatusProfileType = {
    type: 'SET-STATUS'
    status: string
}


 export type ActionType = AddPostType |  UsersProfileType | StatusProfileType

 export type InitialStatePostType = {
    postPage: PostPageType,
     profile: null,
     status: string

}

const initialState: InitialStatePostType = {
    profile: null,
    postPage: {
        messagesPost: [
            {"id": 1, "message": 'Hi',},
            {"id": 2, "message": 'How are you?'}],

    },
    status: ''

}


export const ProfileReducer = (state: InitialStatePostType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 6,
                message: action.messageNewPostText
            }
            let copyState = {...state}
            copyState.postPage.messagesPost = [...state.postPage.messagesPost]
            copyState.postPage.messagesPost.push(newPost)


            return copyState;

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




export const addActionCreater = (messageNewPostText: string) => {
    return {
        type: "ADD-POST",
        messageNewPostText
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

