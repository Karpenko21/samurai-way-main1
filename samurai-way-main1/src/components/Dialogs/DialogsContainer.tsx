import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {sendMessageAC, StoreType, updateNewMessageTextAC} from "../../redux/store";
import {Dialogs} from "./Dialogs";

type DialogsPropsType = {
    store: StoreType

}

export const DialogsContainer = (props: DialogsPropsType) => {

    const state = props.store.getState().dialogsPage


    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }

    const onNewMessageChange = (text: string) => {
        props.store.dispatch(updateNewMessageTextAC(text))
    }


    return <Dialogs updateNewMessageText={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    dialogsPage={state}/>
}

