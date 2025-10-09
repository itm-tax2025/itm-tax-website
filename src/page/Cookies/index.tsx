import PoliciesNavigate from '../Policies/PoliciesNavigate';
import { POLICIES } from '../../utils/constant';
import '../Policies/Policies.scss';
const Cookies = () => {
	return (
		<div className="policy-page policy-page--cookies">
			<div className="policy-page__header">
				<div>
					<h1>Cookies Policy</h1>
				</div>
				<div>
					<p>Last updated: {POLICIES.LAST_UPDATED}</p>
				</div>
			</div>
			<PoliciesNavigate />
			<div className="policy-page__content">
				<div className="policy-page__content__section">
					<h2>Who We Are</h2>
					<p>
						ITM Tax and Advisory, LLC ("ITM," "we," "our," "us") provides tax
						preparation, planning, and advisory services. Contact: [
						{POLICIES.ADDRESS}], [{POLICIES.EMAIL}], [{POLICIES.PHONE}].
					</p>
				</div>
				<div className="policy-page__content__section">
					<h2>What Are Cookies?</h2>
					<p>
						Cookies and similar technologies (pixels, local storage, SDKs) are
						small files placed on your device that help operate, protect, and
						improve our Site.
					</p>
				</div>
				<div className="policy-page__content__section">
					<h2>How We Use Cookies</h2>
					<h4>We use information to:</h4>
					<ul>
						<li>
							<strong>Strictly Necessary:</strong>
							site security, session management, forms, authentication.
						</li>
						<li>
							<strong>Preferences:</strong>
							remember settings (e.g., locale). <strong>Analytics:</strong>{' '}
							understand
						</li>
						<li>
							<strong>Traffic and Performance:</strong> analyze site usage
							(e.g., page views, browser type).
						</li>
						<li>
							<strong>Security/Fraud Prevention:</strong> detect irregular
							activity. (Optional)
						</li>
						<li>
							<strong>Advertising/Retargeting:</strong> only if enabled and with
							required consent.
						</li>
					</ul>
				</div>
				<div className="policy-page__content__section">
					<h2>Third‑Party Cookies We May Use</h2>
					<ul>
						<li>
							<strong>Analytics:</strong>
							<p>
								[e.g., Google Analytics], to analyze usage and improve the Site.
							</p>
						</li>
						<li>
							<strong>Performance/Infrastructure:</strong>
							<p>[e.g., CDN, DDoS protection].</p>
						</li>
						<li>
							<strong>Functional:</strong>
							<p>[e.g., e‑signature widget, scheduling tool].</p>
						</li>
					</ul>
					<p>
						We contractually require providers to protect data and use it only
						for our purposes, but their practices are also governed by their own
						policies.
					</p>
				</div>
				<div className="policy-page__content__section">
					<h2>Your Choices</h2>
					<ul>
						<li>
							<strong>Consent Banner:</strong>
							In regions where required, we won’t set non‑essential cookies
							until you give consent. You can withdraw consent any time via
							[link to cookie settings modal].
						</li>
						<li>
							<strong>Browser Controls:</strong> You can block/delete cookies in
							your browser settings; doing so may impact Site functionality.
						</li>
						<li>
							<strong>Global Privacy Control (GPC):</strong> Where required, we
							honor a valid GPC signal as an opt‑out of sale/sharing under state
							law.
						</li>
						<li>
							<strong>Analytics Opt‑Out:</strong> If using Google Analytics,
							consider enabling IP masking and offering opt‑out mechanisms.
						</li>
					</ul>
				</div>
				<div className="policy-page__content__section">
					<h2>Data Collected via Cookies</h2>
					<p>
						Device identifiers, IP address, usage data, and approximate location
						(derived from IP). We do not use cookies to collect sensitive tax
						return information.
					</p>
				</div>
				<div className="policy-page__content__section">
					<h2>Retention</h2>
					<p>
						Cookies remain until they expire or you delete them. Session cookies
						expire when you close the browser; persistent cookies last from 24
						hours up to 24 months (adjust based on actual tools).
					</p>
				</div>
				<div className="policy-page__content__section">
					<h2>Changes</h2>
					<p>
						We may update this Cookie Policy and our cookie list from time to
						time. Material changes will be highlighted in the banner or on this
						page.
					</p>
				</div>
			</div>
			<div className="policy-page__footer">
				<h2>How to Contact Us</h2>
				<p>
					Questions or requests: [{POLICIES.EMAIL}] | [{POLICIES.PHONE}] | [
					{POLICIES.ADDRESS}].
				</p>
			</div>
			<div
				className="policy-page__back-to-top"
				onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
				Back to Top
			</div>
		</div>
	);
};

export default Cookies;
