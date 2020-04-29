import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import Message from './Message/Message';
import DialogItem from './dialogitem/DialogItem';


const Dialogs = (props) => {


    let dialogsElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = props.state.messagesData.map(m => <Message message={m.message} />);

    let NewMessageEl = React.createRef();
    let SendMessage = () => {
        let text = NewMessageEl.current.value;
        alert (text);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialog_item}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <br/>
                <center>text me now</center>
                <textarea ref={NewMessageEl}></textarea>
                <br/>
                <button onClick={SendMessage}>send message</button>
            </div>
        </div>
    )
}

export default Dialogs;