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

}


type MapDispatchProfileType = {
    getUsersProfile: (usersId: string) => void
    getUserStatus: (usersId: string) => void
    updateUserStatus: (status: string) => void
}

type MatchParamsType = {
    usersId: string
}

type PropsMatchType = RouteComponentProps<MatchParamsType> & ProfileContainerType

class ProfileContainer extends React.Component<PropsMatchType> {
    componentDidMount() {
        let usersId = this.props.match.params.usersId
        this.props.getUsersProfile(usersId)
        this.props.getUserStatus(usersId)
        this.props.updateUserStatus('')

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
        status: state.post.status
    }

}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUsersProfile, getUserStatus, updateUserStatus}),
    withRouter,
    WithAuthRedirect)(ProfileContainer)


