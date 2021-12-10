const ACTION_GENRE_ID = 28;
const COMEDY_GENRE_ID = 35;
const CRIME_GENRE_ID = 80;

export const GENRES_TO_DISPLAY = [
  {
    name: 'action',
    id: ACTION_GENRE_ID,
  },
  {
    name: 'comedy',
    id: COMEDY_GENRE_ID,
  },
  {
    name: 'crime',
    id: CRIME_GENRE_ID,
  },
];
export const ACTIONS = {
  FETCH_GENRE_ACTION: 'FETCH_GENRE_ACTION',
  SET_GENRE_ACTION: 'SET_GENRE_ACTION',
  FETCH_MOVIE_DETAILS_ACTION: 'FETCH_MOVIE_DETAILS_ACTION',
  SET_MOVIE_DETAILS_ACTION: 'SET_MOVIE_DETAILS_ACTION',
  CLEAR_MOVIE_DETAILS_ACTION: 'CLEAR_MOVIE_DETAILS_ACTION',
  FETCH_GENRE_ERROR_ACTION: 'FETCH_GENRE_ERROR',
  FETCH_MOVIE_DETAILS_ERROR_ACTION: 'FETCH_MOVIE_DETAILS_ERROR',
};
