import genresReducers from './genresReducers';
import mockPreviousState from '../../utils/tests/genresReducers/mockPreviousState';
import mockDispatchedSetGenreDataReceived from '../../utils/tests/genresReducers/mockDispatchedSetGenreActionData';

describe('Genres reducer', () => {
  test('should add the given genre when we dispatch the set genre action', () => {
    const previousState = mockPreviousState();
    const dispatchedSetGenreActionDataReceived = mockDispatchedSetGenreDataReceived();
    expect(genresReducers(previousState, dispatchedSetGenreActionDataReceived))
      .toMatchObject({
        ...previousState,
        [`${dispatchedSetGenreActionDataReceived?.payload?.genreName?.toLowerCase()}`]: [{ title: 'Example movie' }],
      });
  });
  test('should return previous state when provided an incompatible action', () => {
    const previousState = mockPreviousState();
    expect(genresReducers(previousState, { type: 'Some Incompatible Type' })).toMatchObject(previousState);
  });
});
