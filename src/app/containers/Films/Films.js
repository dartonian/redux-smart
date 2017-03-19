import React, {Component, PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

export default class Films extends Component {
    static propTypes = {

    };

    componentDidMount(){
        const {
            getFilms,
            filmsList
        } = this.props;

        if(!filmsList.length) {
            getFilms();
        }

    }

    render() {

        const {filmsList} = this.props;

        return (
            <div className="section">
                <div className="section__content">

                    <h1 className="text text_title">Films</h1>

                    <div className="main__block">
                        <ul className="main__list">

                            {

                                filmsList && filmsList.map((film,i)=>{
                                    return (
                                        <Link to={`/films/${film.name}`}>
                                            <li key={i} className="main__list-item">
                                                <RaisedButton className="main__list-btn" labelColor="#fff" backgroundColor="#00BCD4" label={`${film.name}`} />
                                            </li>
                                        </Link>
                                    );
                                })
                            }

                        </ul>
                    </div>

                </div>
            </div>
        );
    }
}