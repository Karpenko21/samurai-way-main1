import {DialogsType, MessagesType} from "../components/Dialogs/Dialogs";
import {PostsType} from "../components/Profile/MyPosts/MyPosts";


export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export type ProfilePageType = {
    posts: PostsType[]
}

export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

export let state: StateType = {
    profilePage: {
        posts: [
    {id: "1", message: "Hi!", likesCount: '12'},
    {id: "2", message: "It's my first post", likesCount: '18'},
    {id: "3", message: "It's my second post", likesCount: '25'},
    {id: "4", message: "It's my third post", likesCount: '31'}
]
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
        ]
    }
}





