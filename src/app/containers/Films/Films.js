import React, {Component, PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

export default class Films extends Component {
    static propTypes = {

    };

    componentDidMount(){
        //const {} = this.props;
    }

    render() {

        //const {} = this.props;
        const films = ["Джанго","Man of steel","Dark Knight","Большой куш","Человек-паук"];

        return (
            <div className="section">
                <div className="section__content">

                    <h1 className="text text_title">Films</h1>

                    <div className="main__block">
                        <ul className="main__list">

                            {

                                films && films.map((film,i)=>{
                                    return (
                                        <li key={i} onClick={e => {this.playVideo(film)}} className="main__list-item">
                                            <RaisedButton className="main__list-btn" labelColor="#fff" backgroundColor="#00BCD4" label={`${film}`} />
                                        </li>
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