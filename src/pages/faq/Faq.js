import React, { useState } from "react";
import Layout from "../../components/Layout";
import Section from "components/section/Section";
import SectionInfoTitle from "components/section/SectionInfoTitle";
import SectionInfoDescription from "components/section/SectionInfoDescription";
import { ArrowDownAccord } from "utils/icons";
import { ArrowUpAccord } from "../../utils/icons";

export default function Faq() {
  const [state, setstate] = useState(false);
  const toggleState = (index) => {
    setstate(!state);
  };

  return (
    <Layout>
      <Section>
        <SectionInfoTitle header className="mt-10 text-center">
          Frequently Asked Questions
        </SectionInfoTitle>
        <SectionInfoDescription className="mt-5 text-center">
          For further questions, please feel free to contact us here.
        </SectionInfoDescription>

        <div className="mt-20">
          {faqs.map((faq, key) => (
            <div key={key} className="w-full md:w-3/5 mx-auto p-4 mb-20">
              <div>
                <SectionInfoTitle header className="mb-8">
                  {faq.title}
                </SectionInfoTitle>
                {faq.questions.map((e, key) => (
                  <div className="tab w-full overflow-hidden border-b-2 border-grey-100 ">
                    <input
                      className="absolute opacity-0 "
                      id="tab-multi-one"
                      type="checkbox"
                      name="tabs"
                    />
                    <label
                      className=" py-3 px-1 flex justify-between items-center leading-normal cursor-pointer"
                      htmlFor="tab-multi-one"
                      onClick={() => toggleState(key)}
                    >
                      <SectionInfoTitle>{e.question}</SectionInfoTitle>

                      {!state ? <ArrowDownAccord /> : <ArrowUpAccord />}
                    </label>

                    <div
                      className={`${
                        !state ? "hidden" : ""
                      } tab-content overflow-hidden leading-normal`}
                    >
                      <p className="p-5">
                        <SectionInfoDescription>
                          {e.answer}
                        </SectionInfoDescription>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
}

const faqs = [
  {
    id: 1,
    title: "General",
    questions: [
      {
        question: "What is Glade?",
        answer:
          "Glade is a digital bank that provides small and medium businesses with superior banking experience and financial tools they need to thrive in the global economy. Our product is accessible via web and mobile applications for Android and iOS phones, which allows businesses to open business bank accounts from multiple countries, accept a deposit, make fund transfer, online & in-store payments, access to credit, tax payment, staff payroll, expenses management, overdraft, invoicing, vendor payments. Additionally, we give businesses a free debit/prepaid/virtual cards which can be used for business expenses via online and in stores around the world, and for which you can monitor movements and expenses from the Glade web or app. Download the app, register and receive your Glade card at no cost.",
      },
      {
        question: "Who is part of the company? ",
        answer:
          " Glade is a team of technology and business operations experts, with experience in countries such as Nigeria, Netherland, and the UK. The founding team worked for several years at banks, the education sector, software companies, and other financial institutions where its focus was in the area of payments and transactions of the platform. Our investors are The Baobab Network based in UK, and with extensive experience with successful tech startups in Africa.",
      },
      {
        question: "Why should I use Glade? ",
        answer:
          " A well-defined digital banking services with a drive to offer top-notch solutions using state of the art infrastructure to enhance innovation and help small and medium businesses in Africa to thrive in the global economy. ",
      },
      {
        question: "What are the required documents for using Glade? ",
        answer: `For Business: : Business Certificate of Incorporation, Valid means of identification and Utility bills
        For Individual: You need to submit your BVN and Identification (National ID, Driver’s License or International passport). `,
      },
      {
        question: "How do I sign up?",
        answer: `To sign up on Glade you need to navigate to click on "Open an account" button on https://www.glade.ng, you can sign up as a Registered Business or an Individual. Provide the required information and you would be logged into the dashboard or download the mobile app on Android and iOS. <a href="/">Link</a>`,
      },
    ],
  },

  {
    id: 2,
    title: " Glade Open APis related questions ",
    questions: [
      {
        question: "How easy is the API integration? ",
        answer:
          "Our Open APIs are easy to integrate. You can explore our API keys and documentation. Integration can be done within minutes. Kindly reach out to support through hello@glade.ng or call +234(0)8175574227. ",
      },
      {
        question: " What are the list of APIs ? ",
        answer:
          " Account Creation. Fund Transfer. Payment Services. Verification Services. Card Issuing Services, Lending Services, Saving Services, Cooperative and Thrift Collections and other Digital Services. ",
      },
      {
        question:
          "I do not know how to go about the integration, can Glade team help me? ",
        answer:
          " We are always glad to help you. You can send an email to support on hello@glade.ng +234(0)8175574227. ",
      },
    ],
  },
];
