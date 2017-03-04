import React, {Component, PropTypes} from 'react';
//import Slider from 'material-ui/Slider';

export default class Contacts extends Component {
	static propTypes = {
		
	};

	componentDidMount(){

        const {
            getVideos
        } = this.props;

        getVideos();
	}

	render() {

		const {
			videos
		} = this.props;

        return (
			<div className="section">
				<div className="section__content">
					<ul>
						{

                            videos && videos.map((video,i)=>{
                                return (
									<li key={i}>
										<h4>Серия № {i}</h4>
										<p>{video}</p>
										<video width="100%" controls>
											<source src={`/videos/${video}`} type="video/mp4" />
										</video>
									</li>
                                );
                            })
						}
					
					</ul>
				</div>
			</div>
		);
	}
}