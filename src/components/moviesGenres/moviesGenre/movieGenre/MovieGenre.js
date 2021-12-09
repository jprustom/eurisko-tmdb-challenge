import { useCallback } from 'react'
import Card from 'react-bootstrap/Card'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'; 

import { setMovieDetails } from '../../../../store/actions/movieDetailsActions'

import { TMDB_API_POSTER_PATH } from '../../../../utils/apis'

import MovieGenreStyles from "./MovieGenre.module.scss"

const MovieGenre = (
    {
        id,
        release_date:releaseDate,
        title,
        vote_average:voteAverage,
        poster_path:posterPath
    }
)=>{
    const dispatch=useDispatch();
    const onMovieCardClickHandler=useCallback(()=>dispatch(setMovieDetails(id)),[id,dispatch])
    return <Card onClick={onMovieCardClickHandler} className={`bg-secondary mx-1 ${MovieGenreStyles.MovieGenre}  `}>
                <Card.Img variant="top" src={TMDB_API_POSTER_PATH+posterPath} />
                <Card.Title className={`mt-2 ${MovieGenreStyles.Heading}`}>{title}</Card.Title>
                <Card.Subtitle className={MovieGenreStyles.Rating}>{voteAverage}/10</Card.Subtitle>
                <Card.Footer className={MovieGenreStyles.ReleaseDate}>{releaseDate}</Card.Footer>
            </Card>
}
MovieGenre.propTypes={
    id:PropTypes.number.isRequired,
    release_date:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    vote_average:PropTypes.number.isRequired,
    poster_path:PropTypes.string.isRequired
}
export default MovieGenre