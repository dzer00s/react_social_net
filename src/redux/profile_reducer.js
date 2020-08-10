import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        { id: 1, message: 'i will be King!', like: '10' },
        { id: 2, message: 'politics evil', like: '2' }
    ],
    newPostText: 'kama.com',
    profile: null,
    status: ""
};

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
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }
        case SET_STATUS:
            return { ...state, status: action.status }

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newPost: text })
export const setUsersProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getProfileThunkCreator = (userId) => {
    return (dispatch) => {
        // let userId = this.props.match.params.userId;
        // if (!userId) { userId = 24; }
        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUsersProfile(data));
            });
    }
}
export const getStatusThunkCreator = (userId) => {
    return (dispatch) => {
        // let userId = this.props.match.params.userId;
        // if (!userId) { userId = 24; }
        profileAPI.getStatus(userId)
            .then(data => {
                debugger;
                dispatch(setStatus(data));
            });
    }
}
export const updateStatusThunkCreator = (status) => (dispatch) => {
    // let userId = this.props.match.params.userId;
    // if (!userId) { userId = 24; }
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
}

export default profileReducer;