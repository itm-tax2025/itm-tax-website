import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import './HomeLayout.scss';
import { NavLink } from 'react-router-dom';
import GRAYSCALELOGO from '../../../assets/images/logo-grayscale.png';
import LOGO from '../../../assets/images/logo-plain.png';
import Icon from '../../component/Icon';
import Button from '../../component/Button';
import { scrollToElement, smoothScrollTo } from '../../../utils/window';
import { useNavigate } from 'react-router-dom';
import { LucideMail, LucidePhoneCall, LucideHourglass } from 'lucide-react';
import Divider from '../../component/NonFunctional/Divider';
import HamburgerButton from '../../component/NonFunctional/HamburgerButton';
import { useAppDispatch, useAppSelector } from '../../../store';
import { toggleHeadbar } from '../../../store/slice/displaySlice';
import Portal from '../../component/Portal';

const HomeLayout: React.FC<unknown> = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useAppDispatch();
	const headbarOpen = useAppSelector((state) => state.display.headbarOpen);
	const targetId = location.hash;
	const currentYear = new Date().getFullYear();

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		const currentPagePath = e.currentTarget.pathname;
		const hash = e.currentTarget.hash;
		if (headbarOpen) {
			dispatch(toggleHeadbar());
		}
		if (hash) {
			scrollToElement(hash, 300);
		}
		if (currentPagePath == '/' || currentPagePath === location.pathname) {
			smoothScrollTo(0, 300);
		}
	};

	const handleGoto = () => {
		navigate('/contact');

		if (headbarOpen) {
			dispatch(toggleHeadbar());
		}

		smoothScrollTo(0, 300);
	};

	useEffect(() => {
		if (headbarOpen) {
			smoothScrollTo(0, 300);
		}
		if (!targetId) {
			smoothScrollTo(0, 300);
		}
		if (targetId) {
			scrollToElement(targetId, 300);
		}
	}, [targetId, headbarOpen]);

	const navLinks = [
		{ name: 'Home', path: '/' },
		{ name: 'About', path: '/#about' },
		{ name: 'Services', path: '/services' },
		{ name: 'Pricing', path: '/pricing' },
	];

	const servicesProvided = [
		{ name: 'Tax', path: '/services#tax' },
		{ name: 'Bookkeeping - Payroll', path: '/services#bookkeeping' },
		{ name: 'Advisory - Planning', path: '/services#advisory-planning' },
	];

	const clientResources = [
		{ name: 'Secure Client Portal Access', path: '#' },
		{ name: 'Document Upload & E-Signature', path: '#' },
		{ name: 'Tax Calendars & Deadlines', path: '#' },
		{ name: 'Educational Articles & FAQs', path: '#' },
	];

	const socialMedia = [
		{
			name: 'facebook',
			path: 'https://www.facebook.com/profile.php?id=61581893129716',
		},
		{ name: 'instagram', path: 'https://www.instagram.com/itm_tax_advisory/' },
	];

	const contactInfo = [
		{
			type: 'phone',
			value: '+1 (346) 475-5148',
			path: 'tel:+13464755148',
			icon: <LucidePhoneCall size={24} strokeWidth={2} />,
		},
		{
			type: 'email',
			value: 'info@itmtax.com',
			path: 'mailto:info@itmtax.com',
			icon: <LucideMail size={24} strokeWidth={2} />,
		},
		{
			type: 'hours',
			value: 'Mon-Fri: 9am - 5pm',
			path: '#',
			icon: <LucideHourglass size={24} strokeWidth={2} />,
		},
	];

	const additionalLinks = [
		{ name: 'Privacy', path: '/privacy' },
		{ name: 'Terms', path: '/terms' },
		{ name: 'Disclosures', path: '/disclosures' },
		{ name: 'Cookies', path: '/cookies' },
		{ name: 'Sitemap', path: '/sitemap' },
	];

	const NavMenu = () => {
		return (
			<Portal>
				<div className="home-layout__header__nav__overlay">
					<HamburgerButton className="home-layout__header__nav__hamburger" />
					{navLinks.map((link, index) => (
						<div
							key={'main-menu-link-' + index}
							className="home-layout__header__nav__overlay__links__item prevent-select">
							<NavLink
								to={link.path}
								onClick={handleClick}
								style={{ animationDelay: `${index * 150}ms` }}>
								{link.name}
							</NavLink>
						</div>
					))}
					<div
						className="home-layout__header__nav__cta prevent-select"
						style={{ animationDelay: `${navLinks.length * 150}ms` }}>
						<Button onClick={handleGoto}>
							<p>Request a Quote</p>
						</Button>
					</div>
				</div>
			</Portal>
		);
	};

	return (
		<div className="home-layout">
			{headbarOpen && <NavMenu />}
			<header className="home-layout__header">
				<nav className="home-layout__header__nav">
					<div className="home-layout__header__nav__logo prevent-select">
						<NavLink to="/" onClick={handleClick}>
							<img src={LOGO} alt="logo" />
						</NavLink>
					</div>
					<ul className={`home-layout__header__nav__links`}>
						{navLinks.map((link, index) => (
							<li
								key={'main-menu-link-' + index}
								className="home-layout__header__nav__links__item prevent-select">
								<NavLink to={link.path} onClick={handleClick}>
									<p>{link.name}</p>
								</NavLink>
							</li>
						))}
					</ul>
					<div className="home-layout__header__nav__cta prevent-select">
						<Button onClick={handleGoto}>
							<p>Request a Quote</p>
						</Button>
					</div>
					<HamburgerButton className="home-layout__header__nav__hamburger" />
				</nav>
			</header>
			<main className="home-layout__main">
				<Outlet />
			</main>
			<footer className="home-layout__footer">
				<div className="home-layout__footer__info">
					<div className="home-layout__footer__info__section">
						<div className="home-layout__footer__info__general prevent-select">
							<img src={GRAYSCALELOGO} alt="logo" />
							<div className="home-layout__footer__info__general__social">
								<div className="home-layout__footer__info__general__social__text">
									<h3>Want updates that matter?</h3>
									<p>
										Follow us on social media for the latest updates and news.
									</p>
								</div>
								<div className="home-layout__footer__info__general__social__links">
									{socialMedia.map((social, index) => (
										<a
											key={'social-media-' + index}
											href={social.path}
											target="_blank"
											rel="noopener noreferrer">
											<Icon name={social.name} size="large" />
										</a>
									))}
								</div>
							</div>
						</div>
					</div>
					<Divider style="simple" />
					<div className="home-layout__footer__info__section">
						<div className="home-layout__footer__info__text">
							<h4 className="home-layout__footer__info__text__header">
								SERVICES
							</h4>
							<ul className="home-layout__footer__info__text__list">
								{servicesProvided.map((service, index) => (
									<li key={'service-' + index}>
										<NavLink to={service.path} onClick={handleClick}>
											{service.name}
										</NavLink>
									</li>
								))}
							</ul>
						</div>
						<div className="home-layout__footer__info__text">
							<h4 className="home-layout__footer__info__text__header">
								CLIENT RESOURCES
							</h4>
							<ul className="home-layout__footer__info__text__list">
								{clientResources.map((resource, index) => (
									<li key={'client-resource-' + index}>
										<p>{resource.name}</p>
									</li>
								))}
							</ul>
						</div>
						<div className="home-layout__footer__info__text">
							<h4 className="home-layout__footer__info__text__header">
								CONTACT
							</h4>
							<ul className="home-layout__footer__info__text__list">
								{contactInfo.map((contact, index) => (
									<li key={'contact-info-' + index} className="prevent-select">
										<a href={contact.path} rel="noopener noreferrer">
											<span className="home-layout__footer__info__text__icon">
												{contact.icon}
											</span>
											{contact.value}
										</a>
									</li>
								))}
							</ul>
						</div>
						<div className="home-layout__footer__info__text home-layout__footer__info__text--cta prevent-select">
							<h4>GET STARTED</h4>
							<p>Schedule a free 15-minute consultation to review your goals</p>
							<Button onClick={handleGoto}>Book a Consultation</Button>
							<p>Serving individuals and small businesses across the U.S.</p>
						</div>
					</div>
				</div>
				<div className="home-layout__footer__copyright">
					<div className="home-layout__footer__copyright__group home-layout__footer__copyright__group--top">
						<div className="home-layout__footer__copyright__left">
							<p>
								© {currentYear} ITM Tax & Advisory, LLC. All rights reserved.
							</p>
						</div>
						<div className="home-layout__footer__copyright__right">
							{additionalLinks.map((link, index) => (
								<NavLink
									key={'additional-link-' + index}
									to={link.path}
									onClick={handleClick}
									className="prevent-select"
									style={{ margin: '0 10px' }}>
									{link.name}
								</NavLink>
							))}
						</div>
					</div>
					<div className="home-layout__footer__copyright__group home-layout__footer__copyright__group--bottom">
						<div className="home-layout__footer__copyright__bottom">
							<p>
								Disclaimer: Content is for informational purposes only and does
								not constitute legal or tax advice. Consult a qualified
								professional regarding your specific situation.
							</p>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default HomeLayout;
