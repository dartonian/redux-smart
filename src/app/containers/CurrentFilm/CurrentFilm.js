import React, {Component, PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

export default class CurrentFilm extends Component {
    static propTypes = {

    };

    componentDidMount(){
        //const {} = this.props;
    }

    render() {

        //const {} = this.props;
        const currentVideo = 'video.mp4';
        const videoName = 'Джанго';

        return (
            <div className="section">
                <div className="section__content">

                    <h1 className="text text_title">{videoName}</h1>

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