import { Hero, Trending } from '../components';

function Home() {
	return (
		<>
			<Hero />
			<Trending />
			<div style={{ height: 1000 }}></div>
		</>
	);
}

export default Home;
