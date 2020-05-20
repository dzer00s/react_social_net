const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: 'your photo amazing', like: '10' },
        { id: 2, message: 'thx Marie', like: '2' }
    ],
    newPostText: 'kama.com'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            };
            let StateCopy = { ...state };
            StateCopy.posts = [...state.posts];
            StateCopy.posts.push(newPost)
            StateCopy.newPostText = '';
            return StateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let StateCopy = { ...state };
            StateCopy.newPostText = action.newText;
            return StateCopy;
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;