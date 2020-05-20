const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogsData: [
        { id: 1, name: 'Egor' },
        { id: 2, name: 'Marie' },
        { id: 3, name: 'Sophie' },
        { id: 4, name: 'Willey' }
    ],
    messagesData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'what do you do?' },
        { id: 3, message: 'make pizza' },
        { id: 4, message: 'great' }
    ],
    newMessageText: 'hr'
}
const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 5,
                message: state.newMessageText
            };
            let StateCopy = { ...state };
            StateCopy.messagesData = [...state.messagesData];
            StateCopy.messagesData.push(newMessage);
            StateCopy.newMessageText = '';
            return StateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let StateCopy = { ...state };
            StateCopy.newMessageText = action.newMessage;
            return StateCopy;
        }
        default:
            return state;
    }
}


export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateNewMessageTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text })

export default dialogsReducer;