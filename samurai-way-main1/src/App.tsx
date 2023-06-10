import React from "react";
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {StateType} from "./redux/state";

type AppPropsType = {
    state: StateType
}

const App = (props: AppPropsType) => {
    return (
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs"
                           render={ () => <Dialogs
                               dialogsPageData={props.state.dialogsPage}/>}/>
                    <Route path="/profile"
                           render={ () => <Profile
                               profilePageData={props.state.profilePage}/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
    )
}

export default App;

