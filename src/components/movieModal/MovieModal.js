import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { clearMovieDetails } from '../../store/actions/movieDetailsActions';
import { TMDB_API_POSTER_PATH } from '../../utils/apis';

import MovieModalStyles from './MovieModal.module.scss';

const MovieModal = () => {
  const dispatch = useDispatch();
  const selectedMovie = useSelector((state) => state?.movieDetails);
  const displayGenres = useCallback(() => `${selectedMovie?.genres.map((({ name }) => name)).join()}`, [selectedMovie]);
  const onHideHandler = () => dispatch(clearMovieDetails());

  if (!selectedMovie) { return null; }
  const {
    release_date: releaseDate, homepage, title, overview, vote_average: voteAverage,
    backdrop_path: backdropPath,
  } = selectedMovie;

  return (
    <Modal data-testid="movieDetails" className={`${MovieModalStyles.Modal}`} show={selectedMovie} onHide={onHideHandler}>
      {
                    selectedMovie
                      ? (
                        <>
                          <Modal.Header closeButton>
                            <Modal.Title>{title}</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <img style={{ maxWidth: '100%' }} alt="Modal" src={`${TMDB_API_POSTER_PATH + backdropPath}`} />
                            <h6 className="my-2">
                              Genres:
                              {displayGenres()}
                            </h6>
                            <p>{overview}</p>
                            <p>
                              {voteAverage}
                              /10
                            </p>
                            <p>
                              Released on
                              {releaseDate.replaceAll('-', '/')}
                            </p>
                          </Modal.Body>
                          <Modal.Footer onClick={() => window.open(homepage)} className={`${MovieModalStyles.NetflixLinkContainer} bg-primary`}>
                            <span className={MovieModalStyles.NetflixLink}>Watch now </span>
                          </Modal.Footer>
                          <Modal.Footer>
                            <Button variant="primary" onClick={onHideHandler}>
                              Cool
                            </Button>
                          </Modal.Footer>
                        </>
                      )
                      : ''
                }
    </Modal>
  );
};
export default MovieModal;
