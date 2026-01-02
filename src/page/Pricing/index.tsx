import { useState } from 'react';
import Card from './../../ui/component/Card';
import Icon from './../../ui/component/Icon';
import Divider from './../../ui/component/NonFunctional/Divider';
import './Pricing.scss';
import { PRICING_OPTIONS } from './../../utils/constant';
import Button from './../../ui/component/Button';
import PHONECALL from './../../assets/animated/phone-call.gif';
import { useNavigate } from 'react-router-dom';
import { smoothScrollTo } from '../../utils/window';
import { useAppSelector } from '../../store';

type PricingCategory = '' | 'individual' | 'business' | 'retirement';

type ServiceCard = {
	target: Exclude<PricingCategory, ''>;
	title: string;
	subtitle: string;
	description: string;
};

type TextPair = { en: string; vi: string };

const Pricing = () => {
	const language = useAppSelector((state) => state.theme.language);

	const t = (en: string, vi: string) => (language === 'en' ? en : vi);

	const navigate = useNavigate();
	const [category, setCategory] = useState<PricingCategory>('');
	const [isCTAHover, setIsCTAHover] = useState(false);

	const iconName = 'check';
	const iconSize = 'small';

	const handleChangeCategory = (newCategory: Exclude<PricingCategory, ''>) => {
		if (newCategory === category) {
			setCategory(''); // Deselect if the same category is clicked
		} else {
			setCategory(newCategory);
		}
	};

	const handleCTAHover = (hover: boolean) => {
		setIsCTAHover(hover);
	};

	const handleGoTo = () => {
		navigate('/contact');
		smoothScrollTo(0, 300);
	};

	const services: ServiceCard[] = [
		{
			target: 'individual',
			title: t('Individual', 'Cá Nhân'),
			subtitle: t(
				'Stress-free tax filing made simple',
				'Kê khai thuế đơn giản, không căng thẳng'
			),
			description: t(
				'Accurate returns, timely filing, and peace of mind for professionals and families.',
				'Kê khai chính xác, nộp đúng hạn và yên tâm cho các chuyên gia và gia đình.'
			),
		},
		{
			target: 'business',
			title: t('Business', 'Doanh Nghiệp'),
			subtitle: t(
				'All-in-one care for your business.',
				'Chăm sóc toàn diện cho doanh nghiệp của bạn.'
			),
			description: t(
				'Bookkeeping, payroll, and tax planning; everything you need to keep your business compliant and growing.',
				'Kế toán, bảng lương và lập kế hoạch thuế; mọi thứ bạn cần để giữ cho doanh nghiệp của mình tuân thủ và phát triển.'
			),
		},
		{
			target: 'retirement',
			title: t('Tax & Retirement Planning', 'Lập Kế Hoạch Thuế & Hưu Trí'),
			subtitle: t(
				'Strategies for a secure financial future.',
				'Chiến Lược Cho Tương Lai Tài Chính An Toàn.'
			),
			description: t(
				'Comprehensive retirement planning, tax strategies, and tax efficiency to secure your financial future.',
				'Lập kế hoạch hưu trí toàn diện, chiến lược thuế và hiệu quả thuế để đảm bảo tương lai tài chính của bạn.'
			),
		},
	];

	const CheckLi = ({
		children,
		className,
	}: {
		children: React.ReactNode;
		className?: string;
	}) => (
		<li className={className}>
			<div>
				<Icon name={iconName} size={iconSize} />
			</div>
			<div>
				{typeof children === 'string' ? <p>{children}</p> : <p>{children}</p>}
			</div>
		</li>
	);

	const SimpleFeatureList = ({ items }: { items: React.ReactNode[] }) => (
		<ul className="pricing-page__selected__details__price__item__features">
			{items.map((item, idx) => (
				<CheckLi key={idx}>{item}</CheckLi>
			))}
		</ul>
	);

	const AddOnRow = ({
		label,
		price,
		suffix,
	}: {
		label: TextPair;
		price: string | number;
		suffix?: TextPair;
	}) => (
		<div className="pricing-page__selected__add-ons__list__item">
			<div>
				<Icon name={iconName} size={iconSize} />
			</div>
			<div>
				<p>
					{t(label.en, label.vi)}{' '}
					<strong>
						${price} {suffix ? t(suffix.en, suffix.vi) : ''}
					</strong>
				</p>
			</div>
		</div>
	);

	const ListedPriceItem = ({
		title,
		subtitle,
		price,
	}: {
		title: TextPair;
		subtitle: TextPair;
		price: string | number;
	}) => (
		<li className="pricing-page__selected__details__price__item__features__item">
			<div className="pricing-page__selected__details__price__item__features__item__header">
				<div>
					<Icon name={iconName} size={iconSize} />
				</div>
				<div className="pricing-page__selected__details__price__item__features__item__header-text">
					<h4>{t(title.en, title.vi)}</h4>
					<span>{t(subtitle.en, subtitle.vi)}</span>
				</div>
			</div>
			<div className="pricing-page__selected__details__price__item__features__item__price">
				<p>${price}</p>
			</div>
		</li>
	);

	const TieredRow = ({
		name,
		detail,
		price,
	}: {
		name: TextPair;
		detail: TextPair;
		price: string | number;
	}) => (
		<li className="pricing-page__selected__details__price__item__features__tiered__item__list__item">
			<div className="pricing-page__selected__details__price__item__features__tiered__item__list__item__header">
				<div>
					<Icon name={iconName} size={iconSize} />
				</div>
				<div className="pricing-page__selected__details__price__item__features__tiered__item__list__item__header-text">
					<h4>{t(name.en, name.vi)}</h4>
					<span>{t(detail.en, detail.vi)}</span>
				</div>
			</div>
			<div className="pricing-page__selected__details__price__item__features__item__price">
				<p>${price}</p>
			</div>
		</li>
	);

	return (
		<div className="pricing-page">
			<h1 className="prevent-select">{t('Pricing', 'Bảng Giá')}</h1>

			<div className="pricing-page__header">
				<div>
					<h4>{t('Clear, Simple, and Tailored to You.', 'Rõ Ràng, Đơn Giản và Phù Hợp Với Bạn.')}</h4>
					<p>
						{t(
							'At ITM Tax & Advisory, we believe pricing should never feel complicated or hidden. That’s why we have designed three straightforward options to fit your needs, whether you’re an individual looking for peace of mind at tax time, a small business seeking full-circle support, or someone with unique needs who',
							'Tại ITM Tax & Advisory, chúng tôi tin rằng giá cả không bao giờ nên cảm thấy phức tạp hoặc ẩn giấu. Đó là lý do tại sao chúng tôi đã thiết kế ba lựa chọn đơn giản để phù hợp với nhu cầu của bạn, dù bạn là cá nhân tìm kiếm sự yên tâm vào thời điểm khai thuế, doanh nghiệp nhỏ cần hỗ trợ toàn diện, hay ai đó có nhu cầu đặc biệt cần'
						)}
						{t('deserves a custom solution.', 'xứng đáng có một giải pháp tùy chỉnh.')}
					</p>
				</div>
			</div>

			<div className="pricing-page__cta">
				<h2>
					{t(
						"Let's choose the package that fits you best:",
						'Hãy chọn gói phù hợp nhất với bạn:'
					)}
				</h2>
			</div>

			<div className="pricing-page__options">
				{services.map((service, index) => (
					<Card
						key={`${service.title}-${index}`}
						className={`pricing-page__options__item ${
							category === service.target.toLowerCase()
								? 'pricing-page__options__item--selected'
								: ''
						} ${
							category !== service.target && category !== ''
								? 'pricing-page__options__item--hide'
								: ''
						}`}
						onClick={() => handleChangeCategory(service.target)}
						style={{ animationDelay: `${index * 100 + 500}ms` }}>
						<h2 className="prevent-select">{service.title}</h2>
						<p className="pricing-page__options__item__subtitle">
							<i>{service.subtitle}</i>
						</p>
						<p>{service.description}</p>
					</Card>
				))}
			</div>

			<div className="pricing-page__selected">
				{category === '' && (
					<p>
						{t(
							'Please select a category to see the details.',
							'Vui lòng chọn một danh mục để xem chi tiết.'
						)}
					</p>
				)}

				{category === 'individual' && (
					<>
						<div className="pricing-page__selected__details">
							<h2 className="pricing-page__selected__details__title">
								{t('Individual Services', 'Dịch Vụ Cá Nhân')}
							</h2>

							<div className="pricing-page__selected__details__price">
								{/* Essential */}
								<Card
									className="pricing-page__selected__details__price__item"
									style={{ animationDelay: '200ms' }}>
									<div className="pricing-page__selected__details__price__item__header">
										<h3>{t('Essential', 'Cơ Bản')}</h3>
										<span>
											{t(
												'For individuals with simple tax situations.',
												'Dành cho cá nhân có tình huống thuế đơn giản.'
											)}
										</span>
									</div>
									<div className="pricing-page__selected__details__price__item__starting">
										{t('Starting at', 'Bắt đầu từ')}{' '}
										<strong>${PRICING_OPTIONS.INDIVIDUAL.BASIC}</strong>
									</div>
									<Divider style="text" text={t('Features', 'Tính Năng')} />
									<SimpleFeatureList
										items={[
											t('W-2s', 'W-2s'),
											t('1 state', '1 tiểu bang'),
											t('Standard deduction', 'Khấu trừ tiêu chuẩn'),
										]}
									/>
								</Card>

								{/* Plus */}
								<Card
									className="pricing-page__selected__details__price__item"
									style={{ animationDelay: '50ms' }}>
									<div className="pricing-page__selected__details__price__item__header">
										<h3>{t('Plus', 'Nâng Cao')}</h3>
										<span>
											{t(
												'For individuals with investments, home ownership, or HSA.',
												'Dành cho cá nhân có đầu tư, sở hữu nhà, hoặc HSA.'
											)}
										</span>
									</div>
									<div className="pricing-page__selected__details__price__item__starting">
										{t('Starting at', 'Bắt đầu từ')}{' '}
										<strong>${PRICING_OPTIONS.INDIVIDUAL.ADVANCED}</strong>
									</div>
									<Divider style="text" text="Features" />
									<SimpleFeatureList
										items={[
											<>
												{t('Everything in', 'Tất cả trong')}{' '}
												<strong>{t('Essential', 'Cơ Bản')}</strong>
											</>,
											t('Itemized deductions', 'Khấu trừ chi tiết'),
											t('HSA', 'HSA'),
											t(
												'Simple brokerage accounts (1099-DIV, 1099-B, 1099-INT)',
												'Tài khoản môi giới đơn giản (1099-DIV, 1099-B, 1099-INT)'
											),
										]}
									/>
								</Card>

								{/* Premier */}
								<Card className="pricing-page__selected__details__price__item">
									<div className="pricing-page__selected__details__price__item__header">
										<h3>{t('Premier', 'Cao cấp')}</h3>
										<span>
											{t(
												'For individuals with complex tax situations and investment',
												'Dành cho cá nhân có tình huống thuế phức tạp và đầu tư'
											)}
										</span>
									</div>
									<div className="pricing-page__selected__details__price__item__starting">
										{t('Starting at', 'Bắt đầu từ')}{' '}
										<strong>${PRICING_OPTIONS.INDIVIDUAL.PREMIER}</strong>
									</div>
									<Divider style="text" text={t('Features', 'Tính Năng')} />
									<SimpleFeatureList
										items={[
											<>
												{t('Everything in', 'Tất cả trong')}{' '}
												<strong>{t('Plus', 'Cộng thêm')}</strong>
											</>,
											t(
												'Schedule C income and expenses (freelance, 1099-MISC, etc.)',
												'Thu nhập và chi phí Lịch trình C (freelance, 1099-MISC, v.v.)'
											),
											t('1 rental property', '1 tài sản cho thuê'),
											t('Up to 2 K-1s', 'Tối đa 2 K-1'),
										]}
									/>
								</Card>
							</div>
						</div>

						<Card className="pricing-page__selected__add-ons">
							<h3 className="pricing-page__selected__add-ons__title">
								Add-On Services
							</h3>
							<div className="pricing-page__selected__add-ons__list">
								<div>
									<div className="pricing-page__selected__add-ons__list__group">
										<AddOnRow
											label={{
												en: 'Additional Schedule C:',
												vi: 'Thêm Schedule C:',
											}}
											price={
												PRICING_OPTIONS.INDIVIDUAL.ADD_ONS.ADDITIONAL_SCHEDULE_C
											}
											suffix={{ en: 'each', vi: 'mỗi bộ' }}
										/>
										<AddOnRow
											label={{
												// NOTE: content preserved exactly as original
												en: 'Thêm mỗi tiểu bang',
												vi: 'Additional state:',
											}}
											price={PRICING_OPTIONS.INDIVIDUAL.ADD_ONS.ADDITIONAL_STATE}
											suffix={{ en: 'each', vi: 'mỗi bộ' }}
										/>
									</div>

									<div className="pricing-page__selected__add-ons__list__group">
										<AddOnRow
											label={{ en: 'Additional K-1:', vi: 'Thêm K-1:' }}
											price={PRICING_OPTIONS.INDIVIDUAL.ADD_ONS.ADDITIONAL_K_1}
											suffix={{ en: 'each', vi: 'mỗi bộ' }}
										/>
										<AddOnRow
											label={{ en: 'Additional rental:', vi: 'Thêm tài sản cho thuê:' }}
											price={
												PRICING_OPTIONS.INDIVIDUAL.ADD_ONS.ADDITIONAL_RENTAL
											}
											suffix={{ en: 'each', vi: 'mỗi bộ' }}
										/>
									</div>

									<div className="pricing-page__selected__add-ons__list__group">
										<AddOnRow
											label={{
												en: 'Additional brokerage account:',
												vi: 'Thêm tài khoản môi giới:',
											}}
											price={
												PRICING_OPTIONS.INDIVIDUAL.ADD_ONS
													.ADDITIONAL_BROKERAGE_ACCOUNT
											}
											suffix={{ en: 'each', vi: 'mỗi bộ' }}
										/>
										<AddOnRow
											label={{
												en: 'Crypto summary (100 - 500 transactions):',
												vi: 'Tóm tắt tiền điện tử (100 - 500 giao dịch):',
											}}
											price={PRICING_OPTIONS.INDIVIDUAL.ADD_ONS.CRYPTO_SUMMARY}
										/>
									</div>
								</div>
							</div>
						</Card>
					</>
				)}

				{category === 'business' && (
					<>
						<div className="pricing-page__selected__details pricing-page__selected__details--business">
							<h2 className="pricing-page__selected__details__title">
								{t('Business Services', 'Dịch Vụ cho Doanh Nghiệp')}
							</h2>

							<div className="pricing-page__selected__details__price">
								{/* Formation */}
								<Card
									className="pricing-page__selected__details__price__item"
									style={{ animationDelay: '250ms' }}>
									<div className="pricing-page__selected__details__price__item__header">
										<h3>{t('Formation', 'Thành lập')}</h3>
										<span>
											{t(
												'For startups looking to get off the ground.',
												'Cho các công ty khởi nghiệp muốn bắt đầu.'
											)}
										</span>
									</div>

									<ul className="pricing-page__selected__details__price__item__features pricing-page__selected__details__price__item__features--listed">
										<ListedPriceItem
											title={{ en: 'LLC Formation & EIN', vi: 'Thành lập LLC & EIN' }}
											subtitle={{
												en: 'Includes name availability check and filing',
												vi: 'Bao gồm kiểm tra tên khả dụng và nộp hồ sơ',
											}}
											price={PRICING_OPTIONS.BUSINESS.FORMATION.LLC_EIN}
										/>
										<ListedPriceItem
											title={{ en: 'Entity Election', vi: 'Chọn Loại Hình Doanh Nghiệp' }}
											subtitle={{
												en: 'Choose your business structure (S-Corp or C-Corp)',
												vi: 'Chọn cấu trúc doanh nghiệp của bạn (S-Corp hoặc C-Corp)',
											}}
											price={PRICING_OPTIONS.BUSINESS.FORMATION.ENTITY_ELECTION}
										/>
										<ListedPriceItem
											title={{ en: 'State Compliance', vi: 'Luật tiểu bang' }}
											subtitle={{
												en: 'PIR report and sales tax account setup',
												vi: 'Báo cáo PIR và thiết lập tài khoản thuế bán hàng',
											}}
											price={PRICING_OPTIONS.BUSINESS.FORMATION.STATE_COMPLIANCE}
										/>
									</ul>
								</Card>

								{/* Bookkeeping + Payroll */}
								<Card
									className="pricing-page__selected__details__price__item"
									style={{ animationDelay: '100ms' }}>
									<div className="pricing-page__selected__details__price__item__header">
										<h3>{t('Bookkeeping', 'Kế Toán')}</h3>
										<span>
											{t(
												'For new and ongoing bookkeeping needs',
												'Dành cho nhu cầu kế toán mới và đang diễn ra'
											)}
										</span>
									</div>

									<ul className="pricing-page__selected__details__price__item__features pricing-page__selected__details__price__item__features--tiered">
										<li className="pricing-page__selected__details__price__item__features__tiered__item">
											<div className="pricing-page__selected__details__price__item__features__tiered__item__header">
												<h4>{t('Monthly Bookkeeping (QBO)', 'Kế Toán Hàng Tháng (QBO)')}</h4>
											</div>

											<div className="pricing-page__selected__details__price__item__features__tiered__item__list">
												<ul className="pricing-page__selected__details__price__item__features__tiered__item__list__items">
													<TieredRow
														name={{ en: 'Starter', vi: 'Cơ Bản' }}
														detail={{
															en: `< 100 transactions, 1 - 2 Bank accounts`,
															vi: `< 100 giao dịch, 1 - 2 tài khoản ngân hàng`,
														}}
														price={PRICING_OPTIONS.BUSINESS.BOOKKEEPING.STARTER}
													/>
													<TieredRow
														name={{ en: 'Core', vi: 'Cốt lõi' }}
														detail={{
															en: `< 200 transactions, up to 3 Bank accounts`,
															vi: `< 200 giao dịch, tối đa 3 tài khoản ngân hàng`,
														}}
														price={PRICING_OPTIONS.BUSINESS.BOOKKEEPING.CORE}
													/>
													<TieredRow
														name={{ en: 'Growth', vi: 'Phát triển' }}
														detail={{
															en: `< 500 transactions, up to 6 Bank accounts, management reports`,
															vi: `< 500 giao dịch, lên đến 6 tài khoản ngân hàng, báo cáo quản lý`,
														}}
														price={PRICING_OPTIONS.BUSINESS.BOOKKEEPING.GROWTH}
													/>
												</ul>
											</div>
										</li>
									</ul>

									<Divider style="logo" />

									<div className="pricing-page__selected__details__price__item__header">
										<h3>{t('Payroll', 'Bảng Lương')}</h3>
										<span>
											{t(
												'For businesses with employees and/or contractors',
												'Cho các doanh nghiệp có nhân viên và/hoặc nhà thầu'
											)}
										</span>
									</div>

									<ul className="pricing-page__selected__details__price__item__features pricing-page__selected__details__price__item__features--listed">
										<ListedPriceItem
											title={{ en: 'Setup', vi: 'Thiết lập' }}
											subtitle={{
												en: 'Company onboarding, GL mapping, state IDs',
												vi: 'Giới thiệu công ty, lập bản đồ GL, ID tiểu bang',
											}}
											price={PRICING_OPTIONS.BUSINESS.PAYROLL.SETUP}
										/>

										<li className="pricing-page__selected__details__price__item__features__item">
											<div className="pricing-page__selected__details__price__item__features__item__header">
												<div>
													<Icon name={iconName} size={iconSize} />
												</div>
												<div className="pricing-page__selected__details__price__item__features__item__header-text">
													<h4>{t('Monthly Admin', 'Quản trị hàng tháng')}</h4>
													<span>
														{t(
															'Payroll processing, tax filings, employee support',
															'Xử lý bảng lương, nộp thuế, hỗ trợ nhân viên'
														)}
													</span>
												</div>
											</div>
											<div className="pricing-page__selected__details__price__item__features__item__price">
												<p>
													${PRICING_OPTIONS.BUSINESS.PAYROLL.MONTHLY_ADMIN} + $
													{PRICING_OPTIONS.BUSINESS.PAYROLL.EMPLOYEE_PAY} /employee
												</p>
											</div>
										</li>

										<li className="pricing-page__selected__details__price__item__features__item">
											<div className="pricing-page__selected__details__price__item__features__item__header">
												<div>
													<Icon name={iconName} size={iconSize} />
												</div>
												<div className="pricing-page__selected__details__price__item__features__item__header-text">
													<h4>{t('Year-End', 'Cuối Năm')}</h4>
													<span>
														{t(
															'W-2s and 1099s for employees and contractors',
															'W-2s và 1099s cho nhân viên và nhà thầu'
														)}
													</span>
												</div>
											</div>
											<div className="pricing-page__selected__details__price__item__features__item__price">
												<p>
													${PRICING_OPTIONS.BUSINESS.PAYROLL.FORM_GENERATE} / W-2
													or 1099
												</p>
											</div>
										</li>
									</ul>
								</Card>

								{/* Tax Returns */}
								<Card
									className="pricing-page__selected__details__price__item"
									style={{ animationDelay: '50ms' }}>
									<div className="pricing-page__selected__details__price__item__header">
										<h3>{t('Tax Returns', 'Tờ Khai Thuế')}</h3>
										<span>
											{t(
												'For LLCs, S-Corps, and C-Corps Tax Needs',
												'Dành cho nhu cầu thuế của LLC, S-Corps và C-Corps'
											)}
										</span>
									</div>

									<ul className="pricing-page__selected__details__price__item__features pricing-page__selected__details__price__item__features--tiered">
										<li className="pricing-page__selected__details__price__item__features__tiered__item">
											<div className="pricing-page__selected__details__price__item__features__tiered__item__header">
												<h4>Partnership 1065 / S-Corp 1120S</h4>
											</div>
											<div className="pricing-page__selected__details__price__item__features__tiered__item__list">
												<ul className="pricing-page__selected__details__price__item__features__tiered__item__list__items">
													<TieredRow
														name={{ en: 'Simple', vi: 'Đơn giản' }}
														detail={{
															en: 'Tax-ready books, 1 - 2 owners 1 state',
															vi: 'Sách sẵn sàng nộp thuế, 1 - 2 chủ sở hữu 1 tiểu bang',
														}}
														price={
															PRICING_OPTIONS.BUSINESS.TAX_PREPARATION
																.PARTNERSHIP_SIMPLE
														}
													/>
													<TieredRow
														name={{ en: 'Tax Preparation', vi: 'Chuẩn bị Thuế' }}
														detail={{
															en: 'Includes tax-ready books, 1-2 owners, 1 state',
															vi: 'Bao gồm sổ sách sẵn sàng nộp thuế, 1-2 chủ sở hữu, 1 tiểu bang',
														}}
														price={
															PRICING_OPTIONS.BUSINESS.TAX_PREPARATION
																.PARTNERSHIP_STANDARD
														}
													/>
												</ul>
											</div>
										</li>

										<li className="pricing-page__selected__details__price__item__features__tiered__item">
											<div className="pricing-page__selected__details__price__item__features__tiered__item__header">
												<h4> C-Corp 1120</h4>
											</div>
											<div className="pricing-page__selected__details__price__item__features__tiered__item__list">
												<ul className="pricing-page__selected__details__price__item__features__tiered__item__list__items">
													<TieredRow
														name={{ en: 'Simple', vi: 'Đơn giản' }}
														detail={{
															en: 'Tax-ready books, owner planning, single-state filing',
															vi: 'Sách sẵn sàng nộp thuế, lập kế hoạch chủ sở hữu, nộp đơn một tiểu bang',
														}}
														price={
															PRICING_OPTIONS.BUSINESS.TAX_PREPARATION
																.C_CORP_STANDARD
														}
													/>
												</ul>
											</div>
										</li>
									</ul>
								</Card>
							</div>
						</div>

						<div className="pricing-page__selected__add-ons">
							<h3 className="pricing-page__selected__add-ons__title">
								{t('Add-On Services', 'Dịch Vụ Bổ Sung')}
							</h3>
							<div className="pricing-page__selected__add-ons__list">
								<div>
									<div className="pricing-page__selected__add-ons__list__group">
										<div className="pricing-page__selected__add-ons__list__item">
											<div>
												<Icon name={iconName} size={iconSize} />
											</div>
											<div>
												<p>
													{t('Franchise Tax report:', 'Báo cáo Thuế Nhượng quyền:')}{' '}
													<strong>
														$
														{PRICING_OPTIONS.BUSINESS.ADD_ONS.FRANCHISE_TAX_REPORT}{' '}
														{t('each', 'mỗi bộ')}
													</strong>
												</p>
											</div>
										</div>

										<div className="pricing-page__selected__add-ons__list__item">
											<div>
												<Icon name={iconName} size={iconSize} />
											</div>
											<div>
												<p>
													{t('Multi-state apportionment:', 'Phân bổ đa tiểu bang:')}
													<strong>
														$
														{PRICING_OPTIONS.BUSINESS.ADD_ONS.MULTI_STATE_APPORTIONMENT}
														{t('/ state', '/ tiểu bang')}
													</strong>
												</p>
											</div>
										</div>
									</div>

									<div className="pricing-page__selected__add-ons__list__group">
										<div className="pricing-page__selected__add-ons__list__item">
											<div>
												<Icon name={iconName} size={iconSize} />
											</div>
											<div>
												<p>
													{t(
														'Additional Owner K-1 beyond 2:',
														'Thêm Chủ Sở Hữu K-1 vượt quá 2:'
													)}{' '}
													<strong>
														${PRICING_OPTIONS.BUSINESS.ADD_ONS.ADDITIONAL_K_1}{' '}
														{t('each', 'mỗi bộ')}
													</strong>
												</p>
											</div>
										</div>

										<div className="pricing-page__selected__add-ons__list__item">
											<div>
												<Icon name={iconName} size={iconSize} />
											</div>
											<div>
												<p>
													{t('Books clean-up:', 'Làm sạch sổ sách:')}{' '}
													<strong>
														{t(
															'1.5 x monthly fee per historical month',
															'1,5 x phí hàng tháng cho mỗi tháng lịch sử'
														)}
													</strong>
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</>
				)}

				{category === 'retirement' && (
					<div className="pricing-page__selected__details">
						<h2 className="pricing-page__selected__details__title">
							{t('Tax & Retirement Planning', 'Lập Kế Hoạch Thuế & Hưu Trí')}
						</h2>
						<Card className="pricing-page__selected__details__price__item pricing-page__selected__details__price__item--single">
							<h3>{t('Retirement & Advisory Services', 'Dịch Vụ Hưu Trí & Tư Vấn')}</h3>

							<div>${PRICING_OPTIONS.RETIREMENT.PLANNING_HOURLY_RATE} per hour</div>

							<div>
								{t(
									'Advisory services including tax planning, retirement planning. Minimum one-hour engagement.',
									'Dịch vụ tư vấn bao gồm lập kế hoạch thuế, lập kế hoạch hưu trí. Tối thiểu một giờ tham gia.'
								)}
							</div>
						</Card>
					</div>
				)}
			</div>

			<div className="pricing-page__disclaimer">
				{language === 'en' ? (
					<>
						<h4>Pricing Disclaimer</h4>
						<p>
							Pricing shown is for general guidance only. Final fees may vary
							based on the complexity of your tax situation, the scope of
							services required, and current market conditions. All quotes will
							be confirmed in writing before services begin.
						</p>
					</>
				) : (
					<>
						<h4>Miễn trừ trách nhiệm về giá cả</h4>
						<p>
							Giá hiển thị chỉ mang tính hướng dẫn chung. Phí cuối cùng có thể
							thay đổi dựa trên độ phức tạp của tình huống thuế của bạn, phạm vi
							dịch vụ cần thiết và điều kiện thị trường hiện tại. Tất cả các báo
							giá sẽ được xác nhận bằng văn bản trước khi dịch vụ bắt đầu.
						</p>
					</>
				)}
			</div>

			<Divider />

			<div className="pricing-page__consultation">
				{language === 'en' ? (
					<>
						<h1>Not sure which plan fits you best?</h1>
						<p>
							No worries - many clients start with questions before finding the
							right fit. At ITM Tax & Advisory, we will guide you through your
							options and recommend the package that works for your unique
							situation.
						</p>
					</>
				) : (
					<>
						<h1>Chưa chắc kế hoạch nào phù hợp với bạn nhất?</h1>
						<p>
							Đừng lo lắng - nhiều khách hàng bắt đầu với những câu hỏi trước
							khi tìm ra sự phù hợp. Tại ITM Tax & Advisory, chúng tôi sẽ hướng
							dẫn bạn qua các lựa chọn của bạn và đề xuất gói dịch vụ phù hợp
							với tình hình độc đáo của bạn.
						</p>
					</>
				)}

				<div className="pricing-page__consultation__cta">
					<Button
						className="prevent-select"
						onMouseOver={() => handleCTAHover(true)}
						onMouseOut={() => handleCTAHover(false)}
						onClick={handleGoTo}>
						<div>
							{isCTAHover ? (
								<img src={PHONECALL} alt="phone call" />
							) : (
								<Icon name="phone" size="small" />
							)}
						</div>
						<div>{t('Claim Free Consult', 'Yêu Cầu Tư Vấn Miễn Phí')}</div>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Pricing;
