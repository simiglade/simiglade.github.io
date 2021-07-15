import React from "react";
import SectionHeader from "../../components/section/SectionHeader";
import Layout from "../../components/Layout";
import SectionBusinessAccount from "components/section/SectionBusinessAccount";
import BusinessOwner from "./BusinessOwner.png";
import GladePOSAttractiveBusinessOwner from "./GladePOSAttractiveBusinessOwner.png";
import GladePOSGlade from "./GladePOSGlade.png";
import GladePOSAttractiveBusinessOwner2 from "./GladePOSAttractiveBusinessOwner2.png";

import Section from "components/section/Section";
import SectionInfo from "components/section/SectionInfo";
import SectionInfoTitle from "components/section/SectionInfoTitle";
import SectionInfoDescription from "components/section/SectionInfoDescription";
import Button from "components/button/Button";

export default function GladePOS() {
  const headerdetails = {
    title: "Reliable POS terminals for your Business",
    description:
      "We provide POS to our merchants for in-store payment collections and give our agents competitive prices to make profit.",
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
      <Section className="flex items-center justify-between flex-wrap">
        <SectionInfo>
          <img src={GladePOSGlade} alt="Glade apps services" />
        </SectionInfo>
        <SectionInfo>
          <SectionInfoTitle header>Why choose Glade POS?</SectionInfoTitle>
          <SectionInfoDescription>
            Instant POS terminal for retail stores and agents network.
          </SectionInfoDescription>

          <SectionInfoTitle>
            <span class="material-icons md-18 mr-3 mt-3 text-green-400 fill-current">
              check_circle
            </span>
            Reliable network
          </SectionInfoTitle>
          <SectionInfoDescription>
            Use Glade POS and avoid "network wahala". This is why all our
            merchants and agents are always happy.
          </SectionInfoDescription>
          <SectionInfoTitle>
            <span class="material-icons md-18 mr-3 mt-3 text-green-400 fill-current">
              check_circle
            </span>
            Instant settlements
          </SectionInfoTitle>
          <SectionInfoDescription>
            We give instant settlements on our platform because we know that you
            would need access to your money the moment you make it.
          </SectionInfoDescription>
          <SectionInfoTitle>
            <span class="material-icons md-18 mr-3 mt-3 text-green-400 fill-current">
              check_circle
            </span>
            We are available across all channels
          </SectionInfoTitle>
          <SectionInfoDescription>
            Glade POS gives you access to multiple transactions channels via;
            mobile app, web, SmartPOS with real time reconciliation via
            dashboard.
          </SectionInfoDescription>
        </SectionInfo>
      </Section>
      <div
        style={{
          background: "linear-gradient(105.37deg, #0E038A 0%, #00AFEF 78.65%)",
        }}
      >
        <Section className="flex items-center justify-between flex-wrap">
          <SectionInfo>
            <SectionInfoTitle style={{ color: "white" }}>
              We are available across all channels
            </SectionInfoTitle>
            <SectionInfoDescription style={{ color: "white" }}>
              With Glade POS you can accept payment from your customer via POS
              at a very competitive rates, as agent you can make extra income by
              providing banking services in your community.
            </SectionInfoDescription>

            <Button bgColor="bg-secondary">Become an agent</Button>
          </SectionInfo>
          <SectionInfo>
            <img
              src={GladePOSAttractiveBusinessOwner}
              alt="Glade apps services"
            />
          </SectionInfo>
        </Section>
      </div>

      <Section className="flex items-center justify-between flex-wrap">
        <SectionInfo>
          <img
            src={GladePOSAttractiveBusinessOwner2}
            alt="Glade apps services"
          />
        </SectionInfo>
        <SectionInfo>
          <SectionInfoTitle>
            We are available across all channels
          </SectionInfoTitle>
          <SectionInfoDescription>
            Glade POS gives you access to multiple transactions channels via;
            mobile app, web, SmartPOS. The choice is yours
          </SectionInfoDescription>

          <Button bgColor="bg-primary">Become an agent</Button>
        </SectionInfo>
      </Section>
      <SectionBusinessAccount />
    </Layout>
  );
}
