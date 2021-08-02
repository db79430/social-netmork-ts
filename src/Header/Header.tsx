import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";


type HeaderType = {
    isAuth: boolean,
    login: string,
    LogoutAuth: () => void

}


export const Header = (props: HeaderType) => {
    return (
        <header className={s.header}>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.LogoutAuth}></button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}

            </div>

        </header>

    )

}