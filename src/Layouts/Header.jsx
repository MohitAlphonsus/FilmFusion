import { useState, useEffect } from 'react';
import { HiOutlineSearch, HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import { useNavigate, useLocation } from 'react-router-dom';

import { Container, InputElement } from '../UI';
import './Header.scss';

function Header() {
	const [show, setShow] = useState('top');
	const [lastScrollY, setLastScrollY] = useState(0);
	const [query, setQuery] = useState('');
	const [showSearch, setShowSearch] = useState(false);
	const [mobileMenu, setMobileMenu] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(
		function () {
			window.scrollTo(0, 0);
		},
		[location],
	);

	function navController() {
		if (window.scrollY > 200) {
			if (window.scrollY > lastScrollY && !mobileMenu) {
				setShow('hide');
			} else {
				setShow('show');
			}
		} else {
			setShow('top');
		}
		setLastScrollY(window.scrollY);
	}

	useEffect(
		function () {
			window.addEventListener('scroll', navController);

			return () => {
				window.removeEventListener('scroll', navController);
			};
		},
		[lastScrollY],
	);

	function searchHandler(e) {
		if (e.key === 'Enter' && query.length > 0) {
			navigate(`/search/${query}`);
			setTimeout(() => {
				setShowSearch(false);
			}, 1000);
		}
	}

	function showSearchHandler() {
		setMobileMenu(false);
		setShowSearch(true);
	}

	function openMobileMenuHandler() {
		setMobileMenu(true);
		setShowSearch(false);
	}

	function navigationHandler(type) {
		type === 'movie' ? navigate('/explore/movie') : navigate('/explore/tv');
		setMobileMenu(false);
	}

	return (
		<header className={`header ${mobileMenu ? 'mobile-view' : ''} ${show}`}>
			<Container>
				<div className="logo" onClick={() => navigate('/')}>
					LOGO.
				</div>
				<ul className="menu-items">
					<li className="menu-item" onClick={() => navigationHandler('movie')}>
						Movies
					</li>
					<li className="menu-item" onClick={() => navigationHandler('tv')}>
						TV Shows
					</li>
					<li className="menu-item search-icon">
						<HiOutlineSearch onClick={showSearchHandler} />
					</li>
				</ul>

				<div className="mobile-menu-items">
					<HiOutlineSearch onClick={showSearchHandler} />
					{mobileMenu ? (
						<HiOutlineX onClick={() => setMobileMenu(false)} />
					) : (
						<HiOutlineMenuAlt3 onClick={openMobileMenuHandler} />
					)}
				</div>
			</Container>
			{showSearch && (
				<div className="search-bar">
					<Container>
						<div className="search-input">
							<InputElement
								type="text"
								placeholder="Search for movie of tv show..."
								onChange={e => setQuery(e.target.value)}
								onHandle={searchHandler}
							/>
							<HiOutlineX onClick={() => setShowSearch(false)} />
						</div>
					</Container>
				</div>
			)}
		</header>
	);
}

export default Header;
