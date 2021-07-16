import React from "react";
import SectionHeader from "../../components/section/SectionHeader";
import Layout from "../../components/Layout";
import SectionInfoTitle from "components/section/SectionInfoTitle";
import SectionInfoDescription from "components/section/SectionInfoDescription";
import BusinessOwner from "./BusinessOwner.png";
import GladepayDashboard from "./GladepayDashboard.png";
import "./GladePay.css";
import GladepayDeveloper from "./GladepayDeveloper.png";

import Section from "components/section/Section";
import SectionInfo from "components/section/SectionInfo";
import SectionEmbededAPI from "../../components/section/SectionEmbededAPI";

export default function GladePay() {
  const headerdetails = {
    title: "The easiest way to make and accept payments",
    description: "Gladepay provides simpified payments for Africa.",
    buttonLabel: "Open Api Docs",
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
      <section style={{ backgroundColor: "#E9F9FF" }}>
        <Section className="flex items-center justify-between flex-wrap">
          <SectionInfo>
            <img src={GladepayDashboard} alt="Glade apps services" />
          </SectionInfo>
          <SectionInfo>
            <SectionInfoTitle header>What is GladePay?</SectionInfoTitle>
            <SectionInfoDescription style={{ color: "#7782BF" }}>
              GladePay is a payment gateway that supports businesses to make an
              accept payments from their customers.{" "}
            </SectionInfoDescription>

            <SectionInfoTitle>
              <span class="material-icons md-18 mr-3 mt-3 text-green-400 fill-current">
                check_circle
              </span>
              Web SDK
            </SectionInfoTitle>
            <SectionInfoDescription style={{ color: "#7782BF" }}>
              You can collect payments from your customers via cards, account
              transfers, QR Code and USSD on your platform by easily integrating
              our web SDK
            </SectionInfoDescription>
            <SectionInfoTitle>
              <span class="material-icons md-18 mr-3 mt-3 text-green-400 fill-current">
                check_circle
              </span>
              Mobile SDK
            </SectionInfoTitle>
            <SectionInfoDescription style={{ color: "#7782BF" }}>
              GladePay's mobile SDK allows you to receive card and account
              transfer payments from your customers in-app.
            </SectionInfoDescription>
            <SectionInfoTitle>
              <span class="material-icons md-18 mr-3 mt-3 text-green-400 fill-current">
                check_circle
              </span>
              API
            </SectionInfoTitle>
            <SectionInfoDescription style={{ color: "#7782BF" }}>
              GladePay's documented APIs provides you with all you need to build
              your custom projects and products.{" "}
              <a href="/" className="text-secondary">
                <b>Open API docs</b>
              </a>
            </SectionInfoDescription>
          </SectionInfo>
        </Section>
      </section>

      <Section className="flex items-center justify-between flex-wrap">
        <SectionInfo>
          <SectionInfoTitle header>
            Our API has got you covered
          </SectionInfoTitle>
          <SectionInfoDescription>
            Anything you want to do with your project, you can do it with our
            RESTful open API.
          </SectionInfoDescription>

          <div className="mt-8 flex justify-between flex-col md:flex-row">
            <div>
              <SectionInfoDescription className="flex mb-5">
                <div className="inline-block ">
                  <span class="check_circle_light  material-icons fill-current mr-5">
                    done
                  </span>
                </div>
                Account Creation
              </SectionInfoDescription>

              <SectionInfoDescription className="flex mb-5">
                <div className="inline-block">
                  <span class="check_circle_light  material-icons fill-current mr-5">
                    done
                  </span>
                </div>
                Payment services
              </SectionInfoDescription>

              <SectionInfoDescription className="flex mb-5">
                <div className="inline-block">
                  <span class="check_circle_light  material-icons fill-current mr-5">
                    done
                  </span>
                </div>
                Airtime & Bills
              </SectionInfoDescription>
            </div>
            <div>
              <SectionInfoDescription className="flex mb-5">
                <div className="inline-block ">
                  <span class="check_circle_light  material-icons fill-current mr-5">
                    done
                  </span>
                </div>
                Account Creation
              </SectionInfoDescription>

              <SectionInfoDescription className="flex mb-5">
                <div className="inline-block">
                  <span class="check_circle_light  material-icons fill-current mr-5">
                    done
                  </span>
                </div>
                Payment services
              </SectionInfoDescription>

              <SectionInfoDescription className="flex mb-5">
                <div className="inline-block">
                  <span class="check_circle_light  material-icons fill-current mr-5">
                    done
                  </span>
                </div>
                Airtime & Bills
              </SectionInfoDescription>
            </div>
          </div>
        </SectionInfo>
        <SectionInfo>
          <img src={GladepayDeveloper} alt="Glade apps services" />
        </SectionInfo>
      </Section>

      <SectionEmbededAPI />
    </Layout>
  );
}
