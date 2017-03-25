import React, {Component, PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

export default class Serials extends Component {
    static propTypes = {

    };

    componentDidMount(){
        const {
            getSerials,
            serialsList
        } = this.props;

        if(!serialsList.length) {
            getSerials();
        }
    }

    render() {

        const {serialsList} = this.props;

        return (
            <div className="section serials">
                <div className="section__content">

                    <h1 className="text text_title">Serials</h1>

                    <div className="main__block">
                        <ul className="main__list">

                            {

                                serialsList.length && serialsList.map((serial,i)=>{
                                    return (
                                        <li key={i} className="main__list-item">
                                            <Link to={`/serials/current-serial/${serial.title}`}>
                                                <RaisedButton className="main__list-btn" labelColor="#fff" backgroundColor="#00BCD4" label={`${serial.title}`} />
                                            </Link>
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