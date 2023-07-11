import React, {ChangeEvent, RefObject, useState} from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Posts/Post";
import {ActionTypes, addPostAC, PostsType, updateNewPostTextAC} from "../../../redux/state";

export  type MyPostsPropsType = {
    posts: PostsType[]
    newPostText: string
    dispatch: (action: ActionTypes) => void
}


export const MyPosts = (props: MyPostsPropsType) => {
    //const [newPostText, setNewPostText] = useState("")

    const postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.dispatch(addPostAC())
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
       props.dispatch(updateNewPostTextAC(e.currentTarget.value))
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