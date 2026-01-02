import PoliciesNavigate from '../Policies/PoliciesNavigate';
import { POLICIES } from '../../utils/constant';
import '../Policies/Policies.scss';
import { useAppSelector } from '../../store';

const Disclosures = () => {
	const language = useAppSelector((state) => state.theme.language);
	const t = (en: string, vi: string) => (language === 'en' ? en : vi);

	return (
		<div className="policy-page policy-page--disclosures">
			<div className="policy-page__header">
				<div>
					<h1>{t('Disclosures', 'Công Bố Thông Tin')}</h1>
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
					<h2>
						{t(
							'General Information Only; No Reliance',
							'Chỉ Mang Tính Thông Tin Chung; Không Dựa Vào'
						)}
					</h2>
					<p>
						{t(
							'Articles, calculators, newsletters, and other content on this Site are for informational purposes and not a substitute for personalized advice. Do not rely on them to make decisions without consulting a qualified professional who has reviewed your facts.',
							'Bài viết, công cụ tính toán, bản tin và các nội dung khác trên trang này chỉ nhằm mục đích cung cấp thông tin và không thay thế cho tư vấn cá nhân hóa. Không nên dựa vào các nội dung này để đưa ra quyết định nếu chưa tham khảo ý kiến của chuyên gia đủ điều kiện đã xem xét thông tin/thực tế của bạn.'
						)}
					</p>
				</div>

				<div className="policy-page__content__section">
					<h2>
						{t(
							'Tax-Preparer Disclosure & Consent (IRC §7216)',
							'Tiết Lộ & Chấp Thuận của Người Chuẩn Bị Thuế (IRC §7216)'
						)}
					</h2>
					<p>
						{t(
							'We will not use or disclose your tax return information for purposes not necessary to prepare or file your return without your written consent that meets IRS requirements. We will present separate consent forms when required. IRS',
							'Chúng tôi sẽ không sử dụng hoặc tiết lộ thông tin tờ khai thuế của bạn cho các mục đích không cần thiết để chuẩn bị hoặc nộp tờ khai, nếu không có sự đồng ý bằng văn bản của bạn đáp ứng yêu cầu của IRS. Khi cần, chúng tôi sẽ cung cấp các mẫu chấp thuận riêng. IRS'
						)}
					</p>
				</div>

				<div className="policy-page__content__section">
					<h2>
						{t(
							'Circular 230/Tax Advice Caution',
							'Lưu Ý về Circular 230/Tư Vấn Thuế'
						)}
					</h2>
					<p>
						{t(
							'Unless explicitly stated in a signed engagement letter or written advice labeled as such, Site content is not written tax advice and may not be used to avoid penalties under the Internal Revenue Code.',
							'Trừ khi được nêu rõ trong thư/hợp đồng dịch vụ đã ký hoặc văn bản tư vấn được ghi rõ là “tư vấn thuế”, nội dung trên trang này không phải là tư vấn thuế bằng văn bản và không được sử dụng để tránh các khoản phạt theo Bộ luật Thuế Nội địa (Internal Revenue Code).'
						)}
					</p>
				</div>

				<div className="policy-page__content__section">
					<h2>{t('Testimonials; Past Results', 'Lời Chứng Thực; Kết Quả Trong Quá Khứ')}</h2>
					<p>
						{t(
							'Client stories or testimonials reflect individual experiences; results vary. No outcome is guaranteed.',
							'Câu chuyện hoặc lời chứng thực của khách hàng phản ánh trải nghiệm cá nhân; kết quả có thể khác nhau. Không có kết quả nào được đảm bảo.'
						)}
					</p>
				</div>

				<div className="policy-page__content__section">
					<h2>{t('Third-Party Tools & Links', 'Công Cụ & Liên Kết Bên Thứ Ba')}</h2>
					<p>
						{t(
							'We may reference or link to third-party resources. We do not control or endorse them and are not responsible for their content, policies, or security.',
							'Chúng tôi có thể đề cập hoặc liên kết đến các nguồn của bên thứ ba. Chúng tôi không kiểm soát hoặc xác nhận các nguồn này và không chịu trách nhiệm về nội dung, chính sách hoặc bảo mật của họ.'
						)}
					</p>
				</div>

				<div className="policy-page__content__section">
					<h2>
						{t(
							'Advertising/Affiliates (if applicable)',
							'Quảng Cáo/Liên Kết Tiếp Thị (nếu áp dụng)'
						)}
					</h2>
					<p>
						{t(
							'If we receive compensation from a third party or provide affiliate links, we will disclose that relationship near the relevant content or link.',
							'Nếu chúng tôi nhận thù lao từ bên thứ ba hoặc cung cấp liên kết tiếp thị (affiliate), chúng tôi sẽ công bố mối quan hệ đó gần nội dung hoặc liên kết liên quan.'
						)}
					</p>
				</div>

				<div className="policy-page__content__section">
					<h2>{t('Electronic Communications', 'Liên Lạc Điện Tử')}</h2>
					<p>
						{t(
							'By providing a phone number or email, you consent to receive service-related messages. Marketing messages will be sent only with appropriate consent and include opt-out instructions (e.g., reply STOP to SMS). Message/data rates may apply.',
							'Khi cung cấp số điện thoại hoặc email, bạn đồng ý nhận các tin nhắn liên quan đến dịch vụ. Tin nhắn tiếp thị chỉ được gửi khi có sự đồng ý phù hợp và sẽ bao gồm hướng dẫn hủy nhận (ví dụ: trả lời STOP đối với SMS). Có thể áp dụng phí tin nhắn/dữ liệu.'
						)}
					</p>
				</div>

				<div className="policy-page__content__section">
					<h2>{t('Recordkeeping and Retention', 'Lưu Trữ Hồ Sơ và Thời Hạn Lưu Trữ')}</h2>
					<p>
						{t(
							'We keep engagement and tax records for periods required by law/professional standards, then delete or archive them securely.',
							'Chúng tôi lưu giữ hồ sơ dịch vụ và hồ sơ thuế trong thời gian theo yêu cầu của pháp luật/tiêu chuẩn nghề nghiệp, sau đó xóa hoặc lưu trữ an toàn.'
						)}
					</p>
				</div>

				<div className="policy-page__content__section">
					<h2>
						{t(
							'State-Specific Privacy Rights',
							'Quyền Riêng Tư Theo Từng Tiểu Bang'
						)}
					</h2>
					<p>
						{t(
							`Texas residents have rights under the Texas Data Privacy and Security Act (Texas Business & Commerce Code, Chapter 541) and can exercise them via [${POLICIES.EMAIL}], [${POLICIES.PHONE}], or a recognized universal opt-out mechanism (if applicable). Office of the Texas Attorney General.`,
							`Cư dân Texas có các quyền theo Đạo luật Bảo mật và An ninh Dữ liệu Texas (Texas Business & Commerce Code, Chương 541) và có thể thực hiện các quyền đó qua [${POLICIES.EMAIL}], [${POLICIES.PHONE}] hoặc một cơ chế từ chối phổ quát được công nhận (nếu áp dụng). Văn phòng Tổng Chưởng lý Texas.`
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

export default Disclosures;
