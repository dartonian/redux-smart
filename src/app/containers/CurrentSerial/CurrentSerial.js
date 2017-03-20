import React, {Component, PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';

export default class CurrentSerial extends Component {
    static propTypes = {

    };


    componentWillMount(){
        const {
            params:{
                serialName
            },
            getSerialInfo
        } = this.props;

        getSerialInfo(serialName);

    }



    render() {

        const {
            serial: {
                title,
                seasons,//array with title and series
            },
            currentSeason,
            currentVideo
        } = this.props;


        return (
            <div className="section">
                <div className="section__content">

                    <h1 className="text text_title">{title}</h1>

                    <div>
                        {
                            seasons && seasons.map((season,i) => {
                                <FlatButton key={i} label={season.title} primary={true} />
                            })
                        }

                    </div>

                    <br/>

                    <div className="hr" />

                    <br/>

                    <div>
                        {
                            seasons && seasons[currentSeason].series.map((video,i)=>{
                                return (
                                    <li key={i} onClick={e => {this.playVideo(video)}} className="main__list-item">
                                        <RaisedButton className="main__list-btn" primary={true} label={`${video} | Серия № ${i}`} />
                                    </li>
                                );
                            })
                        }
                    </div>

                    <div className="cinema">

                        {
                            currentVideo && (
                                <video width="100%" controls>
                                    <source src={`/videos/${currentVideo}`} type="video/mp4" />
                                </video>
                            )
                        }

                    </div>
                </div>
            </div>
        );
    }
}