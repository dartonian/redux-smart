import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CurrentSerial from './CurrentSerial';
import currentSerialService from './services/CurrentSerial.service';

const CurrentSerialCtrl = connect(
    state => ({
        video: state.currentSerialReducer.video,
    }),
    dispatch => bindActionCreators({
        getVideos: currentSerialService.fetchVideos
    }, dispatch)
)(CurrentSerial);

export default CurrentSerialCtrl;