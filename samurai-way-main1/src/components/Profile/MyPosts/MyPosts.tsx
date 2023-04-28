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
            <div>
                <Post/>
                <Post/>
                <Post/>
                <div>
                    post 2
                </div>
            </div>
        </div>
    )
}