import React from "react";
import Layout from "../../components/Layout";
import Section from "components/section/Section";
import SectionInfoTitle from "components/section/SectionInfoTitle";
import SectionInfoDescription from "components/section/SectionInfoDescription";

export default function TermsAndCondition() {
  return (
    <Layout>
      <Section>
        <SectionInfoTitle header className="mt-10 text-center">
          Terms & Condition
        </SectionInfoTitle>

        <div className="mb-20">
          <SectionInfoTitle
            className="mt-10 mb-10"
            style={{ color: "#717485" }}
          >
            Last Updated: 10th March, 2021
          </SectionInfoTitle>

          {privacy.map(({ title, description }, key) => (
            <div key={key} className="mb-20">
              <SectionInfoTitle className="mt-10">{title}</SectionInfoTitle>
              {description.map((e) => (
                <SectionInfoDescription className="mt-5">
                  {e}
                </SectionInfoDescription>
              ))}
            </div>
          ))}

          {conditions.map(
            ({ title, description, descriptionType, policies }, key) => (
              <div key={key} className="mb-20">
                <SectionInfoTitle className="mt-10">{title}</SectionInfoTitle>
                <SectionInfoDescription className="mt-5">
                  {description}
                </SectionInfoDescription>
                <ol>
                  {descriptionType.map((type) => (
                    <li>
                      <SectionInfoDescription className="mt-5">
                        {type}
                      </SectionInfoDescription>
                    </li>
                  ))}
                </ol>

                <div cassName="mt-3">
                  {policies.map((policy) => (
                    <SectionInfoDescription className="mt-5 ml-5">
                      <span class="material-icons md-18  text-green-400 fill-current">
                        check_circle
                      </span>
                      {policy}
                    </SectionInfoDescription>
                  ))}
                </div>

                <div>
                  <SectionInfoTitle className="mt-10">GENERAL</SectionInfoTitle>
                  <SectionInfoDescription>
                    We may revise these Terms from time to time. The changes
                    will not be retroactive, and the most current version of the
                    Terms which will always be on www.glade.com will govern our
                    relationship with you. We will also try to notify you of any
                    material changes which could be done via email associated
                    with your account or service notification. By continuing to
                    use our services after the changes become effective, you
                    agree to be bound by the revised Terms.{" "}
                  </SectionInfoDescription>
                </div>
              </div>
            )
          )}
        </div>
      </Section>
    </Layout>
  );
}

const privacy = [
  {
    title: "Terms and Conditions",
    description: [
      "This Website's Terms and Conditions (“Terms”) contained herein on this webpage, shall govern your access to and use of this website, including all pages within this website (collectively referred to as this “Website”). These Terms apply in full force and effect to your use of this Website and by using this Website, you expressly accept all terms and conditions contained herein in full. You must not use this Website if you have any objection to any of these Terms.",
      "PLEASE READ AND UNDERSTAND THE TERMS OF AGREEMENT CAREFULLY BEFORE AGREEING TO BE BOUND BY ITS TERMS.",
    ],
  },
  {
    title: "Information Sharing",
    description: [
      "We will not share/disclose any PII that we have collected from or regarding you except in the limited circumstances described here.",
      "User Consent or Direction: We may share or disclose your information at your direction, such as when you when you direct us to share your feedback with a business. Service Providers: We engage certain third-party service providers to perform functions and provide services to us in the United States, UK, Nigeria, and other countries. We may share your PII with such service providers subject to obligations consistent with this Privacy Policy and any other appropriate confidentiality and security measures, and on the condition that the third parties use your PII data only on our behalf and pursuant to our instructions. Such third parties will be required to maintain the confidentiality of all PII that they process on our behalf and to implement and maintain reasonable security controls to protect the confidentiality, integrity and availability of such PII. We share your payment information, including your credit or debit card number, card expiration date, CVV code, and billing address to process payments; prevent, detect and investigate fraud or other prohibited activities; facilitate dispute resolution such as chargebacks or refunds; and for other purposes associated with the acceptance of credit or debit cards.",
      "Business Transfers and Affiliates: In the event that we are involved in a bankruptcy, merger, acquisition, reorganization or sale of assets, your information may be sold or transferred as part of that transaction. We will however do this in compliance with applicable law and regulation. This Privacy Policy will apply to your information as transferred to the new entity. We may also disclose information about you to our affiliates in order to help provide, understand, and improve our Services and our affiliates’ services.",
      " The Law: We cooperate with government and law enforcement officials or private parties to enforce and comply with the law. Notwithstanding anything to the contrary in this Privacy Policy, we may preserve or disclose your information if we believe that it is reasonably necessary to comply with a law, regulation, legal process or governmental request. To respond to claims, legal process (including subpoenas), law enforcement requests and national security requests; To protect our rights and safety and the rights and safety of a third party or the public in general; and to stop any activity that we consider illegal, unethical or legally actionable activity. In the event of such disclosure or transfer of your PII to public authorities, there is a chance that Glade will not be able to require such public authorities to implement and maintain reasonable security controls to protect the confidentiality, integrity and availability of your PII. However, nothing in this Privacy Policy is intended to limit any legal defences or objections that you may have to a third party’s, including a government’s, request to disclose your information.",
    ],
  },
  {
    title: "Age Restriction",
    description: [
      "Our website and services are directed to people from the ages of 18 and above. We do not knowingly engage in people younger than the age of 18.",
    ],
  },

  {
    title: "Intellectual Property",
    description: [
      "Unless otherwise stated, Glade and/or its licensors own the intellectual property rights and materials on the website subject to the license below. We do not grant you any right, license, title or interest to any of our intellectual Property rights which you may or may not have access to. You agree to take such actions including any legal or official document or other documents that may be needed to further affirm our intellectual property rights.",
    ],
  },
  {
    title: "License to Use Our Website",
    description: [
      "We grant you a non-assignable, non-exclusive and revocable license to use the software provided as part of our services in the manner permitted by these Terms. This license grant includes all updates, upgrades, new versions and replacement software for you to use in connection with our services. The services are protected by copyright, trademark, and other laws of both Nigeria and foreign countries. Nothing in this Term gives you a right to use the Glade name or any of Glade’s trademarks, logos, domain names, and other distinctive brand features. All right, title and interest in and to the services are and will remain the exclusive property of Glade and its licensors. If you do not comply with all the provisions, you will be liable for all resulting damages suffered by you, Glade and all third parties. Unless otherwise provided by applicable law, you agree not to alter, re-design, reproduce, adapt, display, distribute, translate, disassemble, reverse engineer, or otherwise attempt to create any source code that is derived from the software. Any feedback, comments, or suggestions you may provide to us and our services is entirely voluntary and we will be free to use such feedback, comments or suggestion as we see fit without any obligation to you.",
    ],
  },
  {
    title: "Who May Use Our Services?",
    description: [
      "GLADE WILL ALWAYS ENSURE THAT THE WEBSITE IS AVAILABLE AT ALL TIMES AND BUG FREE. HOWEVER, IT IS USED AT YOUR OWN RISK. WE PROVIDE ALL MATERIALS “AS IS” WITH NO WARRANTY, EXPRESS OR IMPLIED, OF ANY KIND. WE EXPRESSLY DISCLAIM ANY AND ALL WARRANTIES AND CONDITIONS, INCLUDING ANY IMPLIED WARRANTY OR CONDITION OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AVAILABILITY, SECURITY, TITLE, AND NON-INFRINGEMENT OF INTELLECTUAL PROPERTY RIGHTS, WITHOUT LIMITING THE GENERALITY OF THE FOREGOING, GLADE TECHNOLOGY LIMITED MAKES NO WARRANTY THAT OUR WEBSITE AND SERVICES WILL MEET YOUR REQUIREMENTS OR THAT OUR WEBSITE WILL REMAIN FREE FROM ANY INTERRUPTION, BUGS, INNACCURACIES, AND ERROR FREE. YOUR USE OF OUR SERVICES ARE AT YOUR OWN RISK AND YOU ALONE WILL BE RESPONSIBLE FOR ANY DAMAGE THAT RESULTS IN LOSS OF DATA OR DAMAGE TO YOUR COMPUTER SYSTEM. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN OBTAINED BY YOU FROM OUR WEBSITE OR OUR SERVICES WILL CREATE ANY WARRANTY OR CONDITION NOT EXPRESSLY STATED.",
    ],
  },
  {
    title: "Limitation of Liability",
    description: [
      "YOU AGREE TO THE LIMITATION LIABILITY CLAUSE TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW: GLADE TECHNOLOGY LIMITED WILL IN NO WAY BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL PUNITIVE, CONSEQUENTIAL, SPECIAL OR EXEMPLARY DAMAGES OR ANY DAMAGES INCLUDING DAMAGES RESULTING FROM REVENUE LOSS, PROFIT LOSS, USE, DATA, GOODWILL, BUSINESS INTERRUPTION OR ANY OTHER INTANGIBLE LOSSES (WHETHER GLADE TECHNOLOGY LIMITED HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES OR NOT) ARISING OUT OF GLADE TECHNOLOGY LIMITED’S WEBSITE OR SERVICES (INCLUDING, WITHOUT LIMITATION TO INABILITY TO USE, OR ARISING FROM THE RUSULT OF USE OF GLADE TECHNOLOGY LIMITED’S WEBSITE OR SERVICES) WHETHER SUCH DAMAGES ARE BASED ON WARRANTY, TORT, CONTRACT, STATUTE OR ANY OTHER LEGAL THEORY. SOME JURISDICTIONS DO NOT ALLOW EXCLUSION OF CERTAIN WARRANTIES OR LIMITATIONS ON THE SCOPE AND DURATION OF SUCH WARRANTIES, SO THE ABOVE DISCLAIMERS MAY NOT APPLY TO YOU IN THEIR ENTIRETIES, BUT WILL APPLY TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW.",
    ],
  },
  {
    title: "Indemnification",
    description: [
      "You hereby indemnify Glade and undertake to keep Glade indemnified against any losses, damages, costs, liabilities and expenses (including without limitation to reasonable legal fees) arising out of any breach by you of any provision of these Terms, or arising out of any claim that you have breached any provision of these Terms.",
    ],
  },
  {
    title: "Breaches of these Terms",
    description: [
      "Without prejudice to Glade’s other rights under these Terms, if you breach these Terms in any way, Glade may take any action as Glade deems appropriate to deal with the breach, including suspending your access to the website, prohibiting you from accessing the website, blocking computers using your IP address from accessing the website, contacting your internet service provider to request that they block your access to the website and/or bringing court proceedings against you.",
    ],
  },
  {
    title: "Cookies",
    description: [
      "Without prejudice to Glade’s other rights under these Terms, if you breach these Terms in any way, Glade may take any action as Glade deems appropriate to deal with the breach, including suspending your access to the website, prohibiting you from accessing the website, blocking computers using your IP address from accessing the website, contacting your internet service provider to request that they block your access to the website and/or bringing court proceedings against you.",
    ],
  },
  {
    title: "Governing Law",
    description: [
      "We may revise these Terms from time to time. The changes will not be retroactive, and the most current version of the Terms which will always be on www.glade.com will govern our relationship with you. We will also try to notify you of any material changes which could be done via email associated with your account or service notification. By continuing to use our services after the changes become effective, you agree to be bound by the revised Terms. In the event that any of these Terms is held to be invalid or unenforceable, then that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions of these Terms will remain in full effect. Glade’s failure to enforce any right or provision of these Terms will not be deemed a waiver of such right or provision.",
    ],
  },
];

const conditions = [
  {
    title: "PROHIBITED AND REQUIRING PRE-APPROVAL SUB-MERCHANT TYPES",
    description:
      "Glade shall not solicit or sign agreements with merchants or sub-merchants",
    descriptionType: [
      "in any of the following categories/businesses, or",
      "engaging in any of the following activities unless the Glade is entering into a broad-based program with a recognized referral, technology or marketplace partner that specializes in these types of activities or businesses and such program is pre-approved by Glade in its sole discretion.",
    ],
    policies: [
      "Age Restricted Products or Services.",
      "Any Sub-merchant where the anticipated % of International Card Sales is expected to be greater than 20% of total sales.",
      "Bail Bond Services or Bankruptcy Lawyers.",
      "Crowd Sourced Fundraising, as defined by Glade from time to time, except however, Crowd Sourced Fundraising shall not be allowed for the purchase of stock or equity, a promise made to deliver a good or service in the future, or there is no consideration in return for the payment or donation.",
      "Dating Services.",
      "Digital Currencies i.e Bitcoins, Ethereum etc",
      "NGO / Charities.",
      "Money Transfer, Wire Transfers, Money Orders, Transmitters, and Cheque Cashing including merchants unless registered and licensed as a Money Service Business or Money Transfer Operator.",
      "Payment Facilitators (unless Registered & Licensed).",
      "Personal Enhancement Products and/or Nutraceuticals.",
    ],
  },
  {
    title: "PROHIBITED SUB-MERCHANTS",
    description:
      "This Website's Terms and Conditions (“Terms”) contained herein on this webpage, shall govern your access to and use of this website, including all pages within this website (collectively referred to as this “Website”). These Terms apply in full force and effect to your use of this Website and by using this Website, you expressly accept all terms and conditions contained herein in full. You must not use this Website if you have any objection to any of these Terms.",
    descriptionType: [
      "in any of the following categories/businesses, or",
      "engaging in any of the following activities as may be updated by Glade in its sole discretion from time to time as they are Prohibited by Glade and/or the Card Brand rules:",
    ],
    policies: [
      "Any product, service or activity that is deceptive, unfair, predatory or prohibited by one or more Card Brands.",
      "Any Merchant selling goods or services that represent a violation of any law, statute or regulation.",
      "Any Merchant selling products that infringe on the intellectual property rights of others, including counterfeit goods or any product or service that infringes on the copyright, trademark or trade secrets of any third party, such as many Cyberlockers.",
      "Any Merchant accepting a card as payment for a dishonored cheque or for an item deemed uncollectible by another merchant.",
      "Any Merchant that accepts a card at a scrip-dispensing terminal.",
      "Adult entertainment and/or adult content websites including Electronic Commerce adult content (videotext) merchants that would include MCC’s 5967, 7273 and 7841.",
      "Bestiality.",
      "Brand or Reputational damaging, potential or otherwise, activities including Child Pornography, Escort Services, Mail Order Brides, Occult.",
      "Drug Paraphernalia.",
      "e-Cigarettes.",
      "Firearms and weapons including Ammunition.",
      "Internet/Mail Order Pharmacies.",
      "Digital Currencies i.e Bitcoins, Ethereum etc",
      "Investment or “get rich quick” merchants, businesses or programs.",
      "Marijuana dispensaries and related products or services.",
      "Multi-Level Marketing Businesses.",
      "“Negative option” marketing, renewal, or continuity subscription practices; marketing activities involving low-dollar trails, “pay only for shipping,” and/or “free trial” periods after which a credit card is charged periodically and/or a significantly larger amount.",
      "Pawn Shops.",
      "Pseudo Pharmaceuticals.",
      "Psychics and “occult” businesses.",
      "Quasi-Cash or Stored Value",
      "Substances designed to mimic illegal drugs.",
      "Transacting Virtual Currency or credits that can be monetized, re-sold or converted to physical or digital goods or services or otherwise exit the virtual world.",
    ],
  },
];
