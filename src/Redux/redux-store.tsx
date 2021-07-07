import {applyMiddleware, combineReducers, createStore} from "redux";
import {ProfileReducer} from "./profile-reducer";
import {DialogsReducer} from "./dialogs-reducer";
import {SidebarReducer} from "./sidebar-reducer";
import {UsersReducer} from "./users-reducer";
import {AuthReducer} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'
const reducer = combineReducers(
    {
        post:ProfileReducer,
        dialogs: DialogsReducer,
        sidebar: SidebarReducer,
        users: UsersReducer,
        auth: AuthReducer,
    }
)

export  type AppStateType = ReturnType<typeof reducer>
export const store =  createStore(reducer, applyMiddleware(thunkMiddleware));
