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
import {ActionTypes, StateType, StoreType} from "./redux/store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
    state: StateType
    dispatch: (action: ActionTypes) => void
    store: StoreType
}

const App = (props: AppPropsType) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className="app-wrapper-content">
                <Route path="/dialogs"
                       render={() => <DialogsContainer store={props.store}/>}/>
                <Route path="/profile"
                       render={() => <Profile store={props.store}/>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>
    )
}

export default App;

