import React, {RefObject} from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Posts/Post";
import {PostsType} from "../../../redux/state";

export  type MyPostsPropsType = {
    posts: PostsType[]
    addPost: (postMessage: string) => void
}


export const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (newPostElement.current)
        props.addPost(newPostElement.current.value)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div className={s.item}>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}