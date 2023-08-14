import React, {ChangeEvent, RefObject, useState} from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Posts/Post";
import {ActionTypes, addPostAC, PostsType, updateNewPostTextAC} from "../../../redux/store";

export  type MyPostsPropsType = {
    posts: PostsType[]
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: () => void

}


export const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const onAddPost = () => {
        props.addPost()
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
       props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div className={s.item}>
                <div>
                    <textarea value={props.newPostText} onChange={onPostChange} ref={newPostElement}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}