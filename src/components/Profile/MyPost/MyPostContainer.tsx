import React from "react";
import {
    AddDislikeActionCreator,
    AddLikeActionCreator,
    addPostActionCreator,
    onChangePostTextActionCreator,
} from "../../../redux/profileReducer";
import {MyPost} from "./MyPost";
import {AppStateType, StoreType} from "../../../redux/reduxStore";
import {connect} from "react-redux";
import {Dispatch} from "redux";


// type MyPostContainerPropsType = {
//     store: StoreType
// }
// export const MyPostContainer = () => {
//     // const state = props.store.getState()
//
//     return (<></>
//         // <StoreContext.Consumer>{
//         //     (store:StoreType) => {
//         //         const state = store.getState()
//         //         const addPost = () => {
//         //             let text = state.profilePage.newPostText;
//         //             if (text.trim().length < 1) {
//         //                 return (alert('Title is required'))
//         //             } else {
//         //                 store.dispatch(addPostActionCreator(text));
//         //                 store.dispatch(onChangePostTextActionCreator(''))
//         //             }
//         //         }
//         //         const likesCounter = (postId: string) => {
//         //             store.dispatch(AddLikeActionCreator(postId))
//         //         }
//         //         const dislikesCounter = (postId: string) => {
//         //             store.dispatch(AddDislikeActionCreator(postId))
//         //         }
//         //         const PostChange = (text: string) => {
//         //             store.dispatch(onChangePostTextActionCreator(text))
//         //         }
//         //         return (
//         //             <MyPost updateNewPostText={PostChange} newPostText={store.getState().profilePage.newPostText}
//         //                     addPost={addPost} posts={store.getState().profilePage.posts} likesCounter={likesCounter}
//         //                     dislikesCounter={dislikesCounter}/>)
//         //     }}
//         // </StoreContext.Consumer>
//     )
// }
const mapStateToProps = (state: AppStateType) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {

    return {
        updateNewPostText: (text: string) => {
            dispatch(onChangePostTextActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        likesCounter: (id: string) => {
            dispatch(AddLikeActionCreator(id))
        },
        dislikesCounter: (id: string) => {
            dispatch(AddDislikeActionCreator(id))
        }
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)
export default MyPostContainer
