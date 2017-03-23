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

    componentWillMount(){
        const {
            params:{
                serialName
            },
            getSerials,
            serialsList,
            setCurrentSerial
        } = this.props;

        if(!serialsList.length) {
            getSerials();
        }

        setCurrentSerial(serialName);
    }

    render() {

        const {
            currentSerial: {
                title,
                seasons,
            },
            currentSeason,
            currentVideo
        } = this.props;

        const videoUrl = seasons ? `/public/serials/${title}/${seasons[currentSeason].series[currentVideo]}` : '';

        return (
            <div className="section">
                <div className="section__content">

                    <h1 className="text text_title">{title}</h1>

                    <div>
                        {
                            seasons && seasons.map((season, i) => {
                                return (<FlatButton key={i} label={season.season} primary={true}/>)
                            })
                        }

                    </div>

                    <br/>

                    <div className="hr" />

                    <br/>

                    <ul>
                        {
                            seasons && seasons[currentSeason].series.map((video,i)=>{
                                return (
                                    <li key={i} onClick={e => {this.playVideo(video)}} className="main__list-item">
                                        <RaisedButton className="main__list-btn" primary={true} label={`Серия № ${i}`} />
                                    </li>
                                );
                            })
                        }
                    </ul>

                    <div className="cinema">

                        {
                            seasons && (
                                <video width="100%" controls>
                                    <source src={videoUrl} type="video/mp4" />
                                </video>
                            )
                        }

                    </div>
                </div>
            </div>
        );
    }
}