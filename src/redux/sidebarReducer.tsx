type AddPostActionType = {
    type: 'ADD-POST'
    postMessage: string
}

type OnChangePostText = {
    type: 'ON-CHANGE-POST-TEXT',
    postText: string
}
type AddStateMessageType = {
    type: 'ADD-STATE-MESSAGE',
    dialogMessage: string
}
type OnChangeMessageText = {
    type: 'ON-CHANGE-MESSAGE-TEXT'
    messageText: string
}
type AddLikeType = {
    type: 'ADD-LIKE'
    id: string

}
type AddDislikeType = {
    type: 'ADD-DISLIKE'
    id: string

}
type ActionType = AddPostActionType | OnChangePostText | AddLikeType | AddDislikeType |OnChangeMessageText |AddStateMessageType
const initialState = {}
const sidebarReducer = (state:{} = initialState,action:ActionType)=>{
    return state
}
export default sidebarReducer