import { Hero, Trending, Popular, TopRated } from '../components';

function Home() {
	return (
		<>
			<Hero />
			<Trending />
			<Popular />
			<TopRated />
			<div style={{ height: 1000 }}></div>
		</>
	);
}

export default Home;
