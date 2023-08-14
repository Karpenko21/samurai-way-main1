import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType, sendMessageAC, StoreType, updateNewMessageTextAC} from "../../redux/store";

type DialogsPropsType = {
    updateNewMessageText: (text: string) => void
    sendMessage: () => void
    dialogsPage: DialogsPageType
}

export const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messageElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>)

    const newMessageText = props.dialogsPage.newMessageText


    const onSendMessageClick = () => {
        props.sendMessage()
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
       props.updateNewMessageText(e.target.value)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea value={newMessageText}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
                <div></div>
                </div>
            </div>
    )
}

