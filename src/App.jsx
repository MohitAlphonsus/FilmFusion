import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { fetchDataFromAPI } from './services/api';
import { getAPIConfig, getGenres } from './store/homeSlice';

import { Header, Footer } from './Layouts';
import { Home, Details, Explore, SearchResult, PageNotFound } from './pages';

function App() {
	const dispatch = useDispatch();
	const { url } = useSelector(state => state.home);

	const fetchApiConfig = () => {
		fetchDataFromAPI('/configuration').then(res => {
			const imgUrl = {
				backdrop: res.images.secure_base_url + 'original',
				poster: res.images.secure_base_url + 'original',
				profile: res.images.secure_base_url + 'original',
			};

			dispatch(getAPIConfig(imgUrl));
		});
	};

	useEffect(function () {
		fetchApiConfig();
		genresCall();
	}, []);

	async function genresCall() {
		let promises = [];
		let endPoints = ['tv', 'movie'];
		let allGenres = {};

		endPoints.forEach(genreEndpoint => {
			promises.push(fetchDataFromAPI(`/genre/${genreEndpoint}/list`));
		});

		const data = await Promise.all(promises);

		data.map(({ genres }) => {
			return genres.map(item => (allGenres[item.id] = item));
		});

		dispatch(getGenres(allGenres));
	}

	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:mediaType/:id" element={<Details />} />
				<Route path="/search/:query" element={<SearchResult />} />
				<Route path="explore/:mediaType" element={<Explore />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
