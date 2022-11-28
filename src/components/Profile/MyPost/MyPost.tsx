import React, {useState} from "react";
import profilestyle from './MyPost.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/profileReducer";


type MyPostPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
    newPostText: string
    posts: PostType[]
    likesCounter: (id:string)=>void
    dislikesCounter: (id:string)=>void
}
export const MyPost = (props: MyPostPropsType) => {
    console.log('render my post')
    const onAddPost = () => {
        // let text = props.store._state.profilePage.newPostText;
        // if (text.trim().length < 1) {
        //     return (alert('Title is required'))
        // } else {
        //     props.store.dispatch(addPostActionCreator(text));
        //     props.store.dispatch(onChangePostTextActionCreator(''))
        // }

        props.addPost()
    }
    const onPostChange = (text: React.ChangeEvent<HTMLTextAreaElement>) => {
        // props.store.dispatch(onChangePostTextActionCreator(text.currentTarget.value))
        props.updateNewPostText(text.currentTarget.value)
    }
    return (
        <div>
            <div>My post</div>
            <div>
                <textarea onChange={onPostChange} value={props.newPostText}/>
                <button onClick={onAddPost}>+</button>
            </div>
            <div className={profilestyle.posts}>

                {props.posts.map((post) => {
                    return (<Post
                        key={post.id}
                        id={post.id}
                        image={post.image}
                        postText={post.postText}
                        likes={post.likes}
                        dislikes={post.dislikes}
                        likesCounter={props.likesCounter}
                        dislikesCounter={props.dislikesCounter}
                    />)

                })}
            </div>
        </div>
    )
}