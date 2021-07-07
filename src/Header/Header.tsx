import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {ActionUsersAuthType} from "./HeaderContainer";

type HeaderType = {
    getAuthUsersData: () => void
}


export const Header = (props: HeaderType) => {
    return (
        <header className={s.header}>
            <div className={s.loginBlock}>
               <NavLink to={'/login'}>Login</NavLink>

            </div>

        </header>

    )

}