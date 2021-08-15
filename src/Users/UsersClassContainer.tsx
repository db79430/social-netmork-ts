import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../Redux/redux-store';
import {
    followThunk, getUsersData, getUsersThunkCreater,
    setCurrentPageAC,
    unfollowThunk,
    UsersType,
} from '../Redux/users-reducer';
import {UsersFunctional} from './UsersFunctional';
import {compose} from 'redux';
import {Preloader} from '../common/Pleloader';
import {
    getCurrentPage,
    getIsFetching,
    getIsnProgress,
    getPageSize,
    getTotalCount, getUsers,
    getUsersSelector,
} from "../Redux/users-selectors";

export type MapStatePropsType = {
    users: Array<UsersType>
    currentPage: number
    totalCount: number
    pageSize: number
    isFetching: boolean
    InProgress: Array<number>


}

export type MapStateDispatchType = {
    follow: (usersID: number) => void,
    unfollow: (usersID: number) => void,
    setUsers: (users: Array<UsersType>) => void
    setCurrentPages: (numberPage: number) => void
    setTotalCounters: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleIsFollowing: (isFetching: boolean, usersId: number, InProgress: []) => void
    getUsersThunkCreater: (currentPage: number, pageSize: number) => void
    followThunk: (userId: number) => void
    unfollowThunk: (userId: number) => void
    getUsersData: (currentPage: number, pageSize: number) => void


}


export type UsersMapsType = MapStatePropsType & MapStateDispatchType


class UsersAPIComponents extends React.Component<UsersMapsType> {

    componentDidMount() {
        this.props.getUsersThunkCreater(this.props.currentPage, this.props.pageSize)
    }

    onPageChange() {
        this.props.getUsersData(this.props.currentPage, this.props.pageSize)

    }

    render() {
        return <>
            {
                this.props.isFetching ? <Preloader/> : null
            }
            <UsersFunctional getUsersData={this.props.getUsersData}
                             unfollowThunk={this.props.unfollowThunk}
                             followThunk={this.props.followThunk}
                             getUsersThunkCreater={this.props.getUsersThunkCreater}
                             InProgress={this.props.InProgress}
                             toggleIsFollowing={this.props.toggleIsFollowing}
                             isFetching={this.props.isFetching}
                             toggleIsFetching={this.props.toggleIsFetching}
                             unfollow={this.props.unfollow}
                             setUsers={this.props.setUsers}
                             setTotalCounters={setCurrentPageAC}
                             setCurrentPages={this.props.setCurrentPages}
                             follow={this.props.follow}
                             currentPage={this.props.currentPage}
                             pageSize={this.props.pageSize}
                             users={this.props.users}
                             totalCount={this.props.totalCount}
                             onPageChange={this.onPageChange}
            />
        </>
    }


}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        InProgress: getIsnProgress(state),


    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {
            followThunk,
            unfollowThunk,
            getUsersThunkCreater,
            getUsersData
        })
)(UsersAPIComponents)


