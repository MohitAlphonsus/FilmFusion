import { useEffect, useRef, useState } from 'react';
import './CircleRating.scss';

function CircleRating({ rating, className }) {
	const [progress, setProgress] = useState(0);
	const progressEl = useRef();
	const radius = progressEl?.current?.r?.baseVal?.value;
	const circumfernce = 2 * Math.PI * radius;
	const percent = (parseInt(rating) * 100) / 10;

	useEffect(
		function () {
			setProgress(circumfernce - (percent / 100) * circumfernce);
		},
		[circumfernce, percent],
	);

	return (
		<>
			<svg className={`circle ${className}`}>
				<circle
					className="circle__progress"
					cx={25}
					cy={25}
					r={22}
					ref={progressEl}
					style={{
						strokeDasharray: 138,
						strokeDashoffset: `${progress}`,
						stroke: `${rating < 5 ? 'red' : rating < 7 ? 'orange' : 'green'}`,
					}}
				/>
				<text
					className="circle__rating"
					fill="#333"
					x={25}
					y={25}
					textAnchor="middle"
					alignmentBaseline="middle"
				>
					{rating}
				</text>
			</svg>
		</>
	);
}

export default CircleRating;
