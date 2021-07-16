import React from "react";
import SectionHeader from "../../components/section/SectionHeader";
import Layout from "../../components/Layout";
import SectionInfoTitle from "components/section/SectionInfoTitle";
import SectionInfoDescription from "components/section/SectionInfoDescription";
import BusinessOwner from "./BusinessOwner.png";
import Startups from "./Startups.png";

import Section from "components/section/Section";
import SectionInfo from "components/section/SectionInfo";
import SectionDebitVirtualCard from "../../components/section/SectionDebitVirtualCard";
import HomeGladeService from "pages/home/HomeGladeService.png";
import StartupOwner from "./StartupOwner.png";
import SectionControlYourFinance from "../../components/section/SectionControlYourFinance";

export default function StartUps() {
  const headerdetails = {
    title: "Helping your Start-up succeed",
    description:
      "Glade is the smartest bank account your business can get. Access a powerful Open API to build amazing products and services.",
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
      <div style={{ backgroundColor: "#E9F9FF" }}>
        <SectionControlYourFinance />
      </div>

      <SectionDebitVirtualCard />

      <Section className="flex items-center justify-between flex-wrap">
        <SectionInfo>
          <img src={HomeGladeService} alt="Glade apps services" />
        </SectionInfo>
        <SectionInfo>
          <SectionInfoTitle header>
            Business Management for Start-ups
          </SectionInfoTitle>
          <SectionInfoDescription>
            Take advantage of the efficacy of technology to set up a
            hassle-free, NDIC insured bank account for your business. With this
            account, you’ll be able to:
          </SectionInfoDescription>

          <div className="mt-5">
            <SectionInfoDescription className="flex mb-5">
              <div className="inline-block ">
                <span class="check_circle_light  material-icons fill-current mr-5">
                  done
                </span>
              </div>
              Access discounted transaction fees.
            </SectionInfoDescription>

            <SectionInfoDescription className="flex mb-5">
              <div className="inline-block">
                <span class="check_circle_light  material-icons fill-current mr-5">
                  done
                </span>
              </div>
              Access to capital to grow your business.{" "}
            </SectionInfoDescription>

            <SectionInfoDescription className="flex mb-5">
              <div className="inline-block">
                <span class="check_circle_light  material-icons fill-current mr-5">
                  done
                </span>
              </div>
              Get free integration support.{" "}
            </SectionInfoDescription>
            <SectionInfoDescription className="flex mb-5">
              <div className="inline-block">
                <span class="check_circle_light  material-icons fill-current mr-5">
                  done
                </span>
              </div>
              Get legal and business support.{" "}
            </SectionInfoDescription>
          </div>
        </SectionInfo>
      </Section>

      <Section className="flex items-center justify-between flex-wrap">
        <SectionInfo>
          <div className="mb-5">
            <SectionInfoTitle header>
              Supporting you all the way
            </SectionInfoTitle>
            <SectionInfoDescription>
              We always here to listen to your feedback and grow with you. Our
              Technical support and customer service team are a chat, call or
              email away from resolving any concerns.
            </SectionInfoDescription>
          </div>
        </SectionInfo>
        <SectionInfo>
          <img
            src={StartupOwner}
            className="max-h-96"
            alt="Glade dashboard mobile"
          />
        </SectionInfo>
      </Section>

      <section className="px-4 py-20 flex justify-center">
        <div className="container">
          <SectionInfoTitle header className="mb-8 text-center">
            Here are some start-ups that trust us with their business.
          </SectionInfoTitle>
          <div className="flex justify-center">
            <div>
              <img src={Startups} alt="startups" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
