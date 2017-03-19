import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Main from './Main';
import mainService from './services/Main.service';
import filmsService from '../Films/services/Films.service';
import serialsService from '../Serials/services/Serials.service';

const MainCtrl = connect(
    state => ({
        filmsList: state.filmsReducer.filmsList,
        serialsList: state.serialsReducer.serialsList,
        waitingFilms: state.filmsReducer.waiting,
        waitingSerials: state.serialsReducer.waiting
    }),
    dispatch => bindActionCreators({
        getFilms: filmsService.fetchVideos,
        getSerials: serialsService.fetchVideos
    }, dispatch)
)(Main);

export default MainCtrl;