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
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPost
            }
        case ADD_POST:
            let newPost = state.newPostText;
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, { id: 3, message: newPost }]

            }

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newPost: text })

export default profileReducer;