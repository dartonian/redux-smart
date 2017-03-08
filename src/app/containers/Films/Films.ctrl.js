import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Films from './Films';
import filmsService from './services/Films.service';

const FilmsCtrl = connect(
    state => ({
        video: state.filmsReducer.video,
    }),
    dispatch => bindActionCreators({
        getVideos: filmsService.fetchVideos
    }, dispatch)
)(Serials);

export default FilmsCtrl;