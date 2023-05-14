import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

type DialogsPropsType = {
    dialogsPageData: DialogsPageDataType

}
type DialogsPageDataType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

export type DialogsType = {
    id: string,
    name: string
}
export type MessagesType ={
    id?: string
    message: string
}

export const Dialogs = (props: DialogsPropsType) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsPageData.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>) }
            </div>
            <div className={s.messages}>
                {props.dialogsPageData.messages.map( m => <Message message={m.message}/>)}
            </div>
        </div>
    )
}

