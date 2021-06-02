import React, {Component, ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {InitialUsersAuthType} from "../Redux/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/redux-store";

export type MapStateRedirectType = {
    isAuth: boolean

}
const mapStateRedirect = (state: AppStateType  ): MapStateRedirectType  => {
    return {
        isAuth: state.auth.isAuth

    }

}

export function WithAuthRedirect<T>(Component: ComponentType<T>)  {
  const RedirectComponent =(props: MapStateRedirectType) => {
      let {isAuth, ...restProps} = props // деструктуризация
        if (!isAuth) return <Redirect to={'/login'}/>
        return <Component  {...restProps as T}/>
    }



    let ComponentAuthRedirect = connect(mapStateRedirect)(RedirectComponent)
    return ComponentAuthRedirect

}