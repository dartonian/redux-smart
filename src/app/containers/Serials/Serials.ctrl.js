import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Serials from './Serials';
import serialsService from './services/Serials.service';

const SerialsCtrl = connect(
    state => ({
        video: state.serialsReducer.video,
    }),
    dispatch => bindActionCreators({
        getVideos: serialsService.fetchVideos
    }, dispatch)
)(Serials);

export default SerialsCtrl;