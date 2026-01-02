import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../store';

const PoliciesNavigate = () => {
	const language = useAppSelector((state) => state.theme.language);

	const t =
		language === 'en'
			? {
					privacy: 'Privacy Policy',
					terms: 'Terms of Service',
					disclosures: 'Disclosures',
					cookies: 'Cookie Policy',
			  }
			: {
					privacy: 'Chính sách bảo mật',
					terms: 'Điều khoản dịch vụ',
					disclosures: 'Công bố thông tin',
					cookies: 'Chính sách Cookie',
			  };

	return (
		<div className="policy-page__navigation">
			<NavLink to="/privacy">{t.privacy}</NavLink>
			<NavLink to="/terms">{t.terms}</NavLink>
			<NavLink to="/disclosures">{t.disclosures}</NavLink>
			<NavLink to="/cookies">{t.cookies}</NavLink>
		</div>
	);
};

export default PoliciesNavigate;
