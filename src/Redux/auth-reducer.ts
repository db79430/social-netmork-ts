import {authApi} from "../api/API";
import {Action, Dispatch} from "redux";
import {FormAction, stopSubmit} from "redux-form/lib/actions";
import {ThunkAction} from 'redux-thunk'
import {AppStateType} from "./redux-store";



export type InitialUsersAuthType = {
    id: number,
    email: string,
    login: string,
    isAuth: boolean

}
type SetUsersData = {
    type: "SET-USERS-DATA"
    data: InitialUsersAuthType
}

export const initialState: InitialUsersAuthType = {
    id: 1,
    email: '',
    login: '',
    isAuth: false
}

type ActionUsersAuthType = SetUsersData


export const AuthReducer = (state: InitialUsersAuthType = initialState, action: ActionUsersAuthType): InitialUsersAuthType => {
    switch (action.type) {
        case "SET-USERS-DATA":
            return {
                ...state,
                ...action.data,

            }
        default:
            return state
    }

}


export const setAuthUsersDataAC = (data: InitialUsersAuthType): SetUsersData => {
    return {
        type: "SET-USERS-DATA", data


    }
}

export const getAuthUsersData = () => (dispatch: Dispatch) => {
    authApi.me().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUsersDataAC(response.data.data))
        }
    })
}

export type ThunkType<TAction extends Action>  = ThunkAction<void, AppStateType, unknown, TAction>

export const LoginAuth = (email: string, password: string, rememberMe: boolean): ThunkType<any> => (dispatch) => {
    authApi.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
          dispatch(getAuthUsersData())
        } else {

            let message = response.data.messages.length > 0 ? response.data.messages[0]: 'Some Error'
            let action = stopSubmit('login', {_error: 'Common error'})
            dispatch(action)

        }
    })
}

export const LogoutAuth = () => (dispatch: Dispatch) => {
    authApi.logout().then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthUsersDataAC(data.data))
        }
    })
}











