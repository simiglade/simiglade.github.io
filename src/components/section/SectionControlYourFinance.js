import React from "react";
import Section from "components/section/Section";
import SectionInfo from "components/section/SectionInfo";
import SectionInfoTitle from "components/section/SectionInfoTitle";
import SectionInfoDescription from "components/section/SectionInfoDescription";
import HomeDashboard from "pages/home/HomeDashboard.png";

export default function SectionControlYourFinance({ white }) {
  return (
    <Section className="flex items-center justify-between flex-wrap">
      <SectionInfo>
        <img src={HomeDashboard} alt="Glade Dashboard" />
      </SectionInfo>
      <SectionInfo>
        <SectionInfoTitle header style={{ color: `${white ? "white" : ""}` }}>
          Control your business finance conveniently.
        </SectionInfoTitle>
        <SectionInfoDescription style={{ color: `${white ? "white" : ""}` }}>
          Everything your business needs built into your phone and laptop.
        </SectionInfoDescription>
        <SectionInfoTitle style={{ color: `${white ? "white" : ""}` }}>
          <span
            class={`material-icons md-18 mr-3 mt-3  fill-current ${
              white ? "text-white" : ""
            }`}
          >
            check_circle
          </span>
          Invoicing
        </SectionInfoTitle>
        <SectionInfoDescription style={{ color: `${white ? "white" : ""}` }}>
          Create and send invoices to customer and request for payments.
        </SectionInfoDescription>
        <SectionInfoTitle style={{ color: `${white ? "white" : ""}` }}>
          <span
            class={`material-icons md-18 mr-3 mt-3  fill-current ${
              white ? "text-white" : ""
            }`}
          >
            check_circle
          </span>
          Staff Payroll
        </SectionInfoTitle>
        <SectionInfoDescription style={{ color: `${white ? "white" : ""}` }}>
          Manage employees schedules and payroll.
        </SectionInfoDescription>
        <SectionInfoTitle style={{ color: `${white ? "white" : ""}` }}>
          <span
            class={`material-icons md-18 mr-3 mt-3  fill-current ${
              white ? "text-white" : ""
            }`}
          >
            check_circle
          </span>{" "}
          Payments
        </SectionInfoTitle>
        <SectionInfoDescription style={{ color: `${white ? "white" : ""}` }}>
          Accept online and in-store payments. Track and monitor your inflows.
        </SectionInfoDescription>
        <SectionInfoTitle style={{ color: `${white ? "white" : ""}` }}>
          <span
            class={`material-icons md-18 mr-3 mt-3  fill-current ${
              white ? "text-white" : ""
            }`}
          >
            check_circle
          </span>
          Customer Insights
        </SectionInfoTitle>
        <SectionInfoDescription style={{ color: `${white ? "white" : ""}` }}>
          Understand your customer behaviour and generate valuable insights to
          help in making informed decisions.
        </SectionInfoDescription>
      </SectionInfo>
    </Section>
  );
}
