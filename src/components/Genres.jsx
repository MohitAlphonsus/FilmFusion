import { useSelector } from 'react-redux';
import './Genres.scss';

function Genres({ data }) {
	const { genres } = useSelector(state => state.home);
	return (
		<div className="genres">
			{data?.map(genre => {
				if (!genres[genre]?.name) return;

				return (
					<div className="genres__genre" key={genre}>
						{genres[genre]?.name}
					</div>
				);
			})}
		</div>
	);
}

export default Genres;
