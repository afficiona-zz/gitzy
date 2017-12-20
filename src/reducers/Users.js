import { fromJS } from 'immutable';

import { normalizeTickerData } from './../utils/normalizer';

const initialState = fromJS({
  isFetching: false,
  isFetchingError: false,
  error: {},
  data: {}
});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_USERS_INIT':
      return state.merge({
        isFetching: true,
        isFetchingError: false
      });

    case 'SEARCH_USERS_FINISHED':
      return state.merge({
        isFetching: false,
        isFetchingError: false,
        data: action.data
      });

    case 'SEARCH_USERS_ERRORED':
      return state.merge({
        isFetching: false,
        isFetchingError: true,
        error: action.error
      });

    default:
      return state;
  }
};
