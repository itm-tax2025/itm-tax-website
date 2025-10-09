import PoliciesNavigate from '../Policies/PoliciesNavigate';
import { POLICIES } from '../../utils/constant';
import '../Policies/Policies.scss';
const Privacy = () => {
	return (
		<div className="policy-page policy-page--privacy">
			<div className="policy-page__header">
				<div>
					<h1>Privacy Policy</h1>
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
					<h2>Personal Information We Collect</h2>
					<div className="policy-page__content__section__subsection">
						<ul>
							<li>
								<strong>Identifiers:</strong>
								name, mailing address, email, phone, SSN (when necessary for tax
								matters), government IDs.
							</li>
							<li>
								<strong>Financial/Tax Information:</strong>
								income, deductions, W‑2/1099 data, bank and account details for
								refunds/payments.
							</li>
							<li>
								<strong>Commercial/Transactional Data:</strong>
								engagement letters, invoices, payment records.
							</li>
							<li>
								<strong>Internet/Technical Data:</strong>
								IP address, device/browser data, pages viewed, cookies/analytics
								information.
							</li>
							<li>
								<strong>Professional/Employment/Education Data:</strong> as
								relevant to tax filings.
							</li>
							<li>
								<strong>Sensitive Data:</strong> SSN, account numbers, and other
								data used solely as necessary to perform tax and advisory
								services and as permitted by law.
							</li>
							<li>
								<strong>Inferences/Preferences:</strong> service interests you
								indicate.
							</li>
							<li>
								<strong>Sources:</strong> you, your
								representatives/employer/payors, tax authorities, publicly
								available sources, service providers (e.g., e‑signature, secure
								file‑share, payment processors), and analytics partners.
							</li>
						</ul>
					</div>
				</div>
				<div className="policy-page__content__section">
					<h2>How We Use Personal Information</h2>
					<h4>We use information to:</h4>
					<ul>
						<li>provide, maintain, and secure our Services;</li>
						<li>
							prepare and file tax returns, perform advisory engagements, and
							communicate with you;
						</li>
						<li>verify identity and prevent fraud;</li>
						<li>process payments and manage accounts;</li>
						<li>meet legal, regulatory, audit, and risk obligations;</li>
						<li>analyze site performance and improve the Services;</li>
						<li>
							send service‑related notices; marketing only with appropriate
							consent.
						</li>
					</ul>
				</div>
				<div className="policy-page__content__section">
					<h2>
						Our Regulatory Commitments (Financial Privacy & Tax Preparer Rules)
					</h2>
					<ul>
						<li>
							We maintain a written information security program commensurate
							with our size/activities and consistent with the FTC’s Safeguards
							Rule (16 C.F.R. Part 314) for non‑bank financial institutions.
							That Rule covers, among others, tax preparation firms and requires
							administrative, technical, and physical safeguards. Federal Trade
							Commission
						</li>{' '}
						<li>
							We do not share personal information with non‑affiliated third
							parties except as necessary to provide our Services or as
							permitted by law. For example, we share information with service
							providers (e.g., secure file‑share, e‑signature, payment
							processors) and as required by law (e.g., tax authorities). IRS
						</li>
						<li>
							We restrict access to personal information to employees,
							contractors, and agents who need it to provide our Services and
							who are subject to confidentiality obligations.
						</li>
					</ul>
				</div>
				<div className="policy-page__content__section">
					<h2>Disclosure of Personal Information</h2>
					<h4>We disclose personal information to:</h4>
					<ul>
						<li>
							<strong>Service providers/Processors:</strong>
							<p>
								secure IT hosting, e‑signature, client portal, analytics, email,
								and payment processors—bound by contract to use data only to
								provide services to us.
							</p>
						</li>
						<li>
							<strong>
								Professional collaborators, with your direction/consent:
							</strong>
							<p>
								e.g., your attorney, financial advisor, or another preparer
								assisting with your engagement.
							</p>
						</li>
						<li>
							<strong>Tax/Fiscal/Regulatory authorities and auditors:</strong>
							<p>as required by law.</p>
						</li>
						<li>
							<strong>Business transfers:</strong>
							<p>
								due diligence and transfer in a merger, sale, financing, or
								acquisition.
							</p>
						</li>
						<li>
							<strong>Legal/Compliance:</strong>
							<p>
								to protect rights, safety, and security; to detect/prevent
								fraud; to comply with subpoenas or legal process.
							</p>
						</li>
					</ul>
					<p>
						<h4>
							Selling or “Sharing” Personal Information for Cross‑Context
							Behavioral Advertising:
						</h4>
						<p>
							We do not sell personal data or process it for targeted
							advertising, as those terms are defined under the Texas Data
							Privacy and Security Act (Texas Business & Commerce Code, Chapter
							541). If this changes, we will update this Policy and provide the
							opt-out mechanisms required by Texas law. Oversight and
							enforcement are handled by the Office of the Texas Attorney
							General.
						</p>
					</p>
				</div>
				<div className="policy-page__content__section">
					<h2>Data Retention</h2>
					<p>
						We retain records only as long as necessary for the purposes
						described or as required by law and professional standards (often
						3–7+ years for tax records, subject to applicable law), after which
						we securely delete or anonymize them.
					</p>
				</div>
				<div className="policy-page__content__section">
					<h2>Security</h2>
					<p>
						We implement administrative, technical, and physical
						safeguards—including access controls, encryption in transit (and at
						rest where feasible), employee training, vendor oversight, and
						incident response—consistent with the FTC Safeguards Rule. No system
						is 100% secure, and we cannot guarantee absolute security. Federal
						Trade Commission
					</p>
				</div>
				<div className="policy-page__content__section">
					<h2>Your Privacy Choices and Rights</h2>
					<p>
						Texas Residents (TDPSA). Under the Texas Data Privacy and Security
						Act (Texas Business & Commerce Code, Chapter 541), you may have the
						right to: confirm whether we process your personal data; access it;
						correct inaccuracies; delete it; obtain a portable copy (where
						technically feasible); and opt out of targeted advertising, the sale
						of personal data, and certain profiling that produces legal or
						similarly significant effects. To exercise rights, email [Email] or
						call [Phone]. You may also send an authorized agent—or use a browser
						or device setting/extension that transmits a universal opt-out
						signal; we will honor valid signals after verifying your request. We
						will verify your identity and respond within 45 days (we may extend
						once by 45 days when reasonably necessary). Oversight and
						enforcement are handled by the Office of the Texas Attorney General.
					</p>
				</div>
				<div className="policy-page__content__section">
					<h2>Children</h2>
					<p>
						Our Services are not directed to children under 13 (or under 16 in
						the EEA/UK). We do not knowingly collect such data. If we learn we
						have done so, we will delete it.
					</p>
				</div>
				<div className="policy-page__content__section">
					<h2>International Transfers</h2>
					<p>
						If we transfer personal information outside your country (e.g., to
						U.S. systems or vendors), we will use lawful transfer mechanisms as
						required.
					</p>
				</div>
				<div className="policy-page__content__section">
					<h2>Do Not Track / Global Privacy Control</h2>
					<p>
						Some browsers send Do Not Track or GPC signals. Where legally
						required, we will treat a valid GPC signal as an opt‑out of
						sale/sharing.
					</p>
				</div>
				<div className="policy-page__content__section">
					<h2> Changes to This Policy</h2>
					<p>
						We will post any changes with a new “Last Updated” date. Material
						changes will be highlighted.
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
			<div className='policy-page__back-to-top' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
				Back to Top
			</div>
		</div>
	);
};

export default Privacy;
