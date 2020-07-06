import React from 'react';
import { connect } from 'react-redux';
import UsersC from './UsersC';
import { followActionCreator, unfollowActionCreator, setUsersActionCreator } from '../../redux/users_reducer';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId));
        },
        set_users: (users) => {
            dispatch(setUsersActionCreator(users));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersC);