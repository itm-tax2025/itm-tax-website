import { useNavigate } from 'react-router-dom';
import Button from '../../ui/component/Button';
import Card from '../../ui/component/Card';
import Icon from '../../ui/component/Icon';
import './NotFound.scss';
const NotFound = () => {
	const navigate = useNavigate();
	const handleGoHome = () => {
		navigate('/');
	};
	return (
		<div className="not-found-page">
			<Card className="not-found-page__card">
				<h1 className="not-found-page__title">
					SYSTEM ERROR: UNABLE TO RECONCILE
				</h1>
				<div className="not-found-page__subtitle">
					<h3>
						The requested asset number could not be located in our current
						index. We've flagged this transaction as **404: Record Missing**.
					</h3>
				</div>
				<div className="not-found-page__table-container">
					<table className="not-found-page__table-container__table">
						<thead>
							<tr>
								<th>STATUS</th>
								<th>TRANSACTION HASH</th>
								<th>ACCOUNT CODE</th>
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
							<p>Re-Route to Main Ledger (Homepage)</p>
						</div>
					</Button>
				</div>
				<p className="not-found-page__footer">
					If the problem persists, please check your network connection or
					contact technical support.
				</p>
			</Card>
		</div>
	);
};

export default NotFound;
