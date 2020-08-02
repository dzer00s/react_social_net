import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfileThunkCreator } from '../../redux/profile_reducer';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        userId = this.props.userId;
        this.props.getProfileThunkCreator(userId);
    }
    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);


let mapStateToProps = (state) => ({
    profile: state.ProfilePage.profile,
    userId: state.auth.id
});

let withUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { getProfileThunkCreator })(withUrlDataContainerComponent);