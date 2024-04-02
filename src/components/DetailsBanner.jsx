import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Genres, CircleRating, PlayButton } from '../components';
import { Container, LazyLoadImg } from '../UI';

import { useFetch } from '../hooks';
import { dateFormat } from '../services/utilities';

import { NoPoster } from '../assets';
import './DetailsBanner.scss';

function DetailsBanner({ video, crew }) {
	const { mediaType, id } = useParams();
	const { data, loading } = useFetch(`/${mediaType}/${id}`);
	const { url } = useSelector(state => state.home);

	const toHoursAndMinutes = totalMinutes => {
		const hours = Math.floor(totalMinutes / 60);
		const minutes = totalMinutes % 60;
		return `${hours}h${minutes > 0 ? ` ${minutes}m` : ''}`;
	};

	const _genres = data?.genres?.map(genre => genre.id);

	return (
		<div className="detailsBanner">
			{!loading ? (
				<>
					{!!data && (
						<>
							<div className="backdrop-img">
								<LazyLoadImg src={url.backdrop + data?.backdrop_path} />
							</div>
							<div className="opacity-layer"></div>
							<Container>
								<div className="content">
									<div className="left">
										{data.poster_path ? (
											<LazyLoadImg
												src={url.backdrop + data.poster_path}
												className="posterImg"
											/>
										) : (
											<LazyLoadImg src={NoPoster} className="posterImg" />
										)}
									</div>
									<div className="right">
										<div className="title">{`${
											data.name || data.title
										} (${dateFormat(
											data?.release_date || data?.first_air_date,
										)})`}</div>
										<div className="subtitle">{data?.tagline}</div>
										<Genres data={_genres} />
										<div className="row">
											<CircleRating rating={data.vote_average.toFixed(1)} />
											<div className="playbtn">
												<PlayButton />
												<span className="text">Watch Trailer</span>
											</div>
										</div>
										<div className="overview">
											<div className="heading">Overview</div>
											<div className="description">{data?.overview}</div>
										</div>
										<div className="info">
											{data.status && (
												<div className="infoItem">
													<span className="text bold">Status: </span>
													<span className="text">{data.status}</span>
												</div>
											)}
											{data?.release_date || data.first_air_date ? (
												<div className="infoItem">
													<span className="text bold">Release Date: </span>
													<span className="text">
														{dateFormat(
															data.release_date || data.first_air_date,
														)}
													</span>
												</div>
											) : (
												<span>N/A</span>
											)}
											{data?.runtime || data?.last_episode_to_air.runtime ? (
												<div className="infoItem">
													<span className="text bold">Runtime: </span>
													<span className="text">
														{toHoursAndMinutes(
															data?.runtime ||
																data?.last_episode_to_air.runtime,
														)}
													</span>
												</div>
											) : (
												<span>N/A</span>
											)}
										</div>
									</div>
								</div>
							</Container>
						</>
					)}
				</>
			) : (
				<div className="detailsBannerSkeleton">
					<Container>
						<div className="left skeleton"></div>
						<div className="right">
							<div className="row skeleton"></div>
							<div className="row skeleton"></div>
							<div className="row skeleton"></div>
							<div className="row skeleton"></div>
							<div className="row skeleton"></div>
							<div className="row skeleton"></div>
							<div className="row skeleton"></div>
						</div>
					</Container>
				</div>
			)}
		</div>
	);
}

export default DetailsBanner;
