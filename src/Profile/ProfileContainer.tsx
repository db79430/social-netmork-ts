import React from "react";
import {
    getUsersProfile, getUserStatus,
    updateUserStatus
} from "../Redux/profile-reducer";
import {Profile} from "./ProfileTSX";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";
import {AppStateType} from "../Redux/redux-store";
import {compose} from "redux";


type ProfileContainerType = MapStateProfileType & MapDispatchProfileType

type MapStateProfileType = {
    profile: any
    status: string
    authorizedUserId: number
    isAuth: boolean


}


type MapDispatchProfileType = {
    getUsersProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void


}

type MatchParamsType = {
    userId: number

}

type PropsMatchType = RouteComponentProps<MatchParamsType> & ProfileContainerType

class ProfileContainer extends React.Component<PropsMatchType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId= this.props.authorizedUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUsersProfile(userId)
        this.props.getUserStatus(userId)


    }

    render() {


        return (
            <div>
                <Profile updateUserStatus={this.props.updateUserStatus}
                         status={this.props.status}
                         getUsersProfile={this.props.getUsersProfile}
                         profile={this.props.profile}
                />

            </div>


        )

    }


}


const mapStateToProps = (state: AppStateType): MapStateProfileType => {
    return {
        profile: state.post.profile,
        status: state.post.status,
        isAuth: state.auth.isAuth,
        authorizedUserId: state.auth.id,

    }

}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUsersProfile, getUserStatus, updateUserStatus}),
    withRouter,
    WithAuthRedirect)(ProfileContainer)


