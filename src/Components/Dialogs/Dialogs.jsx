import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './dialogitem/DialogItem';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

const Dialogs = (props) => {

    let dialogsElements = props.DialogsPage.dialogsData.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);

    let messagesElements = props.DialogsPage.messagesData.map(m => <Message message={m.message} key={m.id} />);

    let newMessageElement = React.createRef();

    let newMessageBody = props.DialogsPage.newMessageText;

    let addNewMessage = (values) => {
        // alert(values.newMessageText);
        props.sendMessage(values.newMessageText)
    }

    if (!props.isAuth) {
        return <Redirect to={"/Login"} />;
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialog_item}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <br />
            <center>text me now</center>
            <Field component="textarea" name="newMessageText" placeholder="Enter message" />
            <br />
            <button>send message</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm);

export default Dialogs;