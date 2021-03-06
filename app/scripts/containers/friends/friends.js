import * as ActionCreators from '../../actions/index';

import React from 'react';

import { connect } from 'react-redux';
import Header from '../../components/header/header';

import './friends.scss';

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
            <div className="friends content">
                <div className="top">
                    <div className="col-lg-6">
                        <h1>Friends</h1>
                        <ul className="friendList">
                            { this.props.friends.toArray().map(friend => <li className="friend" key={friend.id}>{friend.name}</li>) }
                        </ul>
                        {noFriendsMessage}
                    </div>
                    <div className="col-lg-6">
                        <h1>Friend Requests</h1>
                        <ul className="friendRequestList">
                            {
                                this.props.friendRequests.toArray().map(user => {
                                    return <li className="friendRequest" key={user.id}>
                                        <div className="name">
                                            {user.name}
                                        </div>
                                        <div className = "buttonSection">
                                            <span className="button" onClick={() => this.props.respondToFriendRequest(true,user.id)}> Accept </span>
                                            <span className="button" onClick={() => this.props.respondToFriendRequest(false,user.id)}> Reject </span>
                                        </div>
                                    </li>;
                                })
                            }
                        </ul>
                        {noFriendRequestMessage}
                    </div>
                </div>
                <div className="col-lg-12 bottom">
                    <div className="searchTop">
                        <h1>User Search</h1>
                        <input className="searchInput" type="text" onChange={event => this.updateUserSearchResults(event)} />
                    </div>
                    <div className="searchBody">
                        <ul className="searchResults">
                            { this.props.userSearchResults.toArray().map(user => {
                                    return <li className="searchResult" key={user.id}>
                                        <span className="button" onClick={this.props.sendFriendRequest(user.id)}>Send friend request</span>
                                        <span className="name">{user.name}</span>
                                    </li>
                                })
                            }
                        </ul>
                        {noSearchResultsMessage}
                    </div>
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
        sendFriendRequest: userId => ActionCreators.sendFriendRequest(userId),
        respondToFriendRequest: (isAccepted, userId) => dispatch(ActionCreators.respondToFriendRequest(isAccepted, userId)),
        userSearch: searchTerm => dispatch(ActionCreators.searchUsersByName(searchTerm)),
        viewFriends: () => dispatch(ActionCreators.viewFriends()),
        viewHome: () => dispatch(ActionCreators.viewHome())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Friends);