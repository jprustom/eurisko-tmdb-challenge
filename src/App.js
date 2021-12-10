import React from 'react';
import Container from 'react-bootstrap/Container';
import { Provider } from 'react-redux';

import store from './store';
import MoviesGenres from './components/moviesGenres/MoviesGenres';
import MovieModal from './components/movieModal/MovieModal';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <Container className="text-left">
        <h1>TMDB</h1>
        <MoviesGenres />
        <MovieModal />
      </Container>
    </Provider>
  );
}

export default App;
