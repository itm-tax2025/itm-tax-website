import React from 'react';
import './Footer.scss';
import LOGO from '../../../../assets/images/logo-grayscale.png';
import Icon from '../../../component/Icon';
import { useInView } from '../../../../hook/useInView';

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();
	const [ref, isInView] = useInView({
		once: true,
	});
	return (
		<footer className="footer-container" ref={ref}>
			<div className={`sub-footer ${isInView ? 'sub-footer--shown' : ''}`}>
				<div className="sub-footer-section sub-footer-section--social">
					<div className="sub-footer-logo">
						<img src={LOGO} alt="ITM Tax & Advisory Logo" />
					</div>
					<div className="sub-footer-links">
						<div>
							<h3>Want updates that matter?</h3>
							<p>Follow us on social media for the latest updates and news.</p>
						</div>
						<div className="sub-footer-social">
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
				<div className="sub-footer-section sub-footer-section--company">
					<div>
						<h3>Company</h3>
						<ul>
							<li>
								<a href="/about" rel="noopener noreferrer">
									About Us
								</a>
							</li>
							<li>
								<a href="/services" rel="noopener noreferrer">
									Our Services
								</a>
							</li>
							<li>
								<a href="/careers" rel="noopener noreferrer">
									Careers
								</a>
							</li>
							<li>
								<a href="/contact" rel="noopener noreferrer">
									Contact Us
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="sub-footer-section sub-footer-section--solutions">
					<div>
						<h3>Our Solutions</h3>
					</div>
					<div>
						<div>
							<h4>Individual Services</h4>
							<ul>
								<li>
									<p>Tax Planning</p>
								</li>
								<li>
									<p>Tax Preparation</p>
								</li>
								<li>
									<p>IRS Representation</p>
								</li>
								<li>
									<p>Financial Planning</p>
								</li>
								<li>
									<p>Retirement Planning</p>
								</li>
								<li>
									<p>Estate Planning</p>
								</li>
							</ul>
						</div>
						<div>
							<h4>Business Services</h4>
							<ul>
								<li>
									<p>Business Tax Planning</p>
								</li>
								<li>
									<p>Payroll Services</p>
								</li>
								<li>
									<p>Bookkeeping</p>
								</li>
								<li>
									<p>Financial Consulting</p>
								</li>
								<li>
									<p>Entity Formation</p>
								</li>
								<li>
									<p>Succession Planning</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="sub-footer-section sub-footer-section--hours">
					<div>
						<h3>Working Hours</h3>
						<ul>
							<li>
								<p>
									<strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM
								</p>
							</li>
							<li>
								<p>
									<strong>Saturday - Sunday:</strong> Closed
								</p>
							</li>
						</ul>
					</div>
				</div>
				<div className="sub-footer-section sub-footer-section--contact">
					<div>
						<h3>Contact Us</h3>
						<div>
							<span>
								<Icon name="email" size="small" />
								<a href="mailto:info@itmtax.com">info@itmtax.com</a>
							</span>
							<span>
								<Icon name="phone" size="small" />
								<a href="tel:+13464755147">+1 (346) 475-5147</a>
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className="footer">
				<p>© {currentYear} ITM Tax & Advisory, LLC. All rights reserved.</p>
				<p>
					<a href="/terms" rel="noopener noreferrer">
						Terms of Service
					</a>

					<span> | </span>
					<a href="/privacy" rel="noopener noreferrer">
						Privacy Policy
					</a>

					<span> | </span>
					<a href="/cookies" rel="noopener noreferrer">
						Cookies Policy
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
