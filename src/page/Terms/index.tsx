import PoliciesNavigate from '../Policies/PoliciesNavigate';
import { POLICIES } from '../../utils/constant';
import '../Policies/Policies.scss';
import { useAppSelector } from '../../store';

const Terms = () => {
	const language = useAppSelector((state) => state.theme.language);
	const t = (en: string, vi: string) => (language === 'en' ? en : vi);

	return (
		<div className="policy-page policy-page--terms">
			<div className="policy-page__header">
				<div>
					<h1>{t('Terms of Service', 'Điều Khoản Dịch Vụ')}</h1>
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
					<h2>{t('Acceptance of Terms', 'Chấp Nhận Điều Khoản')}</h2>
					<p>
						{t(
							`By accessing [${POLICIES.DOMAIN}] (the “Site”) or using our Services, you agree to these Terms of Use (the “Terms”). If you do not agree, do not use the Site.`,
							`Khi truy cập [${POLICIES.DOMAIN}] (“Trang web”) hoặc sử dụng Dịch vụ của chúng tôi, bạn đồng ý với các Điều khoản sử dụng (“Điều khoản”) này. Nếu bạn không đồng ý, vui lòng không sử dụng Trang web.`
						)}
					</p>
				</div>

				<div className="policy-page__content__section">
					<h2>
						{t(
							'No Professional Relationship from Website Content',
							'Không Hình Thành Quan Hệ Chuyên Môn Từ Nội Dung Trang Web'
						)}
					</h2>
					<p>
						{t(
							'Content on the Site is general information only and not tax, legal, accounting, or investment advice. No client relationship is formed by viewing the Site, contacting us, or scheduling a consultation until we sign a written engagement letter. You should not act on Site content without professional advice tailored to your situation.',
							'Nội dung trên Trang web chỉ mang tính thông tin chung và không phải là tư vấn về thuế, pháp lý, kế toán hoặc đầu tư. Việc xem Trang web, liên hệ với chúng tôi hoặc đặt lịch tư vấn không tạo ra quan hệ khách hàng cho đến khi chúng tôi ký thư/hợp đồng dịch vụ bằng văn bản. Bạn không nên hành động dựa trên nội dung của Trang web nếu chưa có tư vấn chuyên môn phù hợp với tình huống của bạn.'
						)}
					</p>
				</div>

				<div className="policy-page__content__section">
					<h2>{t('Eligibility; Accounts', 'Điều Kiện; Tài Khoản')}</h2>
					<h4>{t('We use information to:', 'Chúng tôi sử dụng thông tin để:')}</h4>
					<p>
						{t(
							'You must be at least 18 to use interactive features. If you create an account, you are responsible for maintaining its confidentiality and for all activities under it.',
							'Bạn phải từ 18 tuổi trở lên để sử dụng các tính năng tương tác. Nếu bạn tạo tài khoản, bạn có trách nhiệm bảo mật thông tin tài khoản và chịu trách nhiệm cho mọi hoạt động diễn ra dưới tài khoản đó.'
						)}
					</p>
				</div>

				<div className="policy-page__content__section">
					<h2>
						{t(
							'Permitted and Prohibited Uses',
							'Các Mục Đích Sử Dụng Được Phép Và Bị Cấm'
						)}
					</h2>
					<ul>
						<li>
							{t(
								'You may use the Site for lawful purposes only. You will not:',
								'Bạn chỉ được sử dụng Trang web cho các mục đích hợp pháp. Bạn sẽ không:'
							)}
							<ul>
								<li>
									{t(
										'attempt to evade taxes or solicit unlawful advice;',
										'cố gắng trốn thuế hoặc yêu cầu tư vấn bất hợp pháp;'
									)}
								</li>
								<li>
									{t(
										'probe, scan, or test system vulnerabilities;',
										'thăm dò, quét hoặc kiểm tra lỗ hổng hệ thống;'
									)}
								</li>
								<li>
									{t(
										'scrape, crawl, or harvest data except as allowed by robots.txt;',
										'thu thập dữ liệu (scrape), thu thập tự động (crawl) hoặc khai thác dữ liệu, trừ khi được robots.txt cho phép;'
									)}
								</li>
								<li>
									{t('upload malicious code;', 'tải lên mã độc;')}
								</li>
								<li>
									{t(
										'infringe IP rights or violate privacy;',
										'xâm phạm quyền sở hữu trí tuệ hoặc quyền riêng tư;'
									)}
								</li>
								<li>
									{t(
										'misrepresent your identity or affiliation.',
										'mạo danh hoặc xuyên tạc danh tính/mối liên hệ.'
									)}
								</li>
							</ul>
						</li>
					</ul>
				</div>

				<div className="policy-page__content__section">
					<h2>
						{t(
							'Intellectual Property; Limited License',
							'Sở Hữu Trí Tuệ; Giấy Phép Giới Hạn'
						)}
					</h2>
					<p>
						{t(
							'The Site and its content are owned by ITM or our licensors and are protected by IP laws. We grant you a limited, nonexclusive, revocable license to access the Site for personal, noncommercial use. All other rights are reserved. You may not use our trademarks without written consent.',
							'Trang web và nội dung thuộc sở hữu của ITM hoặc bên cấp phép cho chúng tôi và được bảo vệ bởi luật sở hữu trí tuệ. Chúng tôi cấp cho bạn giấy phép giới hạn, không độc quyền và có thể thu hồi để truy cập Trang web cho mục đích cá nhân, phi thương mại. Mọi quyền khác đều được bảo lưu. Bạn không được sử dụng nhãn hiệu của chúng tôi nếu không có sự chấp thuận bằng văn bản.'
						)}
					</p>
				</div>

				<div className="policy-page__content__section">
					<h2>{t('User Content & Feedback', 'Nội Dung Người Dùng & Phản Hồi')}</h2>
					<p>
						{t(
							'If you submit content (e.g., documents via a portal), you grant us the rights necessary to provide the Services and comply with law. If you send suggestions or feedback, you grant us a perpetual, irrevocable, royalty-free license to use them without restriction or compensation.',
							'Nếu bạn gửi nội dung (ví dụ: tài liệu qua cổng thông tin), bạn cấp cho chúng tôi các quyền cần thiết để cung cấp Dịch vụ và tuân thủ pháp luật. Nếu bạn gửi gợi ý hoặc phản hồi, bạn cấp cho chúng tôi giấy phép vĩnh viễn, không thể hủy ngang, miễn phí bản quyền để sử dụng mà không bị hạn chế hay phải bồi thường.'
						)}
					</p>
				</div>

				<div className="policy-page__content__section">
					<h2>
						{t(
							'Third-Party Links, Tools, and Services',
							'Liên Kết, Công Cụ Và Dịch Vụ Bên Thứ Ba'
						)}
					</h2>
					<p>
						{t(
							'We may link to or embed third-party services (e.g., e-signature, client portal, payment processing, analytics). We are not responsible for third-party content or practices. Your use of third-party services is governed by their terms and privacy policies.',
							'Chúng tôi có thể liên kết đến hoặc nhúng các dịch vụ của bên thứ ba (ví dụ: ký điện tử, cổng thông tin khách hàng, xử lý thanh toán, phân tích). Chúng tôi không chịu trách nhiệm về nội dung hoặc thực tiễn của bên thứ ba. Việc bạn sử dụng dịch vụ bên thứ ba chịu sự điều chỉnh bởi điều khoản và chính sách quyền riêng tư của họ.'
						)}
					</p>
				</div>

				<div className="policy-page__content__section">
					<h2>{t('Disclaimers', 'Tuyên Bố Miễn Trừ')}</h2>
					<p>
						{t(
							'THE SITE AND ALL CONTENT ARE PROVIDED “AS IS” AND “AS AVAILABLE.” TO THE MAXIMUM EXTENT PERMITTED BY LAW, ITM DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND THAT THE SITE WILL BE ERROR-FREE, SECURE, OR UNINTERRUPTED. ONLINE MATERIALS MAY BE OUT OF DATE OR INCOMPLETE.',
							'TRANG WEB VÀ TOÀN BỘ NỘI DUNG ĐƯỢC CUNG CẤP “NGUYÊN TRẠNG” VÀ “TÙY THEO KHẢ DỤNG”. TRONG PHẠM VI TỐI ĐA ĐƯỢC PHÁP LUẬT CHO PHÉP, ITM TỪ CHỐI MỌI BẢO ĐẢM, DÙ RÕ RÀNG HAY NGỤ Ý, BAO GỒM KHẢ NĂNG THƯƠNG MẠI, PHÙ HỢP MỤC ĐÍCH CỤ THỂ, KHÔNG XÂM PHẠM, VÀ VIỆC TRANG WEB SẼ KHÔNG LỖI, AN TOÀN HOẶC KHÔNG BỊ GIÁN ĐOẠN. TÀI LIỆU TRỰC TUYẾN CÓ THỂ ĐÃ LỖI THỜI HOẶC KHÔNG ĐẦY ĐỦ.'
						)}
					</p>
				</div>

				<div className="policy-page__content__section">
					<h2>{t('Limitation of Liability', 'Giới Hạn Trách Nhiệm')}</h2>
					<p>
						{t(
							'TO THE MAXIMUM EXTENT PERMITTED BY LAW, ITM, ITS OWNERS, EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES; LOSS OF PROFITS/REVENUES; LOSS OF DATA OR GOODWILL; OR BUSINESS INTERRUPTION, ARISING FROM OR RELATED TO THE SITE OR THESE TERMS, EVEN IF ADVISED OF THE POSSIBILITY. OUR AGGREGATE LIABILITY FOR ALL CLAIMS RELATING TO THE SITE WILL NOT EXCEED $100 OR THE AMOUNT YOU PAID US FOR SITE ACCESS IN THE 12 MONTHS BEFORE THE EVENT—WHICHEVER IS GREATER. Some jurisdictions do not allow certain limitations; in those jurisdictions, our liability is limited to the maximum extent permitted by law.',
							'TRONG PHẠM VI TỐI ĐA ĐƯỢC PHÁP LUẬT CHO PHÉP, ITM, CHỦ SỞ HỮU, NHÂN VIÊN VÀ ĐẠI DIỆN CỦA ITM SẼ KHÔNG CHỊU TRÁCH NHIỆM ĐỐI VỚI CÁC THIỆT HẠI GIÁN TIẾP, NGẪU NHIÊN, ĐẶC BIỆT, HẬU QUẢ, MANG TÍNH NÊU GƯƠNG HOẶC TRỪNG PHẠT; MẤT LỢI NHUẬN/DOANH THU; MẤT DỮ LIỆU HOẶC UY TÍN; HOẶC GIÁN ĐOẠN KINH DOANH, PHÁT SINH TỪ HOẶC LIÊN QUAN ĐẾN TRANG WEB HOẶC CÁC ĐIỀU KHOẢN NÀY, NGAY CẢ KHI ĐÃ ĐƯỢC THÔNG BÁO VỀ KHẢ NĂNG XẢY RA. TỔNG TRÁCH NHIỆM CỦA CHÚNG TÔI ĐỐI VỚI MỌI KHIẾU NẠI LIÊN QUAN ĐẾN TRANG WEB SẼ KHÔNG VƯỢT QUÁ 100 USD HOẶC SỐ TIỀN BẠN ĐÃ TRẢ CHO CHÚNG TÔI ĐỂ TRUY CẬP TRANG WEB TRONG 12 THÁNG TRƯỚC SỰ KIỆN—TÙY THEO MỨC NÀO LỚN HƠN. Một số khu vực pháp lý không cho phép một số giới hạn; tại các khu vực đó, trách nhiệm của chúng tôi được giới hạn ở mức tối đa mà pháp luật cho phép.'
						)}
					</p>
				</div>

				<div className="policy-page__content__section">
					<h2>{t('Indemnification', 'Bồi Thường')}</h2>
					<p>
						{t(
							'You agree to defend, indemnify, and hold harmless ITM and its personnel from any claims, damages, liabilities, costs, and expenses (including reasonable attorneys’ fees) arising from your use of the Site, your User Content, or your breach of these Terms.',
							'Bạn đồng ý bảo vệ, bồi thường và giữ cho ITM và nhân sự của ITM không bị thiệt hại trước mọi khiếu nại, tổn thất, trách nhiệm, chi phí và phí tổn (bao gồm phí luật sư hợp lý) phát sinh từ việc bạn sử dụng Trang web, Nội dung người dùng của bạn hoặc việc bạn vi phạm các Điều khoản này.'
						)}
					</p>
				</div>

				<div className="policy-page__content__section">
					<h2>{t('DMCA Notice', 'Thông Báo DMCA')}</h2>
					<p>
						{t(
							`If you believe content on the Site infringes your copyright, send a written notice to our DMCA Agent: [${POLICIES.EMAIL}]. Include: [Your Name], [Email], [Phone] with:`,
							`Nếu bạn cho rằng nội dung trên Trang web xâm phạm bản quyền của bạn, hãy gửi thông báo bằng văn bản đến Đại diện DMCA của chúng tôi: [${POLICIES.EMAIL}]. Bao gồm: [Tên của bạn], [Email], [Số điện thoại] cùng với:`
						)}
					</p>
					<ol>
						<li>{t('Your signature;', 'Chữ ký của bạn;')}</li>
						<li>
							{t(
								'Identification of the copyrighted work;',
								'Xác định tác phẩm có bản quyền;'
							)}
						</li>
						<li>
							{t(
								'Identification of the allegedly infringing material;',
								'Xác định tài liệu bị cho là xâm phạm;'
							)}
						</li>
						<li>{t('Contact information;', 'Thông tin liên hệ;')}</li>
						<li>{t('A statement of good-faith belief; and', 'Tuyên bố thiện chí; và')}</li>
						<li>
							{t(
								'A statement, under penalty of perjury, of accuracy and authority.',
								'Tuyên bố, dưới hình phạt khai man, về tính chính xác và thẩm quyền.'
							)}
						</li>
					</ol>
					<p>
						{t(
							'We may remove content and terminate repeat infringers.',
							'Chúng tôi có thể gỡ bỏ nội dung và chấm dứt quyền truy cập của người vi phạm nhiều lần.'
						)}
					</p>
				</div>

				<div className="policy-page__content__section">
					<h2>{t('Governing Law; Venue', 'Luật Áp Dụng; Thẩm Quyền Xét Xử')}</h2>
					<p>
						{t(
							'These Terms are governed by the laws of the State of [GOVERNING STATE], without regard to conflicts principles. Except as provided in Dispute Resolution, exclusive venue lies in the state or federal courts located in [COUNTY, STATE], and you consent to personal jurisdiction there.',
							'Các Điều khoản này được điều chỉnh bởi luật của Tiểu bang [GOVERNING STATE], không xét đến các nguyên tắc xung đột pháp luật. Trừ khi có quy định khác trong phần Giải quyết tranh chấp, thẩm quyền xét xử độc quyền thuộc về tòa án tiểu bang hoặc liên bang đặt tại [COUNTY, STATE], và bạn đồng ý với thẩm quyền xét xử cá nhân tại đó.'
						)}
					</p>
				</div>

				<div className="policy-page__content__section">
					<h2>
						{t(
							'Dispute Resolution—Arbitration & Class-Action Waiver (U.S. Residents)',
							'Giải Quyết Tranh Chấp—Trọng Tài & Từ Bỏ Khởi Kiện Tập Thể (Cư dân Hoa Kỳ)'
						)}
					</h2>
					<ul>
						<li>
							<strong>{t('Binding Arbitration:', 'Trọng tài ràng buộc:')}</strong>
							<p>
								{t(
									'Except for small-claims or injunctive relief, any dispute arising out of or relating to these Terms or the Site will be resolved by binding arbitration under the Federal Arbitration Act and the AAA Consumer Arbitration Rules by a single arbitrator.',
									'Ngoại trừ vụ việc thuộc tòa án khiếu nại nhỏ hoặc yêu cầu lệnh cấm/biện pháp khẩn cấp, mọi tranh chấp phát sinh từ hoặc liên quan đến các Điều khoản này hoặc Trang web sẽ được giải quyết bằng trọng tài ràng buộc theo Đạo luật Trọng tài Liên bang và Quy tắc Trọng tài Người tiêu dùng của AAA bởi một trọng tài viên duy nhất.'
								)}
							</p>
						</li>
						<li>
							<strong>
								{t(
									'Class/Collective Action Waiver:',
									'Từ bỏ khởi kiện tập thể/tập hợp:'
								)}
							</strong>
							<p>
								{t(
									'Disputes must be brought individually; no class, collective, or representative actions.',
									'Tranh chấp phải được đưa ra theo từng cá nhân; không có khởi kiện tập thể, tập hợp hoặc đại diện.'
								)}
							</p>
						</li>
						<li>
							<strong>{t('30-Day Opt-Out:', 'Từ chối trong 30 ngày:')}</strong>
							<p>
								{t(
									`You may opt out by emailing [${POLICIES.EMAIL}] within 30 days of first accepting these Terms.`,
									`Bạn có thể từ chối bằng cách email đến [${POLICIES.EMAIL}] trong vòng 30 ngày kể từ lần đầu chấp nhận các Điều khoản này.`
								)}
							</p>
						</li>
						<li>
							<strong>{t('Location & Fees:', 'Địa điểm & phí:')}</strong>
							<p>
								{t(
									'Arbitration will occur in [FORT BEND, TEXAS] or via remote video, with fee-shifting as required by applicable rules/law. If any portion of this section is found unenforceable, it will be severed, and the remainder enforced to the fullest extent permitted.',
									'Trọng tài sẽ diễn ra tại [FORT BEND, TEXAS] hoặc qua video từ xa, với việc chuyển phí theo yêu cầu của quy định/pháp luật áp dụng. Nếu bất kỳ phần nào của mục này bị coi là không thể thi hành, phần đó sẽ bị tách ra và phần còn lại vẫn được thi hành ở mức tối đa được phép.'
								)}
							</p>
						</li>
					</ul>
				</div>

				<div className="policy-page__content__section">
					<h2>{t('Export/Trade Controls', 'Kiểm Soát Xuất Khẩu/Thương Mại')}</h2>
					<p>
						{t(
							'You will comply with all applicable export, re-export, and sanctions laws.',
							'Bạn sẽ tuân thủ mọi luật lệ hiện hành về xuất khẩu, tái xuất khẩu và các lệnh trừng phạt.'
						)}
					</p>
				</div>

				<div className="policy-page__content__section">
					<h2>{t('Changes to Terms', 'Thay Đổi Điều Khoản')}</h2>
					<p>
						{t(
							'We may update these Terms from time to time. Continued use of the Site after changes means you accept the updated Terms.',
							'Chúng tôi có thể cập nhật các Điều khoản này theo thời gian. Việc tiếp tục sử dụng Trang web sau khi có thay đổi đồng nghĩa bạn chấp nhận các Điều khoản đã được cập nhật.'
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

export default Terms;
