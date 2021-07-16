import React from "react";
import Layout from "../../components/Layout";
import Section from "components/section/Section";
import SectionInfoTitle from "components/section/SectionInfoTitle";
import SectionInfoDescription from "components/section/SectionInfoDescription";
import SectionInfo from "components/section/SectionInfo";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <Section>
        <SectionInfoTitle header className="mt-10 text-center">
          Privacy Policy
        </SectionInfoTitle>

        <div className="mb-20">
          <SectionInfoTitle
            className="mt-10 mb-10"
            style={{ color: "#717485" }}
          >
            Last Updated: 25th August, 2018
          </SectionInfoTitle>
          <div className="mb-20">
            <SectionInfoTitle className="mt-10">
              Personal Information
            </SectionInfoTitle>
            <SectionInfoDescription>
              We collect and use your information below to provide, understand,
              and improve our Services, to administer your use of the Services,
              to respond to all your comments, feedbacks and questions, to use
              your email address or other contact information to send you
              information related to the Services and to enable you to enjoy and
              easily navigate our Services. Glade has implemented and will
              maintain reasonable security controls to protect the
              confidentiality, integrity and availability of the PII that Glade
              processes. “PII”, “Personally Identifiable Information” and
              “personal data” are all used in this Privacy Policy
              interchangeably to refer to any data, information, or combination
              of data and information that is provided by you to Glade Inc. or
              through your use of our Services, and which relates to an
              identifiable individual.
            </SectionInfoDescription>
          </div>
          <SectionInfoTitle>
            What we do to Information Collected?
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
          <SectionInfoDescription className="mt-5">
            Glade Inc.<br></br>
            Attn: Privacy Policy Inquiry<br></br>2 Crown Court Estate 2,
            <br></br>
            Oniru Victoria Island Lagos, Nigeria.<br></br>
          </SectionInfoDescription>
          <SectionInfoDescription className="mt-5">
            Further, for accounts located in countries in Africa, our address
            is:<br></br>
            Glade Consulting Limited.<br></br>
            Attn: Privacy Policy Inquiry<br></br>2 Crown Court Estate 2,
            <br></br>
            Oniru Victoria Island Lagos, Nigeria.<br></br>
          </SectionInfoDescription>
        </div>
      </Section>
    </Layout>
  );
}

const privacy = [
  {
    title: "Personal Information",
    description: [
      "Contact or Account Information: To use any of our Services, you will need to create an account. When an Account is created we’ll collect certain PII that can be used to identify you, such as your name, location, email address, phone number, company information (the list is not exhaustive) for example, login verification. If you provide us with your phone number, you agree to receive text messages to that number from us. We may use your contact information to send you information about our Services, to market to you, to help prevent spam, fraud. We could also collect other information about you that is not PII, such as Usage Data (as defined below), and this will only be used as described herein.",
      "Support Information: If you email us to provide feedback or contact us for support, we may keep your message, name and email address, contact information and any other content included in the support request or feedback, in order to respond to your request or to improve our Services.",
      "Cookies: Like many other websites, we use cookies and similar technologies to identify you as a user and to customize and improve our services.",
      "A cookie is a small data file that is transferred to your computer or mobile device. We may use both session Cookies and persistent Cookies to identify a user has accessed the site, interacted with our Services. We may also use Cookies to monitor aggregate usage by our users and web traffic routing on our Services, and to customize and improve our Services. However, most web browsers automatically accept cookies, some browsers’ settings can be modified to decline cookies or alert you when a website is attempting to place a cookie on your computer. However, if you don’t accept Cookies, you will not be able to access all portions or features of the Services. Some Services may not function properly if you disable Cookies.",
      "Use of Our Services: We automatically record certain information about how our Services are used (“Usage Data”). Usage Data may include a User’s Internet Protocol (IP) address, browser type, operating system, frequency with which our Services are used by a User, the referring web page, pages visited, location, your mobile carrier, device information (including device and application IDs), search terms, or Cookie information. We use Usage Data to administer the Services and we analyze (and could engage third parties, who are under an obligation of confidentiality, to analyze) Usage Data to improve, customize, and enhance our Services by expanding their features and functionality and tailoring them to our Users’ needs and preferences.",
      "Location Information: We may receive information about your location. This occurs when you use our Services and you enable location services. We may also determine location by using other data from your device, such as precise location information from GPS, information about wireless networks or cell towers near your mobile device, or your IP address. We will only use location information to improve and personalize our Services for you. If you do not want us to collect location information, you can always disable that feature on your mobile device.",
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
    title: "EU Users",
    description: [
      "If you are a user located in the European Union (EU), then depending on whether you are a Visitor, or a Registered User, we will offer you certain choices regarding the collection, use and sharing of your PII.",
      "Visitors and Direct Users: If you are a Visitor or a Registered User, you have specific rights over the PII that Glade controls which you can exercise in specific circumstances, such as:",
      "Access: to know whether we process PII about you, to access that PII and find out how we use it and who we share it with; Portability: to receive a subset of the PII we collect from you in a structured, commonly-used and machine-readable format, and to request that we transfer such PII to another party; Correction: to require us to correct PII about you that is accurate or incomplete; Erasure: to request that we erase PII we hold about you in certain circumstances. Note that in cases where we grant your request for deletion, copies of erased PII could remain in archived/backup copies for our records, as we are not always able to delete information from those locations; Restriction: to require us to stop processing the PII we hold about you other than for storage purposes in certain circumstances; and",
      "Objection: to object to our processing of PII about you and we will consider your request. You can confidentially contact Glade’s Legal Officer at hello@glade.com If you wish to raise a concern about our use of your information (and without prejudice to any other rights you may have). We will respond to your request as soon as we reasonably can, and we will attempt to respond to all requests within 30 days of verifying your identity.",
    ],
  },

  {
    title: "Age Restriction",
    description: [
      "You must be at least 18 years of age to use any of our Services. Our Services are not directed to individuals under 18 and we do not knowingly collect PII from individuals under 18. If we learn that we have collected PII of an individual under 18 we will take steps to delete such information from our files.",
    ],
  },
  {
    title: "Changes to this Policy",
    description: [
      "We may revise this Privacy Policy from time to time. The most current version of the policy will govern our use of your information and will always be at. If we make a change to this policy that, in our sole discretion, is material, we will notify you via an update or email to the email address registered with your account. By continuing to access or use the Services after those changes become effective, you agree to be bound by the revised Privacy Policy.",
      "We will update the “Effective Date”: above to indicate when the Privacy Policy was last materially changed. If you have any questions or comments about this Privacy Policy, please write to our Legal Officer at hello@glade.com or by postal mail at the appropriate address below:",
    ],
  },
];
