import React from "react";
import SectionInfoTitle from "components/section/SectionInfoTitle";
import SectionInfoDescription from "components/section/SectionInfoDescription";
import Section from "components/section/Section";
import SectionInfo from "components/section/SectionInfo";
import FreelancersDashboard from "pages/freelancers/FreelancersDashboard.png";
import Button from "components/button/Button";

export default function SectionInvoicing() {
  return (
    <section style={{ backgroundColor: "#E9F9FF" }}>
      <Section className="flex items-center justify-between flex-wrap">
        <SectionInfo>
          <img
            src={FreelancersDashboard}
            className="max-h-96"
            alt="Glade dashboard mobile"
          />
        </SectionInfo>
        <SectionInfo>
          <div className="mb-5">
            <div className="mb-5">
              <SectionInfoTitle>Invoicing</SectionInfoTitle>
              <SectionInfoDescription style={{ color: "#7782BF" }}>
                Generate invoices conveniently and customize before you send
                them. Add your company logo and custom fields, custom-tailor
                your invoices per recipient if needed.
              </SectionInfoDescription>
              <SectionInfoDescription style={{ color: "#7782BF" }}>
                Send invoices to your local and international clients and get
                paid into your Glade account.
              </SectionInfoDescription>
            </div>
            <a href="https://dashboard.glade.ng/register">
              <Button bgColor="bg-primary">Open an Account</Button>
            </a>
          </div>
        </SectionInfo>
      </Section>
    </section>
  );
}
