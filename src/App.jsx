import { useEffect } from 'react';
import { fetchDataFromAPI } from './services/api';

function App() {
	const apiTest = () => {
		fetchDataFromAPI('/movie/popular').then(res => console.log(res));
	};

	useEffect(function () {
		apiTest();
	}, []);

	return <div>App</div>;
}

export default App;
