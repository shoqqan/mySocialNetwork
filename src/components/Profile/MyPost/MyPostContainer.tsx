import React from "react";
import {
    AddDislikeActionCreator,
    AddLikeActionCreator,
    addPostActionCreator,
    onChangePostTextActionCreator,
} from "../../../redux/profileReducer";
import {MyPost} from "./MyPost";
import {StoreType} from "../../../redux/reduxStore";


type MyPostContainerPropsType = {
    store: StoreType
}
export const MyPostContainer = (props: MyPostContainerPropsType) => {
    const state = props.store.getState()
    const addPost = () => {
        let text = state.profilePage.newPostText;
        if (text.trim().length < 1) {
            return (alert('Title is required'))
        } else {
            props.store.dispatch(addPostActionCreator(text));
            props.store.dispatch(onChangePostTextActionCreator(''))
        }
    }
    const likesCounter = (postId: string) => {
        props.store.dispatch(AddLikeActionCreator(postId))
    }
    const dislikesCounter = (postId: string) => {
        props.store.dispatch(AddDislikeActionCreator(postId))
    }
    const PostChange = (text: string) => {
        props.store.dispatch(onChangePostTextActionCreator(text))
    }
    return (
        <MyPost updateNewPostText={PostChange} newPostText={state.profilePage.newPostText}
                addPost={addPost} posts={state.profilePage.posts} likesCounter={likesCounter}
                dislikesCounter={dislikesCounter}/>
    )
}