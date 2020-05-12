import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import Message from './Message/Message';
import DialogItem from './dialogitem/DialogItem';
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../redux/dialogs_reducer';


const Dialogs = (props) => {


    let dialogsElements = props.DialogsPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = props.DialogsPage.messagesData.map(m => <Message message={m.message} />);


    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        let actionMessage = updateNewMessageTextActionCreator(text)
        props.dispatch(actionMessage);
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialog_item}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <br />
                <center>text me now</center>
                <textarea onChange={onMessageChange} value={props.DialogsPage.newMessageText} ref={newMessageElement} />
                <br />
                <button onClick={addMessage}>send message</button>
            </div>
        </div>
    )
}

export default Dialogs;