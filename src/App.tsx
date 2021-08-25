import React, {ComponentType} from 'react';
import './App.css';
import {Navigation} from "./Nav/Nav";
import {BrowserRouter, Route, Switch, withRouter} from "react-router-dom";
import {News} from "./Nav/News/News";
import {Settings} from "./Nav/Settings/Settings";
import {Music} from "./Nav/Music/Music";
import UsersClassContainer from "./Users/UsersClassContainer";
import HeaderContainer from "./Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializedApp} from "./Redux/app-reducer";
import {AppStateType, store} from "./Redux/redux-store";
import {Preloader} from "./common/Pleloader";
import {LoginContainer} from "./Login/LoginContainer";
import {WithSuspense} from "./hoc/WithSuspenece";

const DialogsContainer = React.lazy(() => import ('./Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import ('./Profile/ProfileContainer'))

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializedApp: () => void
}

class App extends React.Component<MapPropsType & DispatchPropsType> {

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
                        <Route exact path={'/dialogs'} render={() => {
                            return WithSuspense(DialogsContainer)

                        }}/>
                        <Route path={'/profile/:usersID?'} render={() =>{
                            return WithSuspense(ProfileContainer)

                        }}/>
                        <Route path={'/news'} render={() => <News/>}/>
                        <Route path={'/settings'} render={() => <Settings/>}/>
                        <Route path={'/music'} render={() => <Music/>}/>
                        <Route path={'/users'} render={() => <UsersClassContainer/>}/>
                        <Route path={'/login'} render={() => <LoginContainer/>}/>
                        <Route path={'*'} render={() => <div>404 not found</div>}/>
                    </Switch>
                </div>

            </div>


        )
    }
};

const mapStateToProps = (state: AppStateType) => ({

    initialized: state.app.initialized

})

const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializedApp,})(App));

const SocialNetworkApp: React.FC = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default SocialNetworkApp;
