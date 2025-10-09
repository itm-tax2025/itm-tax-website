import PoliciesNavigate from '../Policies/PoliciesNavigate';
import { POLICIES } from '../../utils/constant';
import '../Policies/Policies.scss';
const Terms = () => {
	return (
		<div className="policy-page policy-page--terms">
			<div className="policy-page__header">
				<div>
					<h1>Terms of Service</h1>
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
					<h2>Acceptance of Terms</h2>
					<p>
						By accessing [{POLICIES.DOMAIN}] (the “Site”) or using our Services,
						you agree to these Terms of Use (the “Terms”). If you do not agree,
						do not use the Site.
					</p>
				</div>
				<div className="policy-page__content__section">
					<h2>No Professional Relationship from Website Content</h2>
					<p>
						Content on the Site is general information only and not tax, legal,
						accounting, or investment advice. No client relationship is formed
						by viewing the Site, contacting us, or scheduling a consultation
						until we sign a written engagement letter. You should not act on
						Site content without professional advice tailored to your situation.
					</p>
				</div>
				<div className="policy-page__content__section">
					<h2>Eligibility; Accounts</h2>
					<h4>We use information to:</h4>
					<p>
						You must be at least 18 to use interactive features. If you create
						an account, you are responsible for maintaining its confidentiality
						and for all activities under it.
					</p>
				</div>
				<div className="policy-page__content__section">
					<h2>Permitted and Prohibited Uses</h2>
					<ul>
						<li>
							You may use the Site for lawful purposes only. You will not:
							<ul>
								<li>attempt to evade taxes or solicit unlawful advice;</li>
								<li>probe, scan, or test system vulnerabilities;</li>
								<li>
									scrape, crawl, or harvest data except as allowed by
									robots.txt;
								</li>
								<li>upload malicious code;</li>
								<li>infringe IP rights or violate privacy;</li>
								<li>misrepresent your identity or affiliation.</li>
							</ul>
						</li>
					</ul>
				</div>
				<div className="policy-page__content__section">
					<h2>Intellectual Property; Limited License</h2>
					<p>
						The Site and its content are owned by ITM or our licensors and are
						protected by IP laws. We grant you a limited, nonexclusive,
						revocable license to access the Site for personal, noncommercial
						use. All other rights are reserved. You may not use our trademarks
						without written consent.
					</p>
				</div>
				<div className="policy-page__content__section">
					<h2>User Content & Feedback</h2>
					<p>
						If you submit content (e.g., documents via a portal), you grant us
						the rights necessary to provide the Services and comply with law. If
						you send suggestions or feedback, you grant us a perpetual,
						irrevocable, royalty‑free license to use them without restriction or
						compensation.
					</p>
				</div>
				<div className="policy-page__content__section">
					<h2>Third‑Party Links, Tools, and Services</h2>
					<p>
						We may link to or embed third‑party services (e.g., e‑signature,
						client portal, payment processing, analytics). We are not
						responsible for third‑party content or practices. Your use of
						third‑party services is governed by their terms and privacy
						policies.
					</p>
				</div>
				<div className="policy-page__content__section">
					<h2>Disclaimers</h2>
					<p>
						THE SITE AND ALL CONTENT ARE PROVIDED “AS IS” AND “AS AVAILABLE.” TO
						THE MAXIMUM EXTENT PERMITTED BY LAW, ITM DISCLAIMS ALL WARRANTIES,
						EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A
						PARTICULAR PURPOSE, NON‑INFRINGEMENT, AND THAT THE SITE WILL BE
						ERROR‑FREE, SECURE, OR UNINTERRUPTED. ONLINE MATERIALS MAY BE OUT OF
						DATE OR INCOMPLETE.
					</p>
				</div>
				<div className="policy-page__content__section">
					<h2>Limitation of Liability</h2>
					<p>
						TO THE MAXIMUM EXTENT PERMITTED BY LAW, ITM, ITS OWNERS, EMPLOYEES,
						AND AGENTS WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL,
						CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES; LOSS OF
						PROFITS/REVENUES; LOSS OF DATA OR GOODWILL; OR BUSINESS
						INTERRUPTION, ARISING FROM OR RELATED TO THE SITE OR THESE TERMS,
						EVEN IF ADVISED OF THE POSSIBILITY. OUR AGGREGATE LIABILITY FOR ALL
						CLAIMS RELATING TO THE SITE WILL NOT EXCEED $100 OR THE AMOUNT YOU
						PAID US FOR SITE ACCESS IN THE 12 MONTHS BEFORE THE EVENT—WHICHEVER
						IS GREATER. Some jurisdictions do not allow certain limitations; in
						those jurisdictions, our liability is limited to the maximum extent
						permitted by law.
					</p>
				</div>
				<div className="policy-page__content__section">
					<h2>Indemnification</h2>
					<p>
						You agree to defend, indemnify, and hold harmless ITM and its
						personnel from any claims, damages, liabilities, costs, and expenses
						(including reasonable attorneys’ fees) arising from your use of the
						Site, your User Content, or your breach of these Terms.
					</p>
				</div>
				<div className="policy-page__content__section">
					<h2>DMCA Notice</h2>
					<p>
						If you believe content on the Site infringes your copyright, send a
						written notice to our DMCA Agent: [{POLICIES.EMAIL}]. Include: [Your
						Name], [Email], [Phone] with:
					</p>
					<ol>
						<li>Your signature;</li>
						<li>Identification of the copyrighted work;</li>
						<li>Identification of the allegedly infringing material;</li>
						<li>Contact information;</li>
						<li>A statement of good‑faith belief; and</li>
						<li>
							A statement, under penalty of perjury, of accuracy and authority.
						</li>
					</ol>
					<p>We may remove content and terminate repeat infringers.</p>
				</div>
				<div className="policy-page__content__section">
					<h2>Governing Law; Venue</h2>
					<p>
						These Terms are governed by the laws of the State of [GOVERNING
						STATE], without regard to conflicts principles. Except as provided
						in Dispute Resolution, exclusive venue lies in the state or federal
						courts located in [COUNTY, STATE], and you consent to personal
						jurisdiction there.
					</p>
				</div>
				<div className="policy-page__content__section">
					<h2>
						Dispute Resolution—Arbitration & Class‑Action Waiver (U.S.
						Residents)
					</h2>
					<ul>
						<li>
							<strong>Binding Arbitration:</strong>
							<p>
								Except for small‑claims or injunctive relief, any dispute
								arising out of or relating to these Terms or the Site will be
								resolved by binding arbitration under the Federal Arbitration
								Act and the AAA Consumer Arbitration Rules by a single
								arbitrator.
							</p>
						</li>
						<li>
							<strong>Class/Collective Action Waiver:</strong>
							<p>
								Disputes must be brought individually; no class, collective, or
								representative actions.
							</p>
						</li>
						<li>
							<strong>30‑Day Opt‑Out:</strong>
							<p>
								You may opt out by emailing [{POLICIES.EMAIL}] within 30 days of
								first accepting these Terms.
							</p>
						</li>
						<li>
							<strong>Location & Fees:</strong>
							<p>
								Arbitration will occur in [FORT BEND, TEXAS] or via remote
								video, with fee‑shifting as required by applicable rules/law. If
								any portion of this section is found unenforceable, it will be
								severed, and the remainder enforced to the fullest extent
								permitted.
							</p>
						</li>
					</ul>
				</div>
				<div className="policy-page__content__section">
					<h2>Export/Trade Controls</h2>
					<p>
						You will comply with all applicable export, re‑export, and sanctions
						laws.
					</p>
				</div>
				<div className="policy-page__content__section">
					<h2>Changes to Terms</h2>
					<p>
						We may update these Terms from time to time. Continued use of the
						Site after changes means you accept the updated Terms.
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

export default Terms;
