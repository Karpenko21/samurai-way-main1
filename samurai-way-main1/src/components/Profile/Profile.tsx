import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";


type ProfilePropsType = {
    profilePageData: ProfilePageType
    addPost: (postMessage: string ) => void
    updateNewPostText: (newText: string) => void
}


export const  Profile = (props: ProfilePropsType) => {
    return (
        <div >
            <ProfileInfo/>
            <MyPosts posts={props.profilePageData.posts}
                     addPost={props.addPost}
                     newPostText={props.profilePageData.newPostText}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}