import React from 'react';
import './App.css';

import {Navigation} from "./Nav/Nav";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {News} from "./Nav/News/News";
import {Settings} from "./Nav/Settings/Settings";
import {Music} from "./Nav/Music/Music";
import {Store} from "redux";
import UsersClassContainer from "./Users/UsersClassContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import HeaderContainer from "./Header/HeaderContainer";
import {Login} from "./Login/Login";
import DialogsContainer from "./Dialogs/DialogsContainer";


export type AppPropsType = {}

const App: React.FC<AppPropsType> = () => {

    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navigation/>

            <div className="app-wrapper-content">
                <Switch>
                    <Route exact path={'/dialogs'} render={() => <DialogsContainer />}/>
                    <Route path={'/profile/:usersID?'} render={() => <ProfileContainer/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/users'} render={() => <UsersClassContainer />}/>
                    <Route path={'/login'} render={() => <Login/>}/>
                    <Route path={'*'} render={() => <div>404 not found</div>}/>
                </Switch>
            </div>

        </div>


    )
};


export default App;
