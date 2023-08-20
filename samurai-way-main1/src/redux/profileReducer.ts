import {ActionTypes, PostsType, ProfilePageType} from "./state";


export const profileReducer = (state: ProfilePageType, action: ActionTypes ) => {
   debugger
    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostsType = {
                id: "5",
                message: state.newPostText,
                likesCount: '0'
            }
            state.posts.push(newPost)
            state.newPostText = ""
            debugger
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            debugger
            return state
        default:
            return state
    }
}
