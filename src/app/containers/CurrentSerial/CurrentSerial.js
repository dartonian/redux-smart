import React, {Component, PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';

export default class CurrentSerial extends Component {
    static propTypes = {

    };

    componentDidMount(){
        //const {} = this.props;
    }

    render() {

        //const {} = this.props;

        const currentVideo = 'video.mp4';
        const seasons = 10;
        const videos = ["описание 1","описание 2","описание 3","описание 4","описание 5","описание 6","описание 7","описание 8","описание 9","описание 10"];

        return (
            <div className="section">
                <div className="section__content">

                    <h1 className="text text_title">Доктор кто</h1>

                    <div>
                        <FlatButton label="s01" primary={true} />
                        <FlatButton label="s02" primary={true} />
                        <FlatButton label="s03" primary={true} />
                        <FlatButton label="s04" primary={true} />
                        <FlatButton label="s05" primary={true} />
                        <FlatButton label="s06" primary={true} />
                        <FlatButton label="s07" primary={true} />
                        <FlatButton label="s08" primary={true} />
                        <FlatButton label="s09" primary={true} />
                        <FlatButton label="s10" primary={true} />
                    </div>

                    <div className="hr" />

                    <div>
                        {
                            videos && videos.map((video,i)=>{
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
                            (currentVideo) && (
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