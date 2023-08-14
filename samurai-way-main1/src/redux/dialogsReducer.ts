import {ActionTypes, DialogsPageType, PostsType} from "./store";

const initialState: DialogsPageType = {
    dialogs: [
        {id: "1", name: "Dimych"},
        {id: "2", name: "Andrey"},
        {id: "3", name: "Sveta"},
        {id: "4", name: "Valeriy"},
        {id: "5", name: "Victor"},
        {id: "6", name: "Sasha"},
    ],
    messages: [
        {id: "1", message: "Hi!"},
        {id: "2", message: "How are you?"},
        {id: "3", message: "I was glad to get message from you."},
        {id: "4", message: "Hello!"}
    ],
    newMessageText: ""
}

export const dialogsReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-TEXT":
            state.newMessageText = action.newText
            return state
        case "SEND-MESSAGE":
            const message = state.newMessageText
            state.newMessageText = ""
            state.messages.push({id: "5", message: message})
            return state
        default:
            return state
    }
}


