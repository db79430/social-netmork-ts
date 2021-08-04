
import {Dispatch} from "redux";
import {getAuthUsersData, ThunkType} from "./auth-reducer";


export type InitialAppType = {
    initialized: boolean,


}
type SetInitializedType = {
    type: "SET-INITIALIZED"

}

export const initialState: InitialAppType = {
    initialized: false,

}

type ActionAppType = SetInitializedType


export const appReducer = (state: InitialAppType = initialState, action: ActionAppType): InitialAppType => {
    switch (action.type) {
        case "SET-INITIALIZED":
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }

}

export const setInitializedSuccess = () => ({
    type: "SET-INITIALIZED"
})

export const initializedApp = ():ThunkType<any> => (dispatch) => {
    let promise = dispatch(getAuthUsersData());
   Promise.all([promise]).then(() => {
        dispatch(setInitializedSuccess())
    })



}











