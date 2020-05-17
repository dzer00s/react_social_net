import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import Message from './Message/Message';
import DialogItem from './dialogitem/DialogItem';
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../redux/dialogs_reducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {

    let state = props.store.getState().DialogsPage;


    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }


    return (<Dialogs
        updateNewMessageText={onMessageChange}
        sendMessage={addMessage}
        DialogsPage={state} />
    )
}

export default DialogsContainer;