import {AppStateType} from "./redux-store";
import {createSelector} from "reselect";



export const getUsersSelector = (state:AppStateType) => createSelector([getUsers],
    (users) => {
    return users.filter(u => true)
})

export const getUsers = (state: AppStateType) => {
    return state.users.users
}



export const getPageSize = (state: AppStateType) => {
    return state.users.pageSize
}

export const getTotalCount = (state: AppStateType) => {
    return state.users.totalCount
}

export const getCurrentPage = (state: AppStateType) => {
    return state.users.currentPage
}

export const getIsFetching = (state: AppStateType) => {
    return state.users.isFetching
}

export const getIsnProgress = (state: AppStateType) => {
    return state.users.InProgress
}