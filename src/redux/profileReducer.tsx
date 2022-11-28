import {v1} from "uuid";

type AddPostActionType = {
    type: 'ADD-POST'
    postMessage: string
}

export type OnChangePostText = {
    type: 'ON-CHANGE-POST-TEXT',
    postText: string
}
type AddStateMessageType = {
    type: 'ADD-STATE-MESSAGE',
    dialogMessage: string
}
type OnChangeMessageText = {
    type: 'ON-CHANGE-MESSAGE-TEXT'
    messageText: string
}
type AddLikeType = {
    type: 'ADD-LIKE'
    id: string

}
type AddDislikeType = {
    type: 'ADD-DISLIKE'
    id: string

}
export type PostType = {
    id: string,
    image: string,
    postText: string,
    likes: number,
    dislikes: number
}
type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}
export type ProfileActionType =
    AddPostActionType
    | OnChangePostText
    | AddLikeType
    | AddDislikeType
    | OnChangeMessageText
    | AddStateMessageType
export const AddLikeActionCreator = (id: string): AddLikeType => ({type: 'ADD-LIKE', id: id})
export const addPostActionCreator = (postMessage: string): AddPostActionType => {
    return {
        type: 'ADD-POST',
        postMessage: postMessage
    }
}
export const AddDislikeActionCreator = (id: string): AddDislikeType => ({type: 'ADD-DISLIKE', id: id})
export const onChangePostTextActionCreator = (postText: string): OnChangePostText => {
    return {
        type: 'ON-CHANGE-POST-TEXT',
        postText: postText
    }
}
const initialState:ProfilePageType = {
    posts: [
        {
            id: v1(),
            image: 'https://sun9-17.userapi.com/impg/ytugTtPFmctBiHjOlaOjhsVFolkbtum4skgWQg/F5-etE5XOIs.jpg?size=1342x1792&quality=96&sign=b31946091fb7191a048f2c38395cd168&type=album',
            postText: 'Hello There!',
            likes: 10,
            dislikes: 1
        },

    ],
    newPostText: ''
}
export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionType) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: v1(),
                image: 'https://sun9-17.userapi.com/impg/ytugTtPFmctBiHjOlaOjhsVFolkbtum4skgWQg/F5-etE5XOIs.jpg?size=1342x1792&quality=96&sign=b31946091fb7191a048f2c38395cd168&type=album',
                postText: action.postMessage,
                likes: 0,
                dislikes: 0
            }
            state.posts.push(newPost)
            return state
        case 'ON-CHANGE-POST-TEXT':
            console.log(action.postText)
            state.newPostText = action.postText
            return state
        case 'ADD-LIKE':
            state.posts.map(p => {
                if (p.id === action.id) {
                    p.likes += 1
                }
            })
            return state
        case 'ADD-DISLIKE':
            state.posts.map(p => {
                if (p.id === action.id) {
                    p.dislikes += 1
                }
            })
            return state
        default:
            return state
    }

}
export default profileReducer