import React from "react";
import {Login} from "./Login";
import {AppStateType} from "../Redux/redux-store";
import {connect} from "react-redux";
import {LoginAuth, LogoutAuth} from "../Redux/auth-reducer";



export type MapStateIsAuthPropsType = {
    isAuth: boolean
}





const mapStateToProps = (state: AppStateType): MapStateIsAuthPropsType => {
    return {
        isAuth: state.auth.isAuth,

    }


}
export const LoginContainer =  connect(mapStateToProps, {LoginAuth, LogoutAuth})(Login)
