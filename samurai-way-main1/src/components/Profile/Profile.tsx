import React from "react";
import s from "./Profile.module.css"
import {MyPosts, PostsType} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


type ProfilePropsType = {
    profilePageData: ProfilePageDataType

}
type ProfilePageDataType = {
    posts: PostsType[]
}


export const  Profile = (props: ProfilePropsType) => {
    return (
        <div >
            <ProfileInfo/>
            <MyPosts posts={props.profilePageData.posts}/>
        </div>
    )
}