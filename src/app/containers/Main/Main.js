import React, {Component, PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

export default class Main extends Component {
	static propTypes = {
		
	};

	componentDidMount(){

        const {
            getFilms,
            getSerials,
            filmsList,
            serialsList
        } = this.props;

        if(!filmsList.length) {
            getFilms();
		}


		if(!serialsList) {
            getSerials();
		}

	}

	render() {

		const {
            filmsList,
            serialsList
		} = this.props;

        return (
			<div className="section main">
				<div className="section__content">

					<h2 className="text text_title text_title-h2">Сериалы <Link className="link" to="/serials"><i className="material-icons icon">input</i></Link></h2>
					
					<div className="main__block">
						<ul className="main__list">

                            {

                                serialsList && serialsList.map((serial,i)=>{
                                    return (
										<li key={i} className="main__list-item">
											<Link to={`/current-serial/${serial.title}`}>
												<RaisedButton className="main__list-btn" labelColor="#fff" backgroundColor="#00BCD4" label={`${serial.title}`} />
											</Link>
										</li>
                                    );
                                })
                            }
						
						</ul>
					</div>

					<div className="hr" />
	
					<h2 className="text text_title text_title-h2">Фильмы <Link className="link" to="/films"><i className="material-icons icon">input</i></Link></h2>

					<div className="main__block">
						<ul className="main__list">

                            {

                                filmsList && filmsList.map((film,i)=>{
                                    return (

										<li key={i} className="main__list-item">
											<Link to={`/films/${film.title}`}>
												<RaisedButton className="main__list-btn" labelColor="#fff" backgroundColor="#00BCD4" label={`${film.title}`} />
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