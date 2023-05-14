import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Posts/Post";

type MyPostsPropsType = {
    posts: PostsType[]
}
export type PostsType = {
    id: string,
    message: string,
    likesCount: string
}

export const MyPosts = (props: MyPostsPropsType) => {

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
                {props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)}
            </div>
        </div>
    )
}