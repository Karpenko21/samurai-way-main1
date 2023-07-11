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


    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost: PostsType = {
                id: "5",
                message: this._state.profilePage.newPostText,
                likesCount: '0'
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ""
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }
}


export const addPostAC = () => ({type: 'ADD-POST'}) as const

export const updateNewPostTextAC = (newText: string) => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newText
}) as const

export type ActionTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>
// @ts-ignore
window.store = store



