import movieDetailsReducers from './movieDetailsReducers';
import { ACTIONS } from '../../utils/constants';

const { CLEAR_MOVIE_DETAILS_ACTION, SET_MOVIE_DETAILS_ACTION } = ACTIONS;
describe('Movie Details Reducers', () => {
  test('should clear movie details when clear action is dispatched', () => {
    const previousState = {};
    expect(movieDetailsReducers(previousState, { type: CLEAR_MOVIE_DETAILS_ACTION })).toBeNull();
  });
  test('should set movie details when set action is dispatched', () => {
    const previousState = {};
    const newState = {
      title: 'Movie Details Title Fetched',
    };
    expect(movieDetailsReducers(
      previousState,
      { type: SET_MOVIE_DETAILS_ACTION, payload: newState },
    )).toMatchObject(newState);
  });
});
