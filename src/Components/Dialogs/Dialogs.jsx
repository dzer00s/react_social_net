import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + '' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
};

const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: 'Egor' },
        { id: 2, name: 'Marie' },
        { id: 3, name: 'Sophie' },
        { id: 4, name: 'Willey' }
    ]
    let messagesData = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'what do you do?' },
        { id: 3, message: 'make pizza' },
        { id: 4, message: 'great' }
    ]

    let dialogsElements = dialogsData.map( d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = messagesData.map( m => <Message message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialog_item}>
                {   dialogsElements    }
            </div>
            <div className={s.messages}>
            { messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;