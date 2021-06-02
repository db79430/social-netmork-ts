import React from "react"
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUsersData, setAuthUsersDataAC} from "../Redux/auth-reducer";
import {AppStateType} from "../Redux/redux-store";


export type MapStateAuthPropsType = {
    login: string


}

export type MapStateAuthDispatchType = {
    getAuthUsersData: () => void


}

export type ActionUsersAuthType = MapStateAuthPropsType & MapStateAuthDispatchType


class HeaderContainer extends React.Component <ActionUsersAuthType> {

    componentDidMount() {
        this.props.getAuthUsersData()
    }

    render() {
        return <Header getAuthUsersData={this.props.getAuthUsersData}/>
    }


}


const mapStateToProps = (state: AppStateType): MapStateAuthPropsType => {
    return {
        login: state.auth.login

    }
}


export default connect(mapStateToProps, {getAuthUsersData})(HeaderContainer)