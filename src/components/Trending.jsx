import { useState } from 'react';
import { CarousalSection } from '../Layouts';
import { useFetch } from '../hooks';
import { Carousal } from '../components';

function Trending() {
	const [endPoint, setEndPoint] = useState('day');

	const { data, loading } = useFetch(`/trending/all/${endPoint}`);

	return (
		<>
			<CarousalSection
				title="Trending"
				tabData={['Day', 'Week']}
				setEndPoint={setEndPoint}
			/>
			<Carousal data={data?.results} loading={loading} />
		</>
	);
}

export default Trending;
