import './Divider.scss';
import LOGO from '../../../../assets/images/logo-plain.png';
const Divider = () => {
	return (
		<div className="divider">
			<div className="divider__mark">
                <span>
                    <img src={LOGO} alt="Logo" />
                </span>
            </div>
		</div>
	);
};

export default Divider;
