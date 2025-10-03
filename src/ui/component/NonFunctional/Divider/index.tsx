import './Divider.scss';
import LOGO from '../../../../assets/images/logo-plain.png';
const Divider = ({ style = 'logo', text = ' ' }) => {
	return (
		<div className={`divider prevent-select divider--${style}`}>
			<div className="divider__mark">
				{style === 'logo' && (
					<span>
						<img src={LOGO} alt="Logo" />
					</span>
				)}
				{style === 'text' && (
					<>
						<span></span>
						<span>{text}</span>
						<span></span>
					</>
				)}
			</div>
		</div>
	);
};

export default Divider;
