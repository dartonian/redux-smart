import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Main from './Main';

import mainService from './services/Main.service';

const MainCtrl = connect(
    state => ({
        waiting: state.mainReducer.waiting,
        videos: state.mainReducer.videos
    }),
    dispatch => bindActionCreators({
        getVideos: mainService.fetchVideos
    }, dispatch)
)(Main);

export default MainCtrl;