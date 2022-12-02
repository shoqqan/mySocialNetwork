import React from 'react';
import {AddStateMessageActionCreator, OnChangeMessageTextActionCreator} from "../../redux/dialogsReducer";
import {AppStateType, StoreType} from "../../redux/reduxStore";
import {Dialogs} from "./Dialogs";
import {v1} from "uuid";
import {connect} from "react-redux";
import {Dispatch} from "redux";



const mapStateToProps = (state: AppStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageElement: state.dialogsPage.newMessageText
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addMessage: () => {
                dispatch(AddStateMessageActionCreator())
                dispatch(OnChangeMessageTextActionCreator(''))

        },
        messageChange: (text: string) => {
            dispatch(OnChangeMessageTextActionCreator(text))
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer

