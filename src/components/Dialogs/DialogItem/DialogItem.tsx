import style from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogPropsType = {
    user: string
    id: string
    avatar: string
}
export const DialogItem = (props: DialogPropsType) => {
    return (
        <div className={style.item}>
            <div className={style.avatar}>
                <img src={props.avatar} alt="avatar"/>
            </div>
            <NavLink to={`/dialogs/${props.id}`}>{props.user}</NavLink>
        </div>
    )
}