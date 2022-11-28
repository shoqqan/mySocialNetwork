export const store = () =>{

}
// import {v1} from "uuid";
// import React from "react";
// import profileReducer from "./profileReducer";
// import dialogsReducer from "./dialogsReducer";
// import sidebarReducer from "./sidebarReducer";
//
// export type DialogsType = {
//     id: string
//     name: string
//     avatar: string
// }

// export type MessagesType = {
//     id: string
//     image: string
//     innerMessage: string
//     isMyMessage: boolean
// }
// type ProfilePageType = {
//     posts: PostType[]
//     newPostText: string
// }
// type DialogPageType = {
//     dialogs: DialogsType[]
//     messages: MessagesType[]
//     newMessageText: string
// }
// type SidebarType = {}
// export type RootStateType = {
//     profilePage: ProfilePageType
//     dialogsPage: DialogPageType
//     sidebar: SidebarType
// }
//
// type AddPostActionType = {
//     type: 'ADD-POST'
//     postMessage: string
// }
//
// type OnChangePostText = {
//     type: 'ON-CHANGE-POST-TEXT',
//     postText: string
// }
// type AddStateMessageType = {
//     type: 'ADD-STATE-MESSAGE',
//     dialogMessage: string
// }
// type OnChangeMessageText = {
//     type: 'ON-CHANGE-MESSAGE-TEXT'
//     messageText: string
// }
// type AddLikeType = {
//     type: 'ADD-LIKE'
//     id: string
//
// }
// type AddDislikeType = {
//     type: 'ADD-DISLIKE'
//     id: string
//
// }
// type StoreType = {
//     _subscriber: () => void
//     _state: RootStateType,
//     getState: () => void,
//     subscribe: (observer: () => void) => void
//     dispatch: (action: ActionType) => void
// }
//
// type ActionType =
//     AddPostActionType
//     | OnChangePostText
//     | AddStateMessageType
//     | AddLikeType
//     | AddDislikeType
//     | OnChangeMessageText
//

//     export const store: StoreType = {
//     _subscriber() {
//         console.log('no subscribers (observers)')
//     },
//     _state: {
//         dialogsPage: {
//             dialogs: [
//                 {
//                     id: v1(),
//                     name: 'Vladimir Vasiliev',
//                     avatar: 'https://sun9-45.userapi.com/impg/Ix1qgnRvQTjArv31NW1eRJTO07-QDgU5aC_5kA/XajhZI_Ql2Y.jpg?size=1200x1600&quality=95&sign=ec316386d359c8c03050646f53cf91b8&type=album'
//                 },
//                 {
//                     id: v1(),
//                     name: 'Vika Dinno',
//                     avatar: 'https://sun9-66.userapi.com/impg/tTPyOi-ayS5aghT6TAakK4dcO1cf73fafQEq6w/rKegbGfEDWc.jpg?size=932x932&quality=96&sign=156e436f5eecdb675998b4d111d41eaf&type=album'
//                 },
//                 {
//                     id: v1(),
//                     name: 'Rinat Buldybaev',
//                     avatar: 'https://sun9-28.userapi.com/impg/Tij0EXtD2loanXcg_HVzm57ccxIIO2Wntvi3ug/RifVdjSJuN8.jpg?size=2560x1920&quality=95&sign=b680ae1858f6219098e90e32169e9036&type=album'
//                 },
//                 {
//                     id: v1(),
//                     name: 'Aldik Maratow',
//                     avatar: 'https://sun9-4.userapi.com/impg/GcedK_F3uWNV12TB7Xi0F5AmSXlBfqfC-qtJVA/d4qIXCdJpYU.jpg?size=2560x1920&quality=95&sign=3873e4d359b363947879669dc46d631d&type=album '
//                 },
//                 {
//                     id: v1(),
//                     name: 'Abzal Kozhahmet',
//                     avatar: 'https://sun9-4.userapi.com/impf/c857528/v857528116/1dad/e5b61wcPLa4.jpg?size=1920x1920&quality=96&sign=2154154c31123c4ef85cb37c043a7d63&type=album'
//                 }
//             ],
//             messages: [
//                 {
//                     id: v1(),
//                     image: 'https://sun9-25.userapi.com/impg/tHVgtgT8aVzbpXBXSetvKPld4ZAMeJ_ssnZ_Kw/fozNVBrniVo.jpg?size=720x1280&quality=96&sign=904ee049cf60512e35194d8ef5d472bc&type=album',
//                     innerMessage: 'Hi',
//                     isMyMessage: false
//                 },
//                 {
//                     id: v1(),
//                     image: 'https://sun9-25.userapi.com/impg/tHVgtgT8aVzbpXBXSetvKPld4ZAMeJ_ssnZ_Kw/fozNVBrniVo.jpg?size=720x1280&quality=96&sign=904ee049cf60512e35194d8ef5d472bc&type=album',
//                     innerMessage: 'How are you?',
//                     isMyMessage: false
//                 },
//                 {
//                     id: v1(),
//                     image: 'https://sun9-17.userapi.com/impg/ytugTtPFmctBiHjOlaOjhsVFolkbtum4skgWQg/F5-etE5XOIs.jpg?size=1342x1792&quality=96&sign=b31946091fb7191a048f2c38395cd168&type=album',
//                     innerMessage: 'Im Fine?',
//                     isMyMessage: true
//                 }
//             ],
//             newMessageText: ''
//
//         },
//         profilePage: {
//             posts: [
//                 {
//                     id: v1(),
//                     image: 'https://sun9-17.userapi.com/impg/ytugTtPFmctBiHjOlaOjhsVFolkbtum4skgWQg/F5-etE5XOIs.jpg?size=1342x1792&quality=96&sign=b31946091fb7191a048f2c38395cd168&type=album',
//                     postText: 'Hello There!',
//                     likes: 10,
//                     dislikes: 1
//                 },
//
//             ],
//             newPostText: ''
//         },
//         sidebar: {}
//     },
//     getState() {
//         return this._state
//     },
//     subscribe(observer: () => void) {
//         this._subscriber = observer
//     },
//
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._state.sidebar = sidebarReducer(this._state.dialogsPage, action)
//         this._subscriber()
//     }
// }
