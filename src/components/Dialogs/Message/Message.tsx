import React from "react";
import style from './Message.module.css'

type MessagePropsType = {
    image: string
    message: string
    isMyMessage:boolean
}
export const Message = (props: MessagePropsType) => {

    return (
        <div className={props.isMyMessage?style.message + ' ' + style.mymessage:style.message}><img src={props.image} alt=""/>{props.message}</div>
    )
}