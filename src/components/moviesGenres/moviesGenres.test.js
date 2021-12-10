/* eslint-disable max-len */
import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import MovieModal from '../movieModal/MovieModal';
import MoviesGenres from './MoviesGenres';
import MoviesGenre from './moviesGenre/MoviesGenre';
import { GENRES_TO_DISPLAY } from '../../utils/constants';

describe('MoviesGenres component', () => {
  const mockStore = configureMockStore([thunk]);
  test('renders the correct number of movies genres containers', () => {
    const mockedStore = mockStore({
      movieDetails: null,
      genres: [],
    });
    const moviesHorizontalContainersToDisplayNum = GENRES_TO_DISPLAY.length;
    const wrapper = shallow(
      <Provider store={mockedStore}>
        <MoviesGenres />
        <MovieModal />
      </Provider>,
    );
    // the line below should be const moviesGenreComponentTimesRendered = wrapper.find(MoviesGenre).length;
    // for us to be able to write wrapper.find directly we should use mount
    // However mount will not work because of an incompatibilty issue of enzyme with the new react version
    const moviesGenreComponentTimesRendered = wrapper.dive().at(0).dive().dive()
      .find('div')
      .find(MoviesGenre).length;
    expect(moviesGenreComponentTimesRendered).toBe(moviesHorizontalContainersToDisplayNum);
  });
});
