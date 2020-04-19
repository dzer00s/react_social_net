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
    return (
        <div className={s.dialogs}>
            <div className={s.dialog_item}>
                <DialogItem name="Dima" id="1" />
                <DialogItem name="eerr" id="2" />
                <DialogItem name="Dima" id="3" />
            </div>

            <div className={s.messages}>
                <Message message="Hi" />
                <Message message="how are you" />
                <Message message="i'm fine what about you" />
            </div>
        </div>
    )
}

export default Dialogs;