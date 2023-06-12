import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost, PostsType} from "../../redux/state";


type ProfilePropsType = {
    profilePageData: ProfilePageDataType
    addPost: (postMessage: string ) => void

}
type ProfilePageDataType = {
    posts: PostsType[]
}


export const  Profile = (props: ProfilePropsType) => {
    return (
        <div >
            <ProfileInfo/>
            <MyPosts posts={props.profilePageData.posts} addPost={props.addPost}/>
        </div>
    )
}