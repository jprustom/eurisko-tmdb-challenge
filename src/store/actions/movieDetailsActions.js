import axiosTMDB from '../../axiosTMDB';
import { TMDB_API_GET_MOVIE } from '../../utils/apis';
import { ACTIONS } from '../../utils/constants';

const {
  SET_MOVIE_DETAILS_ACTION, CLEAR_MOVIE_DETAILS_ACTION,
  FETCH_MOVIE_DETAILS_ERROR_ACTION,
} = ACTIONS;

export const clearMovieDetails = () => ({
  type: CLEAR_MOVIE_DETAILS_ACTION,
});
export const setMovieDetails = (movieId) => async (dispatch) => {
  try {
    const { data: payload } = await axiosTMDB.get(TMDB_API_GET_MOVIE(movieId));
    dispatch({
      type: SET_MOVIE_DETAILS_ACTION,
      payload,
    });
  } catch (err) {
    dispatch({ type: FETCH_MOVIE_DETAILS_ERROR_ACTION });
  }
};
