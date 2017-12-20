import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import actions from './../actions';
import UsersList from './../components/UsersList';
import SearchForm from './../components/SearchForm';

class HomePage extends Component {

  fetchUsers = (search) => {
    this.props.actions.fetchUsers(search);
  };

  render() {
    return (
      <div className="app">
        <div className="main-wrapper">
          <div className="content-wrapper">
            <div className="content-sidebar" />
            <div className="content-main">
              <div className="content-header">
                <SearchForm fetchUsers={this.fetchUsers} />
              </div>
              <div className="content-body">
                <UsersList Users={this.props.Users} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ Users }) {
  return {
    Users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
