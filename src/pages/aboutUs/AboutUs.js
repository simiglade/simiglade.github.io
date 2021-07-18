import React from "react";
import Layout from "../../components/Layout";
import SectionInfoTitle from "components/section/SectionInfoTitle";
import SectionInfoDescription from "components/section/SectionInfoDescription";
import Section from "components/section/Section";
import SectionInfo from "components/section/SectionInfo";
import appStoreImg from "assets/img/footer-app-store.png";
import googlePlayImg from "assets/img/footer-google-play.png";
import DashboardMerchant from "./DashboardMerchant.png";
import { BackdropIcon } from "utils/icons";
import StaffAvatar from "./StaffAvatar.png";
import Partners from "./Partners.png";

export default function AboutUs() {
  return (
    <Layout>
      <div
        style={{
          background: "#E9F9FF",
          marginTop: "-5rem",
        }}
        className="pt-20"
      >
        <div className="flex justify-center relative">
          <div className="pt-20 text-center z-20">
            <SectionInfoTitle
              header
              style={{
                fontWeight: 800,
                fontSize: "3rem",
                color: "#010040, 100%",
                lineHeight: "64px",
              }}
              className="text-center max-w-3xl"
            >
              Powering growth for innovative African enterprises{" "}
            </SectionInfoTitle>
            <SectionInfoDescription className="max-w-xl ttext-center mb-10">
              We are fundamentally changing how small businesses access banking
              and financial services.
            </SectionInfoDescription>
          </div>
          <div className="absolute z-10 left-20">
            <BackdropIcon />
          </div>
        </div>

        <Section className="flex items-center justify-between flex-wrap">
          <SectionInfo>
            <div className="mb-5">
              <SectionInfoTitle>Simple products </SectionInfoTitle>
              <SectionInfoDescription>
                We have straight-forward products and processes supported by
                modern Banking infrastructure.
              </SectionInfoDescription>
            </div>
          </SectionInfo>
          <SectionInfo>
            <div className="mb-5">
              <SectionInfoTitle>Small business focused bank</SectionInfoTitle>
              <SectionInfoDescription>
                We have built a new, small business focused digital bank that
                will help businesses in Africa achieve their potentials, and
                help economy grow.
              </SectionInfoDescription>
            </div>
          </SectionInfo>
        </Section>
      </div>

      <Section className="flex items-center justify-between flex-wrap">
        <SectionInfo>
          <img src={DashboardMerchant} alt="Glade dashboard mobile" />
        </SectionInfo>
        <SectionInfo>
          <div className="mb-5">
            <SectionInfoTitle header>Why choose us? </SectionInfoTitle>
            <SectionInfoDescription>
              Would you rather have different apps to satisfy your different
              needs? Do you prefer to handle your business with the least
              possible stress? Then we’re the perfect partner.{" "}
            </SectionInfoDescription>
          </div>
          <div className="flex mt-8">
            <a href="/" className="mr-1">
              <img src={appStoreImg} alt="appstore" className="m-1" />
            </a>
            <a href="/">
              <img src={googlePlayImg} alt="googleplay" className="m-1" />
            </a>
          </div>
        </SectionInfo>
      </Section>

      <Section>
        <div className="flex justify-center">
          <div className="pt-20 text-center px-4 max-w-3xl">
            <SectionInfoTitle header className="text-center max-w-3xl ">
              What we are creating
            </SectionInfoTitle>
            <SectionInfoDescription className="max-w-xl text-center">
              A well-defined Business Banking and Financial Services Company
              with a drive to offer top-notch solutions using state of the art
              infrastructures to enhance innovations and help small businesses
              in Africa to grow globally.
            </SectionInfoDescription>
          </div>
        </div>

        <Section className="flex items-center justify-between flex-wrap">
          <SectionInfo>
            <div className="mb-5">
              <SectionInfoTitle>Simple products </SectionInfoTitle>
              <SectionInfoDescription>
                We have straight-forward products and processes supported by
                modern Banking infrastructure.
              </SectionInfoDescription>
            </div>
          </SectionInfo>
          <SectionInfo>
            <div className="mb-5">
              <SectionInfoTitle>Small business focused bank</SectionInfoTitle>
              <SectionInfoDescription>
                We have built a new, small business focused digital bank that
                will help businesses in Africa achieve their potentials, and
                help economy grow.
              </SectionInfoDescription>
            </div>
          </SectionInfo>
        </Section>
      </Section>

      <div
        style={{
          background: "#E9F9FF",
          marginTop: "-5rem",
        }}
        className="pt-20"
      >
        <Section>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
            {staffs.map(({ name, title, avatar, about }, key) => (
              <div className="flex justify-center">
                <div key={key} className="max-w-md">
                  <img src={avatar} alt={title} />
                  <SectionInfoTitle header className="mt-5">
                    {name}
                  </SectionInfoTitle>
                  <SectionInfoTitle className="mb-5">{title}</SectionInfoTitle>
                  {about.map((e) => (
                    <SectionInfoDescription style={{ color: "#7782BF" }}>
                      {e}
                    </SectionInfoDescription>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <Section>
        <SectionInfoTitle header className="mt-10 text-center">
          We’re backed by leading global investors and partners
        </SectionInfoTitle>
        <SectionInfoDescription className="mt-5 text-center">
          Glade is backed by one of the best tech accelerator, notable global
          investors and partners in the world.
        </SectionInfoDescription>
        <img src={Partners} alt="partners" />
      </Section>
    </Layout>
  );
}

const staffs = [
  {
    name: "Liyi Victor",
    title: "CEO",
    avatar: StaffAvatar,
    about: [
      "Having worked over 10 years managing e-business solutions for global brands in banking, financial services and payment companies, Liyi branched out as a product manager and designer.",
      "He has managed and developed different digital and payment solutions for over 15 tertiary institutions nationwide, as well as building a digital co-operative platform for the underbanked consumers in Nigeria.",
      "When he’s not power biking or looking for an adrenaline rush, Liyi likes to hang out with his family and reading books.",
    ],
  },
  {
    name: "Abubakar Sadiq Ango",
    title: "CTO",
    avatar: StaffAvatar,
    about: [
      "Ango’s interest in computers developed when he was asked to provide an email address after travelling miles to send a message to PrimeTime Africa’s Kenny and D1 in 2001. Since then, he’s moved from Developer, to DevOps Engineer to Cloud Native engineer. Having been with Gitlab for over 4 years, Ango also prides himself as a significant member of the digital developer community in Nigeria.",
      "When he’s not exercising self-imposed indoors marathon,Ango enjoys watching Blacklist,obsessing over all things aviation and most recently, sound engineering (no, not music).",
    ],
  },
];
