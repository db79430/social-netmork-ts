import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {LoginAuth, LogoutAuth} from "../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../Redux/redux-store";



export type MapStateIsAuthPropsType = {
    isAuth: boolean
}


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

const Login = (props: FormDataType) => {
    const onSubmit = (formData: FormDataType) => {
        props.LoginAuth(formData.email, formData.password, formData.rememberMe)

    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }


    return (<div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>)


}

const mapStateToProps = (state: AppStateType): MapStateIsAuthPropsType => {
    return {
        isAuth: state.auth.isAuth,

    }


}
export default connect(mapStateToProps, {LoginAuth, LogoutAuth})(Login)