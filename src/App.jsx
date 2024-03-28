import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { fetchDataFromAPI } from './services/api';
import { getAPIConfig } from './store/homeSlice';

import { Header, Footer } from './Layouts';
import { Home, Details, Explore, SearchResult, PageNotFound } from './pages';

function App() {
	const dispatch = useDispatch();
	const { url } = useSelector(state => state.home);

	const apiTest = () => {
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
		apiTest();
	}, []);

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
