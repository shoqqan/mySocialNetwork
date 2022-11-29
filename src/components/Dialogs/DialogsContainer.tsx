import React from 'react';
import {AddStateMessageActionCreator, OnChangeMessageTextActionCreator} from "../../redux/dialogsReducer";
import {StoreType} from "../../redux/reduxStore";
import {Dialogs} from "./Dialogs";
import {v1} from "uuid";

type DialogsContainerPropsType = {
    store: StoreType
}
const DialogsContainer = (props: DialogsContainerPropsType) => {
    const state = props.store.getState()
    let newMessageElement = state.dialogsPage.newMessageText

    const onAddMessage = () => {

        if (newMessageElement.trim().length > 1) {
            props.store.dispatch(AddStateMessageActionCreator(newMessageElement))
            props.store.dispatch(OnChangeMessageTextActionCreator(''))
        } else {
            alert('Title is required')
        }
    }
    const onMessageChange = (text: string) => {
        props.store.dispatch(OnChangeMessageTextActionCreator(text))
    }
    return (
        <Dialogs addMessage={onAddMessage} messageChange={onMessageChange} dialogs={state.dialogsPage.dialogs}
                 messages={state.dialogsPage.messages} newMessageElement={state.dialogsPage.newMessageText}/>
    )
};

export default DialogsContainer;