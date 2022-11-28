import React from "react";
import headerstyle from './Header.module.css'
type PropsType = {
    imageSrc:string
}
export const Header = (props:PropsType) =>{
    return(
        <header className={headerstyle.header}><img src={props.imageSrc} alt="logo"/>
        </header>
    )
}