import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUsersProfile } from '../../redux/profile_reducer';
import { withRouter } from 'react-router-dom';
import { profileAPI } from '../../api/api';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) { userId = 24; }
        profileAPI.getProfile(userId)
            .then(data => {
                this.props.setUsersProfile(data);
            });
    }
    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.ProfilePage.profile,
    // auth: state.auth.id
});

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUsersProfile })(withUrlDataContainerComponent);