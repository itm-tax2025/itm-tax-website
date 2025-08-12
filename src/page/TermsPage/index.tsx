import Address from '../../ui/layout/section/Address';
import '../PolicyPages.scss';
import { Breadcrumbs } from '../../ui/component/Breadcrumb';
const TermsPage = () => {
	return (
		<div className="policy-page">
			<div className="header-container">
				<Breadcrumbs />
				<h1>TERMS AND CONDITIONS</h1>
				<p className="last-updated">
					<strong>Last Updated:</strong> July 23, 2025
				</p>
				<div className="header-description">
					<p>
						Welcome to ITM Tax & Advisory, LLC ("ITM," "we," "us," or "our").
						These Terms and Conditions ("Terms") govern your use of our website,
						services, and any content or features provided by ITM Tax &
						Advisory, LLC (collectively, the "Services"). By accessing or using
						our Services, you agree to be bound by these Terms and all
						applicable laws and regulations. If you do not agree with any of
						these Terms, you are prohibited from using or accessing our
						Services.
					</p>
				</div>
			</div>
			<div className="content-container">
				<h2>1. Acceptance of Terms</h2>
				<p>
					By using our Services, you acknowledge that you have read, understood,
					and agree to be bound by these Terms, as well as our{' '}
					<a href="/privacy">Privacy Policy</a>, which is incorporated herein by
					reference.
				</p>

				<h2>2. Services Offered</h2>
				<p>
					ITM Tax & Advisory, LLC provides tax preparation, tax planning,
					advisory, and other related financial consulting services. The
					specific scope of services will be outlined in a separate engagement
					letter or service agreement between ITM Tax & Advisory, LLC and the
					client.
				</p>

				<h2>3. Client Responsibilities</h2>
				<p>As a client or user of our Services, you agree to:</p>
				<ul>
					<li>
						Provide accurate, complete, and timely information as requested by
						ITM Tax & Advisory, LLC for the performance of our services.
					</li>
					<li>
						Cooperate fully with our staff and provide necessary access to
						documents and information.
					</li>
					<li>
						Understand that the accuracy of our services is dependent on the
						accuracy and completeness of the information you provide.
					</li>
					<li>Comply with all applicable laws and regulations.</li>
				</ul>

				<h2>4. No Guarantee of Results</h2>
				<p>
					While ITM Tax & Advisory, LLC strives to provide high-quality and
					accurate services, we do not guarantee specific outcomes, tax savings,
					or financial results. Tax laws are complex and subject to change, and
					individual circumstances vary. Any projections or advice provided are
					based on information available at the time and our professional
					judgment.
				</p>

				<h2>5. Confidentiality</h2>
				<p>
					ITM Tax & Advisory, LLC is committed to protecting the confidentiality
					of your information. We will treat all non-public personal information
					in accordance with our Privacy Policy and applicable professional
					standards. However, no data transmission over the internet or method
					of electronic storage is 100% secure.
				</p>

				<h2>6. Intellectual Property</h2>
				<p>
					All content on our website and provided as part of our Services,
					including but not limited to text, graphics, logos, images, and
					software, is the property of ITM Tax & Advisory, LLC or its licensors
					and is protected by intellectual property laws. You may not reproduce,
					distribute, modify, create derivative works of, publicly display,
					publicly perform, republish, download, store, or transmit any of the
					material on our Services without our prior written consent.
				</p>

				<h2>7. Disclaimer of Warranties</h2>
				<p>
					OUR SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS,
					WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. ITM TAX
					& ADVISORY, LLC DISCLAIMS ALL WARRANTIES, INCLUDING, BUT NOT LIMITED
					TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
					PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT OUR SERVICES
					WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.
				</p>

				<h2>8. Limitation of Liability</h2>
				<p>
					TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT SHALL ITM TAX &
					ADVISORY, LLC, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS,
					OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
					CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS
					OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING
					FROM (I) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE
					SERVICES; (II) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE
					SERVICES; (III) ANY CONTENT OBTAINED FROM THE SERVICES; AND (IV)
					UNAUTHORIZED ACCESS, USE OR ALTERATION OF YOUR TRANSMISSIONS OR
					CONTENT, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING
					NEGLIGENCE) OR ANY OTHER LEGAL THEORY, WHETHER OR NOT WE HAVE BEEN
					INFORMED OF THE POSSIBILITY OF SUCH DAMAGE, AND EVEN IF A REMEDY SET
					FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE.
				</p>

				<h2>9. Indemnification</h2>
				<p>
					You agree to defend, indemnify, and hold harmless ITM Tax & Advisory,
					LLC, its affiliates, licensors, and service providers, and its and
					their respective officers, directors, employees, contractors, agents,
					licensors, suppliers, successors, and assigns from and against any
					claims, liabilities, damages, judgments, awards, losses, costs,
					expenses, or fees (including reasonable attorneys' fees) arising out
					of or relating to your violation of these Terms or your use of the
					Services, including, but not limited to, any use of the Services'
					content, services, and products other than as expressly authorized in
					these Terms or your use of any information obtained from the Services.
				</p>

				<h2>10. Governing Law and Jurisdiction</h2>
				<p>
					These Terms shall be governed by and construed in accordance with the
					laws of the State of Texas, without regard to its conflict of law
					principles. Any legal suit, action, or proceeding arising out of or
					related to these Terms or the Services shall be instituted exclusively
					in the federal or state courts located in Fort Bend County, Texas.
				</p>

				<h2>11. Changes to Terms</h2>
				<p>
					We reserve the right, at our sole discretion, to modify or replace
					these Terms at any time. If a revision is material, we will provide at
					least 30 days' notice prior to any new terms taking effect. What
					constitutes a material change will be determined at our sole
					discretion. By continuing to access or use our Services after those
					revisions become effective, you agree to be bound by the revised
					terms.
				</p>

				<h2>12. Severability</h2>
				<p>
					If any provision of these Terms is held to be invalid or unenforceable
					by a court, the remaining provisions of these Terms will remain in
					full force and effect.
				</p>

				<h2>13. Entire Agreement</h2>
				<p>
					These Terms and our Privacy Policy constitute the entire agreement
					between you and ITM Tax & Advisory, LLC regarding our Services and
					supersede all prior and contemporaneous understandings, agreements,
					representations, and warranties, both written and oral, regarding the
					Services.
				</p>

				<h2>14. Contact Information</h2>
				<p>
					If you have any questions about these Terms, please contact us at:
				</p>
				<Address />
			</div>
		</div>
	);
};

export default TermsPage;
