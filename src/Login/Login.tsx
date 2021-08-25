import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {connect, useSelector} from "react-redux";
import {LoginAuth, LogoutAuth} from "../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../Redux/redux-store";


export type FormDataType = {
    login: string
    LoginAuth: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
    email: string,
    password: string,
    rememberMe: boolean,


}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={'login'} placeholder={'Login'} component={'input'}/>
        </div>
        <div>
            <Field name={'password'} placeholder={'Password'} component={'input'} type={'password'}/>
        </div>
        <div>
            <Field name={'rememberMe'} component={'input'} type={'checkbox'}/>remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>


}

export const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

export const Login: React.FC = () => {
    const onSubmit = (formData: FormDataType) => {
        LoginAuth(formData.email, formData.password, formData.rememberMe)

    }
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth);

    return (<div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>)

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }


}



