import PoliciesNavigate from '../Policies/PoliciesNavigate';
import { POLICIES } from '../../utils/constant';
import '../Policies/Policies.scss';
const Disclosures = () => {
	return (
		<div className="policy-page policy-page--disclosures">
			<div className="policy-page__header">
				<div>
					<h1>Disclosures</h1>
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
					<h2>General Information Only; No Reliance</h2>
					<p>
						Articles, calculators, newsletters, and other content on this Site
						are for informational purposes and not a substitute for personalized
						advice. Do not rely on them to make decisions without consulting a
						qualified professional who has reviewed your facts.
					</p>
				</div>
				<div className="policy-page__content__section">
					<h2>Tax‑Preparer Disclosure & Consent (IRC §7216)</h2>
					<p>
						We will not use or disclose your tax return information for purposes
						not necessary to prepare or file your return without your written
						consent that meets IRS requirements. We will present separate
						consent forms when required. IRS
					</p>
				</div>
				<div className="policy-page__content__section">
					<h2>Circular 230/Tax Advice Caution</h2>
					<p>
						Unless explicitly stated in a signed engagement letter or written
						advice labeled as such, Site content is not written tax advice and
						may not be used to avoid penalties under the Internal Revenue Code.
					</p>
				</div>
				<div className="policy-page__content__section">
					<h2>Testimonials; Past Results</h2>
					<p>
						Client stories or testimonials reflect individual experiences;
						results vary. No outcome is guaranteed.
					</p>
				</div>
				<div className="policy-page__content__section">
					<h2>Third‑Party Tools & Links</h2>
					<p>
						We may reference or link to third‑party resources. We do not control
						or endorse them and are not responsible for their content, policies,
						or security.
					</p>
				</div>
				<div className="policy-page__content__section">
					<h2>Advertising/Affiliates (if applicable)</h2>
					<p>
						If we receive compensation from a third party or provide affiliate
						links, we will disclose that relationship near the relevant content
						or link.
					</p>
				</div>
				<div className="policy-page__content__section">
					<h2>Electronic Communications</h2>
					<p>
						By providing a phone number or email, you consent to receive
						service‑related messages. Marketing messages will be sent only with
						appropriate consent and include opt‑out instructions (e.g., reply
						STOP to SMS). Message/data rates may apply.
					</p>
				</div>
				<div className="policy-page__content__section">
					<h2>Recordkeeping and Retention</h2>
					<p>
						We keep engagement and tax records for periods required by
						law/professional standards, then delete or archive them securely.
					</p>
				</div>
				<div className="policy-page__content__section">
					<h2>State‑Specific Privacy Rights</h2>
					<p>
						Texas residents have rights under the Texas Data Privacy and
						Security Act (Texas Business & Commerce Code, Chapter 541) and can
						exercise them via [{POLICIES.EMAIL}], [{POLICIES.PHONE}], or a
						recognized universal opt-out mechanism (if applicable). Office of
						the Texas Attorney General.
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

export default Disclosures;
