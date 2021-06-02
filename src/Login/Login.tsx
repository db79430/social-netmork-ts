import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getAuthUsersData} from "../Redux/auth-reducer";

export const Login = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAuthUsersData())
    }, [])

    return<h1>Login</h1>

}