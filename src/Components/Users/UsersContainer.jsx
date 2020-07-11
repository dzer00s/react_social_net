import React from 'react';
import { connect } from 'react-redux';
import UsersC from './UsersC';
import { followActionCreator, unfollowActionCreator, setUsersActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator } from '../../redux/users_reducer';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage

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
        },
        SET_CURRENT_PAGE: (pageNumber) => {
            dispatch(setCurrentPageActionCreator(pageNumber));
        },
        SET_TOTAL_USERS_COUNT: (totalCount) => {
            dispatch(setTotalUsersCountActionCreator(totalCount));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersC)