import React, {ProfilerProps} from "react";
import profilestyle from './Profile.module.css'
import {MyPost} from "./MyPost/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {rStore, StoreType} from "../../redux/reduxStore";
import {MyPostContainer} from "./MyPost/MyPostContainer";

type ProfilePropsType = {
    store: StoreType
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={profilestyle.content}>
            <ProfileInfo
                avatar={'https://sun9-17.userapi.com/impg/ytugTtPFmctBiHjOlaOjhsVFolkbtum4skgWQg/F5-etE5XOIs.jpg?size=1342x1792&quality=96&sign=b31946091fb7191a048f2c38395cd168&type=album'}
                wallpaper={"https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"}
                info={'Hello im future front-end developer!!!'}/>
            <MyPostContainer store={props.store}/>
        </div>
    )
}

