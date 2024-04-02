import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks';
import './Details.scss';
import { DetailsBanner } from '../components';

function Details() {
	// const { mediaType, id } = useParams();
	// const { data, loading } = useFetch(`/${mediaType}/${id}`);

	return (
		<div>
			<DetailsBanner />
		</div>
	);
}

export default Details;
