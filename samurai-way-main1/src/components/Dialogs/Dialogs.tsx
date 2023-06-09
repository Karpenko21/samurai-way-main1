import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsType, MessagesType} from "../../redux/state";

type DialogsPropsType = {
    dialogsPageData: DialogsPageDataType

}
type DialogsPageDataType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}



export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPageData.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = props.dialogsPageData.messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

