import { useNavigate } from 'react-router-dom';
import Button from './../../ui/component/Button';
import Card from './../../ui/component/Card';
import Icon from './../../ui/component/Icon';
import './NotFound.scss';
import { useAppSelector } from '../../store';

const NotFound = () => {
	const navigate = useNavigate();
	const language = useAppSelector((state) => state.theme.language);

	const t =
		language === 'en'
			? {
					title: 'SYSTEM ERROR: UNABLE TO RECONCILE',
					subtitle:
						"The requested asset number could not be located in our current index. We've flagged this transaction as **404: Record Missing**.",
					status: 'STATUS',
					hash: 'TRANSACTION HASH',
					account: 'ACCOUNT CODE',
					button: 'Re-Route to Main Ledger (Homepage)',
					footer:
						'If the problem persists, please check your network connection or contact technical support.',
			  }
			: {
					title: 'LỖI HỆ THỐNG: KHÔNG THỂ ĐỐI SOÁT',
					subtitle:
						'Không tìm thấy mã tài sản được yêu cầu trong chỉ mục hiện tại. Giao dịch này đã được đánh dấu là **404: Không tìm thấy bản ghi**.',
					status: 'TRẠNG THÁI',
					hash: 'MÃ GIAO DỊCH',
					account: 'MÃ TÀI KHOẢN',
					button: 'Điều hướng về Sổ cái chính (Trang chủ)',
					footer:
						'Nếu lỗi vẫn tiếp diễn, vui lòng kiểm tra kết nối mạng hoặc liên hệ bộ phận hỗ trợ kỹ thuật.',
			  };

	const handleGoHome = () => {
		navigate('/');
	};

	return (
		<div className="not-found-page">
			<Card className="not-found-page__card">
				<h1 className="not-found-page__title">{t.title}</h1>

				<div className="not-found-page__subtitle">
					<h3>{t.subtitle}</h3>
				</div>

				<div className="not-found-page__table-container">
					<table className="not-found-page__table-container__table">
						<thead>
							<tr>
								<th>{t.status}</th>
								<th>{t.hash}</th>
								<th>{t.account}</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>200 OK</td>
								<td>TXN-01A9-F2E3-8C45</td>
								<td>P&L:0401</td>
							</tr>
							<tr className="not-found-page__table-container__table__error-row">
								<td>404 EROR</td>
								<td>TXN-01B0-C7D9-A000</td>
								<td>ASSET:404</td>
							</tr>
							<tr>
								<td>200 OK</td>
								<td>TXN-01B1-11A8-77B2</td>
								<td>CAP:0099</td>
							</tr>
							<tr>
								<td>200 OK</td>
								<td>TXN-01B2-55E6-D3F1</td>
								<td>LIAB:1022</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div className="not-found-page__button-container">
					<Button onClick={handleGoHome}>
						<div>
							<Icon name="home" size="large" />
						</div>
						<div>
							<p>{t.button}</p>
						</div>
					</Button>
				</div>

				<p className="not-found-page__footer">{t.footer}</p>
			</Card>
		</div>
	);
};

export default NotFound;
