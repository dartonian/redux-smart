import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CurrentSerial from './CurrentSerial';
import currentSerialService from './services/CurrentSerial.service';
import SerialsService from '../Serials/services/Serials.service';

const CurrentSerialCtrl = connect(
    state => ({
        serialsList: state.serialsReducer.serialsList,
        currentSerial: state.currentSerialReducer.currentSerial,
        currentSeason: state.currentSerialReducer.currentSeason,
        currentVideo: state.currentSerialReducer.currentVideo,
    }),
    dispatch => bindActionCreators({
        getSerialInfo: SerialsService.fetchVideos,
        setCurrentSerial: currentSerialService.setCurrentSerial
    }, dispatch)
)(CurrentSerial);

export default CurrentSerialCtrl;