import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Posts/Post";

export  const MyPosts = () => {
    return (
        <div className={s.posts}>
            My posts
            <div className={s.item}>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.post}>
                <Post message="Hi!"/>
                <Post message="It's my first post"/>
                <div>
                    post 2
                </div>
            </div>
        </div>
    )
}