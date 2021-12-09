"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setMovieDetails = void 0;

var _constants = require("../../utils/constants");

var SET_MOVIE_DETAILS_ACTION = _constants.ACTIONS.SET_MOVIE_DETAILS_ACTION;

var setMovieDetails = function setMovieDetails(result) {
  return {
    type: SET_MOVIE_DETAILS_ACTION,
    payload: result
  };
};

exports.setMovieDetails = setMovieDetails;