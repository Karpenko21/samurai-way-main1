import {ActionTypes, PostsType, ProfilePageType} from "./state";

/*type ActionType = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>*/

export const profileReducer = (state: ProfilePageType, action: ActionTypes ) => {

    if (action.type === 'ADD-POST') {
        const newPost: PostsType = {
            id: "5",
            message: state.newPostText,
            likesCount: '0'
        }
        state.posts.push(newPost)
        state.newPostText = ""
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        state.newPostText = action.newText
    }
    return state
}



export const addPostAC = () => ({type: 'ADD-POST'}) as const


export const updateNewPostTextAC = (newText: string) => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newText
}) as const
