import Card from '../../ui/component/Card';
import Icon from '../../ui/component/Icon';
import { useInView } from '../../hook/useInView';
import { isMobile } from '../../utils/window';
import Button from '../../ui/component/Button';

const Differences = () => {
	const [ref, isInView] = useInView<HTMLDivElement>({
		once: true,
		threshold: 0.4,
	});

	return (
		<div
			className={`differences-container ${
				isInView ? 'differences--shown' : ''
			} ${isMobile() ? 'differences--mobile' : ''}`}
			ref={ref}>
			<div className="differences-header">
				<h2>What Sets Us Apart</h2>
			</div>
			<div className="differences-cards">
				<Card>
					<Icon name="tax" size="large" />
					<h3> Comprehensive Tax Services</h3>
					<p>
						From personal tax preparation to business filings, IRS
						representation, and strategic tax planning, we offer a full suite of
						services designed to minimize your tax burden and maximize
						compliance.
					</p>
				</Card>
				<Card>
					<Icon name="book-open-reader" size="large" />

					<h3>CPA-Led Firm with Real-World Experience</h3>
					<p>
						Our firm is led by licensed Certified Public Accountant (CPA) with
						years of industry experience. We stay current with ever-changing tax
						laws to ensure your filings are accurate, timely, and optimized.
					</p>
				</Card>
				<Card>
					<Icon name="lightbulb-dollar" size="large" />
					<h3>Tailored Solutions for Every Client</h3>
					<p>
						No two tax situations are the same. We take the time to understand
						your specific goals and challenges—then craft personalized tax
						strategies to match your needs and financial vision.
					</p>
				</Card>
				<Card>
					<Icon name="user-headset" size="large" />
					<h3>Year-Round Support</h3>
					<p>
						Tax needs don’t stop after April. We’re here all year to support
						your tax planning, respond to IRS notices, help with estimated
						payments, and guide you through life or business changes that affect
						your taxes.
					</p>
				</Card>
				<Card>
					<Icon name="meeting" size="large" />
					<h3>Clear Communication, Always</h3>
					<p>
						We believe in transparency, education, and proactive updates. You’ll
						never feel left in the dark when it comes to your taxes—we keep you
						informed every step of the way.
					</p>
				</Card>
			</div>
			<div className="differences-cta">
				<p>
					Experience the ITM difference: responsive, reliable, and rooted in
					your success. Schedule a consultation today and let’s build a smarter
					tax strategy—together.
				</p>
				<Button>Schedule a Call for a Free Consultation</Button>
			</div>
		</div>
	);
};

export default Differences;
