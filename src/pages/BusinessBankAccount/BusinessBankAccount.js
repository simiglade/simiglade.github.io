import React from "react";
import SectionHeader from "../../components/section/SectionHeader";
import Layout from "../../components/Layout";
import SectionBusinessAccount from "components/section/SectionBusinessAccount";
import BusinessOwner from "./BusinessOwner.png";
import SectionDebitVirtualCard from "../../components/section/SectionDebitVirtualCard";
import SectionMoreThanBank from "components/section/SectionMoreThanBank";
export default function BusinessBankAccount() {
  const headerdetails = {
    title: "A better bank account for your business",
    description:
      "Open a business current account specifically built for small businesses, start-ups and freelancers",
    buttonLabel: "Open an account",
    img: BusinessOwner,
  };
  return (
    <Layout>
      <SectionHeader
        title={headerdetails.title}
        description={headerdetails.description}
        buttonLabel={headerdetails.buttonLabel}
        img={headerdetails.img}
      />
      <SectionDebitVirtualCard />
      <SectionMoreThanBank />
      <SectionBusinessAccount />
    </Layout>
  );
}
