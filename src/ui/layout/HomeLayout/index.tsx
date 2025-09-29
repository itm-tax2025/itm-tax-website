import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './HomeLayout.scss';
import { NavLink } from 'react-router-dom';
import GRAYSCALELOGO from '../../../assets/images/logo-grayscale.png';
import LOGO from '../../../assets/images/logo-plain.png';
import Icon from '../../component/Icon';
import Button from '../../component/Button';
import { scrollToElement } from '../../../utils/window';
const HomeLayout: React.FC<unknown> = () => {
	const [currentPage, setCurrentPage] = React.useState(
		window.location.pathname
	);
	const currentYear = new Date().getFullYear();
	const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		setCurrentPage(e.currentTarget.pathname);
		if (e.currentTarget.hash) {
			scrollToElement(e.currentTarget.hash);
		}
	};

	return (
		<div className="home-layout">
			<header className="home-layout__header">
				<nav className="home-layout__header__nav">
					<div className="home-layout__header__nav__logo prevent-select">
						<NavLink to="/" onClick={handleClick}>
							<img src={LOGO} alt="logo" />
						</NavLink>
					</div>
					<ul className="home-layout__header__nav__links">
						<li className="home-layout__header__nav__links__item prevent-select">
							<NavLink to="/" onClick={handleClick}>
								<p>Home</p>
							</NavLink>
						</li>
						<li
							className={`home-layout__header__nav__links__item prevent-select ${
								currentPage !== '/'
									? 'home-layout__header__nav__links__item--hidden'
									: 'home-layout__header__nav__links__item--visible'
							}`}>
							<a href="#about" onClick={handleClick}>
								<p>About</p>
							</a>
						</li>
						<li className="home-layout__header__nav__links__item prevent-select">
							<NavLink to="/services" onClick={handleClick}>
								<p>Services</p>
							</NavLink>
						</li>
						<li className="home-layout__header__nav__links__item prevent-select">
							<NavLink to="/pricing" onClick={handleClick}>
								<p>Pricing</p>
							</NavLink>
						</li>
					</ul>
					<div className="home-layout__header__nav__cta prevent-select">
						<Button>
							<p>Request a Quote</p>
						</Button>
					</div>
					<div className="home-layout__header__nav__details"></div>
				</nav>
			</header>
			<main className="home-layout__main">
				<Outlet />
			</main>
			<footer className="home-layout__footer">
				<div className="home-layout__footer__info">
					<div className="home-layout__footer__info__general">
						<img src={GRAYSCALELOGO} alt="logo" />
						<div className="home-layout__footer__info__general__social">
							<div className="home-layout__footer__info__general__social__text">
								<h3>Want updates that matter?</h3>
								<p>
									Follow us on social media for the latest updates and news.
								</p>
							</div>
							<div className="home-layout__footer__info__general__social__links">
								<a
									href="https://www.facebook.com/ITMTaxAdvisory"
									target="_blank"
									rel="noopener noreferrer">
									<Icon name="facebook" size="large" />
								</a>
								<a
									href="https://www.linkedin.com/company/itm-tax-advisory"
									target="_blank"
									rel="noopener noreferrer">
									<Icon name="linkedin" size="large" />
								</a>
								<a
									href="https://x.com/ITMTaxAdvisory"
									target="_blank"
									rel="noopener noreferrer">
									<Icon name="x" size="large" />
								</a>
								<a
									href="https://www.instagram.com/itm_tax_advisory/"
									target="_blank"
									rel="noopener noreferrer">
									<Icon name="instagram" size="large" />
								</a>
								<a
									href="https://www.youtube.com/channel/UCX9Z1b4k5f8g3j7z6a5b2wQ"
									target="_blank"
									rel="noopener noreferrer">
									<Icon name="youtube" size="large" />
								</a>
							</div>
						</div>
					</div>
					<div className="home-layout__footer__info__text">
						<h4>Tax Services</h4>
						<ul>
							<li>Individual Tax Preparation (Form 1040, all schedules)</li>
							<li>
								Business Tax Preparation (Partnerships, Corporations, LLCs)
							</li>
							<li>State & Local Tax Filings</li>
							<li>Amended Returns & Prior-Year Corrections</li>
							<li>Tax Planning & Projections</li>
							<li>IRS & State Audit Representation</li>
							<li>Estimated Tax Payments Assistance</li>
						</ul>
					</div>
					<div className="home-layout__footer__info__text">
						<h4>Accounting & Bookkeeping</h4>
						<ul>
							<li>Monthly/Quarterly Bookkeeping</li>
							<li>General Ledger Cleanup</li>
							<li>Bank & Credit Card Reconciliation</li>
							<li>
								Financial Statement Preparation (Balance Sheet, P&L, Cash Flow)
							</li>
							<li>Accounts Payable & Receivable Management</li>
							<li>Chart of Accounts Setup & Optimization</li>
						</ul>
					</div>
					<div className="home-layout__footer__info__text">
						<h4>Payroll Services</h4>
						<ul>
							<li>Full-Service Payroll Processing</li>
							<li>Direct Deposit & Paycheck Distribution</li>
							<li>Payroll Tax Filings (Federal & State)</li>
							<li>W-2 & 1099 Preparation & Filing</li>
							<li>Employee Onboarding & Withholding Setup</li>
							<li>Compliance with Employment Tax Laws</li>
						</ul>
					</div>
					<div className="home-layout__footer__info__text">
						<h4>Business Advisory</h4>
						<ul>
							<li>New Business Formation & Entity Selection</li>
							<li>Business Valuations & Exit Planning</li>
							<li>Cash Flow & Budget Forecasting</li>
							<li>Strategic Growth Planning</li>
							<li>Internal Controls & Compliance Reviews</li>
						</ul>
					</div>
					<div className="home-layout__footer__info__text">
						<h4>Client Resources</h4>
						<ul>
							<li>Secure Client Portal Access</li>
							<li>Document Upload & E-Signature</li>
							<li>Tax Calendars & Deadlines</li>
							<li>Educational Articles & FAQs</li>
						</ul>
					</div>
				</div>
				<div className="home-layout__footer__copyright">
					<p>
						Copyright © {currentYear} ITM Tax & Advisory, LLC. All rights
						reserved.
					</p>
				</div>
			</footer>
		</div>
	);
};

export default HomeLayout;
