import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CurrentFilm from './CurrentFilm';
import currentFilmService from './services/CurrentFilm.service';

const CurrentFilmCtrl = connect(
    state => ({
        film: state.filmsReducer.video,
    }),
    dispatch => bindActionCreators({
        getFilmInfo: currentFilmService.fetchVideos
    }, dispatch)
)(CurrentFilm);

export default CurrentFilmCtrl;