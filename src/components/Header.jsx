import { useState, useEffect } from 'react';
import { HiOutlineSearch, HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import { useNavigate, useLocation } from 'react-router-dom';

import { Container } from '../UI';
import './Header.scss';

function Header() {
	const [show, setShow] = useState('top');
	const [lastScrollY, setLastScrollY] = useState(0);
	const [query, setQuery] = useState('');
	const [showSearch, setShowSearch] = useState(false);
	const [mobileMenu, setMobileMenu] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();

	function showSearchHandler() {
		setMobileMenu(false);
		setShowSearch(true);
	}

	function openMobileMenuHandler() {
		setMobileMenu(true);
		setShowSearch(false);
	}

	return (
		<header className={`header ${mobileMenu ? 'mobile-view' : ''} ${show}`}>
			<Container className="content-wrapper">
				<div className="logo">LOGO.</div>
				<ul className="menu-items">
					<li className="menu-item">Movies</li>
					<li className="menu-item">TV Shows</li>
					<li className="menu-item search-icon">
						<HiOutlineSearch />
					</li>
				</ul>

				<div className="mobile-menu-items">
					<HiOutlineSearch />
					{mobileMenu ? (
						<HiOutlineX onClick={() => setMobileMenu(false)} />
					) : (
						<HiOutlineMenuAlt3 onClick={openMobileMenuHandler} />
					)}
				</div>
			</Container>
			<div className="search-bar">
				<Container></Container>
			</div>
		</header>
	);
}

export default Header;
