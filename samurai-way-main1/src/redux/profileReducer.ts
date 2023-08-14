import {ActionTypes, PostsType, ProfilePageType} from "./store";

const initialState: ProfilePageType = {
    posts: [
        {id: "1", message: "Hi!", likesCount: '12'},
        {id: "2", message: "It's my first post", likesCount: '18'},
        {id: "3", message: "It's my second post", likesCount: '25'},
        {id: "4", message: "It's my third post", likesCount: '31'}
    ],
    newPostText: ''
}


export const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes ) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostsType = {
                id: "5",
                message: state.newPostText,
                likesCount: '0'
            }
            state.posts.push(newPost)
            state.newPostText = ""
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            debugger
            return state
        default:
            return state
    }
}
