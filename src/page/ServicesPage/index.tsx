import { useState } from 'react';
import { Breadcrumbs } from '../../ui/component/Breadcrumb';
import './ServicesPage.scss';
import ADVISORYSERVICE from './../../assets/images/advisory-service.png';
import BOOKKEEPINGSERVICE from './../../assets/images/bookkeeping-service.png';
import TAXSERVICE from './../../assets/images/tax-service.png';
const ServicesPage = () => {
	const [serviceSelected, setServiceSelected] = useState('individual');

	const handleServiceSelect = (service: string) => {
		setServiceSelected(service);
	};

	return (
		<div className="services-page">
			<div className="services-page-header">
				<Breadcrumbs />
				<div>
					<h1>
						<span>Our</span>
						<span>Services</span>
					</h1>
					<p className="services-page-description">
						At ITM, we provide comprehensive tax and financial services tailored
						to individuals, businesses, and specialized industries. Whether
						you're planning for your financial future, managing your business
						finances, or navigating complex tax scenarios, our team of experts
						is here to support your success with precision, integrity, and
						personalized care.
					</p>
				</div>
			</div>
			<div className="services-page-option">
				<div className="services-page-option-container">
					<span
						className="services-page-option-indicator"
						style={{
							transform:
								serviceSelected === 'individual'
									? 'translateX(-100%)'
									: serviceSelected === 'business'
									? 'translateX(0%)'
									: 'translateX(100%)',
						}}></span>
					<div
						className={`services-page-option-item ${
							serviceSelected === 'individual'
								? 'services-page-option-item--active'
								: ''
						}`}
						onClick={() => handleServiceSelect('individual')}>
						<span>Individual</span>
					</div>
					<div
						className={`services-page-option-item ${
							serviceSelected === 'business'
								? 'services-page-option-item--active'
								: ''
						}`}
						onClick={() => handleServiceSelect('business')}>
						<span>Business</span>
					</div>
					<div
						className={`services-page-option-item ${
							serviceSelected === 'specialized'
								? 'services-page-option-item--active'
								: ''
						}`}
						onClick={() => handleServiceSelect('specialized')}>
						<span>Specialized</span>
					</div>
				</div>
			</div>

			<div className="services-page-content">
				<div
					className="services-page-content-body"
					style={{ animationDelay: '1000ms' }}>
					<div className="services-page-content-container">
						<div className="services-page-content-header">
							<h3>Tax Preparation and Planning</h3>
						</div>
						<div className="services-page-content-description">
							{serviceSelected === 'individual' && (
								<p className="services-page-content-text">
									We ensure you remain fully compliant with tax laws while
									minimizing your liabilities. Our personalized strategies
									consider your income, deductions, credits, and life
									events—like marriage, home ownership, or investments—to
									optimize your tax outcomes.
								</p>
							)}
							{serviceSelected === 'business' && (
								<p className="services-page-content-text">
									From startups to established corporations, we handle all
									business tax matters—federal, state, and local. We identify
									tax-saving opportunities, ensure timely filings, and plan
									proactively to reduce future liabilities.
								</p>
							)}
							{serviceSelected === 'specialized' && (
								<p className="services-page-content-text">
									Whether you're a real estate investor, high-net-worth
									individual, freelancer, or own multiple businesses, we craft
									customized tax strategies to optimize your position and ensure
									compliance with all applicable regulations.
								</p>
							)}
						</div>
					</div>
					<img
						src={TAXSERVICE}
						alt="Tax Service"
						className="services-page-image"
					/>
				</div>
				<div
					className="services-page-content-body"
					style={{ animationDelay: '1200ms' }}>
					<div className="services-page-content-container">
						<div className="services-page-content-header">
							<h3>Accounting and Bookkeeping</h3>
						</div>
						<div className="services-page-content-description">
							{serviceSelected === 'individual' && (
								<p className="services-page-content-text">
									Stay on top of your personal finances with organized records
									and clear reports. We help you track income and expenses,
									manage budgets, and prepare for audits or financial
									applications (loans, mortgages, etc.).
								</p>
							)}
							{serviceSelected === 'business' && (
								<p className="services-page-content-text">
									Accurate books are the foundation of a healthy business. We
									manage day-to-day bookkeeping, reconcile accounts, process
									payroll, and deliver monthly/quarterly financial statements
									that help you stay compliant and informed.
								</p>
							)}
							{serviceSelected === 'specialized' && (
								<p className="services-page-content-text">
									Our specialized accounting solutions cater to industries with
									unique needs—such as real estate, healthcare, professional
									services, and more. We handle niche-specific reporting,
									industry benchmarks, and compliance requirements.
								</p>
							)}
						</div>
					</div>
					<img
						src={BOOKKEEPINGSERVICE}
						alt="Accounting"
						className="services-page-image"
					/>
				</div>
				<div
					className="services-page-content-body"
					style={{ animationDelay: '1300ms' }}>
					<div className="services-page-content-container">
						<div className="services-page-content-header">
							<h3>Advisory and Consulting</h3>
						</div>
						<div className="services-page-content-description">
							{serviceSelected === 'individual' && (
								<p className="services-page-content-text">
									We offer guidance on retirement planning, real estate
									transactions, education savings, and more. Our advisors help
									you make smart financial decisions that align with your short-
									and long-term goals.
								</p>
							)}
							{serviceSelected === 'business' && (
								<p className="services-page-content-text">
									Make strategic decisions with confidence. We assist with
									entity formation, cash flow optimization, budgeting,
									forecasting, and financial strategy development. Our advisory
									services are designed to help your business grow and thrive.
								</p>
							)}
							{serviceSelected === 'specialized' && (
								<p className="services-page-content-text">
									Navigate complex financial situations with an experienced
									partner. We provide strategic planning for trusts & estates,
									multi-state operations, international tax, mergers &
									acquisitions, succession planning, and other high-level
									advisory needs.
								</p>
							)}
						</div>
					</div>
					<img
						src={ADVISORYSERVICE}
						alt="Advisory"
						className="services-page-image"
					/>
				</div>
			</div>
		</div>
	);
};

export default ServicesPage;
