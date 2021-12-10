import getRandomElementFromArray from '../../getRandomElementFromArray';
import { ACTIONS } from '../../constants';

const { SET_GENRE_ACTION } = ACTIONS;
const dispatchedSetGenreDataPayloadReceivedExamples = [{
  genreName: 'action',
  results: [{ title: 'Example movie' }],
}, {
  genreName: 'comedy',
  results: [{ title: 'Example movie' }],
}];
const mockDispatchedSetGenreDataReceived = () => (
  {
    type: SET_GENRE_ACTION,
    payload: getRandomElementFromArray(dispatchedSetGenreDataPayloadReceivedExamples),
  }
);
export default mockDispatchedSetGenreDataReceived;
