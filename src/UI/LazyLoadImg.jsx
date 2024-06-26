import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function LazyLoadImg({ src, className }) {
	return (
		<LazyLoadImage
			className={className || ''}
			alt=""
			effect="blur"
			src={`${src}`}
		/>
	);
}

export default LazyLoadImg;
