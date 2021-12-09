import axiosTMDB from "../../axiosTMDB"
import { TMDB_API_GET_GENRE } from "../../utils/apis"
import {ACTIONS} from "../../utils/constants"
const {SET_GENRE_ACTION}=ACTIONS

export const setGenre=({genreName,genreId})=>{
    return async (dispatch)=>{
        const {data:{results}}=await axiosTMDB.get(TMDB_API_GET_GENRE(genreId));
        dispatch({
            type:SET_GENRE_ACTION,
            payload:{
                results,
                genreId,
                genreName
            }
        })
    }
}