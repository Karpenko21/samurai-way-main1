import React from "react";
import s from "./Post.module.css"

type PostProps = {
    message: string
}

export const Post = (props: PostProps) => {

    return (
        <div className={s.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGdKVxeuJpPA0gvYQXLr63T7HmKfGNvuERRA&usqp=CAU"/>
            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>
    )
}