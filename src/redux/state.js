let rerenderEntireTree = () => {
    console.log('state changed');
}

let state = {
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
}
window.state = state;

export let addPost = () => {
    let newPost = {
        id: 3,
        message: state.ProfilePage.newPostText,
        likesCount: 0
    };

    state.ProfilePage.posts.push(newPost);
    state.ProfilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.ProfilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;

}
//////////////////////////////////////////////////////////////
export let addMessage = () => {
    let newMessage = {
        id: 5,
        message: state.DialogsPage.newMessageText
    };

    state.DialogsPage.messagesData.push(newMessage);
    state.DialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}

export let updateNewMessageText = (newMessage) => {
    state.DialogsPage.newMessageText = newMessage;
    rerenderEntireTree(state);
}


export default state;