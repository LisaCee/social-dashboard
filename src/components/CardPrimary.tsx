import '../style/card.css';
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
	return (
		<div className='card-flex'>
			{data.map((item, index) => (
				<div
					key={index}
					className={'card card-large ' + item.service + '-border'}
				>
					<p>{item.username}</p>
					<p className='follower-number'>{item.followers}</p>
					{item.service === 'youtube' && (
						<p className='followers'>Subscribers</p>
					)}
					{item.service !== 'youtube' && (
						<p className='followers'>Followers</p>
					)}
					{!item.positive && (
						<p className='red-text'>{item.newFollowers} Today</p>
					)}
					{item.positive && (
						<p className='green-text'>{item.newFollowers} Today</p>
					)}
				</div>
			))}
		</div>
	);
}
