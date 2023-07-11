import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionTypes, ProfilePageType} from "../../redux/state";


type ProfilePropsType = {
    profilePageData: ProfilePageType
    dispatch: (action: ActionTypes) => void
}


export const  Profile = (props: ProfilePropsType) => {
    return (
        <div >
            <ProfileInfo/>
            <MyPosts posts={props.profilePageData.posts}
                     newPostText={props.profilePageData.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    )
}