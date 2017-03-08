import React, {Component, PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

export default class Main extends Component {
	static propTypes = {
		
	};

	componentDidMount(){

        const {
            getVideos
        } = this.props;

        //getVideos();
	}

	playVideo =(video)=> {
		const {
            reset,
            play
		} = this.props;
		reset();
		setTimeout(()=>{
            play(video);
		},1);

	};

	render() {

		const serials = ["Doctor who","True Detective","Fargo","River","Games of Thrones"];
        const films = ["Джанго","Man of steel","Dark Knight","Большой куш","Человек-паук"];

		const {
			//videos,
            video: currentVideo,
            remove
		} = this.props;

        return (
			<div className="section main">
				<div className="section__content">

					<h2 className="text text_title text_title-h2">Сериалы <Link className="link" to="/serials"><i className="material-icons icon">input</i></Link></h2>
					
					<div className="main__block">
						<ul className="main__list">

                            {

                                serials && serials.map((serial,i)=>{
                                    return (
										<li key={i} onClick={e => {this.playVideo(serial)}} className="main__list-item">
											<RaisedButton className="main__list-btn" labelColor="#fff" backgroundColor="#00BCD4" label={`${serial}`} />
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

                                films && films.map((film,i)=>{
                                    return (
										<li key={i} onClick={e => {this.playVideo(film)}} className="main__list-item">
											<RaisedButton className="main__list-btn" labelColor="#fff" backgroundColor="#00BCD4" label={`${film} | Серия № ${i}`} />
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