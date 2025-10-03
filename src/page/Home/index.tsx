import './Home.scss';
import Button from '../../ui/component/Button';
import TEAMIMAGE from '../../assets/images/IVY-TONY-TRANSPARENT.png';
import Card from '../../ui/component/Card';
import Icon from '../../ui/component/Icon';
import IVY from '../../assets/images/ivy-transparent.png';
import TONY from '../../assets/images/tony-transparent.png';
import Divider from '../../ui/component/NonFunctional/Divider';
import { useNavigate } from 'react-router-dom';
const Home = () => {
	const navigate = useNavigate();

	const handleGoTo = () =>{
		navigate('/contact');
	}

	return (
		<div className="home-page">
			<section className="home-page__hero">
				<div className="home-page__hero__content">
					<h1>Tax Made Easy - Results Made Real.</h1>
					<p>
						Your business deserves more than just someone crunching numbers, it
						deserves a partner who truly cares about your success. We take care
						of your taxes, bookkeeping, and payroll with accuracy and personal
						attention, giving you the freedom to focus on growing the business
						you have worked so hard to build. With clear numbers, reliable
						support, and a trusted advisor by your side, you will have the peace
						of mind and confidence to make smart decisions and move your
						business forward with ease.
					</p>
					<div className="home-page__hero__content__cta">
						<Button onClick={handleGoTo}>Book Your Financial Clarity Session </Button>
					</div>
				</div>
				<div className="home-page__hero__image prevent-select">
					<img src={TEAMIMAGE} alt="Ivy and Tony" />
				</div>
			</section>
			<section className="home-page__reason">
				<div className="home-page__reason__header">
					<h1>Why Choose Us?</h1>
				</div>
				<div className="home-page__reason__cards">
					<Card className="home-page__reason__cards__item" style={{ animationDelay: '500ms' }}>
						<Icon name="trust" size="large" />
						<h3>Expertise You Can Trust</h3>
						<h5>Dedicated to Your Success</h5>
						<span className="line-break"></span>
						<span>
							<p>
								Our team of
								<strong>seasoned financial experts</strong>
								brings decades of collective knowledge and
								<strong>deep, specialized expertise</strong>
								built across diverse market conditions.
							</p>
						</span>
					</Card>
					<Card className="home-page__reason__cards__item"  style={{ animationDelay: '400ms' }}>
						<Icon name="completed" size="large" />
						<h3>Comprehensive Services</h3>
						<h5>Covering Your Full Financial Spectrum</h5>
						<span className="line-break"></span>
						<span>
							<p>
								We offer a
								<strong>comprehensive suite of financial services</strong>,
								designed to cover all your business and personal needs under one
								roof. Our support extends far beyond simple transaction
								recording.
							</p>
						</span>
					</Card>
					<Card className="home-page__reason__cards__item" style={{ animationDelay: '300ms' }}>
						<Icon name="award" size="large" />
						<h3>Proven Results</h3>
						<h5>Your Goals Are Our Track Record</h5>
						<span className="line-break"></span>
						<p>
							Our value is demonstrated by the
							<strong>proven results</strong>
							we've delivered across various industries and financial
							situations. We never offer theoretical advice; we provide
							<strong>a consistent, verifiable track record</strong>
							of successful client outcomes.
						</p>
					</Card>
				</div>
			</section>
			<Divider />
			<section className="home-page__about" id="about">
				<div className="home-page__about__header">
					<h1>Meet Our Team</h1>
				</div>
				<div className="home-page__about__content">
					<div className="home-page__about__content__teammember" style={{ animationDelay: '600ms' }}>
						<div className="home-page__about__content__teammember__image home-page__about__content__teammember__image--ivy prevent-select">
							<img src={IVY} alt="Ivy" />
							<span className="home-page__about__content__teammember__image__info">
								<p>Ivy Truong, CPA</p>
								<p>Founder</p>
							</span>
						</div>
						<div className="home-page__about__content__teammember__bio">
							<p className="home-page__about__content__teammember__bio__intro">
								Ivy Truong, a Certified Public Accountant (CPA), specializes in
								the complex tax and advisory needs of high-net-worth individuals
								and business clients.
							</p>
							<ul className="home-page__about__content__teammember__bio__highlights">
								<li style={{ animationDelay: '100ms' }}>
									Specializes in High-Net-Worth & Small Business Clients
								</li>
								<li style={{ animationDelay: '200ms' }}>Complex Taxation</li>
								<li style={{ animationDelay: '300ms' }}>
									Focus on Strategic Tax Minimization and Wealth Transfer
								</li>
								<li style={{ animationDelay: '400ms' }}>
									Combining Large-Firm Sophistication with Boutique Service
								</li>
							</ul>
						</div>
					</div>
					<div className="home-page__about__content__teammember"  style={{ animationDelay: '700ms' }}>
						<div className="home-page__about__content__teammember__image home-page__about__content__teammember__image--tony prevent-select">
							<img src={TONY} alt="Tony" />
							<span className="home-page__about__content__teammember__image__info">
								<p>Tony Hoang</p>
								<p>Co-Founder</p>
							</span>
						</div>
						<div className="home-page__about__content__teammember__bio">
							<p className="home-page__about__content__teammember__bio__intro">
								Tony Hoang leads the firm's strategic initiatives in technology,
								digital content, and operational efficiency.
							</p>
							<ul className="home-page__about__content__teammember__bio__highlights">
								<li style={{ animationDelay: '100ms' }}>
									Leads Firm's Technology & Digital Strategy
								</li>
								<li style={{ animationDelay: '200ms' }}>
									Specialist in Cybersecurity and Data Integrity
								</li>
								<li style={{ animationDelay: '300ms' }}>
									Manages Client Portal and Digital Communication
								</li>
								<li style={{ animationDelay: '400ms' }}>
									Focused on Operational Efficiency and User Experience
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<Divider />
		</div>
	);
};

export default Home;
