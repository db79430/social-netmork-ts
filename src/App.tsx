import React from 'react';
import './App.css';
import {Navigation} from "./Nav/Nav";
import {Route, Switch, withRouter} from "react-router-dom";
import {News} from "./Nav/News/News";
import {Settings} from "./Nav/Settings/Settings";
import {Music} from "./Nav/Music/Music";
import UsersClassContainer from "./Users/UsersClassContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import HeaderContainer from "./Header/HeaderContainer";
import DialogsContainer from "./Dialogs/DialogsContainer";
import Login from "./Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializedApp} from "./Redux/app-reducer";
import {AppStateType} from "./Redux/redux-store";
import {Preloader} from "./common/Pleloader";


export type AppPropsType = {
    initializedApp: () => void
    initialized: boolean

}

type MapStateToPropsType = {
    initialized: boolean
}

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializedApp()
    }

    render() {
        if (this.props.initialized) {
            return <Preloader/>
        }

            return (
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navigation/>

                    <div className="app-wrapper-content">
                        <Switch>
                            <Route exact path={'/dialogs'} render={() => <DialogsContainer/>}/>
                            <Route path={'/profile/:usersID?'} render={() => <ProfileContainer/>}/>
                            <Route path={'/news'} render={() => <News/>}/>
                            <Route path={'/settings'} render={() => <Settings/>}/>
                            <Route path={'/music'} render={() => <Music/>}/>
                            <Route path={'/users'} render={() => <UsersClassContainer/>}/>
                            <Route path={'/login'} render={() => <Login/>}/>
                            <Route path={'*'} render={() => <div>404 not found</div>}/>
                        </Switch>
                    </div>

                </div>


            )
    }
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({

    initialized: state.app.initialized

})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializedApp,})(App));
