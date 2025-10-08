import { useState } from 'react';
import Card from './../../ui/component/Card';
import Icon from './../../ui/component/Icon';
import Divider from './../../ui/component/NonFunctional/Divider';
import './Pricing.scss';
import { PRICING_OPTIONS } from './../../utils/constant';
import Button from './../../ui/component/Button';
import PHONECALL from './../../assets/animated/phone-call.gif';
import { useNavigate } from 'react-router-dom';
const Pricing = () => {
	const navigate = useNavigate();
	const [category, setCategory] = useState<
		'' | 'individual' | 'business' | 'retirement'
	>('');
	const [isCTAHover, setIsCTAHover] = useState(false);
	const iconName = 'check';
	const iconSize = 'small';

	const handleChangeCategory = (
		newCategory: 'individual' | 'business' | 'retirement'
	) => {
		if (newCategory === category) {
			setCategory(''); // Deselect if the same category is clicked
		} else {
			setCategory(newCategory);
		}
	};

	const handleCTAHover = (hover: boolean) => {
		setIsCTAHover(hover);
	};

	const handleGoTo = () => {
		navigate('/contact');
	};

	const services = [
		{
			target: 'individual',
			title: 'Individual',
			subtitle: 'Stress-free tax filing made simple',
			description:
				'Accurate returns, timely filing, and peace of mind for professionals and families.',
		},
		{
			target: 'business',
			title: 'Business',
			subtitle: 'All-in-one care for your business.',
			description:
				'Bookkeeping, payroll, and tax planning; everything you need to keep your business compliant and growing.',
		},
		{
			target: 'retirement',
			title: 'Tax & Retirement Planning',
			subtitle: 'Strategies for a secure financial future.',
			description:
				'Comprehensive retirement planning, tax strategies, and tax efficiency to secure your financial future.',
		},
	];

	return (
		<div className="pricing-page">
			<h1 className="prevent-select">Pricing</h1>
			<div className="pricing-page__header">
				<div>
					<h4>Clear, Simple, and Tailored to You.</h4>
					<p>
						At ITM Tax & Advisory, we believe pricing should never feel
						complicated or hidden. That’s why we have designed three
						straightforward options to fit your needs, whether you’re an
						individual looking for peace of mind at tax time, a small business
						seeking full-circle support, or someone with unique needs who
						deserves a custom solution.
					</p>
				</div>
			</div>
			<div className="pricing-page__cta">
				<h2>Let's choose the package that fits you best:</h2>
			</div>
			<div className="pricing-page__options">
				{services.map((service, index) => (
					<Card
						key={`${service.title}-${index}`}
						className={`pricing-page__options__item ${
							category === service.target.toLowerCase()
								? 'pricing-page__options__item--selected'
								: ''
						} ${
							category !== service.target && category !== ''
								? 'pricing-page__options__item--hide'
								: ''
						}`}
						onClick={() =>
							handleChangeCategory(
								service.target as 'individual' | 'business' | 'retirement'
							)
						}>
						<h2 className="prevent-select">{service.title}</h2>
						<p className="pricing-page__options__item__subtitle">
							<i>{service.subtitle}</i>
						</p>
						<p>{service.description}</p>
					</Card>
				))}
			</div>
			<div className="pricing-page__selected">
				{category === '' && <p>Please select a category to see the details.</p>}
				{category === 'individual' && (
					<>
						<div className="pricing-page__selected__details">
							<h2 className="pricing-page__selected__details__title">
								Individual Services
							</h2>
							<div className="pricing-page__selected__details__price">
								<Card
									className={`pricing-page__selected__details__price__item`}
									style={{ animationDelay: '200ms' }}>
									<div className="pricing-page__selected__details__price__item__header">
										<h3>Essential</h3>
										<span>For individuals with simple tax situations.</span>
									</div>
									<div className="pricing-page__selected__details__price__item__starting">
										Starting at{' '}
										<strong>${PRICING_OPTIONS.INDIVIDUAL.BASIC}</strong>
									</div>
									<Divider style="text" text="Features" />
									<ul className="pricing-page__selected__details__price__item__features">
										<li>
											<div>
												<Icon name={iconName} size={iconSize} />
											</div>
											<div>
												<p>W-2s</p>
											</div>
										</li>
										<li>
											<div>
												<Icon name={iconName} size={iconSize} />
											</div>
											<div>
												<p>1 state</p>
											</div>
										</li>
										<li>
											<div>
												<Icon name={iconName} size={iconSize} />
											</div>
											<div>
												<p>Standard deduction</p>
											</div>
										</li>
									</ul>
								</Card>
								<Card
									className={`pricing-page__selected__details__price__item`}
									style={{ animationDelay: '50ms' }}>
									<div className="pricing-page__selected__details__price__item__header">
										<h3>Plus</h3>
										<span>
											For individuals with investments, home ownership, or HSA.
										</span>
									</div>
									<div className="pricing-page__selected__details__price__item__starting">
										Starting at
										<strong>${PRICING_OPTIONS.INDIVIDUAL.ADVANCED}</strong>
									</div>
									<Divider style="text" text="Features" />
									<ul className="pricing-page__selected__details__price__item__features">
										<li>
											<div>
												<Icon name={iconName} size={iconSize} />
											</div>
											<div>
												<p>
													Everything in <strong>Essential</strong>
												</p>
											</div>
										</li>
										<li>
											<div>
												<Icon name={iconName} size={iconSize} />
											</div>
											<div>
												<p>Itemized deductions</p>
											</div>
										</li>
										<li>
											<div>
												<Icon name={iconName} size={iconSize} />
											</div>
											<div>
												<p>HSA</p>
											</div>
										</li>
										<li>
											<div>
												<Icon name={iconName} size={iconSize} />
											</div>
											<div>
												<p>
													Simple brokerage accounts (1099-DIV, 1099-B, 1099-INT)
												</p>
											</div>
										</li>
									</ul>
								</Card>
								<Card
									className={`pricing-page__selected__details__price__item`}>
									<div className="pricing-page__selected__details__price__item__header">
										<h3>Premier</h3>
										<span>
											For individuals with complex tax situations and investment
										</span>
									</div>
									<div className="pricing-page__selected__details__price__item__starting">
										Starting at{' '}
										<strong>${PRICING_OPTIONS.INDIVIDUAL.PREMIER}</strong>
									</div>
									<Divider style="text" text="Features" />
									<ul className="pricing-page__selected__details__price__item__features">
										<li>
											<div>
												<Icon name={iconName} size={iconSize} />
											</div>
											<div>
												<p>
													Everything in <strong>Plus</strong>
												</p>
											</div>
										</li>
										<li>
											<div>
												<Icon name={iconName} size={iconSize} />
											</div>
											<div>
												<p>
													Schedule C income and expenses (freelance, 1099-MISC,
													etc.)
												</p>
											</div>
										</li>
										<li>
											<div>
												<Icon name={iconName} size={iconSize} />
											</div>
											<div>
												<p>1 rental property</p>
											</div>
										</li>
										<li>
											<div>
												<Icon name={iconName} size={iconSize} />
											</div>
											<div>
												<p>Up to 2 K-1s</p>
											</div>
										</li>
									</ul>
								</Card>
							</div>
						</div>
						<Card className="pricing-page__selected__add-ons">
							<h3 className="pricing-page__selected__add-ons__title">
								Add-On Services
							</h3>
							<div className="pricing-page__selected__add-ons__list">
								<div>
									<div className="pricing-page__selected__add-ons__list__group">
										<div className="pricing-page__selected__add-ons__list__item">
											<div>
												<Icon name={iconName} size={iconSize} />
											</div>
											<div>
												<p>
													Additional Schedule C: <strong>$150 each</strong>
												</p>
											</div>
										</div>
										<div className="pricing-page__selected__add-ons__list__item">
											<div>
												<Icon name={iconName} size={iconSize} />
											</div>
											<div>
												<p>
													Additional state: <strong>$150 each</strong>
												</p>
											</div>
										</div>
									</div>
									<div className="pricing-page__selected__add-ons__list__group">
										<div className="pricing-page__selected__add-ons__list__item">
											<div>
												<Icon name={iconName} size={iconSize} />
											</div>
											<div>
												<p>
													Additional K-1: <strong>$125 each</strong>
												</p>
											</div>
										</div>
										<div className="pricing-page__selected__add-ons__list__item">
											<div>
												<Icon name={iconName} size={iconSize} />
											</div>
											<div>
												<p>
													Additional rental: <strong>$150 each</strong>
												</p>
											</div>
										</div>
									</div>
									<div className="pricing-page__selected__add-ons__list__group">
										<div className="pricing-page__selected__add-ons__list__item">
											<div>
												<Icon name={iconName} size={iconSize} />
											</div>
											<div>
												<p>
													Additional brokerage account:{' '}
													<strong>$50 each</strong>
												</p>
											</div>
										</div>
										<div className="pricing-page__selected__add-ons__list__item">
											<div>
												<Icon name={iconName} size={iconSize} />
											</div>
											<div>
												<p>
													Crypto summary (100 - 500 transactions):{' '}
													<strong>$300</strong>
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Card>
					</>
				)}
				{category === 'business' && (
					<>
						<div className="pricing-page__selected__details pricing-page__selected__details--business">
							<h2 className="pricing-page__selected__details__title">
								Business Services
							</h2>
							<div className="pricing-page__selected__details__price">
								<Card
									className="pricing-page__selected__details__price__item"
									style={{ animationDelay: '250ms' }}>
									<div className="pricing-page__selected__details__price__item__header">
										<h3>Formation</h3>
										<span>For startups looking to get off the ground.</span>
									</div>
									<ul className="pricing-page__selected__details__price__item__features pricing-page__selected__details__price__item__features--listed">
										<li className="pricing-page__selected__details__price__item__features__item">
											<div className="pricing-page__selected__details__price__item__features__item__header">
												<div>
													<Icon name={iconName} size={iconSize} />
												</div>
												<div className="pricing-page__selected__details__price__item__features__item__header-text">
													<h4>LLC Formation & EIN</h4>
													<span>
														Includes name availability check and filing
													</span>
												</div>
											</div>
											<div className="pricing-page__selected__details__price__item__features__item__price">
												<p>${PRICING_OPTIONS.BUSINESS.FORMATION.LLC_EIN}</p>
											</div>
										</li>
										<li className="pricing-page__selected__details__price__item__features__item">
											<div className="pricing-page__selected__details__price__item__features__item__header">
												<div>
													<Icon name={iconName} size={iconSize} />
												</div>
												<div className="pricing-page__selected__details__price__item__features__item__header-text">
													<h4>Entity Election </h4>
													<span>
														Choose your business structure (S-Corp or C-Corp)
													</span>
												</div>
											</div>
											<div className="pricing-page__selected__details__price__item__features__item__price">
												<p>
													${PRICING_OPTIONS.BUSINESS.FORMATION.ENTITY_ELECTION}
												</p>
											</div>
										</li>
										<li className="pricing-page__selected__details__price__item__features__item">
											<div className="pricing-page__selected__details__price__item__features__item__header">
												<div>
													<Icon name={iconName} size={iconSize} />
												</div>
												<div className="pricing-page__selected__details__price__item__features__item__header-text">
													<h4>State Compliance</h4>
													<span>PIR report and sales tax account setup</span>
												</div>
											</div>
											<div className="pricing-page__selected__details__price__item__features__item__price">
												<p>
													${PRICING_OPTIONS.BUSINESS.FORMATION.STATE_COMPLIANCE}
												</p>
											</div>
										</li>
									</ul>
								</Card>
								<Card
									className="pricing-page__selected__details__price__item"
									style={{ animationDelay: '100ms' }}>
									<div className="pricing-page__selected__details__price__item__header">
										<h3>Bookkeeping</h3>
										<span>For new and ongoing bookkeeping needs</span>
									</div>
									<ul className="pricing-page__selected__details__price__item__features pricing-page__selected__details__price__item__features--tiered">
										<li className="pricing-page__selected__details__price__item__features__tiered__item">
											<div className="pricing-page__selected__details__price__item__features__tiered__item__header">
												<h4>Monthly Bookkeeping (QBO)</h4>
											</div>
											<div className="pricing-page__selected__details__price__item__features__tiered__item__list">
												<ul className="pricing-page__selected__details__price__item__features__tiered__item__list__items">
													<li className="pricing-page__selected__details__price__item__features__tiered__item__list__item">
														<div className="pricing-page__selected__details__price__item__features__tiered__item__list__item__header">
															<div>
																<Icon name={iconName} size={iconSize} />
															</div>
															<div className="pricing-page__selected__details__price__item__features__tiered__item__list__item__header-text">
																<h4>Starter</h4>
																<span>
																	{`< 100 transactions, 1 - 2 Bank accounts`}
																</span>
															</div>
														</div>
														<div className="pricing-page__selected__details__price__item__features__item__price">
															<p>
																${PRICING_OPTIONS.BUSINESS.BOOKKEEPING.STARTER}
															</p>
														</div>
													</li>
													<li className="pricing-page__selected__details__price__item__features__tiered__item__list__item">
														<div className="pricing-page__selected__details__price__item__features__tiered__item__list__item__header">
															<div>
																<Icon name={iconName} size={iconSize} />
															</div>
															<div className="pricing-page__selected__details__price__item__features__tiered__item__list__item__header-text">
																<h4>Core</h4>
																<span>
																	{`< 200 transactions, up to 3 Bank accounts`}
																</span>
															</div>
														</div>
														<div className="pricing-page__selected__details__price__item__features__item__price">
															<p>
																${PRICING_OPTIONS.BUSINESS.BOOKKEEPING.CORE}
															</p>
														</div>
													</li>
													<li className="pricing-page__selected__details__price__item__features__tiered__item__list__item">
														<div className="pricing-page__selected__details__price__item__features__tiered__item__list__item__header">
															<div>
																<Icon name={iconName} size={iconSize} />
															</div>
															<div className="pricing-page__selected__details__price__item__features__tiered__item__list__item__header-text">
																<h4>Growth</h4>
																<span>
																	{`< 500 transactions, up to 6 Bank accounts, management reports`}
																</span>
															</div>
														</div>
														<div className="pricing-page__selected__details__price__item__features__item__price">
															<p>
																${PRICING_OPTIONS.BUSINESS.BOOKKEEPING.GROWTH}
															</p>
														</div>
													</li>
												</ul>
											</div>
										</li>
									</ul>
									<Divider style="logo" />
									<div className="pricing-page__selected__details__price__item__header">
										<h3>Payroll</h3>
										<span>
											For businesses with employees and/or contractors
										</span>
									</div>
									<ul className="pricing-page__selected__details__price__item__features pricing-page__selected__details__price__item__features--listed">
										<li className="pricing-page__selected__details__price__item__features__item">
											<div className="pricing-page__selected__details__price__item__features__item__header">
												<div>
													<Icon name={iconName} size={iconSize} />
												</div>
												<div className="pricing-page__selected__details__price__item__features__item__header-text">
													<h4>Setup</h4>
													<span>Company onboarding, GL mapping, state IDs</span>
												</div>
											</div>
											<div className="pricing-page__selected__details__price__item__features__item__price">
												<p>${PRICING_OPTIONS.BUSINESS.PAYROLL.SETUP}</p>
											</div>
										</li>
										<li className="pricing-page__selected__details__price__item__features__item">
											<div className="pricing-page__selected__details__price__item__features__item__header">
												<div>
													<Icon name={iconName} size={iconSize} />
												</div>
												<div className="pricing-page__selected__details__price__item__features__item__header-text">
													<h4>Monthly Admin</h4>
													<span>
														Payroll processing, tax filings, employee support
													</span>
												</div>
											</div>
											<div className="pricing-page__selected__details__price__item__features__item__price">
												<p>
													${PRICING_OPTIONS.BUSINESS.PAYROLL.MONTHLY_ADMIN} + $
													{PRICING_OPTIONS.BUSINESS.PAYROLL.EMPLOYEE_PAY}{' '}
													/employee
												</p>
											</div>
										</li>
										<li className="pricing-page__selected__details__price__item__features__item">
											<div className="pricing-page__selected__details__price__item__features__item__header">
												<div>
													<Icon name={iconName} size={iconSize} />
												</div>
												<div className="pricing-page__selected__details__price__item__features__item__header-text">
													<h4>Year-End</h4>
													<span>
														W-2s and 1099s for employees and contractors
													</span>
												</div>
											</div>
											<div className="pricing-page__selected__details__price__item__features__item__price">
												<p>
													${PRICING_OPTIONS.BUSINESS.PAYROLL.FORM_GENERATE} /
													W-2 or 1099
												</p>
											</div>
										</li>
									</ul>
								</Card>
								<Card
									className="pricing-page__selected__details__price__item"
									style={{ animationDelay: '50ms' }}>
									<div className="pricing-page__selected__details__price__item__header">
										<h3>Tax Returns</h3>
										<span>For LLCs, S-Corps, and C-Corps Tax Needs</span>
									</div>
									<ul className="pricing-page__selected__details__price__item__features pricing-page__selected__details__price__item__features--tiered">
										<li className="pricing-page__selected__details__price__item__features__tiered__item">
											<div className="pricing-page__selected__details__price__item__features__tiered__item__header">
												<h4>Partnership 1065 / S-Corp 1120S</h4>
											</div>
											<div className="pricing-page__selected__details__price__item__features__tiered__item__list">
												<ul className="pricing-page__selected__details__price__item__features__tiered__item__list__items">
													<li className="pricing-page__selected__details__price__item__features__tiered__item__list__item">
														<div className="pricing-page__selected__details__price__item__features__tiered__item__list__item__header">
															<div>
																<Icon name={iconName} size={iconSize} />
															</div>
															<div className="pricing-page__selected__details__price__item__features__tiered__item__list__item__header-text">
																<h4>Simple</h4>
																<span>
																	Tax-ready books, 1 - 2 owners 1 state
																</span>
															</div>
														</div>
														<div className="pricing-page__selected__details__price__item__features__item__price">
															<p>
																$
																{
																	PRICING_OPTIONS.BUSINESS.TAX_PREPARATION
																		.PARTNERSHIP_SIMPLE
																}
															</p>
														</div>
													</li>
													<li className="pricing-page__selected__details__price__item__features__tiered__item__list__item">
														<div className="pricing-page__selected__details__price__item__features__tiered__item__list__item__header">
															<div>
																<Icon name={iconName} size={iconSize} />
															</div>
															<div className="pricing-page__selected__details__price__item__features__tiered__item__list__item__header-text">
																<h4>Standard</h4>
																<span>
																	Includes tax-ready books, 1-2 owners, 1 state
																</span>
															</div>
														</div>
														<div className="pricing-page__selected__details__price__item__features__item__price">
															<p>
																$
																{
																	PRICING_OPTIONS.BUSINESS.TAX_PREPARATION
																		.PARTNERSHIP_STANDARD
																}
															</p>
														</div>
													</li>
												</ul>
											</div>
										</li>
										<li className="pricing-page__selected__details__price__item__features__tiered__item">
											<div className="pricing-page__selected__details__price__item__features__tiered__item__header">
												<h4> C-Corp 1120</h4>
											</div>
											<div className="pricing-page__selected__details__price__item__features__tiered__item__list">
												<ul className="pricing-page__selected__details__price__item__features__tiered__item__list__items">
													<li className="pricing-page__selected__details__price__item__features__tiered__item__list__item">
														<div className="pricing-page__selected__details__price__item__features__tiered__item__list__item__header">
															<div>
																<Icon name={iconName} size={iconSize} />
															</div>
															<div className="pricing-page__selected__details__price__item__features__tiered__item__list__item__header-text">
																<h4>Standard</h4>
																<span>
																	Single-state filing, owner planning, add-on
																	available
																</span>
															</div>
														</div>
														<div className="pricing-page__selected__details__price__item__features__item__price">
															<p>
																$
																{
																	PRICING_OPTIONS.BUSINESS.TAX_PREPARATION
																		.PARTNERSHIP_SIMPLE
																}
															</p>
														</div>
													</li>
												</ul>
											</div>
										</li>
									</ul>
								</Card>
							</div>
						</div>
						<div className="pricing-page__selected__add-ons">
							<h3 className="pricing-page__selected__add-ons__title">
								Add-On Services
							</h3>
							<div className="pricing-page__selected__add-ons__list">
								<div>
									<div className="pricing-page__selected__add-ons__list__group">
										<div className="pricing-page__selected__add-ons__list__item">
											<div>
												<Icon name={iconName} size={iconSize} />
											</div>
											<div>
												<p>
													Franchise Tax report: <strong>$200 each</strong>
												</p>
											</div>
										</div>
										<div className="pricing-page__selected__add-ons__list__item">
											<div>
												<Icon name={iconName} size={iconSize} />
											</div>
											<div>
												<p>
													Multi-state apportionment:
													<strong>$200/ state</strong>
												</p>
											</div>
										</div>
									</div>
									<div className="pricing-page__selected__add-ons__list__group">
										<div className="pricing-page__selected__add-ons__list__item">
											<div>
												<Icon name={iconName} size={iconSize} />
											</div>
											<div>
												<p>
													Additional Owner K-1 beyond 2:{' '}
													<strong>$100 each</strong>
												</p>
											</div>
										</div>
										<div className="pricing-page__selected__add-ons__list__item">
											<div>
												<Icon name={iconName} size={iconSize} />
											</div>
											<div>
												<p>
													Books clean-up:{' '}
													<strong>
														1.5 x monthly fee per historical month
													</strong>
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</>
				)}
				{category === 'retirement' && (
					<div className="pricing-page__selected__details">
						<h2 className="pricing-page__selected__details__title">
							Tax & Retirement Planning
						</h2>
						<Card className="pricing-page__selected__details__price__item pricing-page__selected__details__price__item--single">
							<div>$200 per hour</div>
							<div>
								Advisory services including tax planning, retirement planning.
								Minimum one-hour engagement.
							</div>
						</Card>
					</div>
				)}
			</div>
			<div className="pricing-page__disclaimer">
				<h4>Pricing Disclaimer</h4>
				<p>
					Pricing shown is for general guidance only. Final fees may vary based
					on the complexity of your tax situation, the scope of services
					required, and current market conditions. All quotes will be confirmed
					in writing before services begin.
				</p>
			</div>
			<Divider />
			<div className="pricing-page__consultation">
				<h1>Not sure which plan fits you best?</h1>
				<p>
					No worries - many clients start with questions before finding the
					right fit. At ITM Tax & Advisory, we will guide you through your
					options and recommend the package that works for your unique
					situation.
				</p>
				<div className="pricing-page__consultation__cta">
					<Button
						className="prevent-select"
						onMouseOver={() => handleCTAHover(true)}
						onMouseOut={() => handleCTAHover(false)}
						onClick={handleGoTo}>
						<div>
							{isCTAHover ? (
								<img src={PHONECALL} alt="phone call" />
							) : (
								<Icon name="phone" size="small" />
							)}
						</div>
						<div>Claim Free Consult</div>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Pricing;
