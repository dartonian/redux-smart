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
            getFilms,
            filmsList,
            setCurrentFilm
        } = this.props;

        if(!filmsList.length) {
            getFilms();
        }

        setCurrentFilm(filmName);
    }

    render() {

        const {currentFilm: {
            title,
            url
        }} = this.props;

        return (
            <div className="section">
                <div className="section__content">

                    <h1 className="text text_title">{title}</h1>

                    <div className="cinema">

                        {
                            url && (
                                <video width="100%" controls>
                                    <source src={url} type="video/mp4" />
                                </video>
                            )
                        }

                    </div>

                </div>
            </div>
        );
    }
}