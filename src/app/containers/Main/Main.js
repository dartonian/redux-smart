import React, {Component, PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class Contacts extends Component {
	static propTypes = {
		
	};

	componentDidMount(){

        const {
            getVideos
        } = this.props;

        getVideos();
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

		//const videos = ["dc0.mp4","dc01.mp4","dc02.mp4","dc03.mp4","dc04.mp4","dc05.mp4","dc06.mp4","dc07.mp4","dc08.mp4","dc09.mp4","dc10.mp4","dc11.mp4","dc12.mp4","dc13.mp4"];

		const {
			videos,
            video: currentVideo,
            remove
		} = this.props;

        return (
			<div className="section main">
				<div className="section__content">
					<h2>Доктор кто (1 сезон)</h2>
					<div>
						<ul className="main__list">
							{

	                            videos && videos.map((video,i)=>{
	                                return (
										<li key={i} onClick={e => {this.playVideo(video)}} className="main__list-item">
											<RaisedButton label={`${video} | Серия № ${i}`} />
										</li>
	                                );
	                            })
							}
						
						</ul>
					</div>
					
					<div className="cinema">

						{
							(currentVideo && !remove) && (
                            	<video width="100%" controls>
									<source src={`/videos/${currentVideo}`} type="video/mp4" />
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