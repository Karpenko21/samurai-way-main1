import React from "react";
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs, DialogsType, MessagesType} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {PostsType} from "./components/Profile/MyPosts/MyPosts";

type AppPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    posts: PostsType[]
}

const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={ () => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route path="/profile" render={ () => <Profile posts={props.posts}/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;

