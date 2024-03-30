import { useState } from 'react';
import { CarousalSection } from '../Layouts';
import { useFetch } from '../hooks';
import { Carousal } from '../components';

function Popular() {
	const [endPoint, setEndPoint] = useState('movie');
	const { data, loading } = useFetch(`/${endPoint}/popular`);

	function tabChangHandler(tab) {
		setEndPoint(tab === 'Movies' ? 'movie' : 'tv');
	}

	return (
		<>
			<CarousalSection
				title="What's Popular"
				tabData={['Movies', 'TV Shows']}
				onTabChange={tabChangHandler}
			/>
			<Carousal data={data?.results} loading={loading} endPoint={endPoint} />
		</>
	);
}

export default Popular;
