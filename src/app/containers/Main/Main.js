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
			videos,
            video: currentVideo,
            selectVideo,
            remove
		} = this.props;

        return (
			<div className="section">
				<div className="section__content">
					<h1 onClick={this.change}>Click me change</h1>
					<ul>
						{

                            videos && videos.map((video,i)=>{
                                return (
									<li key={i} onClick={e => {selectVideo(video)}}>
										<h4>{video} | Серия № {i}</h4>
									</li>
                                );
                            })
						}
					
					</ul>
					<div className="cinema">

						{
							(currentVideo && !remove) && (
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