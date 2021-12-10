import React from 'react';
import Container from 'react-bootstrap/Container';
import { GENRES_TO_DISPLAY } from '../../utils/constants';
import MoviesGenre from './moviesGenre/MoviesGenre';

const MoviesGenres = () => (
  <Container className="px-0 mb-3">
    {
      GENRES_TO_DISPLAY.map(
        ({ name: genreName, id: genreId }) => (
          <MoviesGenre
            key={genreId}
            genreName={genreName}
            genreId={genreId}
          />
        ),
      )
    }
  </Container>
);

export default MoviesGenres;
