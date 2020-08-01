import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './dialogitem/DialogItem';
// import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../redux/dialogs_reducer';


const Dialogs = (props) => {

    let dialogsElements = props.DialogsPage.dialogsData.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);

    let messagesElements = props.DialogsPage.messagesData.map(m => <Message message={m.message} key={m.id} />);

    let newMessageElement = React.createRef();

    let onSendMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = (newMessageElement) => {
        let text = newMessageElement.target.value;
        props.updateNewMessageText(text);
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
                <button onClick={onSendMessage}>send message</button>
            </div>
        </div>
    )
}

export default Dialogs;