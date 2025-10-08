import { useState } from 'react';
import Card from './../../ui/component/Card';
import Divider from './../../ui/component/NonFunctional/Divider';
import './Services.scss';
const Services = () => {
	const [currentService, setCurrentService] = useState<string | null>(null);

	const handleSelectService = (e: React.MouseEvent<HTMLSpanElement>) => {
		const detail = e.currentTarget.getAttribute('aria-details');
		if (detail === currentService) {
			setCurrentService(null);
			return;
		}
		setCurrentService(detail);
	};
	return (
		<div className="services-page">
			<h1>Our Services</h1>
			<div className="services-page__header">
				<p>
					At ITM Tax & Advisory, LLC, we provide comprehensive, year-round
					financial services designed to streamline your operations, minimize
					your tax burden, and give you the confidence to focus on what matters
					most. Whether you're an individual needing help with your personal
					return or a business seeking strategic financial guidance, we have the
					expertise to support your goals.
				</p>
			</div>
			<div className="services-page__services">
				<Card
					className="services-page__services__item"
					style={{
						animationDelay: (Math.floor(Math.random() * 7) + 1) * 100 + 'ms',
					}}
					id="tax">
					<div className="services-page__services__item__header">
						<h3>Individual Tax (Preparation & Planning)</h3>
					</div>
					<div className="services-page__services__item__description">
						<p>
							Year‑round, proactive tax preparation and planning for
							individuals, families, and entrepreneurs—W‑2s, investment income,
							rental schedules, equity comp, multi‑state, and more.
							<span
								onClick={handleSelectService}
								className={`prevent-select services-page__services__item__description__expand ${
									currentService === 'individual' ? 'active' : ''
								}`}
								aria-details="individual">
								Learn More
							</span>
						</p>
					</div>
					<div
						className={`services-page__services__item__reason ${
							currentService === 'individual' ? 'active' : ''
						}`}>
						<h4>Why it matters:</h4>
						<p>
							Taxes are typically your largest recurring expense; timely
							planning reduces surprises.
						</p>
						<p>
							Proactive adjustments (withholdings, estimated payments, and
							elections) prevent penalties and cash‑flow crunches.
						</p>
					</div>
					<div
						className={`services-page__services__item__value ${
							currentService === 'individual' ? 'active' : ''
						}`}>
						<h4>Long-Term Value:</h4>
						<ul>
							<li>
								Multi‑year planning compounds: better basis tracking, loss
								harvesting, and timing of deductions can improve after‑tax
								wealth over decades.
							</li>
							<li>
								Clean records and consistent filing reduce audit risk and make
								future transactions (home sale, business exit) smoother.
							</li>
						</ul>
					</div>
				</Card>
				<Card
					className="services-page__services__item"
					style={{
						animationDelay: (Math.floor(Math.random() * 7) + 1) * 100 + 'ms',
					}}
					id="business">
					<div className="services-page__services__item__header">
						<h3>Business Tax (Entity & Owner) </h3>
					</div>
					<div className="services-page__services__item__description">
						<p>
							Federal and state returns for LLCs, S corps, C corps, and
							partnerships plus owner‑level planning (reasonable comp,
							distributions, basis, SALT issues).
							<span
								onClick={handleSelectService}
								className={`prevent-select services-page__services__item__description__expand ${
									currentService === 'business' ? 'active' : ''
								}`}
								aria-details="business">
								Learn More
							</span>
						</p>
					</div>
					<div
						className={`services-page__services__item__reason ${
							currentService === 'business' ? 'active' : ''
						}`}>
						<h4>Why it matters:</h4>
						<p>
							The entity/owner tax picture is intertwined; missed coordination
							raises effective tax rates.
						</p>
						<p>
							Elections (e.g., S corp), depreciation strategies, and credits are
							time‑sensitive.
						</p>
					</div>
					<div
						className={`services-page__services__item__value ${
							currentService === 'business' ? 'active' : ''
						}`}>
						<h4>Long-Term Value:</h4>
						<ul>
							<li>
								Thoughtful entity structure and ongoing planning lower total tax
								over the business life cycle.
							</li>
							<li>
								Up‑to‑date compliance and documentation preserve deductions and
								simplify due diligence if you sell.
							</li>
						</ul>
					</div>
				</Card>
				<Card
					className="services-page__services__item"
					style={{
						animationDelay: (Math.floor(Math.random() * 7) + 1) * 100 + 'ms',
					}}
					id="bookkeeping">
					<div className="services-page__services__item__header">
						<h3>Bookkeeping & Financial Reporting (Non‑Attest)</h3>
					</div>
					<div className="services-page__services__item__description">
						<p>
							Monthly bookkeeping, close support, management reports, and
							cash‑flow dashboards so owners see what’s happening and can act
							quickly.
							<span
								onClick={handleSelectService}
								className={`prevent-select services-page__services__item__description__expand ${
									currentService === 'bookkeeping' ? 'active' : ''
								}`}
								aria-details="bookkeeping">
								Learn More
							</span>
						</p>
					</div>
					<div
						className={`services-page__services__item__reason ${
							currentService === 'bookkeeping' ? 'active' : ''
						}`}>
						<h4>Why it matters:</h4>
						<p>
							Accurate, timely books drive better pricing, hiring, and inventory
							decisions.
						</p>
						<p>
							Clean records lower tax prep costs and reduce stress at year‑end.
						</p>
					</div>
					<div
						className={`services-page__services__item__value ${
							currentService === 'bookkeeping' ? 'active' : ''
						}`}>
						<h4>Long-Term Value:</h4>
						<ul>
							<li>
								Consistent management reporting increases business value by
								demonstrating control and predictability.
							</li>
							<li>
								Readiness for financing or a future exit improves when your
								numbers are reliable.
							</li>
						</ul>
					</div>
				</Card>
				<Card
					className="services-page__services__item"
					style={{
						animationDelay: (Math.floor(Math.random() * 7) + 1) * 100 + 'ms',
					}}
					id="financial">
					<div className="services-page__services__item__header">
						<h3>Financial Advisory</h3>
					</div>
					<div className="services-page__services__item__description">
						<p>
							Pricing analysis, budgets, forecasts, KPI design, and process
							improvements that help you run leaner and grow healthier.
							<span
								onClick={handleSelectService}
								className={`prevent-select services-page__services__item__description__expand ${
									currentService === 'financial' ? 'active' : ''
								}`}
								aria-details="financial">
								Learn More
							</span>
						</p>
					</div>
					<div
						className={`services-page__services__item__reason ${
							currentService === 'financial' ? 'active' : ''
						}`}>
						<h4>Why it matters:</h4>
						<p>
							Decisions on pricing, hiring, and capital spending benefit from
							objective, data‑driven analysis.
						</p>
						<p>
							A simple, forward‑looking model keeps everyone aligned and
							accountable.
						</p>
					</div>
					<div
						className={`services-page__services__item__value ${
							currentService === 'financial' ? 'active' : ''
						}`}>
						<h4>Long-Term Value:</h4>
						<ul>
							<li>
								Better capital allocation and margins compound year after year.
							</li>
							<li>
								Institutionalizing good processes de‑risks your business and
								boosts valuation.
							</li>
						</ul>
					</div>
				</Card>
				<Card
					className="services-page__services__item"
					style={{
						animationDelay: (Math.floor(Math.random() * 7) + 1) * 100 + 'ms',
					}}
					id="retirement">
					<div className="services-page__services__item__header">
						<h3>Retirement Planning (Tax‑Focused)</h3>
					</div>
					<div className="services-page__services__item__description">
						<p>
							Tax‑efficient retirement income design—Roth conversions, RMD
							strategy, Social Security timing, small‑business retirement plan
							selection—from a tax perspective.
							<span
								onClick={handleSelectService}
								className={`prevent-select services-page__services__item__description__expand ${
									currentService === 'retirement' ? 'active' : ''
								}`}
								aria-details="retirement">
								Learn More
							</span>
						</p>
					</div>
					<div
						className={`services-page__services__item__reason ${
							currentService === 'retirement' ? 'active' : ''
						}`}>
						<h4>Why it matters:</h4>
						<p>
							Withdrawal sequence and bracket management can materially change
							lifetime taxes paid.
						</p>
						<p>
							Early planning helps avoid IRMAA surcharges and unexpected tax
							cliffs.
						</p>
					</div>
					<div
						className={`services-page__services__item__value ${
							currentService === 'retirement' ? 'active' : ''
						}`}>
						<h4>Long-Term Value:</h4>
						<ul>
							<li>
								Coordinated tax strategy can extend portfolio longevity and
								increase after‑tax income in retirement.
							</li>

							<li>
								Less guesswork, more confidence when markets and tax laws
								change.
							</li>
						</ul>
					</div>
				</Card>
				<Card
					className="services-page__services__item"
					style={{
						animationDelay: (Math.floor(Math.random() * 7) + 1) * 100 + 'ms',
					}}
					id="education">
					<div className="services-page__services__item__header">
						<h3>Tax Education & Workshops</h3>
					</div>
					<div className="services-page__services__item__description">
						<p>
							Practical sessions for individuals, startups, and nonprofits on
							recordkeeping, entity basics, year‑end planning, and IRS do’s &
							don’ts.
							<span
								onClick={handleSelectService}
								className={`prevent-select services-page__services__item__description__expand ${
									currentService === 'education' ? 'active' : ''
								}`}
								aria-details="education">
								Learn More
							</span>
						</p>
					</div>
					<div
						className={`services-page__services__item__reason ${
							currentService === 'education' ? 'active' : ''
						}`}>
						<h4>Why it matters:</h4>
						<p>
							A little tax literacy prevents costly mistakes and improves
							decision‑making throughout the year.
						</p>
						<p>
							Teams that understand the “why” keep better records and save time.
						</p>
					</div>
					<div
						className={`services-page__services__item__value ${
							currentService === 'education' ? 'active' : ''
						}`}>
						<h4>Long-Term Value:</h4>
						<ul>
							<li>
								Fewer avoidable penalties and more opportunities captured
								(credits, elections, timing).
							</li>
							<li>
								Knowledge scales: train once, benefit across your organization.
							</li>
						</ul>
					</div>
				</Card>
			</div>
			<Divider />
		</div>
	);
};

export default Services;
