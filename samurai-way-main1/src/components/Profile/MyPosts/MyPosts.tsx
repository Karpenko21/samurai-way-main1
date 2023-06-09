import React, {ChangeEvent, RefObject, useState} from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Posts/Post";
import {PostsType} from "../../../redux/state";

export  type MyPostsPropsType = {
    posts: PostsType[]
    newPostText: string
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
}


export const MyPosts = (props: MyPostsPropsType) => {
    //const [newPostText, setNewPostText] = useState("")

    const postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.addPost(props.newPostText)
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
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}