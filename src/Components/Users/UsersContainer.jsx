import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Users from './Users';
import { setFollow, setUnfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../../redux/users_reducer';
import Preloader from '../Features/Preloader/Preloader';
import { usersAPI } from '../../api/api';

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });
    }

    onChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                setFollow={this.props.setFollow}
                setUnfollow={this.props.setUnfollow}
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

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followActionCreator(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowActionCreator(userId));
//         },
//         set_users: (users) => {
//             dispatch(setUsersActionCreator(users));
//         },
//         SET_CURRENT_PAGE: (pageNumber) => {
//             dispatch(setCurrentPageActionCreator(pageNumber));
//         },
//         SET_TOTAL_USERS_COUNT: (totalCount) => {
//             dispatch(setTotalUsersCountActionCreator(totalCount));
//         },
//         TOGGLE_IS_FETCHING: (isFetching) => {
//             dispatch(toggleIsFetchingActionCreator(isFetching));
//         }
//     }
// }


export default connect(mapStateToProps,
    { setFollow, setUnfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching })(UsersAPIComponent);