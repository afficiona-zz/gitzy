import { API_BASE_URL } from './../utils/constants';

/**
 * Search for users as per the given search query
 */
const fetchUsers = (searchTerm) => dispatch => {
  dispatch({ type: 'SEARCH_USERS_INIT' });
  fetch(`${API_BASE_URL}/search?q=${searchTerm}`)
    .then((response) => {
      if (response.ok) {
        // Parse the success response and then resolve the response
        response.json()
          .then((res) => {
            dispatch({ type: 'SEARCH_USERS_FINISHED', data: res });
          })
        ;
      }
    })
    .catch((err) => {
      dispatch({ type: 'SEARCH_USERS_ERRORED', error: err });
    });
};

/**
 * Search for users as per the given search query
 */
const fetchProfile = (username) => dispatch => {
  dispatch({ type: 'FETCH_PROFILE_INIT' });
  fetch(`${API_BASE_URL}/users?u=${username}`)
    .then((response) => {
      if (response.ok) {
        // Parse the success response and then resolve the response
        response.json()
          .then((res) => {
            dispatch({ type: 'FETCH_PROFILE_FINISHED', data: res });
          })
        ;
      }
    })
    .catch((err) => {
      dispatch({ type: 'FETCH_PROFILE_ERRORED', error: err });
    });
};

/**
 * Search for users as per the given search query
 */
const fetchRepositories = (username) => dispatch => {
  dispatch({ type: 'FETCH_REPOS_INIT' });
  fetch(`${API_BASE_URL}/repos?u=${username}`)
    .then((response) => {
      if (response.ok) {
        // Parse the success response and then resolve the response
        response.json()
          .then((res) => {
            dispatch({ type: 'FETCH_REPOS_FINISHED', data: res });
          })
        ;
      }
    })
    .catch((err) => {
      dispatch({ type: 'FETCH_REPOS_ERRORED', error: err });
    });
};

export default {
  fetchUsers,
  fetchProfile,
  fetchRepositories
};
