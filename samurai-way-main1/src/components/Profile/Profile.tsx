import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionTypes, ProfilePageType, StoreType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


type ProfilePropsType = {
   store: StoreType
}


export const  Profile = (props: ProfilePropsType) => {
    return (
        <div >
            <ProfileInfo/>
            <MyPostsContainer store = {props.store} />
        </div>
    )
}