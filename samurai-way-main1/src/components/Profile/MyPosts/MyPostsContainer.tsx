import React from "react";
import {ActionTypes, addPostAC, PostsType, StoreType, updateNewPostTextAC} from "../../../redux/store";
import {MyPosts} from "./MyPosts";

export  type MyPostsPropsType = {
    store: StoreType
}


export const MyPostsContainer = (props: MyPostsPropsType) => {

    const state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostAC())
    }

    const onPostChange = (text: string) => {
        props.store.dispatch(updateNewPostTextAC(text))
    }

    return (<MyPosts updateNewPostText={onPostChange}
                     addPost={addPost}
                     posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}
    />)
}