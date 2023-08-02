import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {sendMessageAC, StoreType, updateNewMessageTextAC} from "../../redux/state";

type DialogsPropsType = {
    store: StoreType

}
/*type DialogsPageDataType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
}*/



export const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.store._state.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messageElements = props.store._state.dialogsPage.messages.map(m => <Message message={m.message}/>)

    const newMessageText = props.store._state.dialogsPage.newMessageText


    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
       props.store.dispatch(updateNewMessageTextAC(e.target.value))
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

