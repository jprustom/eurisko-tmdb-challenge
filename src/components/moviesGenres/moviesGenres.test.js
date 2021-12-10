import React from 'react';
import { render, shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import MoviesGenres from './MoviesGenres';
import MovieGenre from './moviesGenre/movieGenre/MovieGenre';

React.useLayoutEffect = React.useEffect;
describe('MoviesGenres component', () => {
  const mockStore = configureMockStore([thunk]);
  test('renders', () => {
    const mockedStore = mockStore({
      movieDetails: null,
      genres: [],
    });
    const wrapper = shallow(
      <Provider store={mockedStore}>
        <MoviesGenres />
      </Provider>,
    );
    expect(wrapper.find(MovieGenre)).toHaveLength(3);
    // expect(wrapper.find('.movies-container')).toHaveLength(3);
    // expect(wrapper.find('.movies-container')).to.have.lengthOf(3);
  });
});
