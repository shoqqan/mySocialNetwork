import {v1} from "uuid";

export type DialogsType = {
    id: string
    name: string
    avatar: string
}
export type MessagesType = {
    id: string
    image: string
    innerMessage: string
    isMyMessage: boolean
}
export type DialogPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
}


type AddStateMessageType = {
    type: 'ADD-STATE-MESSAGE',
    dialogMessage: string
}
type OnChangeMessageText = {
    type: 'ON-CHANGE-MESSAGE-TEXT'
    messageText: string
}

type ActionType =
    | OnChangeMessageText
    | AddStateMessageType
export const OnChangeMessageTextActionCreator = (messageText: string): OnChangeMessageText => {
    return {
        type: 'ON-CHANGE-MESSAGE-TEXT',
        messageText: messageText
    }
}
export const AddStateMessageActionCreator = (dialogMessage: string): AddStateMessageType => {
    return {
        type: 'ADD-STATE-MESSAGE',
        dialogMessage: dialogMessage
    }
}
const initialState:DialogPageType = {
    dialogs: [
        {
            id: v1(),
            name: 'Vladimir Vasiliev',
            avatar: 'https://sun9-45.userapi.com/impg/Ix1qgnRvQTjArv31NW1eRJTO07-QDgU5aC_5kA/XajhZI_Ql2Y.jpg?size=1200x1600&quality=95&sign=ec316386d359c8c03050646f53cf91b8&type=album'
        },
        {
            id: v1(),
            name: 'Vika Dinno',
            avatar: 'https://sun9-66.userapi.com/impg/tTPyOi-ayS5aghT6TAakK4dcO1cf73fafQEq6w/rKegbGfEDWc.jpg?size=932x932&quality=96&sign=156e436f5eecdb675998b4d111d41eaf&type=album'
        },
        {
            id: v1(),
            name: 'Rinat Buldybaev',
            avatar: 'https://sun9-28.userapi.com/impg/Tij0EXtD2loanXcg_HVzm57ccxIIO2Wntvi3ug/RifVdjSJuN8.jpg?size=2560x1920&quality=95&sign=b680ae1858f6219098e90e32169e9036&type=album'
        },
        {
            id: v1(),
            name: 'Aldik Maratow',
            avatar: 'https://sun9-4.userapi.com/impg/GcedK_F3uWNV12TB7Xi0F5AmSXlBfqfC-qtJVA/d4qIXCdJpYU.jpg?size=2560x1920&quality=95&sign=3873e4d359b363947879669dc46d631d&type=album '
        },
        {
            id: v1(),
            name: 'Abzal Kozhahmet',
            avatar: 'https://sun9-4.userapi.com/impf/c857528/v857528116/1dad/e5b61wcPLa4.jpg?size=1920x1920&quality=96&sign=2154154c31123c4ef85cb37c043a7d63&type=album'
        }
    ],
    messages: [
        {
            id: v1(),
            image: 'https://sun9-25.userapi.com/impg/tHVgtgT8aVzbpXBXSetvKPld4ZAMeJ_ssnZ_Kw/fozNVBrniVo.jpg?size=720x1280&quality=96&sign=904ee049cf60512e35194d8ef5d472bc&type=album',
            innerMessage: 'Hi',
            isMyMessage: false
        },
        {
            id: v1(),
            image: 'https://sun9-25.userapi.com/impg/tHVgtgT8aVzbpXBXSetvKPld4ZAMeJ_ssnZ_Kw/fozNVBrniVo.jpg?size=720x1280&quality=96&sign=904ee049cf60512e35194d8ef5d472bc&type=album',
            innerMessage: 'How are you?',
            isMyMessage: false
        },
        {
            id: v1(),
            image: 'https://sun9-17.userapi.com/impg/ytugTtPFmctBiHjOlaOjhsVFolkbtum4skgWQg/F5-etE5XOIs.jpg?size=1342x1792&quality=96&sign=b31946091fb7191a048f2c38395cd168&type=album',
            innerMessage: 'Im Fine?',
            isMyMessage: true
        }
    ],
    newMessageText: ''
}
export const dialogsReducer = (state: DialogPageType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'ON-CHANGE-MESSAGE-TEXT':
            state.newMessageText = action.messageText
            return state
        case 'ADD-STATE-MESSAGE':
            const newMessage: MessagesType = {
                id: v1(),
                image: 'https://sun9-17.userapi.com/impg/ytugTtPFmctBiHjOlaOjhsVFolkbtum4skgWQg/F5-etE5XOIs.jpg?size=1342x1792&quality=96&sign=b31946091fb7191a048f2c38395cd168&type=album',
                innerMessage: action.dialogMessage,
                isMyMessage: true
            }
            state.messages.push(newMessage)
            return state
        default:
            return state
    }
}
export default dialogsReducer