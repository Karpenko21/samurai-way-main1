import React from "react";
import s from "./Profile.module.css"
import {MyPosts, PostsType} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


type ProfilePropsType = {
   posts: PostsType[]
}


export const  Profile = (props: ProfilePropsType) => {
    return (
        <div >
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}