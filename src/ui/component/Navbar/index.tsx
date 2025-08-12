import './Navbar.scss';
import LOGO from '../../../assets/images/logo-plain.png';
import { useState } from 'react';
import { isMobile } from '../../../utils/window';
const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isExiting, setIsExiting] = useState(false);
	
	const openMenu = () => {
		if (isMobile()) {
			document.body.style.overflow = 'hidden';
			setIsOpen(true);
		}
	};

	const closeMenu = () => {
		if (isMobile() && isOpen) {
			document.body.style.overflow = 'unset';
			setIsExiting(true);
			setTimeout(() => {
				setIsOpen(false);
				setIsExiting(false);
			}, 500); // Match the animation duration
		}
	};

	const handleClick = () => {
		if (isOpen) {
			closeMenu();
		} else {
			openMenu();
		}
	};

	return (
		<nav
			className={`navbar navbar--main ${
				isOpen && isMobile() ? 'navbar--open' : ''
			}`}>
			<ul className="nav-left">
				<li style={{ animationDelay: '700ms' }}>
					<a className="navbar-link" href="/">
						Home
					</a>
				</li>
				<li style={{ animationDelay: '650ms' }}>
					<a className="navbar-link" href="/services">
						Services
					</a>
				</li>
				<li style={{ animationDelay: '600ms' }}>
					<a className="navbar-link" href="/pricing">
						Pricing
					</a>
				</li>
			</ul>

			<div
				className={`logo-container ${isOpen ? 'logo-container--open' : ''} ${
					isExiting ? 'logo-container--closed' : ''
				}`}
				onClick={handleClick}>
				<img src={LOGO} alt="Logo" />
			</div>

			<ul className="nav-right">
				<li style={{ animationDelay: '600ms' }}>
					<a className="navbar-link" href="/learn">
						Learn
					</a>
				</li>
				<li style={{ animationDelay: '650ms' }}>
					<a className="navbar-link" href="/about">
						About
					</a>
				</li>
				<li style={{ animationDelay: '700ms' }}>
					<a className="navbar-link" href="/contact">
						Contact
					</a>
				</li>
			</ul>
			{isOpen && (
				<ul className={`nav-mobile ${isExiting ? 'nav-mobile--exiting' : ''}`}>
					<li style={{ animationDelay: '300ms' }}>
						<a className="" href="/">
							Home
						</a>
					</li>
					<li style={{ animationDelay: '450ms' }}>
						<a className="" href="/services">
							Services
						</a>
					</li>
					<li style={{ animationDelay: '500ms' }}>
						<a className="" href="/pricing">
							Pricing
						</a>
					</li>
					<li style={{ animationDelay: '550ms' }}>
						<a className="" href="/learn">
							Learn
						</a>
					</li>
					<li style={{ animationDelay: '600ms' }}>
						<a className="" href="/about">
							About
						</a>
					</li>
					<li style={{ animationDelay: '650ms' }}>
						<a className="" href="/contact">
							Contact
						</a>
					</li>
				</ul>
			)}
		</nav>
	);
};

export default Navbar;
