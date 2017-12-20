import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Loader from './../components/Loader';
import actions from './../actions';

class Profile extends Component {
  
  componentDidMount() {
    const userName = this.props.match.params.username;
    this.props.actions.fetchProfile(userName);
    this.props.actions.fetchRepositories(userName);
  };

  render() {
    return (
      <div className="app">
        <div className="main-wrapper">
          <div className="content-wrapper">
            <div className="content-sidebar" />
            {(() => {
              if (this.props.Profile.get('isFetchingProfile')) {
                return (
                  <Loader />
                )
              }

              return (
                <div className="content-main">
                  <div className="content-header">
                    {this.props.Profile.getIn(['data', 'name'])}
                  </div>
                  <div className="content-body">
                    {this.props.Profile.getIn(['repos']).map((repo) => {
                      return (
                        <div>{repo.get('name')}</div>
                      )
                    })}
                  </div>
                </div>
              )
            })()}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ Profile }) {
  return {
    Profile
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
