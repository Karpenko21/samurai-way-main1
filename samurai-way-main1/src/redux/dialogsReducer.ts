import {ActionTypes, DialogsPageType, PostsType} from "./state";


/*type ActionType = ReturnType<typeof updateNewMessageTextAC> | ReturnType<typeof sendMessageAC>*/

export const dialogsReducer = (state: DialogsPageType, action: ActionTypes) => {

    if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
        state.newMessageText = action.newText
    } else if (action.type === "SEND-MESSAGE") {
        const message = state.newMessageText
        state.newMessageText = ""
        state.messages.push({id: "5", message: message})
    }
    return state
}


export const updateNewMessageTextAC = (newText: string) => ({
    type: "UPDATE-NEW-MESSAGE-TEXT",
    newText
}) as const

export const sendMessageAC = () => ({
    type: "SEND-MESSAGE",
}) as const