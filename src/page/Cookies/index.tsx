import PoliciesNavigate from '../Policies/PoliciesNavigate';
import { POLICIES } from '../../utils/constant';
import '../Policies/Policies.scss';
import { useAppSelector } from '../../store';

const Cookies = () => {
	const language = useAppSelector((state) => state.theme.language);
	const t = (en: string, vi: string) => (language === 'en' ? en : vi);

	return (
		<div className="policy-page policy-page--cookies">
			<div className="policy-page__header">
				<div>
					<h1>{t('Cookies Policy', 'Chính Sách Cookie')}</h1>
				</div>
				<div>
					<p>
						{t('Last updated:', 'Cập nhật lần cuối:')} {POLICIES.LAST_UPDATED}
					</p>
				</div>
			</div>

			<PoliciesNavigate />

			<div className="policy-page__content">
				<div className="policy-page__content__section">
					<h2>{t('Who We Are', 'Chúng Tôi Là Ai')}</h2>
					<p>
						{t(
							'ITM Tax and Advisory, LLC ("ITM," "we," "our," "us") provides tax preparation, planning, and advisory services.',
							'ITM Tax and Advisory, LLC ("ITM", "chúng tôi", "của chúng tôi") cung cấp dịch vụ chuẩn bị thuế, lập kế hoạch thuế và tư vấn.'
						)}{' '}
						{t('Contact:', 'Liên hệ:')} [{POLICIES.ADDRESS}], [{POLICIES.EMAIL}], [
						{POLICIES.PHONE}].
					</p>
				</div>

				<div className="policy-page__content__section">
					<h2>{t('What Are Cookies?', 'Cookie Là Gì?')}</h2>
					<p>
						{t(
							'Cookies and similar technologies (pixels, local storage, SDKs) are small files placed on your device that help operate, protect, and improve our Site.',
							'Cookie và các công nghệ tương tự (pixel, bộ nhớ cục bộ, SDK) là các tệp nhỏ được lưu trên thiết bị của bạn nhằm giúp vận hành, bảo vệ và cải thiện trang web của chúng tôi.'
						)}
					</p>
				</div>

				<div className="policy-page__content__section">
					<h2>{t('How We Use Cookies', 'Cách Chúng Tôi Sử Dụng Cookie')}</h2>
					<h4>
						{t(
							'We use information to:',
							'Chúng tôi sử dụng thông tin để:'
						)}
					</h4>
					<ul>
						<li>
							<strong>
								{t('Strictly Necessary:', 'Cần Thiết Tuyệt Đối:')}
							</strong>{' '}
							{t(
								'site security, session management, forms, authentication.',
								'bảo mật trang, quản lý phiên, biểu mẫu, xác thực.'
							)}
						</li>
						<li>
							<strong>{t('Preferences:', 'Tùy Chọn:')}</strong>{' '}
							{t('remember settings (e.g., locale).', 'ghi nhớ cài đặt (ví dụ: ngôn ngữ/khu vực).')}{' '}
							<strong>{t('Analytics:', 'Phân Tích:')}</strong>{' '}
							{t('understand', 'hiểu')}
						</li>
						<li>
							<strong>
								{t('Traffic and Performance:', 'Lưu Lượng & Hiệu Suất:')}
							</strong>{' '}
							{t(
								'analyze site usage (e.g., page views, browser type).',
								'phân tích việc sử dụng trang (ví dụ: lượt xem trang, loại trình duyệt).'
							)}
						</li>
						<li>
							<strong>
								{t('Security/Fraud Prevention:', 'Bảo Mật/Ngăn Chặn Gian Lận:')}
							</strong>{' '}
							{t('detect irregular activity. (Optional)', 'phát hiện hoạt động bất thường. (Tùy chọn)')}
						</li>
						<li>
							<strong>
								{t('Advertising/Retargeting:', 'Quảng Cáo/Remarketing:')}
							</strong>{' '}
							{t(
								'only if enabled and with required consent.',
								'chỉ khi được bật và có sự đồng ý theo yêu cầu.'
							)}
						</li>
					</ul>
				</div>

				<div className="policy-page__content__section">
					<h2>
						{t(
							'Third-Party Cookies We May Use',
							'Cookie Bên Thứ Ba Chúng Tôi Có Thể Sử Dụng'
						)}
					</h2>
					<ul>
						<li>
							<strong>{t('Analytics:', 'Phân Tích:')}</strong>
							<p>
								{t(
									'[e.g., Google Analytics], to analyze usage and improve the Site.',
									'[ví dụ: Google Analytics], để phân tích mức độ sử dụng và cải thiện trang web.'
								)}
							</p>
						</li>
						<li>
							<strong>
								{t('Performance/Infrastructure:', 'Hiệu Suất/Hạ Tầng:')}
							</strong>
							<p>{t('[e.g., CDN, DDoS protection].', '[ví dụ: CDN, bảo vệ DDoS].')}</p>
						</li>
						<li>
							<strong>{t('Functional:', 'Chức Năng:')}</strong>
							<p>
								{t(
									'[e.g., e-signature widget, scheduling tool].',
									'[ví dụ: tiện ích ký điện tử, công cụ đặt lịch].'
								)}
							</p>
						</li>
					</ul>
					<p>
						{t(
							'We contractually require providers to protect data and use it only for our purposes, but their practices are also governed by their own policies.',
							'Chúng tôi yêu cầu nhà cung cấp theo hợp đồng phải bảo vệ dữ liệu và chỉ sử dụng dữ liệu cho mục đích của chúng tôi; tuy nhiên, thực tiễn của họ cũng chịu sự điều chỉnh bởi chính sách riêng của họ.'
						)}
					</p>
				</div>

				<div className="policy-page__content__section">
					<h2>{t('Your Choices', 'Lựa Chọn Của Bạn')}</h2>
					<ul>
						<li>
							<strong>{t('Consent Banner:', 'Banner Đồng Ý:')}</strong>{' '}
							{t(
								'In regions where required, we won’t set non-essential cookies until you give consent. You can withdraw consent any time via [link to cookie settings modal].',
								'Tại những khu vực pháp luật yêu cầu, chúng tôi sẽ không đặt cookie không thiết yếu cho đến khi bạn đồng ý. Bạn có thể rút lại sự đồng ý bất cứ lúc nào thông qua [liên kết đến cửa sổ cài đặt cookie].'
							)}
						</li>
						<li>
							<strong>{t('Browser Controls:', 'Cài Đặt Trình Duyệt:')}</strong>{' '}
							{t(
								'You can block/delete cookies in your browser settings; doing so may impact Site functionality.',
								'Bạn có thể chặn/xóa cookie trong cài đặt trình duyệt; việc này có thể ảnh hưởng đến chức năng của trang web.'
							)}
						</li>
						<li>
							<strong>
								{t('Global Privacy Control (GPC):', 'Global Privacy Control (GPC):')}
							</strong>{' '}
							{t(
								'Where required, we honor a valid GPC signal as an opt-out of sale/sharing under state law.',
								'Khi được yêu cầu, chúng tôi tôn trọng tín hiệu GPC hợp lệ như một yêu cầu từ chối việc bán/chia sẻ theo luật tiểu bang.'
							)}
						</li>
						<li>
							<strong>{t('Analytics Opt-Out:', 'Từ Chối Phân Tích:')}</strong>{' '}
							{t(
								'If using Google Analytics, consider enabling IP masking and offering opt-out mechanisms.',
								'Nếu sử dụng Google Analytics, hãy cân nhắc bật ẩn IP và cung cấp cơ chế từ chối.'
							)}
						</li>
					</ul>
				</div>

				<div className="policy-page__content__section">
					<h2>
						{t(
							'Data Collected via Cookies',
							'Dữ Liệu Được Thu Thập Qua Cookie'
						)}
					</h2>
					<p>
						{t(
							'Device identifiers, IP address, usage data, and approximate location (derived from IP). We do not use cookies to collect sensitive tax return information.',
							'Định danh thiết bị, địa chỉ IP, dữ liệu sử dụng và vị trí gần đúng (suy ra từ IP). Chúng tôi không sử dụng cookie để thu thập thông tin tờ khai thuế nhạy cảm.'
						)}
					</p>
				</div>

				<div className="policy-page__content__section">
					<h2>{t('Retention', 'Thời Gian Lưu Trữ')}</h2>
					<p>
						{t(
							'Cookies remain until they expire or you delete them. Session cookies expire when you close the browser; persistent cookies last from 24 hours up to 24 months (adjust based on actual tools).',
							'Cookie sẽ tồn tại cho đến khi hết hạn hoặc bạn xóa chúng. Cookie phiên sẽ hết hạn khi bạn đóng trình duyệt; cookie lưu lâu có thể tồn tại từ 24 giờ đến 24 tháng (điều chỉnh theo công cụ thực tế sử dụng).'
						)}
					</p>
				</div>

				<div className="policy-page__content__section">
					<h2>{t('Changes', 'Thay Đổi')}</h2>
					<p>
						{t(
							'We may update this Cookie Policy and our cookie list from time to time. Material changes will be highlighted in the banner or on this page.',
							'Chúng tôi có thể cập nhật Chính sách Cookie này và danh sách cookie theo thời gian. Những thay đổi quan trọng sẽ được thông báo nổi bật trên banner hoặc trên trang này.'
						)}
					</p>
				</div>
			</div>

			<div className="policy-page__footer">
				<h2>{t('How to Contact Us', 'Cách Liên Hệ Với Chúng Tôi')}</h2>
				<p>
					{t('Questions or requests:', 'Câu hỏi hoặc yêu cầu:')} [{POLICIES.EMAIL}]
					{' | '}[{POLICIES.PHONE}]
					{' | '}[{POLICIES.ADDRESS}].
				</p>
			</div>

			<div
				className="policy-page__back-to-top"
				onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
			>
				{t('Back to Top', 'Lên Đầu Trang')}
			</div>
		</div>
	);
};

export default Cookies;
