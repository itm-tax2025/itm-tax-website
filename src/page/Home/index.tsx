import './Home.scss';
import Button from './../../ui/component/Button';
import TEAMIMAGE from './../../assets/images/IVY-TONY-TRANSPARENT.png';
import Card from './../../ui/component/Card';
import Icon from './../../ui/component/Icon';
import IVY from './../../assets/images/ivy-transparent.png';
import TONY from './../../assets/images/tony-transparent.png';
import Divider from './../../ui/component/NonFunctional/Divider';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Home = () => {
	const navigate = useNavigate();
	const handleGoTo = () => {
		navigate('/contact');
	};
	const [selectedMember, setSelectedMember] = useState<string[] | null>(null);
	const handleViewMemeberDetails = (target: string) => {
		if (selectedMember?.includes(target)) {
			setSelectedMember(selectedMember.filter((item) => item !== target));
		} else {
			setSelectedMember(
				selectedMember ? [...selectedMember, target] : [target]
			);
		}
	};
	const members = [
		{
			target: 'ivy-truong-cpa',
			name: 'Ivy Truong, CPA',
			role: 'Founder',
			image: IVY,
			intro:
				'Ivy Truong, a Certified Public Accountant (CPA), specializes in the complex tax and advisory needs of high-net-worth individuals and business clients.',
			highlights: [
				'Specializes in High-Net-Worth & Small Business Clients',
				'Complex Taxation',
				'Focus on Strategic Tax Minimization and Wealth Transfer',
				'Combining Large-Firm Sophistication with Boutique Service',
			],
		},
		{
			target: 'tony-hoang',
			name: 'Tony Hoang',
			role: 'Co-Founder',
			image: TONY,
			intro:
				"Tony Hoang, Co-Founder, leads the firm's technology and digital strategy, ensuring operational efficiency and an exceptional user experience.",
			highlights: [
				'Expert in Tax Technology Solutions',
				'Focus on Streamlining Operations',
				'Enhancing Client Experience through Innovation',
				'Bridging the Gap between Finance and Technology',
			],
		},
	];
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
						<Button onClick={handleGoTo}>
							Book Your Financial Clarity Session{' '}
						</Button>
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
					<Card
						className="home-page__reason__cards__item"
						style={{ animationDelay: '500ms' }}>
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
					<Card
						className="home-page__reason__cards__item"
						style={{ animationDelay: '400ms' }}>
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
					<Card
						className="home-page__reason__cards__item"
						style={{ animationDelay: '300ms' }}>
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
					{members.map((member, index) => (
						<Card
							key={'member-' + index}
							className="home-page__about__content__teammember"
							style={{ animationDelay: 500 + index * 100 + 'ms' }}
							aria-details={member.target}>
							<div
								className={`home-page__about__content__teammember__info prevent-select`}>
								<div className="home-page__about__content__teammember__info__image">
									<img src={member.image} alt={member.name} />
								</div>
								<div className="home-page__about__content__teammember__info__title">
									<h3>{member.name}</h3>
									<p>{member.role}</p>
								</div>
								<div className="home-page__about__content__teammember__info__expand">
									<Button
										onClick={handleViewMemeberDetails.bind(null, member.target)}
										className={`home-page__about__content__teammember__info__expand__button ${
											selectedMember?.includes(member.target)
												? 'home-page__about__content__teammember__info__expand__button--active'
												: ''
										}`}>
										<p>Details</p>
										<Icon name="caret-down" size="small" />
									</Button>
								</div>
							</div>
							<div className="home-page__about__content__teammember__intro">
								<p>{member.intro}</p>
							</div>
							<div
								className={`home-page__about__content__teammember__highlights ${
									selectedMember?.includes(member.target)
										? 'home-page__about__content__teammember__highlights--expanded'
										: ''
								}`}>
								{selectedMember?.includes(member.target) && (
									<Divider style="simple" />
								)}
								<ul>
									{member.highlights.map((highlight, idx) => (
										<li
											key={'highlight-' + idx}
											style={{ animationDelay: (idx + 1) * 100 + 'ms' }}>
											{highlight}
										</li>
									))}
								</ul>
							</div>
						</Card>
					))}
				</div>
			</section>
			<Divider />
		</div>
	);
};

export default Home;
