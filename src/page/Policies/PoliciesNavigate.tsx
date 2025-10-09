import { NavLink } from 'react-router-dom';

const PoliciesNavigate = () => {
	return (
		<div className="policy-page__navigation">
			<NavLink to={'/privacy'}>Privacy Policy</NavLink>
			<NavLink to={'/terms'}>Terms of Service</NavLink>
			<NavLink to={'/disclosures'}>Disclosures</NavLink>
			<NavLink to={'/cookies'}>Cookie Policy</NavLink>
		</div>
	);
};

export default PoliciesNavigate;
