import React from 'react';
import './App.css';
import {Header} from "./Header";
import {Navigation} from "./Nav";
import {Profile} from "./ProfileTSX";


function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navigation/>
            <Profile/>


        </div>
    )
};



export default App;
