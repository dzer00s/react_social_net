const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
let store = {
    _state: {
        ProfilePage: {
            posts: [
                { id: 1, message: 'your photo amazing', like: '10' },
                { id: 2, message: 'thx Marie', like: '2' }
            ],
            newPostText: 'kama.com'
        },
        DialogsPage: {
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
        },
        SideBar: {
            SideBarData: [
                { name: 'Eugene' },
                { name: 'Egor' },
                { name: 'Maxim' }
            ],
        }
    },
    _callSubscriber() {
        console.log('state changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 3,
                message: this._state.ProfilePage.newPostText,
                likesCount: 0
            };
            this._state.ProfilePage.posts.push(newPost);
            this._state.ProfilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.ProfilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 5,
                message: this._state.DialogsPage.newMessageText
            };
            this._state.DialogsPage.messagesData.push(newMessage);
            this._state.DialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.DialogsPage.newMessageText = action.newMessage;
            this._callSubscriber(this._state);
        }
    }
}


export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateNewMessageTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text })

window.store = store;

export default store;