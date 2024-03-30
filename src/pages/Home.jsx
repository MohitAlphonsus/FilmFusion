import { Hero, Trending, Popular } from '../components';

function Home() {
	return (
		<>
			<Hero />
			<Trending />
			<Popular />
			<div style={{ height: 1000 }}></div>
		</>
	);
}

export default Home;
