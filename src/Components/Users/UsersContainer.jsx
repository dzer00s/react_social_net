import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { setFollow, setUnfollow, setCurrentPage, getUsersThunkCreator } from '../../redux/users_reducer';
import Preloader from '../Features/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onChanged = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
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
                isFetching={this.props.isFetching}
                followingInProgress={this.props.followingInProgress} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
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

let withRedirect = withAuthRedirect(UsersAPIComponent);

export default connect(mapStateToProps,
    {
        setFollow, setUnfollow,
        setCurrentPage, getUsersThunkCreator
    })(withRedirect);