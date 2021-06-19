import {getFollowUsers, getUnFollowUsers, getUsers, getUsers2} from "../api/API";
import {Dispatch} from "redux";

export  type UsersType = {
    id: number,
    followed: boolean,
    fullName: string,
    status: string,
    location: {
        city: string,
        country: string
    }
}

type FollowACType = {
    type: 'FOLLOW-USERS'
    usersId: number
}

type UnFollowACType = {
    type: 'UNFOLLOW-USERS'
    usersId: number

}

type SetUsersType = {
    type: 'SET-USERS'
    users: Array<UsersType>,

}


export type InitialUsersType = {
    users: Array<UsersType>,
    pageSize: number,
    totalCount: number,
    currentPage: number,
    isFetching: boolean,
    InProgress: Array<number>

}


export type PageUsersType = {
    type: 'PAGE-USERS'
    currentPage: number


}
export type TotalCountsType = {
    type: 'USERS-TOTAL-COUNT'
    totalCount: number
}

export type IsFetchingType = {
    type: 'TOGGLE-IS-FETCHING'
    isFetching: boolean
}

export type InProgressType = {
    type: 'TOGGLE-IS-FOLLOWING'
    isFetching: boolean
    InProgress: []
    usersId: number


}

export type ActionUsersType = FollowACType
    | UnFollowACType
    | SetUsersType
    | PageUsersType
    | TotalCountsType
    | IsFetchingType
    | InProgressType
const initialState: InitialUsersType = {

    users: [
        /*{id: 1, followed: false, fullName: 'Daria', status: 'I am boss', location: {city: 'Moscow', country: 'Russia'}},
        {
            id: 2,
            followed: true,
            fullName: 'Anna',
            status: 'I am boss too',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3,
            followed: false,
            fullName: 'Maria',
            status: 'I am boss too',
            location: {city: 'Moscow', country: 'Russia'}
        },*/
    ],
    pageSize: 1,
    totalCount: 0,
    currentPage: 10,
    isFetching: false,
    InProgress: []

}


export const UsersReducer = (state: InitialUsersType = initialState, action: ActionUsersType): InitialUsersType => {


    switch (action.type) {
        case 'FOLLOW-USERS':
            return {
                ...state,
                users: state.users.map(u => {
                        if (u.id === action.usersId) {
                            return {...u, followed: true}
                        }
                        return u;
                    }
                )
            };
        case 'UNFOLLOW-USERS':
            return {
                ...state,
                users: state.users.map(u => {
                        if (u.id === action.usersId) {
                            return {...u, followed: false}
                        }
                        return u;
                    }
                )
            };
        case "SET-USERS":

            return {

                ...state,
                users: [...state.users, ...action.users],

            };
        case "PAGE-USERS":
            return {
                ...state,
                currentPage: action.currentPage
            };
        case "USERS-TOTAL-COUNT":
            return {
                ...state,
                totalCount: action.totalCount
            };
        case "TOGGLE-IS-FETCHING":
            return {
                ...state,
                isFetching: action.isFetching

            };
        case "TOGGLE-IS-FOLLOWING":
            return {
                ...state,
                InProgress: action.isFetching ? [...state.InProgress, action.usersId]
                    : state.InProgress.filter(id => id != action.usersId)
            }

        default:
            return state;


    }
}
export const followAC = (usersId: number) => {
    return {
        type: 'FOLLOW-USERS',
        usersId

    } as const
}
export const unfollowAC = (usersId: number) => {
    return {
        type: 'UNFOLLOW-USERS',
        usersId


    } as const
}

export const setUsersAC = (users: Array<UsersType>) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'PAGE-USERS',
        currentPage
    }
}

export const setTotalUsersCountAC = (totalCount: number) => {
    return {
        type: 'USERS-TOTAL-COUNT',
        totalCount
    }
}

export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching
    }
}

export const toggleIsFollowingAC = (isFetching: boolean, usersId: number, InProgress: []) => {
    return {
        type: 'TOGGLE-IS-FOLLOWING',
        isFetching, usersId, InProgress
    }

}

export const getUsersThunkCreater = (currentPage: number, pageSize: number) => {
    return (dispatch: any) => {
        dispatch(toggleIsFetchingAC(true))
        getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetchingAC(false))
            dispatch(setUsersAC(data.items))
            dispatch(setTotalUsersCountAC(data.totalCount))


        })
    }
}

export const getAuthUsersData = (currentPage: number, pageSize: number) => {
    return (dispatch: any) => {
        dispatch(setCurrentPageAC(currentPage))
        getUsers2(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetchingAC(false))
            dispatch(setUsersAC(data.items))

        })
    }
}

    export const followThunk = (userId: number) => {
        return (dispatch: any, getState: any) => {
            dispatch(toggleIsFetchingAC(false))

            getFollowUsers(userId).then(data => {
                if (data.resultCode === 0) {
                    dispatch(followAC(userId))

                }
                /*dispatch(toggleIsFollowingAC(true, userId, []))*/

            })

        }

    }

    export const unfollowThunk = (userId: number) => {
        return (dispatch: any) => {
            dispatch(toggleIsFetchingAC(true))


            getUnFollowUsers(userId).then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowAC(userId))

                }
                /*dispatch(toggleIsFollowingAC(false, userId, []))*/
            })

        }
    }















