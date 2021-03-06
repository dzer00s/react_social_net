import { addMessageActionCreator } from '../../redux/dialogs_reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


// const DialogsContainer = () => {

//     return <StoreContext.Consumer>
//         {store => {
//             let state = store.getState().DialogsPage;

//             let addMessage = () => {
//                 store.dispatch(addMessageActionCreator());
//             }

//             let onMessageChange = (text) => {
//                 store.dispatch(updateNewMessageTextActionCreator(text));
//             }

//             return <Dialogs
//                 updateNewMessageText={onMessageChange}
//                 sendMessage={addMessage}
//                 DialogsPage={store.getState().DialogsPage} />
//         }
//         }
//     </StoreContext.Consumer>
// }


let mapStateToProps = (state) => {
    return {
        DialogsPage: state.DialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageText) => {
            dispatch(addMessageActionCreator(newMessageText));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);