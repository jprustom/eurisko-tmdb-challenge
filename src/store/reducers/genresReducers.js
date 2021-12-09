import {ACTIONS} from "../../utils/constants"
const {SET_GENRE_ACTION}=ACTIONS
const genresInitialState={} //maybe move to constants?

const genresReducers=(state=genresInitialState,{type,payload})=>{
    switch (type){
        case SET_GENRE_ACTION:
            const {genreName,results}=payload;
            if (!results || !genreName || results.length===0)
                return state;
            return {
                ...state,
                [genreName?.toLowerCase()]:results
            }
        default:
            return state;
    }
}
export default genresReducers