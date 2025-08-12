import Button from '../../ui/component/Button';
import TAXPREP from '../../assets/images/individual-tax.png';
import BOOKKEEPING from '../../assets/images/bookkeeping.png';
import CONSULTING from '../../assets/images/consulting.png';
import { useInView } from '../../hook/useInView';
import { useNavigate } from 'react-router-dom';
import { isMobile } from '../../utils/window';
const Services: React.FC = () => {
	const navigate = useNavigate();
	const [ref, isInView] = useInView<HTMLDivElement>({
		once: true,
		threshold: 0.3,
	});
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		navigate(`/services`);
	};
	return (
		<div
			id="services"
			className={`itm-services ${isInView ? 'itm-services--shown' : ''} ${
				isMobile() ? 'itm-services--mobile' : ''
			}`}
			ref={ref}>
			<div className="itm-services-header">
				<h2>
					<span>
						<p>Our</p>
					</span>
					<span>
						<p>Services</p>
					</span>
				</h2>
				<p className="itm-services-subtitle">
					Our Services At ITM, we provide comprehensive tax and accounting
					solutions tailored to individuals, small businesses, and
					entrepreneurs. Our mission is to simplify your finances, ensure
					compliance, and maximize your financial potential year-round.
				</p>
			</div>
			<div className="itm-services-content">
				<div className="itm-services-item">
					<h3>Tax Preparation and Planning</h3>
					<p>
						We help you stay compliant with tax laws while minimizing your
						liability through personalized strategies, proactive planning, and
						year-round support designed to align with your financial goals.
					</p>
					<div className="itm-services-cta">
						<Button onClick={handleClick}>Learn More</Button>
					</div>
					<img src={TAXPREP} alt="Tax Preparation" />
				</div>
				<div className="itm-services-item">
					<h3>Accounting and Bookkeeping</h3>
					<p>
						To keep your business financially healthy, we maintain accurate
						records, manage cash flow, and deliver clear monthly, quarterly, and
						annual financial statements—making it easier to track performance
						and prepare for audits.
					</p>
					<div className="itm-services-cta">
						<Button onClick={handleClick}>Learn More</Button>
					</div>
					<img src={BOOKKEEPING} alt="Bookkeeping" />
				</div>
				<div className="itm-services-item">
					<h3>Advisory and Consulting</h3>
					<p>
						When it comes to big decisions, we offer expert guidance on
						financial strategy, business growth, and compliance. Our consulting
						approach is hands-on and tailored to fit your unique needs every
						step of the way.
					</p>
					<div className="itm-services-cta">
						<Button onClick={handleClick}>Learn More</Button>
					</div>
					<img src={CONSULTING} alt="Consulting" />
				</div>
			</div>
			<div className="itm-services-footer">
				<p>
					Contact us today to learn how ITM can help you with your tax and
					accounting needs.
				</p>
				<div className="itm-services-footer-cta">
					<Button>Get in Touch</Button>
				</div>
			</div>
		</div>
	);
};

export default Services;
