import * as ActionCreators from '../../actions/index';

import React from 'react';

import { connect } from 'react-redux';
import Header from '../../components/header/header';

class Friends extends React.Component {
    render() {
        let noFriendsMessage;
        let noFriendRequestMessage;
        let noSearchResultsMessage;

        if (this.props.friends.isEmpty()) {
            noFriendsMessage = <h2>You have no friends</h2>
        }

        if (this.props.friendRequests.size == 0) {
            noFriendRequestMessage = <h2>You have no friend requests</h2>
        }

        if (this.props.userSearchResults.size == 0) {
            noSearchResultsMessage = <h2>There are no search results</h2>;
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
                        <ul>
                            { this.props.friendRequests.toArray().map(user => <li>{user.name}</li>) }
                        </ul>
                        {noFriendRequestMessage}
                    </div>
                </div>
                <div>
                    <input type="text" onChange={event => this.updateUserSearchResults(event)} />
                    <ul>
                        { this.props.userSearchResults.toArray().map(user => <li>{user.name}</li>) }
                    </ul>
                    {noSearchResultsMessage}
                </div>
            </div>
        </div>;
    }

    componentWillMount() {
        this.props.getFriends();
        this.props.getFriendRequests();
    }

    updateUserSearchResults(event) {
        this.props.userSearch(event.target.value);
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friends,
        friendRequests: state.friendRequests,
        userSearchResults: state.userSearchResults,
        isLoggedIn: state.authentication.get('isLoggedIn'),
        user: state.authentication.get('user')
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getFriendRequests: () => dispatch(ActionCreators.getFriendRequests()),
        getFriends: () => dispatch(ActionCreators.getFriends()),
        userSearch: searchTerm => dispatch(ActionCreators.searchUsersByName(searchTerm)),
        viewFriends: () => dispatch(ActionCreators.viewFriends()),
        viewHome: () => dispatch(ActionCreators.viewHome())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Friends);