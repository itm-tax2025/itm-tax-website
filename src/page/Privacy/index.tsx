import PoliciesNavigate from '../Policies/PoliciesNavigate';
import { POLICIES } from '../../utils/constant';
import '../Policies/Policies.scss';
import { useAppSelector } from '../../store';

const Privacy = () => {
	const language = useAppSelector((state) => state.theme.language);
	const t = (en: string, vi: string) => (language === 'en' ? en : vi);

	return (
		<div className="policy-page policy-page--privacy">
			<div className="policy-page__header">
				<div>
					<h1>{t('Privacy Policy', 'Chính sách quyền riêng tư')}</h1>
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
					<h2>{t('Who We Are', 'Chúng tôi là ai')}</h2>
					<p>
						{t(
							'ITM Tax and Advisory, LLC ("ITM," "we," "our," "us") provides tax preparation, planning, and advisory services.',
							'ITM Tax and Advisory, LLC ("ITM", "chúng tôi", "của chúng tôi") cung cấp dịch vụ chuẩn bị thuế, lập kế hoạch thuế và tư vấn.'
						)}{' '}
						{t('Contact:', 'Liên hệ:')} [{POLICIES.ADDRESS}], [{POLICIES.EMAIL}],
						[{POLICIES.PHONE}].
					</p>
				</div>

				<div className="policy-page__content__section">
					<h2>
						{t(
							'Personal Information We Collect',
							'Thông tin cá nhân chúng tôi thu thập'
						)}
					</h2>
					<div className="policy-page__content__section__subsection">
						<ul>
							<li>
								<strong>{t('Identifiers:', 'Thông tin định danh:')}</strong>{' '}
								{t(
									'name, mailing address, email, phone, SSN (when necessary for tax matters), government IDs.',
									'họ tên, địa chỉ nhận thư, email, số điện thoại, SSN (khi cần cho vấn đề thuế), giấy tờ tùy thân do chính phủ cấp.'
								)}
							</li>
							<li>
								<strong>
									{t('Financial/Tax Information:', 'Thông tin tài chính/thuế:')}
								</strong>{' '}
								{t(
									'income, deductions, W-2/1099 data, bank and account details for refunds/payments.',
									'thu nhập, khoản khấu trừ, dữ liệu W-2/1099, thông tin ngân hàng và tài khoản để hoàn tiền/thanh toán.'
								)}
							</li>
							<li>
								<strong>
									{t(
										'Commercial/Transactional Data:',
										'Dữ liệu thương mại/giao dịch:'
									)}
								</strong>{' '}
								{t(
									'engagement letters, invoices, payment records.',
									'thư/hợp đồng dịch vụ, hóa đơn, hồ sơ thanh toán.'
								)}
							</li>
							<li>
								<strong>
									{t('Internet/Technical Data:', 'Dữ liệu internet/kỹ thuật:')}
								</strong>{' '}
								{t(
									'IP address, device/browser data, pages viewed, cookies/analytics information.',
									'địa chỉ IP, dữ liệu thiết bị/trình duyệt, trang đã xem, cookie/thông tin phân tích.'
								)}
							</li>
							<li>
								<strong>
									{t(
										'Professional/Employment/Education Data:',
										'Dữ liệu nghề nghiệp/việc làm/học vấn:'
									)}
								</strong>{' '}
								{t(
									'as relevant to tax filings.',
									'khi có liên quan đến hồ sơ khai thuế.'
								)}
							</li>
							<li>
								<strong>{t('Sensitive Data:', 'Dữ liệu nhạy cảm:')}</strong>{' '}
								{t(
									'SSN, account numbers, and other data used solely as necessary to perform tax and advisory services and as permitted by law.',
									'SSN, số tài khoản và các dữ liệu khác chỉ được sử dụng khi cần thiết để thực hiện dịch vụ thuế và tư vấn, và theo phạm vi pháp luật cho phép.'
								)}
							</li>
							<li>
								<strong>
									{t('Inferences/Preferences:', 'Suy luận/Sở thích:')}
								</strong>{' '}
								{t(
									'service interests you indicate.',
									'những mối quan tâm về dịch vụ mà bạn thể hiện.'
								)}
							</li>
							<li>
								<strong>{t('Sources:', 'Nguồn:')}</strong>{' '}
								{t(
									'you, your representatives/employer/payors, tax authorities, publicly available sources, service providers (e.g., e-signature, secure file-share, payment processors), and analytics partners.',
									'bạn, đại diện/người sử dụng lao động/đơn vị chi trả của bạn, cơ quan thuế, nguồn công khai, nhà cung cấp dịch vụ (ví dụ: ký điện tử, chia sẻ tệp bảo mật, bộ xử lý thanh toán) và đối tác phân tích.'
								)}
							</li>
						</ul>
					</div>
				</div>

				<div className="policy-page__content__section">
					<h2>
						{t(
							'How We Use Personal Information',
							'Cách chúng tôi sử dụng thông tin cá nhân'
						)}
					</h2>
					<h4>{t('We use information to:', 'Chúng tôi sử dụng thông tin để:')}</h4>
					<ul>
						<li>
							{t(
								'provide, maintain, and secure our Services;',
								'cung cấp, duy trì và bảo mật các Dịch vụ;'
							)}
						</li>
						<li>
							{t(
								'prepare and file tax returns, perform advisory engagements, and communicate with you;',
								'chuẩn bị và nộp tờ khai thuế, thực hiện dịch vụ tư vấn và liên hệ với bạn;'
							)}
						</li>
						<li>
							{t('verify identity and prevent fraud;', 'xác minh danh tính và ngăn chặn gian lận;')}
						</li>
						<li>
							{t('process payments and manage accounts;', 'xử lý thanh toán và quản lý tài khoản;')}
						</li>
						<li>
							{t('meet legal, regulatory, audit, and risk obligations;', 'đáp ứng nghĩa vụ pháp lý, quy định, kiểm toán và quản trị rủi ro;')}
						</li>
						<li>
							{t('analyze site performance and improve the Services;', 'phân tích hiệu suất trang và cải thiện Dịch vụ;')}
						</li>
						<li>
							{t(
								'send service-related notices; marketing only with appropriate consent.',
								'gửi thông báo liên quan đến dịch vụ; chỉ tiếp thị khi có sự đồng ý phù hợp.'
							)}
						</li>
					</ul>
				</div>

				<div className="policy-page__content__section">
					<h2>
						{t(
							'Our Regulatory Commitments (Financial Privacy & Tax Preparer Rules)',
							'Cam kết tuân thủ (Quy định về quyền riêng tư tài chính & quy tắc của người chuẩn bị thuế)'
						)}
					</h2>
					<ul>
						<li>
							{t(
								'We maintain a written information security program commensurate with our size/activities and consistent with the FTC’s Safeguards Rule (16 C.F.R. Part 314) for non-bank financial institutions. That Rule covers, among others, tax preparation firms and requires administrative, technical, and physical safeguards. Federal Trade Commission',
								'Chúng tôi duy trì chương trình bảo mật thông tin bằng văn bản phù hợp với quy mô/hoạt động của mình và phù hợp với Quy tắc Safeguards của FTC (16 C.F.R. Phần 314) dành cho các tổ chức tài chính không phải ngân hàng. Quy tắc này bao gồm (trong số các đối tượng khác) các công ty chuẩn bị thuế và yêu cầu các biện pháp bảo vệ về hành chính, kỹ thuật và vật lý. Ủy ban Thương mại Liên bang (FTC)'
							)}
						</li>{' '}
						<li>
							{t(
								'We do not share personal information with non-affiliated third parties except as necessary to provide our Services or as permitted by law. For example, we share information with service providers (e.g., secure file-share, e-signature, payment processors) and as required by law (e.g., tax authorities). IRS',
								'Chúng tôi không chia sẻ thông tin cá nhân với bên thứ ba không liên kết, trừ khi cần thiết để cung cấp Dịch vụ hoặc được pháp luật cho phép. Ví dụ, chúng tôi chia sẻ thông tin với nhà cung cấp dịch vụ (ví dụ: chia sẻ tệp bảo mật, ký điện tử, bộ xử lý thanh toán) và theo yêu cầu pháp luật (ví dụ: cơ quan thuế). Sở Thuế vụ (IRS)'
							)}
						</li>
						<li>
							{t(
								'We restrict access to personal information to employees, contractors, and agents who need it to provide our Services and who are subject to confidentiality obligations.',
								'Chúng tôi hạn chế quyền truy cập thông tin cá nhân đối với nhân viên, nhà thầu và đại diện chỉ khi họ cần để cung cấp Dịch vụ và phải tuân thủ nghĩa vụ bảo mật.'
							)}
						</li>
					</ul>
				</div>

				<div className="policy-page__content__section">
					<h2>
						{t(
							'Disclosure of Personal Information',
							'Tiết lộ thông tin cá nhân'
						)}
					</h2>
					<h4>
						{t(
							'We disclose personal information to:',
							'Chúng tôi tiết lộ thông tin cá nhân cho:'
						)}
					</h4>
					<ul>
						<li>
							<strong>
								{t('Service providers/Processors:', 'Nhà cung cấp dịch vụ/Bộ xử lý:')}
							</strong>
							<p>
								{t(
									'secure IT hosting, e-signature, client portal, analytics, email, and payment processors—bound by contract to use data only to provide services to us.',
									'lưu trữ CNTT bảo mật, ký điện tử, cổng thông tin khách hàng, phân tích, email và bộ xử lý thanh toán—bị ràng buộc theo hợp đồng chỉ sử dụng dữ liệu để cung cấp dịch vụ cho chúng tôi.'
								)}
							</p>
						</li>
						<li>
							<strong>
								{t(
									'Professional collaborators, with your direction/consent:',
									'Cộng tác viên chuyên môn, theo chỉ đạo/đồng ý của bạn:'
								)}
							</strong>
							<p>
								{t(
									'e.g., your attorney, financial advisor, or another preparer assisting with your engagement.',
									'ví dụ: luật sư, cố vấn tài chính của bạn, hoặc người chuẩn bị thuế khác hỗ trợ cho dịch vụ của bạn.'
								)}
							</p>
						</li>
						<li>
							<strong>
								{t(
									'Tax/Fiscal/Regulatory authorities and auditors:',
									'Cơ quan thuế/tài chính/cơ quan quản lý và kiểm toán viên:'
								)}
							</strong>
							<p>{t('as required by law.', 'theo yêu cầu pháp luật.')}</p>
						</li>
						<li>
							<strong>{t('Business transfers:', 'Chuyển giao doanh nghiệp:')}</strong>
							<p>
								{t(
									'due diligence and transfer in a merger, sale, financing, or acquisition.',
									'thẩm định và chuyển giao trong trường hợp sáp nhập, bán, tài trợ hoặc mua lại.'
								)}
							</p>
						</li>
						<li>
							<strong>{t('Legal/Compliance:', 'Pháp lý/Tuân thủ:')}</strong>
							<p>
								{t(
									'to protect rights, safety, and security; to detect/prevent fraud; to comply with subpoenas or legal process.',
									'để bảo vệ quyền lợi, an toàn và bảo mật; phát hiện/ngăn chặn gian lận; tuân thủ trát đòi hoặc thủ tục pháp lý.'
								)}
							</p>
						</li>
					</ul>

					<h4>
						{t(
							'Selling or “Sharing” Personal Information for Cross-Context Behavioral Advertising:',
							'Bán hoặc “Chia sẻ” thông tin cá nhân cho quảng cáo hành vi đa ngữ cảnh:'
						)}
					</h4>
					<p>
						{t(
							'We do not sell personal data or process it for targeted advertising, as those terms are defined under the Texas Data Privacy and Security Act (Texas Business & Commerce Code, Chapter 541). If this changes, we will update this Policy and provide the opt-out mechanisms required by Texas law. Oversight and enforcement are handled by the Office of the Texas Attorney General.',
							'Chúng tôi không bán dữ liệu cá nhân hoặc xử lý dữ liệu cho quảng cáo nhắm mục tiêu, theo định nghĩa của các thuật ngữ này trong Đạo luật Bảo mật và An ninh Dữ liệu Texas (Texas Business & Commerce Code, Chương 541). Nếu điều này thay đổi, chúng tôi sẽ cập nhật Chính sách này và cung cấp cơ chế từ chối theo yêu cầu của luật Texas. Việc giám sát và thực thi do Văn phòng Tổng Chưởng lý Texas phụ trách.'
						)}
					</p>
				</div>

				<div className="policy-page__content__section">
					<h2>{t('Data Retention', 'Lưu trữ dữ liệu')}</h2>
					<p>
						{t(
							'We retain records only as long as necessary for the purposes described or as required by law and professional standards (often 3–7+ years for tax records, subject to applicable law), after which we securely delete or anonymize them.',
							'Chúng tôi chỉ lưu giữ hồ sơ trong thời gian cần thiết cho các mục đích đã nêu hoặc theo yêu cầu của pháp luật và tiêu chuẩn nghề nghiệp (thường 3–7+ năm đối với hồ sơ thuế, tùy theo luật áp dụng), sau đó chúng tôi sẽ xóa an toàn hoặc ẩn danh dữ liệu.'
						)}
					</p>
				</div>

				<div className="policy-page__content__section">
					<h2>{t('Security', 'Bảo mật')}</h2>
					<p>
						{t(
							'We implement administrative, technical, and physical safeguards—including access controls, encryption in transit (and at rest where feasible), employee training, vendor oversight, and incident response—consistent with the FTC Safeguards Rule. No system is 100% secure, and we cannot guarantee absolute security. Federal Trade Commission',
							'Chúng tôi áp dụng các biện pháp bảo vệ về hành chính, kỹ thuật và vật lý—bao gồm kiểm soát truy cập, mã hóa khi truyền (và khi lưu trữ nếu khả thi), đào tạo nhân viên, giám sát nhà cung cấp và quy trình ứng phó sự cố—phù hợp với Quy tắc Safeguards của FTC. Không có hệ thống nào an toàn 100% và chúng tôi không thể đảm bảo an toàn tuyệt đối. Ủy ban Thương mại Liên bang (FTC)'
						)}
					</p>
				</div>

				<div className="policy-page__content__section">
					<h2>
						{t(
							'Your Privacy Choices and Rights',
							'Quyền và lựa chọn về quyền riêng tư'
						)}
					</h2>
					<p>
						{t(
							'Texas Residents (TDPSA). Under the Texas Data Privacy and Security Act (Texas Business & Commerce Code, Chapter 541), you may have the right to: confirm whether we process your personal data; access it; correct inaccuracies; delete it; obtain a portable copy (where technically feasible); and opt out of targeted advertising, the sale of personal data, and certain profiling that produces legal or similarly significant effects. To exercise rights, email [Email] or call [Phone]. You may also send an authorized agent—or use a browser or device setting/extension that transmits a universal opt-out signal; we will honor valid signals after verifying your request. We will verify your identity and respond within 45 days (we may extend once by 45 days when reasonably necessary). Oversight and enforcement are handled by the Office of the Texas Attorney General.',
							'Cư dân Texas (TDPSA). Theo Đạo luật Bảo mật và An ninh Dữ liệu Texas (Texas Business & Commerce Code, Chương 541), bạn có thể có các quyền sau: xác nhận liệu chúng tôi có xử lý dữ liệu cá nhân của bạn hay không; truy cập dữ liệu; chỉnh sửa sai sót; xóa dữ liệu; nhận bản sao có thể chuyển giao (khi khả thi về mặt kỹ thuật); và từ chối quảng cáo nhắm mục tiêu, việc bán dữ liệu cá nhân và một số hoạt động lập hồ sơ tạo ra tác động pháp lý hoặc tác động quan trọng tương tự. Để thực hiện quyền, hãy email [Email] hoặc gọi [Phone]. Bạn cũng có thể ủy quyền cho một đại diện—hoặc dùng cài đặt/tiện ích trình duyệt hay thiết bị gửi tín hiệu từ chối phổ quát; chúng tôi sẽ tôn trọng tín hiệu hợp lệ sau khi xác minh yêu cầu. Chúng tôi sẽ xác minh danh tính và phản hồi trong vòng 45 ngày (có thể gia hạn một lần thêm 45 ngày khi cần thiết hợp lý). Việc giám sát và thực thi do Văn phòng Tổng Chưởng lý Texas phụ trách.'
						)}
					</p>
				</div>

				<div className="policy-page__content__section">
					<h2>{t('Children', 'Trẻ em')}</h2>
					<p>
						{t(
							'Our Services are not directed to children under 13 (or under 16 in the EEA/UK). We do not knowingly collect such data. If we learn we have done so, we will delete it.',
							'Dịch vụ của chúng tôi không hướng đến trẻ em dưới 13 tuổi (hoặc dưới 16 tuổi tại EEA/UK). Chúng tôi không cố ý thu thập dữ liệu như vậy. Nếu phát hiện đã thu thập, chúng tôi sẽ xóa dữ liệu.'
						)}
					</p>
				</div>

				<div className="policy-page__content__section">
					<h2>{t('International Transfers', 'Chuyển dữ liệu quốc tế')}</h2>
					<p>
						{t(
							'If we transfer personal information outside your country (e.g., to U.S. systems or vendors), we will use lawful transfer mechanisms as required.',
							'Nếu chúng tôi chuyển thông tin cá nhân ra ngoài quốc gia của bạn (ví dụ: sang hệ thống hoặc nhà cung cấp tại Hoa Kỳ), chúng tôi sẽ sử dụng cơ chế chuyển giao hợp pháp theo yêu cầu.'
						)}
					</p>
				</div>

				<div className="policy-page__content__section">
					<h2>
						{t(
							'Do Not Track / Global Privacy Control',
							'Không theo dõi / Global Privacy Control'
						)}
					</h2>
					<p>
						{t(
							'Some browsers send Do Not Track or GPC signals. Where legally required, we will treat a valid GPC signal as an opt-out of sale/sharing.',
							'Một số trình duyệt gửi tín hiệu Do Not Track hoặc GPC. Khi pháp luật yêu cầu, chúng tôi sẽ coi tín hiệu GPC hợp lệ như một yêu cầu từ chối việc bán/chia sẻ.'
						)}
					</p>
				</div>

				<div className="policy-page__content__section">
					<h2>{t('Changes to This Policy', 'Thay đổi chính sách')}</h2>
					<p>
						{t(
							'We will post any changes with a new “Last Updated” date. Material changes will be highlighted.',
							'Chúng tôi sẽ đăng mọi thay đổi kèm ngày “Cập nhật lần cuối” mới. Các thay đổi quan trọng sẽ được làm nổi bật.'
						)}
					</p>
				</div>
			</div>

			<div className="policy-page__footer">
				<h2>{t('How to Contact Us', 'Cách liên hệ')}</h2>
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
				{t('Back to Top', 'Lên đầu trang')}
			</div>
		</div>
	);
};

export default Privacy;
