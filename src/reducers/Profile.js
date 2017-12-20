import { fromJS } from 'immutable';

import { normalizeTickerData } from './../utils/normalizer';

const initialState = fromJS({
  isFetchingProfile: false,
  isFetchingProfileError: false,
  isFetchingRepo: false,
  isFetchingRepoError: false,
  error: {},
  profile: {},
  repos: []
});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PROFILE_INIT':
      return state.merge({
        isFetchingProfile: true,
        isFetchingProfileError: false
      });

    case 'FETCH_PROFILE_FINISHED':
      return state.merge({
        isFetchingProfile: false,
        isFetchingProfileError: false,
        data: action.data
      });

    case 'FETCH_PROFILE_ERRORED':
      return state.merge({
        isFetchingProfile: false,
        isFetchingProfileError: true,
        error: action.error
      });

    case 'FETCH_REPOS_INIT':
      return state.merge({
        isFetchingRepo: true,
        isFetchingRepoError: false
      });

    case 'FETCH_REPOS_FINISHED':
      return state.merge({
        isFetchingRepo: false,
        isFetchingRepoError: false,
        repos: action.data
      });

    case 'FETCH_REPOS_ERRORED':
      return state.merge({
        isFetchingRepo: false,
        isFetchingRepoError: true,
        error: action.error
      });

    default:
      return state;
  }
};
