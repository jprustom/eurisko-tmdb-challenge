import { combineReducers } from 'redux';
import genresReducers from './genresReducers';
import movieDetailsReducers from './movieDetailsReducers';

//I know that this logic is not big enough to require two reducers but I just wanted to show my knowledge of Redux when dealing with many reducers and many actions
export default combineReducers({
    genres:genresReducers,
    movieDetails:movieDetailsReducers
})