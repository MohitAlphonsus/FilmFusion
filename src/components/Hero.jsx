import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useFetch } from '../hooks';

import { Container, InputElement, LazyLoadImg } from '../UI';
import './Hero.scss';

function Hero() {
	const [backgroundCover, setBackgroundCover] = useState('');
	const [query, setQuery] = useState('');
	const navigate = useNavigate();
	const { url } = useSelector(state => state.home);

	const { data, loading } = useFetch('/movie/upcoming');

	useEffect(
		function () {
			const backdrop =
				url.backdrop +
				data?.results[Math.floor(Math.random() * 20)]?.backdrop_path;
			setBackgroundCover(backdrop);
		},
		[data, url.backdrop],
	);

	function handleSearch(e) {
		if (e.key === 'Enter' && query.length > 0) {
			navigate(`/search/${query}`);
		}
	}

	return (
		<div className="hero">
			{!loading && (
				<div className="hero__backdrop">
					<LazyLoadImg src={backgroundCover} />
				</div>
			)}
			<Container>
				<div className="hero__content">
					<span className="hero__heading">
						Dive Into a World of Cinematic Wonder
					</span>
					<span className="hero__subheading">
						Explore Thousands of Movies & TV shows at Your Fingertips
					</span>
					<div className="hero__search-bar">
						<InputElement
							type="text"
							placeholder="Search for movie of tv show..."
							onChange={e => setQuery(e.target.value)}
							onHandle={handleSearch}
						/>
						<button>Explore</button>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default Hero;
