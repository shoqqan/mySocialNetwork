import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import style from "./components/Dialogs/Dialogs.module.css";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {StoreType} from "./redux/reduxStore";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type AppPropsType ={
    store: StoreType
}
function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header imageSrc={'https://upload.wikimedia.org/wikipedia/commons/4/4e/VK_Compact_Logo.svg'}/>
                <Navbar/>
                <div className='App-content'>
                    <Routes>
                        <Route path={'/profile'} element={<Profile store={props.store}/>}/>
                        <Route path={'/dialogs'} element={<DialogsContainer store={props.store}/>}/>
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/music'} element={<Music/>}/>
                        <Route path={'/settings'} element={<Settings/>}/>
                        <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
                        <Route path={'*'} element={<div>404 NOT FOUND</div>}/>
                        <Route path={'mySocialNetwork/'} element={<div>404 lfa</div>}/>


                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
