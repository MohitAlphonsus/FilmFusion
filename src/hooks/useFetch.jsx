import { useEffect, useState } from 'react';
import { fetchDataFromAPI } from '../services/api';

function useFetch(url) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(
		function () {
			setLoading(true);
			setError(null);
			fetchDataFromAPI(url)
				.then(res => setData(res))
				.catch(err => setError('something went wrong'))
				.finally(() => setLoading(false));
		},
		[url],
	);
	return { data, loading, error };
}

export default useFetch;
