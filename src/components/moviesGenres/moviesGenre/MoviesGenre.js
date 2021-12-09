import { useEffect,Fragment} from "react";
import Col from "react-bootstrap/Col"
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'; 

import MovieGenre from "./movieGenre/MovieGenre";
import {setGenre} from "../../../store/actions/genresActions"
import MoviesGenreStyles from "./MoviesGenre.module.scss"

const MoviesGenre=({genreName,genreId})=>{
    const moviesGenre = useSelector((state) => state?.genres && state.genres[''+genreName])
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(setGenre({genreName,genreId}))
    },[genreId,genreName,dispatch])

    return moviesGenre?.length>0
            ?<>
                <h1 className="mt-4" style={{textTransform:'capitalize'}}>{genreName}</h1>
                {/* Instead of the div below I used Row but I could not make it scroll horizontally. Please show me how to do it with Bootstrap Row Component. Or maybe I should have used bootstrap's flex classes?*/}
                <div className={`mt-7 p-2 text-center ${MoviesGenreStyles.SrollHorizontally}`}>
                        {
                            moviesGenre.map(
                                movieGenre=><Col className="col-4" key={movieGenre.id}>
                                                <MovieGenre {...movieGenre} />
                                            </Col>
                            )    
                        }
                    </div>
            </>
            :null
};

MoviesGenre.propTypes={
    genreName:PropTypes.string.isRequired,
    genreId:PropTypes.number.isRequired
}

export default MoviesGenre