import axiosTMDB from '../../axiosTMDB';
import { TMDB_API_GET_GENRE } from '../../utils/apis';
import { ACTIONS } from '../../utils/constants';

const { SET_GENRE_ACTION, FETCH_GENRE_ERROR_ACTION } = ACTIONS;

// eslint-disable-next-line import/prefer-default-export
export const setGenre = ({ genreName, genreId }) => async (dispatch) => {
  try {
    const { data: { results } } = await axiosTMDB.get(TMDB_API_GET_GENRE(genreId));
    dispatch({
      type: SET_GENRE_ACTION,
      payload: {
        results,
        genreId,
        genreName,
      },
    });
  } catch (err) {
    dispatch({
      type: FETCH_GENRE_ERROR_ACTION,
    });
  }
};
