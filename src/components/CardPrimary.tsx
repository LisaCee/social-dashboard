import '../style/card.css';
import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import instagram from '../images/icon-instagram.svg';
import youtube from '../images/icon-youtube.svg';
import up from '../images/icon-up.svg';
import down from '../images/icon-down.svg';
export default function CardPrimary() {
	// @todo use json-server to put data in database for queries
	let data = [
		{
			service: 'facebook',
			username: '@nathanf',
			followers: 1987,
			newFollowers: 12,
			positive: true,
		},
		{
			service: 'twitter',
			username: '@nathanf',
			followers: 1044,
			newFollowers: 99,
			positive: true,
		},
		{
			service: 'instagram',
			username: '@realnathanf',
			followers: '11K',
			newFollowers: 1099,
			positive: true,
		},
		{
			service: 'youtube',
			username: 'Nathan F.',
			followers: 8239,
			newFollowers: 144,
			positive: false,
		},
	];
	const brandStyle = {width: '20px', padding: '0 6px',};
	const iconStyle = {width: '10px', height:'5px', padding: '0px 5px',};
	const flexRow = {display: 'flex', justifyContent: 'center', alignItems: 'center'};
	return (
		<div className='card-flex'>
			{data.map((item, index) => (
				<div
					key={index}
					className={'card card-large ' + item.service + '-border'}
				>
					{item.service === 'twitter' && (
						<div style={flexRow}>
							<img src={twitter} alt="twitter" style={brandStyle}/>
							<p>{item.username}</p>
						</div>
					)}
					{item.service === 'facebook' && (
						<div style={flexRow}>
							<img src={facebook} alt="facebook" style={brandStyle}/>
							<p>{item.username}</p>
						</div>
					)}
					{item.service === 'instagram' && (
						<div style={flexRow}>
							<img src={instagram} alt="instagram" style={brandStyle}/>
							<p>{item.username}</p>
						</div>
					)}
					{item.service === 'youtube' && (
						<div style={flexRow}>
							<img src={youtube} alt="youtube" style={brandStyle}/>
							<p>{item.username}</p>
						</div>
					)}

					<p className='follower-number'>{item.followers}</p>
					{item.service === 'youtube' && (
						<p className='followers'>Subscribers</p>
					)}
					{item.service !== 'youtube' && (
						<p className='followers'>Followers</p>
					)}
					{!item.positive && (
						<div style={flexRow}>
							<img src={down} alt="down-arrow" style={iconStyle}/>
							<p className='red-text'>{item.newFollowers} Today</p>
						</div>
					)}
					{item.positive && (
						<div style={flexRow}>
							<img src={up} alt="up-arrow" style={iconStyle}/>
							<p className='green-text'>{item.newFollowers} Today</p>
						</div>
					)}
				</div>
			))}
		</div>
	);
}
