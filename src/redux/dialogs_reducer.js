const ADD_MESSAGE = 'ADD-MESSAGE';

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
    ]
}
const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = action.newMessageText;
            return {
                ...state,
                messagesData: [...state.messagesData, { id: 5, message: newMessage }]
            }
        default:
            return state;
    }
}

export const addMessageActionCreator = (newMessageText) => ({ type: ADD_MESSAGE, newMessageText })

export default dialogsReducer;