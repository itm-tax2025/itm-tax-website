import './LandingPage.scss';
import TONY from './../../assets/images/tony-transparent.png';
import IVY from './../../assets/images/ivy-transparent.png';
import Button from '../../ui/component/Button';
import BACKGROUNDVIDEO from './../../assets/images/background.mp4';

const Hero = () => {
	const handleToServices = () => {
		const servicesElement = document.getElementById('services');
		if (servicesElement !== null) {
			window.scrollTo({
				top: servicesElement.offsetTop,
				behavior: 'smooth',
			});
		}
	};

	return (
		<div className="hero">
			<video
				autoPlay
				loop
				muted
				className="hero-video prevent-select"
				style={{ pointerEvents: 'none' }}>
				<source src={BACKGROUNDVIDEO} type="video/mp4"></source>
			</video>
			<div className="hero-image hero-image-left prevent-select">
				<img src={TONY} alt="Tony" />
			</div>
			<div className="hero-text">
				<h1>From Complex to Clear: Your Trusted Tax Partner</h1>
				<p>
					Skip the stress. We handle taxes, books, and payroll so you can focus
					on what matters.
				</p>
				<div className="hero-cta">
					<Button onClick={handleToServices}>
						<p>Explore Our Services</p>
					</Button>
					<Button>
						<p>Schedule a Consultation</p>
					</Button>
				</div>
			</div>
			<div className="hero-image hero-image-right prevent-select">
				<img src={IVY} alt="Ivy" />
			</div>
		</div>
	);
};

export default Hero;
