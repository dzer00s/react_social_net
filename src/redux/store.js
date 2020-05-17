// import profileReducer from "./profile_reducer";
// import dialogsReducer from "./dialogs_reducer";
// import sidebarReducer from "./sidebar_reducer";

// let store = {
//     _state: {
//         ProfilePage: {
//             posts: [
//                 { id: 1, message: 'your photo amazing', like: '10' },
//                 { id: 2, message: 'thx Marie', like: '2' }
//             ],
//             newPostText: 'kama.com'
//         },
//         DialogsPage: {
//             dialogsData: [
//                 { id: 1, name: 'Egor' },
//                 { id: 2, name: 'Marie' },
//                 { id: 3, name: 'Sophie' },
//                 { id: 4, name: 'Willey' }
//             ],
//             messagesData: [
//                 { id: 1, message: 'Hi' },
//                 { id: 2, message: 'what do you do?' },
//                 { id: 3, message: 'make pizza' },
//                 { id: 4, message: 'great' }
//             ],
//             newMessageText: 'hr'
//         },
//         SideBar: {
//             SideBarData: [
//                 { name: 'Eugene' },
//                 { name: 'Egor' },
//                 { name: 'Maxim' }
//             ],
//         }
//     },
//     _callSubscriber() {
//         console.log('state changed');
//     },
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//     dispatch(action) {

//         this._state.ProfilePage = profileReducer(this._state.ProfilePage, action);
//         this._state.DialogsPage = dialogsReducer(this._state.DialogsPage, action);
//         // this._state.SideBar = sidebarReducer(this._state.SideBar, action);

//         this._callSubscriber(this._state);
//     }
// }


// window.store = store;

// export default store;