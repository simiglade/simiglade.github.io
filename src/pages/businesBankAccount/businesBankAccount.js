import React from "react";
import SectionHeader from "../../components/section/SectionHeader";
import Layout from "../../components/Layout";
import SectionBusinessAccount from "components/section/SectionBusinessAccount";
import BusinessOwner from "./BusinessOwner.png";
import BusinessCard from "./BusinessCard.png";
import BusinessInvoice from "./BusinessInvoice.png";
import BusinessPayment from "./BusinessPayment.png";
import SectionDebitVirtualCard from "../../components/section/SectionDebitVirtualCard";
import SectionMoreThanBank from "components/section/SectionMoreThanBank";
import SectionInfoTitle from "components/section/SectionInfoTitle";
import SectionInfoDescription from "components/section/SectionInfoDescription";

export default function BusinesBankAccount() {
  const headerdetails = {
    title: "A better bank account for your business",
    description:
      "Open a business current account specifically built for small businesses, start-ups and freelancers",
    buttonLabel: "Open an account",
    img: BusinessOwner,
  };

  const BusinessFeatures = [
    {
      title: "Payments",
      description:
        "Accept online and in-store payments. Track and monitor your inflow.",
      icon: BusinessCard,
    },
    {
      title: "Invoicing",
      description:
        "Create and send invoices to customer and request for payments.",
      icon: BusinessPayment,
    },
    {
      title: "Payroll",
      description: "Manage employees schedules and payroll.",
      icon: BusinessInvoice,
    },
    {
      title: "Send money",
      description: "Send money locally and internationally at low rates.",
      icon: BusinessInvoice,
    },
    {
      title: "Loans",
      description: "Access loans & overdrafts to grow your business.",
      icon: BusinessInvoice,
    },
    {
      title: "Card services",
      description:
        "Get a business debit or virtual card to enable you make payments seamlessly.",
      icon: BusinessInvoice,
    },
  ];
  return (
    <Layout>
      <SectionHeader
        title={headerdetails.title}
        description={headerdetails.description}
        buttonLabel={headerdetails.buttonLabel}
        img={headerdetails.img}
      />
      <div
        style={{
          background: "#F9FDFF",
        }}
        className="flex justify-center"
      >
        <div className="py-20 container">
          <SectionInfoTitle header className="text-center mb-20">
            Access the right business features needed to grow
          </SectionInfoTitle>

          <div className="grid grid-rows-1 md:grid-cols-3 gap-10">
            {BusinessFeatures.map((feature, key) => (
              <div
                className="text-center inline-flex flex-col items-center"
                key={key}
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="inline-block"
                />
                <SectionInfoTitle>{feature.title}</SectionInfoTitle>
                <SectionInfoDescription className="max-w-xs">
                  {feature.description}
                </SectionInfoDescription>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SectionDebitVirtualCard />
      <SectionMoreThanBank />
      <SectionBusinessAccount />
    </Layout>
  );
}
