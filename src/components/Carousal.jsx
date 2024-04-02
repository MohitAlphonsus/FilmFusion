import { useRef } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { dateFormat } from '../services/utilities';
import { Container, LazyLoadImg } from '../UI';
import { NoPoster } from '../assets';
import { CircleRating, Genres } from '../components';
import './Carousal.scss';

function Carousal({ data, loading, endPoint }) {
	const carousalContainer = useRef();
	const { url } = useSelector(state => state.home);

	const navigate = useNavigate();

	function navigateDirectionTo(direction) {
		const container = carousalContainer.current;
		const scrollAmount =
			direction === 'left'
				? container.scrollLeft - (container.offsetWidth + 20)
				: container.scrollLeft + (container.offsetWidth + 20);

		container.scrollTo({
			left: scrollAmount,
			behavior: 'smooth',
		});
	}

	function skeletonItem() {
		return (
			<div className="loading-skeleton">
				<div className="skeleton-item">
					<div className="poster skeleton"></div>
					<div className="text-block">
						<div className="title skeleton"></div>
						<div className="date skeleton"></div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="carousal">
			<Container>
				<HiOutlineChevronLeft
					className="arrow carousal-arrow-left"
					onClick={() => navigateDirectionTo('left')}
				/>
				<HiOutlineChevronRight
					className="arrow carousal-arrow-right"
					onClick={() => navigateDirectionTo('right')}
				/>
				{!loading ? (
					<div className="carousal-items" ref={carousalContainer}>
						{data?.map(item => {
							const posterUrl = item.poster_path
								? url.poster + item.poster_path
								: NoPoster;

							return (
								<div
									key={item.id}
									className="carousal-item"
									onClick={() =>
										navigate(`/${item.media_type || endPoint}/${item.id}`)
									}
								>
									<div className="poster">
										<LazyLoadImg src={posterUrl} />
										<CircleRating
											rating={item?.vote_average.toFixed(1)}
											className="circle-rating"
										/>
										<Genres data={item.genre_ids.slice(0, 2)} />
									</div>
									<div className="text-block">
										<span className="title">
											{item.title} || {item.name}
										</span>
										<span className="date">
											{dateFormat(item.release_date || item.first_air_date)}
										</span>
									</div>
								</div>
							);
						})}
					</div>
				) : (
					<>
						{skeletonItem()}
						{skeletonItem()}
						{skeletonItem()}
						{skeletonItem()}
						{skeletonItem()}
					</>
				)}
			</Container>
		</div>
	);
}

export default Carousal;
