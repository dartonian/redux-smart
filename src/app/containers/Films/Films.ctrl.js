import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Films from './Films';
import filmsService from './services/Films.service';

const FilmsCtrl = connect(
    state => ({
        filmsList: state.filmsReducer.filmsList,
    }),
    dispatch => bindActionCreators({
        getFilms: filmsService.fetchVideos
    }, dispatch)
)(Films);

export default FilmsCtrl;