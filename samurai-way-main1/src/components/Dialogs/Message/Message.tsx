import React from 'react';
import s from './../Dialogs.module.css'
import {MessagesType} from "../../../redux/state";


type MessagePropsType = MessagesType



export const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}