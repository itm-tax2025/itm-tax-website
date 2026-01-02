import { useState } from 'react';
import Card from './../../ui/component/Card';
import Divider from './../../ui/component/NonFunctional/Divider';
import './Services.scss';
import { useAppSelector } from '../../store';
const Services = () => {
	const [currentService, setCurrentService] = useState<string | null>(null);
	const language = useAppSelector((state) => state.theme.language);
	const handleSelectService = (e: React.MouseEvent<HTMLSpanElement>) => {
		const detail = e.currentTarget.getAttribute('aria-details');
		if (detail === currentService) {
			setCurrentService(null);
			return;
		}
		setCurrentService(detail);
	};
	return (
		<div className="services-page">
			{language === 'en' ? (
				<>
					<div className="services-page__header">
						<h1>Our Services</h1>
						<p>
							At ITM Tax & Advisory, LLC, we provide comprehensive, year-round
							financial services designed to streamline your operations,
							minimize your tax burden, and give you the confidence to focus on
							what matters most. Whether you're an individual needing help with
							your personal return or a business seeking strategic financial
							guidance, we have the expertise to support your goals.
						</p>
					</div>
				</>
			) : (
				<>
					<div className="services-page__header">
						<h1>Dịch Vụ Của Chúng Tôi</h1>
						<p>
							Tại ITM Tax & Advisory, LLC, chúng tôi cung cấp các dịch vụ tài
							chính toàn diện, quanh năm nhằm đơn giản hóa hoạt động của bạn,
							giảm thiểu gánh nặng thuế và mang lại cho bạn sự tự tin để tập
							trung vào những gì quan trọng nhất. Cho dù bạn là một cá nhân cần
							hỗ trợ với tờ khai cá nhân của mình hay một doanh nghiệp đang tìm
							kiếm sự hướng dẫn tài chính chiến lược, chúng tôi có chuyên môn để
							hỗ trợ các mục tiêu của bạn.
						</p>
					</div>
				</>
			)}

			<div className="services-page__services">
				<Card
					className="services-page__services__item"
					style={{
						animationDelay: (Math.floor(Math.random() * 7) + 1) * 100 + 'ms',
					}}
					id="tax">
					{language === 'en' ? (
						<>
							<div className="services-page__services__item__header">
								<h3>Individual Tax (Preparation & Planning)</h3>
							</div>
							<div className="services-page__services__item__description">
								<p>
									Year‑round, proactive tax preparation and planning for
									individuals, families, and entrepreneurs—W‑2s, investment
									income, rental schedules, equity comp, multi‑state, and more.
									<span
										onClick={handleSelectService}
										className={`prevent-select services-page__services__item__description__expand ${
											currentService === 'individual' ? 'active' : ''
										}`}
										aria-details="individual">
										Learn More
									</span>
								</p>
							</div>
							<div
								className={`services-page__services__item__reason ${
									currentService === 'individual' ? 'active' : ''
								}`}>
								<h4>Why it matters:</h4>
								<p>
									Taxes are typically your largest recurring expense; timely
									planning reduces surprises.
								</p>
								<p>
									Proactive adjustments (withholdings, estimated payments, and
									elections) prevent penalties and cash‑flow crunches.
								</p>
							</div>
							<div
								className={`services-page__services__item__value ${
									currentService === 'individual' ? 'active' : ''
								}`}>
								<h4>Long-Term Value:</h4>
								<ul>
									<li>
										Multi‑year planning compounds: better basis tracking, loss
										harvesting, and timing of deductions can improve after‑tax
										wealth over decades.
									</li>
									<li>
										Clean records and consistent filing reduce audit risk and
										make future transactions (home sale, business exit)
										smoother.
									</li>
								</ul>
							</div>
						</>
					) : (
						<>
							<div className="services-page__services__item__header">
								<h3>Thuế Cá Nhân (Chuẩn Bị & Lập Kế Hoạch)</h3>
							</div>
							<div className="services-page__services__item__description">
								<p>
									Chuẩn bị và lập kế hoạch thuế chủ động quanh năm cho cá nhân,
									gia đình và doanh nhân—W‑2, thu nhập đầu tư, lịch trình cho
									thuê, cổ phần vốn chủ sở hữu, đa tiểu bang và hơn thế nữa.
									<span
										onClick={handleSelectService}
										className={`prevent-select services-page__services__item__description__expand ${
											currentService === 'individual' ? 'active' : ''
										}`}
										aria-details="individual">
										Tìm Hiểu Thêm
									</span>
								</p>
							</div>
							<div
								className={`services-page__services__item__reason ${
									currentService === 'individual' ? 'active' : ''
								}`}>
								<h4>Tại Điều Này Quan Trọng:</h4>
								<p>
									Thuế thường là chi phí định kỳ lớn nhất của bạn; lập kế hoạch
									kịp thời sẽ giảm bớt những bất ngờ.
								</p>
								<p>
									Các điều chỉnh chủ động (khấu trừ, thanh toán ước tính và các
									lựa chọn) sẽ ngăn ngừa các khoản phạt và thắt chặt dòng tiền.
								</p>
							</div>
							<div
								className={`services-page__services__item__value ${
									currentService === 'individual' ? 'active' : ''
								}`}>
								<h4>Giá Trị Dài Hạn:</h4>
								<ul>
									<li>
										Lập kế hoạch nhiều năm cộng dồn: theo dõi cơ sở tốt hơn, thu
										hoạch lỗ và thời gian khấu trừ có thể cải thiện sự giàu có
										sau thế kỷ.
									</li>
									<li>
										Hồ sơ sạch sẽ và việc nộp hồ sơ nhất quán làm giảm rủi ro
										kiểm toán và làm cho các giao dịch trong tương lai (bán nhà,
										thoát kinh doanh) trở nên suôn sẻ hơn.
									</li>
								</ul>
							</div>
						</>
					)}
				</Card>
				<Card
					className="services-page__services__item"
					style={{
						animationDelay: (Math.floor(Math.random() * 7) + 1) * 100 + 'ms',
					}}
					id="business">
					{language === 'en' ? (
						<>
							<div className="services-page__services__item__header">
								<h3>Business Tax (Entity & Owner) </h3>
							</div>
							<div className="services-page__services__item__description">
								<p>
									Federal and state returns for LLCs, S corps, C corps, and
									partnerships plus owner‑level planning (reasonable comp,
									distributions, basis, SALT issues).
									<span
										onClick={handleSelectService}
										className={`prevent-select services-page__services__item__description__expand ${
											currentService === 'business' ? 'active' : ''
										}`}
										aria-details="business">
										Learn More
									</span>
								</p>
							</div>
							<div
								className={`services-page__services__item__reason ${
									currentService === 'business' ? 'active' : ''
								}`}>
								<h4>Why it matters:</h4>
								<p>
									The entity/owner tax picture is intertwined; missed
									coordination raises effective tax rates.
								</p>
								<p>
									Elections (e.g., S corp), depreciation strategies, and credits
									are time‑sensitive.
								</p>
							</div>
							<div
								className={`services-page__services__item__value ${
									currentService === 'business' ? 'active' : ''
								}`}>
								<h4>Long-Term Value:</h4>
								<ul>
									<li>
										Thoughtful entity structure and ongoing planning lower total
										tax over the business life cycle.
									</li>
									<li>
										Up‑to‑date compliance and documentation preserve deductions
										and simplify due diligence if you sell.
									</li>
								</ul>
							</div>
						</>
					) : (
						<>
							<div className="services-page__services__item__header">
								<h3>Thuế doanh nghiệp (Pháp nhân & Chủ sở hữu)</h3>
							</div>
							<div className="services-page__services__item__description">
								<p>
									Khai thuế liên bang và tiểu bang cho LLC, S-corp, C-corp và
									công ty hợp danh, cùng với lập kế hoạch ở cấp độ chủ sở hữu
									(thù lao hợp lý, phân phối lợi nhuận, cơ sở vốn/basis, các vấn
									đề SALT – thuế bang & địa phương).
									<span
										onClick={handleSelectService}
										className={`prevent-select services-page__services__item__description__expand ${
											currentService === 'business' ? 'active' : ''
										}`}
										aria-details="business">
										Tìm Hiểu Thêm
									</span>
								</p>
							</div>
							<div
								className={`services-page__services__item__reason ${
									currentService === 'business' ? 'active' : ''
								}`}>
								<h4>Vì sao điều này quan trọng:</h4>
								<p>
									Bức tranh thuế của pháp nhân và chủ sở hữu đan xen; thiếu phối
									hợp có thể làm tăng thuế suất thực tế. Các lựa chọn thuế (ví
									dụ: S-corp), chiến lược khấu hao và tín dụng thuế đều nhạy về
									thời điểm.
								</p>
								<p>
									Các lựa chọn (ví dụ: S corp), chiến lược khấu hao và tín dụng
									thuế đều có thời hạn.
								</p>
							</div>
							<div
								className={`services-page__services__item__value ${
									currentService === 'business' ? 'active' : ''
								}`}>
								<h4>Giá trị lâu dài:</h4>
								<ul>
									<li>
										Cấu trúc pháp nhân phù hợp và lập kế hoạch liên tục giúp
										giảm tổng thuế trong suốt vòng đời doanh nghiệp.
									</li>
									<li>
										Tuân thủ và hồ sơ cập nhật giúp bảo toàn khấu trừ và đơn
										giản hóa thẩm định (due diligence) khi chuyển nhượng/bán
										doanh nghiệp.
									</li>
								</ul>
							</div>
						</>
					)}
				</Card>
				<Card
					className="services-page__services__item"
					style={{
						animationDelay: (Math.floor(Math.random() * 7) + 1) * 100 + 'ms',
					}}
					id="bookkeeping">
					{language === 'en' ? (
						<>
							<div className="services-page__services__item__header">
								<h3>Bookkeeping & Financial Reporting (Non‑Attest)</h3>
							</div>
							<div className="services-page__services__item__description">
								<p>
									Monthly bookkeeping, close support, management reports, and
									cash‑flow dashboards so owners see what’s happening and can
									act quickly.
									<span
										onClick={handleSelectService}
										className={`prevent-select services-page__services__item__description__expand ${
											currentService === 'bookkeeping' ? 'active' : ''
										}`}
										aria-details="bookkeeping">
										Learn More
									</span>
								</p>
							</div>
							<div
								className={`services-page__services__item__reason ${
									currentService === 'bookkeeping' ? 'active' : ''
								}`}>
								<h4>Why it matters:</h4>
								<p>
									Accurate, timely books drive better pricing, hiring, and
									inventory decisions.
								</p>
								<p>
									Clean records lower tax prep costs and reduce stress at
									year‑end.
								</p>
							</div>
							<div
								className={`services-page__services__item__value ${
									currentService === 'bookkeeping' ? 'active' : ''
								}`}>
								<h4>Long-Term Value:</h4>
								<ul>
									<li>
										Consistent management reporting increases business value by
										demonstrating control and predictability.
									</li>
									<li>
										Readiness for financing or a future exit improves when your
										numbers are reliable.
									</li>
								</ul>
							</div>
						</>
					) : (
						<>
							<div className="services-page__services__item__header">
								<h3>Ghi sổ kế toán & Báo cáo tài chính (Non-Attest)</h3>
							</div>
							<div className="services-page__services__item__description">
								<p>
									Ghi sổ hàng tháng, hỗ trợ chốt sổ, báo cáo quản trị và bảng
									điều khiển dòng tiền để chủ doanh nghiệp nắm tình hình và hành
									động nhanh.
									<span
										onClick={handleSelectService}
										className={`prevent-select services-page__services__item__description__expand ${
											currentService === 'bookkeeping' ? 'active' : ''
										}`}
										aria-details="bookkeeping">
										Tìm Hiểu Thêm
									</span>
								</p>
							</div>
							<div
								className={`services-page__services__item__reason ${
									currentService === 'bookkeeping' ? 'active' : ''
								}`}>
								<h4>Tại sao điều này quan trọng:</h4>
								<p>
									Sổ sách chính xác, kịp thời thúc đẩy quyết định tốt hơn về giá
									bán, tuyển dụng và tồn kho. Hồ sơ gọn gàng giúp giảm chi phí
									chuẩn bị hồ sơ thuế và giảm căng thẳng cuối năm.
								</p>
							</div>
							<div
								className={`services-page__services__item__value ${
									currentService === 'bookkeeping' ? 'active' : ''
								}`}>
								<h4>Giá trị lâu dài:</h4>
								<ul>
									<li>
										Báo cáo quản trị nhất quán làm tăng giá trị doanh nghiệp
										bằng cách thể hiện khả năng kiểm soát và tính dự đoán.
									</li>
									<li>
										Chuẩn bị cho việc tài trợ hoặc thoái vốn trong tương lai cải
										thiện khi số liệu của bạn đáng tin cậy.
									</li>
								</ul>
							</div>
						</>
					)}
				</Card>
				<Card
					className="services-page__services__item"
					style={{
						animationDelay: (Math.floor(Math.random() * 7) + 1) * 100 + 'ms',
					}}
					id="financial">
					{language === 'en' ? (
						<>
							<div className="services-page__services__item__header">
								<h3>Financial Advisory</h3>
							</div>
							<div className="services-page__services__item__description">
								<p>
									Pricing analysis, budgets, forecasts, KPI design, and process
									improvements that help you run leaner and grow healthier.
									<span
										onClick={handleSelectService}
										className={`prevent-select services-page__services__item__description__expand ${
											currentService === 'financial' ? 'active' : ''
										}`}
										aria-details="financial">
										Learn More
									</span>
								</p>
							</div>
							<div
								className={`services-page__services__item__reason ${
									currentService === 'financial' ? 'active' : ''
								}`}>
								<h4>Why it matters:</h4>
								<p>
									Decisions on pricing, hiring, and capital spending benefit
									from objective, data‑driven analysis.
								</p>
								<p>
									A simple, forward‑looking model keeps everyone aligned and
									accountable.
								</p>
							</div>
							<div
								className={`services-page__services__item__value ${
									currentService === 'financial' ? 'active' : ''
								}`}>
								<h4>Long-Term Value:</h4>
								<ul>
									<li>
										Better capital allocation and margins compound year after
										year.
									</li>
									<li>
										Institutionalizing good processes de‑risks your business and
										boosts valuation.
									</li>
								</ul>
							</div>
						</>
					) : (
						<>
							<div className="services-page__services__item__header">
								<h3>Tư vấn tài chính</h3>
							</div>
							<div className="services-page__services__item__description">
								<p>
									Phân tích giá cả, ngân sách, dự báo, thiết kế KPI và cải tiến
									quy trình giúp bạn hoạt động hiệu quả hơn và phát triển bền
									vững hơn.
									<span
										onClick={handleSelectService}
										className={`prevent-select services-page__services__item__description__expand ${
											currentService === 'financial' ? 'active' : ''
										}`}
										aria-details="financial">
										Tìm Hiểu Thêm
									</span>
								</p>
							</div>
							<div
								className={`services-page__services__item__reason ${
									currentService === 'financial' ? 'active' : ''
								}`}>
								<h4>Tại sao điều này quan trọng:</h4>
								<p>
									Các quyết định về giá cả, tuyển dụng và chi tiêu vốn được
									hưởng lợi từ phân tích khách quan, dựa trên dữ liệu.
								</p>
								<p>
									Một mô hình đơn giản, hướng về tương lai giúp mọi người đồng
									thuận và có trách nhiệm.
								</p>
							</div>
							<div
								className={`services-page__services__item__value ${
									currentService === 'financial' ? 'active' : ''
								}`}>
								<h4>Giá trị lâu dài:</h4>
								<ul>
									<li>
										Cải thiện phân bổ vốn và biên lợi nhuận tích lũy qua từng
										năm.
									</li>
									<li>
										Chuẩn hóa các quy trình tốt giúp giảm rủi ro và nâng cao
										định giá doanh nghiệp.
									</li>
								</ul>
							</div>
						</>
					)}
				</Card>
				<Card
					className="services-page__services__item"
					style={{
						animationDelay: (Math.floor(Math.random() * 7) + 1) * 100 + 'ms',
					}}
					id="retirement">
					{language === 'en' ? (
						<>
							<div className="services-page__services__item__header">
								<h3>Retirement Planning (Tax‑Focused)</h3>
							</div>
							<div className="services-page__services__item__description">
								<p>
									Tax‑efficient retirement income design—Roth conversions, RMD
									strategy, Social Security timing, small‑business retirement
									plan selection—from a tax perspective.
									<span
										onClick={handleSelectService}
										className={`prevent-select services-page__services__item__description__expand ${
											currentService === 'retirement' ? 'active' : ''
										}`}
										aria-details="retirement">
										Learn More
									</span>
								</p>
							</div>
							<div
								className={`services-page__services__item__reason ${
									currentService === 'retirement' ? 'active' : ''
								}`}>
								<h4>Why it matters:</h4>
								<p>
									Withdrawal sequence and bracket management can materially
									change lifetime taxes paid.
								</p>
								<p>
									Early planning helps avoid IRMAA surcharges and unexpected tax
									cliffs.
								</p>
							</div>
							<div
								className={`services-page__services__item__value ${
									currentService === 'retirement' ? 'active' : ''
								}`}>
								<h4>Long-Term Value:</h4>
								<ul>
									<li>
										Coordinated tax strategy can extend portfolio longevity and
										increase after‑tax income in retirement.
									</li>

									<li>
										Less guesswork, more confidence when markets and tax laws
										change.
									</li>
								</ul>
							</div>
						</>
					) : (
						<>
							<div className="services-page__services__item__header">
								<h3>Hoạch định hưu trí (Tập trung vào thuế)</h3>
							</div>
							<div className="services-page__services__item__description">
								<p>
									Thiết kế thu nhập hưu trí hiệu quả về thuế—Chuyển đổi Roth,
									Chiến lược RMD, thời điểm An sinh xã hội, lựa chọn kế hoạch
									hưu trí cho doanh nghiệp nhỏ—từ quan điểm thuế.
									<span
										onClick={handleSelectService}
										className={`prevent-select services-page__services__item__description__expand ${
											currentService === 'retirement' ? 'active' : ''
										}`}
										aria-details="retirement">
										Tìm hiểu thêm
									</span>
								</p>
							</div>
							<div
								className={`services-page__services__item__reason ${
									currentService === 'retirement' ? 'active' : ''
								}`}>
								<h4>Tại sao điều này quan trọng:</h4>
								<p>
									Quản lý trình tự rút tiền và bậc thuế có thể thay đổi đáng kể
									số thuế phải trả trong suốt cuộc đời.
								</p>
								<p>
									Lập kế hoạch sớm giúp tránh các khoản phụ thu IRMAA và các
									điểm dốc thuế bất ngờ.
								</p>
							</div>
							<div
								className={`services-page__services__item__value ${
									currentService === 'retirement' ? 'active' : ''
								}`}>
								<h4>Giá trị lâu dài:</h4>
								<ul>
									<li>
										Chiến lược thuế phối hợp có thể kéo dài tuổi thọ danh mục
										đầu tư và tăng thu nhập sau thuế trong hưu trí.
									</li>

									<li>
										Ít sự đoán hơn, tự tin hơn khi thị trường và luật thuế thay
										đổi.
									</li>
								</ul>
							</div>
						</>
					)}
				</Card>
				<Card
					className="services-page__services__item"
					style={{
						animationDelay: (Math.floor(Math.random() * 7) + 1) * 100 + 'ms',
					}}
					id="education">
					{language === 'en' ? (
						<>
							<div className="services-page__services__item__header">
								<h3>Tax Education & Workshops</h3>
							</div>
							<div className="services-page__services__item__description">
								<p>
									Practical sessions for individuals, startups, and nonprofits
									on recordkeeping, entity basics, year‑end planning, and IRS
									do’s & don’ts.
									<span
										onClick={handleSelectService}
										className={`prevent-select services-page__services__item__description__expand ${
											currentService === 'education' ? 'active' : ''
										}`}
										aria-details="education">
										Learn More
									</span>
								</p>
							</div>
							<div
								className={`services-page__services__item__reason ${
									currentService === 'education' ? 'active' : ''
								}`}>
								<h4>Why it matters:</h4>
								<p>
									A little tax literacy prevents costly mistakes and improves
									decision‑making throughout the year.
								</p>
								<p>
									Teams that understand the “why” keep better records and save
									time.
								</p>
							</div>
							<div
								className={`services-page__services__item__value ${
									currentService === 'education' ? 'active' : ''
								}`}>
								<h4>Long-Term Value:</h4>
								<ul>
									<li>
										Fewer avoidable penalties and more opportunities captured
										(credits, elections, timing).
									</li>
									<li>
										Knowledge scales: train once, benefit across your
										organization.
									</li>
								</ul>
							</div>
						</>
					) : (
						<>
							<div className="services-page__services__item__header">
								<h3>Thông tin & Hội thảo về thuế</h3>
							</div>
							<div className="services-page__services__item__description">
								<p>
									Các buổi thực hành cho cá nhân, công ty khởi nghiệp và tổ chức
									phi lợi nhuận về việc ghi chép, các nguyên tắc cơ bản của pháp
									nhân, lập kế hoạch cuối năm và IRS những điều nên và không nên
									làm.
									<span
										onClick={handleSelectService}
										className={`prevent-select services-page__services__item__description__expand ${
											currentService === 'education' ? 'active' : ''
										}`}
										aria-details="education">
										Tìm hiểu thêm
									</span>
								</p>
							</div>
							<div
								className={`services-page__services__item__reason ${
									currentService === 'education' ? 'active' : ''
								}`}>
								<h4>Tại sao điều này quan trọng:</h4>
								<p>
									Một chút hiểu biết về thuế có thể ngăn ngừa những sai lầm tốn
									kém và cải thiện quyết định trong suốt cả năm.
								</p>
								<p>
									Các nhóm hiểu được “tại sao” sẽ giữ hồ sơ tốt hơn và tiết kiệm
									thời gian.
								</p>
							</div>
							<div
								className={`services-page__services__item__value ${
									currentService === 'education' ? 'active' : ''
								}`}>
								<h4>Giá trị lâu dài:</h4>
								<ul>
									<li>
										Có thể tránh bị phạt và nắm bắt nhiều cơ hội hơn (tín dụng
										thuế, lựa chọn, thời điểm).
									</li>
									<li>
										Mở rộng kiến thức: đào tạo một lần, mang lại lợi ích cho
										toàn tổ chức.
									</li>
								</ul>
							</div>
						</>
					)}
				</Card>
			</div>
			<Divider />
		</div>
	);
};

export default Services;
