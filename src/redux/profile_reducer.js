import { profileAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        { id: 1, message: 'i will be King!', like: '10' },
        { id: 2, message: 'politics evil', like: '2' }
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = action.newPostText;
            return {
                ...state,
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

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
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
                dispatch(setStatus(data));
            });
    }
}
export const updateStatusThunkCreator = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
}

export default profileReducer;