import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SideBarType
}

export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}
export type PostsType = {
    id: string,
    message: string,
    likesCount: string
}

export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
}
export type DialogsType = {
    id: string,
    name: string
}
export type MessagesType = {
    id?: string
    message: string
}

export type SideBarType = {}

export type StoreType = {
    _state: StateType
    _callSubscriber: (_state: StateType) => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionTypes) => void
}


export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: "1", message: "Hi!", likesCount: '12'},
                {id: "2", message: "It's my first post", likesCount: '18'},
                {id: "3", message: "It's my second post", likesCount: '25'},
                {id: "4", message: "It's my third post", likesCount: '31'}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('hello')
    },

    subscribe(observer) {
        this._callSubscriber = observer //наблюдатель паттерн
    },
    getState() {
        return this._state
    },


    dispatch(action: ActionTypes) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
    }
}


export const addPostAC = () => ({type: 'ADD-POST'}) as const

export const updateNewPostTextAC = (newText: string) => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newText
}) as const

export const updateNewMessageTextAC = (newText: string) => ({
    type: "UPDATE-NEW-MESSAGE-TEXT",
    newText
}) as const

export const sendMessageAC = () => ({
    type: "SEND-MESSAGE",
}) as const

export type ActionTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof updateNewMessageTextAC> | ReturnType<typeof sendMessageAC>

// @ts-ignore
window.store = store



