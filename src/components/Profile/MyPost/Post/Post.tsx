import React, {useState} from "react";
import profilestyle from './Post.module.css'
import {Button} from "../../../Button";
import {AddDislikeActionCreator, AddLikeActionCreator} from "../../../../redux/profileReducer";
import {StoreType} from "../../../../redux/reduxStore";

type PropsType = {
    id: string
    image: string
    postText: string
    likes: number,
    dislikes: number
    likesCounter: (id:string)=>void
    dislikesCounter: (id:string)=>void
}
export const Post = React.memo((props: PropsType) => {

    return (
        <div className={profilestyle.item}>
            <div>
                <img className={profilestyle.post}
                     src={props.image}
                     alt=""/>
                {props.postText}
            </div>
            {/*<Button title={`Likes:${props.likes}`} callback={likesCounter} cssClass={''}/>*/}
            {/*<Button title={`Dislike:${props.dislikes}`} callback={dislikesCounter} cssClass={''}/>*/}
            <button onClick={()=>props.likesCounter(props.id)}>Likes: {props.likes}</button>
            <button onClick={()=>props.dislikesCounter(props.id)}>Dislikes: {props.dislikes}</button>
        </div>


    )
})