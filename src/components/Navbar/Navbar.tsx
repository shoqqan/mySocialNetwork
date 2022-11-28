import React from "react";
import navstyle  from './Navbar.module.css'
import {Navbaritem} from "./NavbarItem/Navbaritem";

export const Navbar = () =>{
    return(<nav className={navstyle.nav}>
        <Navbaritem title={'Profile'} href={'/profile'} style={''}/>
        <Navbaritem title={'News'} href={'/news'} style={''}/>
        <Navbaritem title={'Dialogs'} href={'/dialogs'} style={''}/>
        <Navbaritem title={'Music'} href={'/music'} style={''}/>
        <Navbaritem title={'Settings'} href={'/settings'} style={''}/>

    </nav>)
}