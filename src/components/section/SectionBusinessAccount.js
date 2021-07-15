import React from "react";
import DashboardMerchant from "pages/home/DashboardMerchant.png";
import appStoreImg from "assets/img/footer-app-store.png";
import googlePlayImg from "assets/img/footer-google-play.png";
import Section from "components/section/Section";
import SectionInfo from "components/section/SectionInfo";
import SectionInfoTitle from "components/section/SectionInfoTitle";
import SectionInfoDescription from "components/section/SectionInfoDescription";
import Button from "components/button/Button";

export default function SectionBusinessAccount() {
  return (
    <Section
      className="flex items-center justify-between flex-wrap"
      style={{ paddingBottom: "0px" }}
    >
      <SectionInfo>
        <div className="mb-5">
          <SectionInfoTitle header>
            A business bank account where the possibilities are endless
          </SectionInfoTitle>
          <SectionInfoDescription>
            Set up your account with these easy steps.
          </SectionInfoDescription>
        </div>
        <Button bgColor="bg-secondary">Register your company</Button>
        <div className="flex mt-10">
          <a href="/" className="mr-1">
            <img src={appStoreImg} alt="appstore" className="m-1" />
          </a>
          <a href="/">
            <img src={googlePlayImg} alt="googleplay" className="m-1" />
          </a>
        </div>
      </SectionInfo>
      <SectionInfo style={{ paddingBottom: "0px" }}>
        <img
          src={DashboardMerchant}
          style={{ maxWidth: "300px" }}
          alt="Glade dashboard mobile"
        />
      </SectionInfo>
    </Section>
  );
}
