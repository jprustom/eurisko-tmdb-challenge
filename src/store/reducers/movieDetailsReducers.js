import { ACTIONS } from '../../utils/constants';

const { SET_MOVIE_DETAILS_ACTION, CLEAR_MOVIE_DETAILS_ACTION } = ACTIONS;

const movieDetailsInitialState = null;

// eslint-disable-next-line default-param-last
const movieDetailsReducers = (state = movieDetailsInitialState, { type, payload }) => {
  switch (type) {
    case SET_MOVIE_DETAILS_ACTION:
      return payload;
    case CLEAR_MOVIE_DETAILS_ACTION:
      return movieDetailsInitialState;
    default:
      return state;
  }
};
export default movieDetailsReducers;
