import React from "react";
import SectionHeader from "../../components/section/SectionHeader";
import Layout from "../../components/Layout";
import SectionInfoTitle from "components/section/SectionInfoTitle";
import SectionInfoDescription from "components/section/SectionInfoDescription";
import BusinessOwner from "./BusinessOwner.png";
import FreelancerWorking from "./FreelancerWorking.png";

import Section from "components/section/Section";
import SectionInfo from "components/section/SectionInfo";
import Button from "components/button/Button";
import BusinessOwnerStore from "./BusinessOwnerStore.png";
import SectionDebitVirtualCard from "../../components/section/SectionDebitVirtualCard";
import HomeGladeService from "pages/home/HomeGladeService.png";
import FreelancerActivelyWorking from "./FreelancerActivelyWorking.png";
import SectionInvoicing from "../../components/section/SectionInvoicing";

export default function GrowingBusinesses() {
  const headerdetails = {
    title: "Growing small businesses",
    description:
      "Glade offers amazing tools and services that helps business owners cut down the cost of running your business.",
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

      <Section className="flex items-center justify-between flex-wrap">
        <SectionInfo>
          <img
            src={HomeGladeService}
            className="max-h-96"
            alt="Glade dashboard mobile"
          />
        </SectionInfo>
        <SectionInfo>
          <div className="mb-5">
            <SectionInfoTitle header>
              Integrated Business Platform
            </SectionInfoTitle>

            <div className="mb-5">
              <SectionInfoDescription>
                Glade eliminates the time and hassle of business banking. A
                simply designed, fast and delightful personal service. Plus,
                it’s full of amazing features that makes managing your business
                finances easy. No finance degree required.
              </SectionInfoDescription>
            </div>
            <Button bgColor="bg-primary">Open an Account</Button>
          </div>
        </SectionInfo>
      </Section>
      <div style={{ background: "#E9F9FF" }}>
        <Section className="flex items-center justify-between flex-wrap">
          <SectionInfo>
            <SectionInfoTitle header>
              Seamless Cross-border payments
            </SectionInfoTitle>
            <SectionInfoDescription style={{ color: "#7782BF" }}>
              Make transaction to different countries in seconds and keep tabs
              on your money right from your phone or laptop. This is business
              banking—rebuilt for you and your business.
            </SectionInfoDescription>
            <SectionInfoDescription style={{ color: "#7782BF" }}>
              Get paid online and instore transactions by clients from anywhere,
              using different methods:{" "}
            </SectionInfoDescription>
            <div className="mt-8 flex justify-between flex-col md:flex-row text-light">
              <div>
                <SectionInfoDescription
                  className="flex mb-5 text-light"
                  style={{ color: "#7782BF" }}
                >
                  <div className="inline-block ">
                    <span class="check_circle_light  material-icons fill-current mr-5">
                      done
                    </span>
                  </div>
                  POS
                </SectionInfoDescription>

                <SectionInfoDescription
                  className="flex mb-5"
                  style={{ color: "#7782BF" }}
                >
                  <div className="inline-block">
                    <span class="check_circle_light  material-icons fill-current mr-5">
                      done
                    </span>
                  </div>
                  Payment Links
                </SectionInfoDescription>

                <SectionInfoDescription
                  className="flex mb-5"
                  style={{ color: "#7782BF" }}
                >
                  <div className="inline-block">
                    <span class="check_circle_light  material-icons fill-current mr-5">
                      done
                    </span>
                  </div>
                  USSD
                </SectionInfoDescription>
              </div>
              <div>
                <SectionInfoDescription
                  className="flex mb-5"
                  style={{ color: "#7782BF" }}
                >
                  <div className="inline-block ">
                    <span class="check_circle_light  material-icons fill-current mr-5">
                      done
                    </span>
                  </div>
                  QR Codes
                </SectionInfoDescription>

                <SectionInfoDescription
                  className="flex mb-5"
                  style={{ color: "#7782BF" }}
                >
                  <div className="inline-block">
                    <span class="check_circle_light  material-icons fill-current mr-5">
                      done
                    </span>
                  </div>
                  Bank Transfer
                </SectionInfoDescription>

                <SectionInfoDescription
                  className="flex mb-5"
                  style={{ color: "#7782BF" }}
                >
                  <div className="inline-block">
                    <span class="check_circle_light  material-icons fill-current mr-5">
                      done
                    </span>
                  </div>
                  Invoice
                </SectionInfoDescription>
              </div>
            </div>
          </SectionInfo>
          <SectionInfo>
            <img src={FreelancerWorking} alt="Glade apps services" />
          </SectionInfo>
        </Section>
      </div>

      <Section className="flex items-center justify-between flex-wrap">
        <SectionInfo>
          <img src={FreelancerActivelyWorking} alt="Glade apps services" />
        </SectionInfo>
        <SectionInfo>
          <SectionInfoTitle header>Reliable POS terminals</SectionInfoTitle>
          <SectionInfoDescription>
            Instant POS terminals for retail stores and agents network.
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
      <SectionInvoicing />
      <Section className="flex items-center justify-between flex-wrap">
        <SectionInfo>
          <img
            src={BusinessOwnerStore}
            className="max-h-96"
            alt="Glade dashboard mobile"
          />
        </SectionInfo>
        <SectionInfo>
          <div className="mb-5">
            <SectionInfoTitle header>
              Set up your Glade store in minutes
            </SectionInfoTitle>

            <div className="mb-5">
              <SectionInfoTitle>Invoicing</SectionInfoTitle>
              <SectionInfoDescription style={{ color: "#7782BF" }}>
                Why pay for a website when you can bring your business online
                for free! Create your online store, add products, sell products,
                accept payments, inventory and delivery management all on one
                platform.
              </SectionInfoDescription>
            </div>
            <Button bgColor="bg-primary">Set up store</Button>
          </div>
        </SectionInfo>
      </Section>

      <SectionDebitVirtualCard />
    </Layout>
  );
}
