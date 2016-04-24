import * as ActionCreators from '../../actions/index';

import React from 'react';

import { connect } from 'react-redux';
import Header from '../../components/header/header';

class Friends extends React.Component {
    render() {
        let noFriendsMessage;

        if (this.props.friends.isEmpty()) {
            noFriendsMessage = <h2>YOU GOT NO FRIENDS</h2>
        }

        return <div>
            <Header isLoggedIn={this.props.isLoggedIn} user={this.props.user} viewHome={this.props.viewHome} viewFriends={this.props.viewFriends}/>
            <div className="content">
                <div>
                    <div className="col-lg-6">
                        <h1>FRIENDZZZZ</h1>
                        <ul>
                            { this.props.friends.valueSeq().map(friend => <li>{friend.name}</li>) }
                        </ul>
                        {noFriendsMessage}
                    </div>
                    <div className="col-lg-6">
                        <h1>Friend Requestzzz</h1>

                    </div>
                </div>
            </div>
        </div>;
    }

    componentWillMount() {
        this.props.getFriends();
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friends,
        isLoggedIn: state.authentication.get('isLoggedIn'),
        user: state.authentication.get('user')
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getFriends: () => dispatch(ActionCreators.getFriends()),
        viewFriends: () => dispatch(ActionCreators.viewFriends()),
        viewHome: () => dispatch(ActionCreators.viewHome())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Friends);