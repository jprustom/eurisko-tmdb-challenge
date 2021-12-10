import React, { useCallback } from 'react';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { setMovieDetails } from '../../../../store/actions/movieDetailsActions';

import { TMDB_API_POSTER_PATH } from '../../../../utils/apis';

import MovieGenreStyles from './MovieGenre.module.scss';

const MovieGenre = (
  {
    id,
    releaseDate,
    title,
    voteAverage,
    posterPath,
  },
) => {
  const dispatch = useDispatch();
  const onMovieCardClickHandler = useCallback(() => dispatch(setMovieDetails(id)), [id, dispatch]);
  return (
    <Card data-test-id="movie" onClick={onMovieCardClickHandler} className={`bg-secondary mx-1 ${MovieGenreStyles.MovieGenre}  `}>
      <Card.Img variant="top" src={TMDB_API_POSTER_PATH + posterPath} />
      <Card.Title className={`mt-2 ${MovieGenreStyles.Heading}`}>{title}</Card.Title>
      <Card.Subtitle className={MovieGenreStyles.Rating}>
        {voteAverage}
        /10
      </Card.Subtitle>
      <Card.Footer className={MovieGenreStyles.ReleaseDate}>{releaseDate}</Card.Footer>
    </Card>
  );
};
MovieGenre.propTypes = {
  id: PropTypes.number.isRequired,
  releaseDate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  voteAverage: PropTypes.number.isRequired,
  posterPath: PropTypes.string.isRequired,
};
export default MovieGenre;
