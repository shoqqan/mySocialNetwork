import React from "react";
import style from './ProfileInfo.module.css'

type ProfileInfoPropsType = {
    wallpaper: string
    avatar: string
    info: string
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <>
            <div className={style.wallpaper}>
                <img
                    src={props.wallpaper}
                    alt="wallpaper"/>

            </div>
            <div className={style.profile}>
                <div className={style.avatar}>
                    <img src={props.avatar} alt={'avatar'}/>
                </div>
                <div className={style.description}>
                    {props.info}
                </div>
            </div>
        </>
    )
}