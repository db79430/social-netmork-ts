import React from "react";
import {AppStateType} from "./redux-store";

export const getUsers = (state: AppStateType) => {
    return state.users.users.filter(u => true)
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