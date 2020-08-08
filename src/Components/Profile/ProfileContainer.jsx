import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfileThunkCreator, getStatusThunkCreator } from '../../redux/profile_reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        // userId = this.props.userId;
        userId = 26;
        this.props.getProfileThunkCreator(userId);
        this.props.getStatusThunkCreator(userId);
    }
    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.ProfilePage.profile,
    userId: state.auth.id,
    status: state.ProfilePage.status
});


export default compose(
    connect(mapStateToProps, { getProfileThunkCreator, getStatusThunkCreator }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);