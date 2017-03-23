import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CurrentFilm from './CurrentFilm';
import currentFilmService from './services/CurrentFilm.service';
import FilmService from '../Films/services/Films.service';

const CurrentFilmCtrl = connect(
    state => ({
        filmsList: state.filmsReducer.filmsList,
        currentFilm: state.currentFilmsReducer.currentFilm
    }),
    dispatch => bindActionCreators({
        getFilmInfo: FilmService.fetchVideos,
        setCurrentFilm: currentFilmService.setCurrentFilm
    }, dispatch)
)(CurrentFilm);

export default CurrentFilmCtrl;