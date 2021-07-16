import React from "react";
import SectionHeader from "../../components/section/SectionHeader";
import Layout from "../../components/Layout";
import SectionInfoTitle from "components/section/SectionInfoTitle";
import SectionInfoDescription from "components/section/SectionInfoDescription";
import BusinessOwner from "./BusinessOwner.png";
import Section from "components/section/Section";
import SectionInfo from "components/section/SectionInfo";
import Button from "components/button/Button";
import FreelancersMobile from "./FreelancersMobile.png";
import SectionMoreThanBank from "components/section/SectionMoreThanBank";
import SectionDebitVirtualCard from "../../components/section/SectionDebitVirtualCard";
import SectionInvoicing from "../../components/section/SectionInvoicing";

export default function Freelancers() {
  const headerdetails = {
    title: "Freelancing is our business",
    description:
      "Imagine a business banking experience designed for someone as busy as you. Get paid, make payments and manage your finances easily with unique features.",
    buttonLabel: "Open an account",
    buttonLink: "/",
    img: BusinessOwner,
  };

  return (
    <Layout>
      <SectionHeader
        title={headerdetails.title}
        description={headerdetails.description}
        buttonLabel={headerdetails.buttonLabel}
        buttonLink={headerdetails.buttonLink}
        img={headerdetails.img}
      />
      <SectionMoreThanBank />

      {/* Section invoicing */}
      <SectionInvoicing />
      <Section className="flex items-center justify-between flex-wrap">
        <SectionInfo>
          <img
            src={FreelancersMobile}
            className="max-h-96"
            alt="Glade dashboard mobile"
          />
        </SectionInfo>
        <SectionInfo>
          <div className="mb-5">
            <SectionInfoTitle header>FreelancersDashboard</SectionInfoTitle>

            <div className="mb-5">
              <SectionInfoTitle>Payment Link</SectionInfoTitle>
              <SectionInfoDescription>
                Create payment link, send to your client to accept local and
                international payments directly to your Glade account.
              </SectionInfoDescription>
            </div>
            <Button bgColor="bg-primary">Open an Account</Button>
          </div>
        </SectionInfo>
      </Section>
      <SectionDebitVirtualCard />
    </Layout>
  );
}
