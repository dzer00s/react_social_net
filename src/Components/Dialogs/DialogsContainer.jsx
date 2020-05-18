import React from 'react';
import s from './Dialogs.module.css';
// import { NavLink } from 'react-router-dom';
// import DialogItem from './dialogitem/DialogItem';
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../redux/dialogs_reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';


const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {store => {
            let state = store.getState().DialogsPage;

            let addMessage = () => {
                store.dispatch(addMessageActionCreator());
            }

            let onMessageChange = (text) => {
                store.dispatch(updateNewMessageTextActionCreator(text));
            }

            return <Dialogs
                updateNewMessageText={onMessageChange}
                sendMessage={addMessage}
                DialogsPage={store.getState().DialogsPage} />
        }
        }
    </StoreContext.Consumer>
}
export default DialogsContainer;