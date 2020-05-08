
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
    getState() {
        return this._state;
    },
    addPost() {
        let newPost = {
            id: 3,
            message: this._state.ProfilePage.newPostText,
            likesCount: 0
        };

        this._state.ProfilePage.posts.push(newPost);
        this._state.ProfilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    _callSubscriber() {
        console.log('state changed');
    },
    updateNewPostText(newText) {
        this._state.ProfilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    addMessage() {
        let newMessage = {
            id: 5,
            message: this._state.DialogsPage.newMessageText
        };

        this._state.DialogsPage.messagesData.push(newMessage);
        this._state.DialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newMessage) {
        this._state.DialogsPage.newMessageText = newMessage;
        this._callSubscriber(this._state);
    }
}
window.store = store;

export default store;