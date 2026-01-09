import './Home.scss';
import Button from './../../ui/component/Button';
import TEAMIMAGE from './../../assets/images/IVY-TONY-TRANSPARENT.png';
import Card from './../../ui/component/Card';
import Icon from './../../ui/component/Icon';
import IVY from './../../assets/images/ivy-transparent.png';
import TONY from './../../assets/images/tony-transparent.png';
import Divider from './../../ui/component/NonFunctional/Divider';
import { useNavigate } from 'react-router-dom';
import { useMemo, useState, type JSX } from 'react';
import { useAppSelector } from '../../store';

type Language = 'en' | 'vn';

type Member = {
	target: string;
	name: string;
	role: string;
	image: string;
	intro: string;
	highlights: string[];
};

type ReasonCard = {
	icon: string;
	delay: string;
	title: string;
	subtitle: string;
	body: JSX.Element;
};

const CONTENT: Record<
	Language,
	{
		hero: { title: string; description: string; cta: string };
		sections: { why: string; team: string };
		team: { details: string };
		reasons: {
			title: string;
			subtitle: string;
			cards: Array<Omit<ReasonCard, 'delay'> & { delayMs: number }>;
		};
		members: Member[];
	}
> = {
	en: {
		hero: {
			title: 'Tax Made Easy - Results Made Real.',
			description:
				'Your business deserves more than just someone crunching numbers, it deserves a partner who truly cares about your success. We take care of your taxes, bookkeeping, and payroll with accuracy and personal attention, giving you the freedom to focus on growing the business you have worked so hard to build. With clear numbers, reliable support, and a trusted advisor by your side, you will have the peace of mind and confidence to make smart decisions and move your business forward with ease.',
			cta: 'Book Your Financial Clarity Session',
		},
		sections: {
			why: 'Why Choose Us?',
			team: 'Meet Our Team',
		},
		team: {
			details: 'Details',
		},
		reasons: {
			title: 'Why Choose Us?',
			subtitle: '',
			cards: [
				{
					icon: 'trust',
					delayMs: 500,
					title: 'Expertise You Can Trust',
					subtitle: 'Dedicated to Your Success',
					body: (
						<p>
							Our team of <strong>seasoned financial experts</strong> brings
							decades of collective knowledge and{' '}
							<strong>deep, specialized expertise</strong> built across diverse
							market conditions.
						</p>
					),
				},
				{
					icon: 'completed',
					delayMs: 400,
					title: 'Comprehensive Services',
					subtitle: 'Covering Your Full Financial Spectrum',
					body: (
						<p>
							We offer a{' '}
							<strong>comprehensive suite of financial services</strong>,
							designed to cover all your business and personal needs under one
							roof. Our support extends far beyond simple transaction recording.
						</p>
					),
				},
				{
					icon: 'award',
					delayMs: 300,
					title: 'Proven Results',
					subtitle: 'Your Goals Are Our Track Record',
					body: (
						<p>
							Our value is demonstrated by the <strong>proven results</strong>{' '}
							we&apos;ve delivered across various industries and financial
							situations. We never offer theoretical advice; we provide{' '}
							<strong>a consistent, verifiable track record</strong> of
							successful client outcomes.
						</p>
					),
				},
			],
		},
		members: [
			{
				target: 'ivy-truong-cpa',
				name: 'Ivy Truong, CPA',
				role: 'Founder',
				image: IVY,
				intro:
					'Ivy Truong, a Certified Public Accountant (CPA), specializes in the complex tax and advisory needs of high-net-worth individuals and business clients.',
				highlights: [
					'Specializes in High-Net-Worth & Small Business Clients',
					'Complex Taxation',
					'Focus on Strategic Tax Minimization and Wealth Transfer',
					'Combining Large-Firm Sophistication with Boutique Service',
				],
			},
			{
				target: 'tony-hoang-ea',
				name: 'Tony Hoang, EA',
				role: 'Co-Founder',
				image: TONY,
				intro:
					"Tony Hoang, Co-Founder, leads the firm's technology and digital strategy, ensuring operational efficiency and an exceptional user experience.",
				highlights: [
					'Expert in Tax Technology Solutions',
					'Focus on Streamlining Operations',
					'Enhancing Client Experience through Innovation',
					'Bridging the Gap between Finance and Technology',
				],
			},
		],
	},

	vn: {
		hero: {
			title: 'Thuế Dễ Dàng - Kết Quả Thực Tế.',
			description:
				'Doanh nghiệp của bạn xứng đáng nhận được nhiều hơn là một người chỉ biết tính toán, mà còn là một đối tác thực sự quan tâm đến sự thành công của bạn. Chúng tôi chăm sóc cho thuế, sổ sách kế toán và tiền lương của bạn với độ chính xác và sự chú ý cá nhân, giúp bạn có thời gian tập trung vào việc phát triển doanh nghiệp mà bạn đã nỗ lực xây dựng. Với những con số rõ ràng, sự hỗ trợ đáng tin cậy và một cố vấn đáng tin cậy bên cạnh, bạn sẽ có được sự an tâm và tự tin để đưa ra những quyết định thông minh và tiến xa hơn trong kinh doanh.',
			cta: 'Đặt Lịch Hẹn Tư Vấn Tài Chính',
		},
		sections: {
			why: 'Tại sao chọn chúng tôi?',
			team: 'Gặp gỡ Đội ngũ của chúng tôi',
		},
		team: {
			details: 'Chi tiết',
		},
		reasons: {
			title: 'Tại sao chọn chúng tôi?',
			subtitle: '',
			cards: [
				{
					icon: 'trust',
					delayMs: 500,
					title: 'Chuyên môn mà bạn có thể tin tưởng',
					subtitle: 'Tận tâm với sự thành công của bạn',
					body: (
						<p>
							Đội ngũ của chúng tôi gồm những{' '}
							<strong>chuyên gia tài chính dày dạn kinh nghiệm</strong> với
							nhiều thập kỷ kiến thức và <strong>chuyên môn sâu rộng</strong>{' '}
							xây dựng qua nhiều điều kiện thị trường khác nhau.
						</p>
					),
				},
				{
					icon: 'completed',
					delayMs: 400,
					title: 'Dịch vụ toàn diện',
					subtitle: 'Phủ sóng toàn bộ lĩnh vực tài chính của bạn',
					body: (
						<p>
							Chúng tôi cung cấp{' '}
							<strong>một loạt các dịch vụ tài chính toàn diện</strong>, được
							thiết kế để đáp ứng tất cả các nhu cầu kinh doanh và cá nhân của
							bạn dưới một mái nhà. Sự hỗ trợ của chúng tôi vượt xa việc chỉ ghi
							chép giao dịch đơn thuần.
						</p>
					),
				},
				{
					icon: 'award',
					delayMs: 300,
					title: 'Kết quả đã được chứng minh',
					subtitle: 'Mục tiêu của bạn là hồ sơ theo dõi của chúng tôi',
					body: (
						<p>
							Giá trị của chúng tôi được thể hiện qua{' '}
							<strong>kết quả đã được chứng minh</strong> mà chúng tôi đã mang
							lại trong các ngành và tình huống tài chính khác nhau. Chúng tôi
							không bao giờ đưa ra lời khuyên mang tính lý thuyết; chúng tôi
							cung cấp{' '}
							<strong>một hồ sơ theo dõi nhất quán và có thể xác minh</strong>{' '}
							về những kết quả thành công của khách hàng.
						</p>
					),
				},
			],
		},
		members: [
			{
				target: 'ivy-truong-cpa',
				name: 'Ivy Truong, CPA',
				role: 'Người sáng lập',
				image: IVY,
				intro:
					'Ivy Truong, một Kế toán (CPA), chuyên về các nhu cầu thuế và tư vấn phức tạp của các cá nhân có giá trị ròng cao và khách hàng doanh nghiệp.',
				highlights: [
					'Chuyên giúp khách hàng có giá trị ròng cao & doanh nghiệp nhỏ',
					'Thuế phức tạp',
					'Tập trung vào chiến lược giảm thiểu thuế và chuyển giao tài sản',
				],
			},
			{
				target: 'tony-hoang-ea',
				name: 'Tony Hoang, EA',
				role: 'Đồng sáng lập',
				image: TONY,
				intro:
					'Tony Hoang, Đồng sáng lập, dẫn dắt chiến lược công nghệ và kỹ thuật số của công ty, đảm bảo hiệu quả hoạt động và trải nghiệm người dùng xuất sắc.',
				highlights: [
					'Chuyên gia về Giải pháp Công nghệ Thuế',
					'Tập trung vào tinh giản hoạt động',
					'Nâng cao Trải nghiệm khách hàng thông qua đổi mới',
					'Kết nối Khoảng cách giữa tài chính và công nghệ',
				],
			},
		],
	},
};

const Home = () => {
	const navigate = useNavigate();
	const language = useAppSelector((state) => state.theme.language) as Language;

	const [selectedMember, setSelectedMember] = useState<string[]>([]);

	const content = useMemo(() => CONTENT[language ?? 'en'], [language]);

	const handleGoTo = () => navigate('/contact');

	const toggleMember = (target: string) => {
		setSelectedMember((prev) =>
			prev.includes(target)
				? prev.filter((t) => t !== target)
				: [...prev, target]
		);
	};

	const isExpanded = (target: string) => selectedMember.includes(target);

	return (
		<div className="home-page">
			<section className="home-page__hero">
				<div className="home-page__hero__content">
					<h1>{content.hero.title}</h1>
					<p>{content.hero.description}</p>
					<div className="home-page__hero__content__cta">
						<Button onClick={handleGoTo}>{content.hero.cta}</Button>
					</div>
				</div>

				<div className="home-page__hero__image prevent-select">
					<img src={TEAMIMAGE} alt="Ivy and Tony" />
				</div>
			</section>

			<section className="home-page__reason">
				<div className="home-page__reason__header">
					<h1>{content.sections.why}</h1>
				</div>

				<div className="home-page__reason__cards">
					{content.reasons.cards.map((c, idx) => (
						<Card
							key={`reason-${idx}`}
							className="home-page__reason__cards__item"
							style={{ animationDelay: `${c.delayMs}ms` }}>
							<Icon name={c.icon} size="large" />
							<h3>{c.title}</h3>
							<h5>{c.subtitle}</h5>
							<span className="line-break"></span>
							<span>{c.body}</span>
						</Card>
					))}
				</div>
			</section>

			<Divider />

			<section className="home-page__about" id="about">
				<div className="home-page__about__header">
					<h1>{content.sections.team}</h1>
				</div>

				<div className="home-page__about__content">
					{content.members.map((member, index) => {
						const expanded = isExpanded(member.target);

						return (
							<Card
								key={member.target}
								className="home-page__about__content__teammember"
								style={{ animationDelay: `${500 + index * 100}ms` }}
								aria-details={member.target}>
								<div className="home-page__about__content__teammember__info prevent-select">
									<div className="home-page__about__content__teammember__info__image">
										<img src={member.image} alt={member.name} />
									</div>

									<div className="home-page__about__content__teammember__info__title">
										<h3>{member.name}</h3>
										<p>{member.role}</p>
									</div>

									<div className="home-page__about__content__teammember__info__expand">
										<Button
											onClick={() => toggleMember(member.target)}
											className={`home-page__about__content__teammember__info__expand__button ${
												expanded
													? 'home-page__about__content__teammember__info__expand__button--active'
													: ''
											}`}>
											{content.team.details}
											<Icon name="caret-down" size="small" />
										</Button>
									</div>
								</div>

								<div className="home-page__about__content__teammember__intro">
									<p>{member.intro}</p>
								</div>

								<div
									className={`home-page__about__content__teammember__highlights ${
										expanded
											? 'home-page__about__content__teammember__highlights--expanded'
											: ''
									}`}>
									{expanded && <Divider style="simple" />}
									<ul>
										{member.highlights.map((highlight, idx) => (
											<li
												key={`${member.target}-highlight-${idx}`}
												style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
												{highlight}
											</li>
										))}
									</ul>
								</div>
							</Card>
						);
					})}
				</div>
			</section>

			<Divider />
		</div>
	);
};

export default Home;
