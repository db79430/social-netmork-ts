import {authApi} from "../api/API";
import {Dispatch} from "redux";


export type InitialUsersAuthType = {
    id: number,
    email: string,
    login: string,
    isAuth: boolean

}
type SetUsersData = {
    type: "SET-USERS-DATA"
    data : InitialUsersAuthType
}

 export const initialState: InitialUsersAuthType = {
    id: 2,
    email: 'blabla@bla.bla',
    login: 'samurai',
    isAuth: false
}

type ActionUsersAuthType = SetUsersData




export const AuthReducer = (state: InitialUsersAuthType = initialState, action: ActionUsersAuthType): InitialUsersAuthType => {
    switch (action.type) {
        case "SET-USERS-DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }

}


export const setAuthUsersDataAC = (data: InitialUsersAuthType): SetUsersData => {
    return {type: "SET-USERS-DATA", data}
}

export const  getAuthUsersData = () => (dispatch: Dispatch) => {
        authApi.me().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUsersDataAC(data.data))
            }
        })
    }











