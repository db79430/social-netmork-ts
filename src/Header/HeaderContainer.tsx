import React from "react"
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/redux-store";
import {LogoutAuth} from "../Redux/auth-reducer";


export type MapStateAuthPropsType = {
    login: string,
    isAuth: boolean,


}

export type MapStateAuthDispatchType = {
    LogoutAuth: () => void


}

export type ActionUsersAuthType = MapStateAuthPropsType & MapStateAuthDispatchType


class HeaderContainer extends React.Component <ActionUsersAuthType> {



    render() {
        return <Header LogoutAuth={this.props.LogoutAuth}  isAuth={this.props.isAuth}   login={this.props.login} />
    }


}


const mapStateToProps = (state: AppStateType): MapStateAuthPropsType => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,

    }


}


export default connect(mapStateToProps, {LogoutAuth})(HeaderContainer)