import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {message} from "antd";

type DialogItemPropsType = {
    name: string
    id: string
}

type MessagePropsType = {
    message: string
}
export const DialogItem = (props: DialogItemPropsType) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    )
}

export const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}
type DialogsPropsType = {}
export const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dimych" id="1"/>
                <DialogItem name="Andrey" id="2"/>
                <DialogItem name="Sveta" id="3"/>
                <DialogItem name="Valeriy" id="4"/>
                <DialogItem name="Victor" id="5"/>
                <DialogItem name="Sasha" id="6"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi!"/>
                <Message message="How are you?"/>
                <Message message="I was glad to get message from you."/>
            </div>
        </div>
    )
}

