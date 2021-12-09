import axiosTMDB from "../../axiosTMDB"
import { TMDB_API_GET_MOVIE } from "../../utils/apis"
import {ACTIONS} from "../../utils/constants"
const {SET_MOVIE_DETAILS_ACTION,CLEAR_MOVIE_DETAILS_ACTION}=ACTIONS

export const clearMovieDetails=()=>({
    type:CLEAR_MOVIE_DETAILS_ACTION
})
export const setMovieDetails=(movieId)=>{
    return async (dispatch)=>{
        const {data:payload}=await axiosTMDB.get(TMDB_API_GET_MOVIE(movieId));
        dispatch({
            type:SET_MOVIE_DETAILS_ACTION,
            payload
        })
    }
}
