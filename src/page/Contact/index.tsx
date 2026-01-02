import { useRef, useState } from 'react';
import Button from './../../ui/component/Button';
import Icon from './../../ui/component/Icon';
import './Contact.scss';
import CONTACTUSBACKGROUND from './../../assets/images/contact-us-background.jpg';
import MAILSEND from './../../assets/animated/send-mail.gif';
import LOGO from './../../assets/images/logo.png';
import { toast, ToastContainer } from 'react-toastify';
import { useAppSelector } from '../../store';

const Contact = () => {
	const language = useAppSelector((state) => state.theme.language);

	const t =
		language === 'en'
			? {
					title: "Let's Get In Touch",
					manualPrefix: 'Or just reach out manually to',
					firstName: 'First Name',
					firstNamePh: 'First name',
					lastName: 'Last Name',
					lastNamePh: 'Last name',
					email: 'Email',
					emailPh: 'john@example.com',
					phone: 'Phone Number',
					phoneHint: '(e.g. 1234567890)',
					phonePh: '1234567890',
					message: 'Message',
					messagePh: 'Your message here...',
					minChars: 'Minimum 50 characters required.',
					maxChars: 'You have reached the maximum character limit.',
					charUsed: (current: number, max: number, remaining: number) =>
						`${current} / ${max} characters used (${remaining} remaining)`,
					submit: 'Submit',
					alertRequired: 'Please fill in all required fields.',
					success:
						'Your message has been sent successfully! We will respond to your inquiry shortly.',
					fail: 'Failed to send message. Please try again later.',
					error:
						'An error occurred while sending your message. Please try again later.',
			  }
			: {
					title: 'Liên hệ với chúng tôi',
					manualPrefix: 'Hoặc liên hệ trực tiếp qua',
					firstName: 'Tên',
					firstNamePh: 'Nhập tên',
					lastName: 'Họ',
					lastNamePh: 'Nhập họ',
					email: 'Email',
					emailPh: 'john@example.com',
					phone: 'Số điện thoại',
					phoneHint: '(vd: 1234567890)',
					phonePh: '1234567890',
					message: 'Nội dung',
					messagePh: 'Nhập nội dung tin nhắn...',
					minChars: 'Cần tối thiểu 50 ký tự.',
					maxChars: 'Bạn đã đạt giới hạn ký tự tối đa.',
					charUsed: (current: number, max: number, remaining: number) =>
						`${current} / ${max} ký tự (còn ${remaining})`,
					submit: 'Gửi',
					alertRequired: 'Vui lòng điền đầy đủ các thông tin bắt buộc.',
					success:
						'Tin nhắn của bạn đã được gửi thành công! Chúng tôi sẽ phản hồi sớm.',
					fail: 'Gửi tin nhắn thất bại. Vui lòng thử lại sau.',
					error:
						'Đã xảy ra lỗi khi gửi tin nhắn. Vui lòng thử lại sau.',
			  };

	const [isCTAHover, setIsCTAHover] = useState(false);
	const [formMessage, setFormMessage] = useState<string>('');
	const [phoneNumberText, setPhoneNumberText] = useState<string>('');

	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setFormMessage(event.target.value);
	};

	const handleChangePhoneNumber = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const input = event.target.value;
		const sanitizedInput = input.replace(/\D/g, '');
		setPhoneNumberText(sanitizedInput);
	};

	const maxLength = 500;
	const currentLength = formMessage.length;
	const remainingCharacters = maxLength - currentLength;

	const firstNameRef = useRef<HTMLInputElement>(null);
	const lastNameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const phoneRef = useRef<HTMLInputElement>(null);
	const messageRef = useRef<HTMLTextAreaElement>(null);
	const form = useRef<HTMLFormElement>(null);

	const handleCTAHover = (hover: boolean) => {
		setIsCTAHover(hover);
	};

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();

		const firstName = firstNameRef.current?.value;
		const lastName = lastNameRef.current?.value;
		const email = emailRef.current?.value;
		const phone = phoneRef.current?.value;
		const message = messageRef.current?.value;

		if (!firstName || !lastName || !email || !phone || !message) {
			alert(t.alertRequired);
			return;
		}

		const data = {
			service_id: 'service_qqlc43q',
			template_id: 'template_66ovn0z',
			user_id: 'pATvgy5OaubpyqP7H',
			template_params: {
				firstName,
				lastName,
				email,
				phone,
				message,
			},
		};

		try {
			const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			if (res.status === 200) {
				toast.success(t.success, {
					position: 'top-center',
					autoClose: 10000,
					hideProgressBar: true,
					closeOnClick: true,
				});

				if (form.current) {
					form.current.reset();
					setFormMessage('');
					setPhoneNumberText('');
				}
			} else {
				toast.error(t.fail, {
					position: 'top-center',
					autoClose: 10000,
					hideProgressBar: true,
					closeOnClick: true,
				});
				return;
			}
		} catch (error) {
			console.error('Error sending email:', error);
			toast.error(t.error, {
				position: 'top-center',
				autoClose: 10000,
				hideProgressBar: true,
				closeOnClick: true,
			});
		}
	};

	return (
		<div className="contact-page">
			<div className="contact-page__container">
				<div className="contact-page__container__left">
					<img src={CONTACTUSBACKGROUND} alt="background" />
				</div>

				<div className="contact-page__container__right">
					<div className="contact-page__container__right__header">
						<div className="contact-page__container__right__header__logo">
							<img src={LOGO} alt="ITM Tax Logo" />
						</div>

						<div className="contact-page__container__right__header__text">
							<h1>{t.title}</h1>
							<p>
								{t.manualPrefix}{' '}
								<a href="mailto:info@itmtax.com">info@itmtax.com</a>
							</p>
						</div>
					</div>

					<form
						ref={form}
						className="contact-page__container__right__form"
						onSubmit={handleSubmit}
					>
						<div className="contact-page__container__right__form__group">
							<div
								className="contact-page__container__right__form__group__item"
								style={{ animationDelay: '1.5s' }}
							>
								<label htmlFor="firstName">{t.firstName}</label>
								<input
									type="text"
									id="firstName"
									name="firstName"
									placeholder={t.firstNamePh}
									required
									ref={firstNameRef}
								/>
							</div>

							<div
								className="contact-page__container__right__form__group__item"
								style={{ animationDelay: '1.6s' }}
							>
								<label htmlFor="lastName">{t.lastName}</label>
								<input
									type="text"
									id="lastName"
									name="lastName"
									placeholder={t.lastNamePh}
									required
									ref={lastNameRef}
								/>
							</div>
						</div>

						<div className="contact-page__container__right__form__group">
							<div
								className="contact-page__container__right__form__group__item"
								style={{ animationDelay: '1.7s' }}
							>
								<label htmlFor="email">{t.email}</label>
								<input
									type="email"
									id="email"
									name="email"
									placeholder={t.emailPh}
									required
									ref={emailRef}
								/>
							</div>
						</div>

						<div className="contact-page__container__right__form__group">
							<div
								className="contact-page__container__right__form__group__item"
								style={{ animationDelay: '1.8s' }}
							>
								<label htmlFor="phone">{t.phone}</label>
								<small>{t.phoneHint}</small>
								<input
									type="text"
									id="phone"
									name="phone"
									inputMode="numeric"
									pattern="[0-9]*"
									placeholder={t.phonePh}
									required
									maxLength={10}
									ref={phoneRef}
									onChange={handleChangePhoneNumber}
									value={phoneNumberText}
								/>
							</div>
						</div>

						<div className="contact-page__container__right__form__group">
							<div
								className="contact-page__container__right__form__group__item"
								style={{ animationDelay: '1.9s' }}
							>
								<label htmlFor="message">{t.message}</label>
								<textarea
									id="message"
									name="message"
									placeholder={t.messagePh}
									maxLength={500}
									rows={5}
									minLength={50}
									required
									ref={messageRef}
									onChange={handleChange}
								/>
								<div id="charCount">
									{currentLength < 50 && (
										<span style={{ color: 'gray' }}>{t.minChars}</span>
									)}
									{currentLength >= maxLength && (
										<span style={{ color: 'red' }}>{t.maxChars}</span>
									)}

									{currentLength >= 50 && currentLength < maxLength && (
										<>{t.charUsed(currentLength, maxLength, remainingCharacters)}</>
									)}
								</div>
							</div>
						</div>

						<Button
							type="submit"
							className="contact-page__container__right__form__submit"
							onMouseEnter={() => handleCTAHover(true)}
							onMouseLeave={() => handleCTAHover(false)}
						>
							<div className="contact-page__container__right__form__submit__icon">
								{isCTAHover ? (
									<img src={MAILSEND} alt="Sending..." />
								) : (
									<Icon name="email-alt" size="medium" />
								)}
							</div>
							<div className="contact-page__container__right__form__submit__text">
								<p>{t.submit}</p>
							</div>
						</Button>
					</form>
				</div>
			</div>

			<ToastContainer />
		</div>
	);
};

export default Contact;
