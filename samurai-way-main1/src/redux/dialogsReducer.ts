import {ActionTypes, DialogsPageType, PostsType} from "./state";


export const dialogsReducer = (state: DialogsPageType, action: ActionTypes) => {
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


