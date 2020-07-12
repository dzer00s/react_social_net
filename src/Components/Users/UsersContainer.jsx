import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Users from './Users';
import { followActionCreator, unfollowActionCreator, setUsersActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator, toggleIsFetchingActionCreator } from '../../redux/users_reducer';
import Preloader from '../Features/Preloader/Preloader';

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.TOGGLE_IS_FETCHING(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.TOGGLE_IS_FETCHING(false);
                this.props.set_users(response.data.items);
                this.props.SET_TOTAL_USERS_COUNT(response.data.totalCount);
            });
    }

    onChanged = (pageNumber) => {
        this.props.TOGGLE_IS_FETCHING(true);
        this.props.SET_CURRENT_PAGE(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.TOGGLE_IS_FETCHING(false);
                this.props.set_users(response.data.items);
            });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                onChanged={this.onChanged}
                users={this.props.users}
                isFetching={this.props.isFetching} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        },
        TOGGLE_IS_FETCHING: (isFetching) => {
            dispatch(toggleIsFetchingActionCreator(isFetching));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)