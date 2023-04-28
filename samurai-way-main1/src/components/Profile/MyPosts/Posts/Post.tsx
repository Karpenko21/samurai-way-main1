import React from "react";
import s from "./Post.module.css"

export const Post = () => {
    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGdKVxeuJpPA0gvYQXLr63T7HmKfGNvuERRA&usqp=CAU"/>
            post 1
            <div>
                <span>like</span>
            </div>
            <span></span>
        </div>
    )
}