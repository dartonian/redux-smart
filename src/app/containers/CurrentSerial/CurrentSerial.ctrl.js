import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CurrentSerial from './CurrentSerial';
import currentSerialService from './services/CurrentSerial.service';

const CurrentSerialCtrl = connect(
    state => ({
        serial: state.currentSerialReducer.serial,
        currentSeason: state.currentSerialReducer.currentSeason,
        currentVideo: state.currentSerialReducer.currentVideo,
    }),
    dispatch => bindActionCreators({
        getSerialInfo: currentSerialService.fetchVideos
    }, dispatch)
)(CurrentSerial);

export default CurrentSerialCtrl;