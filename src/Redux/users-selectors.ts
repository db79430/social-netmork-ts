import React from "react";
import {AppStateType} from "./redux-store";
import {createSelector} from "reselect";

export const getUsers = createSelector(getUsersSelector,
    (users) => {
    return users.filter(u => true)
})



export const getUsersSelector = (state: AppStateType) => {
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