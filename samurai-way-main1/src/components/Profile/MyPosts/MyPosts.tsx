import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Posts/Post";

export const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div className={s.item}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message="Hi!" likesCount='5'/>
                <Post message="It's my first post" likesCount='17'/>
                <div>
                    post 2
                </div>
            </div>
        </div>
    )
}