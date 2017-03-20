import React, {Component, PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

export default class CurrentFilm extends Component {
    static propTypes = {

    };

    componentWillMount(){
        const {
            params:{
                filmName
            },
            getFilmInfo
        } = this.props;

        getFilmInfo(filmName);
    }

    render() {

        const {
            film: {
                title,
                url
            },
        } = this.props;

        return (
            <div className="section">
                <div className="section__content">

                    <h1 className="text text_title">{title}</h1>

                    <div className="cinema">

                        {
                            url && (
                                <video width="100%" controls>
                                    <source src={`/videos/${url}`} type="video/mp4" />
                                </video>
                            )
                        }

                    </div>

                </div>
            </div>
        );
    }
}