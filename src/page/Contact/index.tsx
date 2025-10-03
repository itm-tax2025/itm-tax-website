import { useRef, useState } from 'react';
import Button from '../../ui/component/Button';
import Icon from '../../ui/component/Icon';
import './Contact.scss';
import CONTACTUSBACKGROUND from '../../assets/images/contact-us-background.jpg';
import MAILSEND from '../../assets/animated/send-mail.gif';
import LOGO from '../../assets/images/logo.png';
import { toast, ToastContainer } from 'react-toastify';
const Contact = () => {
	const [isCTAHover, setIsCTAHover] = useState(false);
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
			alert('Please fill in all required fields.');
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
				toast.success(
					'Your message has been sent successfully! We will respond to your inquiry shortly.',
					{
						position: 'top-center',
						autoClose: 10000,
						hideProgressBar: true,
						closeOnClick: true,
					}
				);
				if (form.current) {
					form.current.reset();
				}
			} else {
				toast.error('Failed to send message. Please try again later.', {
					position: 'top-center',
					autoClose: 10000,
					hideProgressBar: true,
					closeOnClick: true,
				});
				return;
			}
		} catch (error) {
			console.error('Error sending email:', error);
			toast.error(
				'An error occurred while sending your message. Please try again later.',
				{
					position: 'top-center',
					autoClose: 10000,
					hideProgressBar: true,
					closeOnClick: true,
				}
			);
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
							<h1>Let's Get In Touch</h1>
							<p>
								Or just reach out manually to{' '}
								<a href="mailto:info@itmtax.com">info@itmtax.com</a>
							</p>
						</div>
					</div>
					<form
						ref={form}
						className="contact-page__container__right__form"
						onSubmit={handleSubmit}>
						<div className="contact-page__container__right__form__group">
							<div
								className="contact-page__container__right__form__group__item"
								style={{ animationDelay: '1.5s' }}>
								<label htmlFor="firstName">First Name</label>
								<input
									type="text"
									id="firstName"
									name="firstName"
									placeholder="First name"
									required
									ref={firstNameRef}
								/>
							</div>
							<div
								className="contact-page__container__right__form__group__item"
								style={{ animationDelay: '1.6s' }}>
								<label htmlFor="lastName">Last Name</label>
								<input
									type="text"
									id="lastName"
									name="lastName"
									placeholder="Last name"
									required
									ref={lastNameRef}
								/>
							</div>
						</div>
						<div className="contact-page__container__right__form__group">
							<div
								className="contact-page__container__right__form__group__item"
								style={{ animationDelay: '1.7s' }}>
								<label htmlFor="email">Email</label>
								<input
									type="email"
									id="email"
									name="email"
									placeholder="john@example.com"
									required
									ref={emailRef}
								/>
							</div>
						</div>

						<div className="contact-page__container__right__form__group">
							<div
								className="contact-page__container__right__form__group__item"
								style={{ animationDelay: '1.8s' }}>
								<label htmlFor="phone">Phone Number</label>
								<small>(e.g. 1234567890)</small>
								<input
									type="tel"
									id="phone"
									name="phone"
									pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
									placeholder="1234567890"
									required
									ref={phoneRef}
								/>
							</div>
						</div>
						<div className="contact-page__container__right__form__group">
							<div
								className="contact-page__container__right__form__group__item"
								style={{ animationDelay: '1.9s' }}>
								<label htmlFor="message">Message</label>
								<textarea
									id="message"
									name="message"
									placeholder="Your message here..."
									maxLength={500}
									rows={5}
									minLength={50}
									required
									ref={messageRef}
								/>
							</div>
						</div>
						<Button
							type="submit"
							className="contact-page__container__right__form__submit"
							onMouseEnter={() => handleCTAHover(true)}
							onMouseLeave={() => handleCTAHover(false)}>
							<div className="contact-page__container__right__form__submit__icon">
								{isCTAHover ? (
									<img src={MAILSEND} alt="Sending..." />
								) : (
									<Icon name="email-alt" size="medium" />
								)}
							</div>
							<div className="contact-page__container__right__form__submit__text">
								<p>Submit</p>
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
