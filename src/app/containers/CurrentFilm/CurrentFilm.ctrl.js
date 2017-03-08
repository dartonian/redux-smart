import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CurrentFilm from './CurrentFilm';
import currentFilmService from './services/CurrentFilm.service';

const CurrentFilmCtrl = connect(
    state => ({
        video: state.filmsReducer.video,
    }),
    dispatch => bindActionCreators({
        getVideos: currentFilmService.fetchVideos
    }, dispatch)
)(CurrentFilm);

export default CurrentFilmCtrl;