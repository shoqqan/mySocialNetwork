import style from './Dialogs.module.css'
import React from "react";
import {Button} from "../Button";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    DialogsType,
    MessagesType,
} from "../../redux/dialogsReducer";


type DialogsPropsType = {
    addMessage: () => void
    messageChange: (text: string) => void
    newMessageElement: string
    dialogs: DialogsType[]
    messages: MessagesType[]

}


export const Dialogs = (props: DialogsPropsType) => {

    const addMessage = () => {
        props.addMessage()
    }

    const messageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.messageChange(e.currentTarget.value)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsitem}>
                {props.dialogs.map((i) => {
                    return (<DialogItem key={i.id} avatar={i.avatar} user={i.name} id={i.id}/>)
                })}
            </div>
            <div className={style.messages}>
                {props.messages.map((m) => {
                    return (<Message key={m.id} isMyMessage={m.isMyMessage} image={m.image} message={m.innerMessage}/>)
                })}
                <textarea value={props.newMessageElement} onChange={messageChange}/>
                <Button title={'Enter'} callback={addMessage} cssClass={''}/>
            </div>
        </div>
    )
}



