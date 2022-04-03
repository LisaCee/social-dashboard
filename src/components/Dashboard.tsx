import '../style/dashboard.css';
import CardPrimary from './CardPrimary';

const toggleColor = document.getElementById('toggle-color');
function switchTheme(e: any) {
	document.body.classList.toggle('dark');
}
export default function Dashboard() {
	return (
		<div>
			<header>
				<h1>Social Media Dashboard</h1>
				<p>Total Followers: 23,0004</p>
				<div className='toggle'>
					<p>Dark Mode</p>
					<label className='switch'>
						<input
							id='toggle-color'
							type='checkbox'
							onClick={switchTheme}
						/>
						<span className='slider round'></span>
					</label>
				</div>
			</header>
			<main>
				<CardPrimary />
			</main>
		</div>
	);
}
