import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Loader from './../components/Loader';

/**
 * UsersList is a component to show the list of users from the store
 */
class UsersList extends Component {
  render() {
    const Users = this.props.Users.getIn(['data', 'items']);
    return (
      <div className="users-box">
        {(() => {
          if (this.props.Users.get('isFetching')) {
            return <Loader />;
          }

          if (!this.props.Users.get('isFetching') && this.props.Users.get('isFetchingError')) {
            return <div>Something went wrong...</div>;
          }

          if (Users) {
            return Users.map((User) => {
              let parsedData = User.toJSON();
              return (
                <Link
                  className="each"
                  to={`/users/${parsedData.login}`}
                  id={parsedData.id}>
                  <div className="avatar">
                    <img width="56" src={parsedData.avatar_url} alt=""/>
                  </div>
                  <div className="details">
                    <div className="name">
                      {parsedData.login}
                    </div>
                    <div className="description">
                      {parsedData.html_url}
                    </div>
                  </div>
                </Link>
              );
            });
          }

          return null;
        })()}
      </div>
    );
  }
}

export default UsersList;
