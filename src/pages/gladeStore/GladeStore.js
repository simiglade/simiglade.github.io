import React from "react";
import SectionHeader from "../../components/section/SectionHeader";
import Layout from "../../components/Layout";
import SectionInfoTitle from "components/section/SectionInfoTitle";
import SectionInfoDescription from "components/section/SectionInfoDescription";
import BusinessOwner from "./BusinessOwner.png";
import GladeStoreInsight from "./GladeStoreInsight.png";
import Section from "components/section/Section";
import SectionInfo from "components/section/SectionInfo";
import Button from "components/button/Button";
import GladeStoreDashboard from "./GladeStoreDashboard.png";

export default function GladeStore() {
  const headerdetails = {
    title: "Set up your online store in minutes for free.",
    description:
      "Create a modern and beautiful online store today. Upload product images, inventory, set product, delivery prices and start selling in a giffy.",
    buttonLabel: "Set up store",
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
            <img
              src={GladeStoreInsight}
              className="max-h-96"
              alt="Glade dashboard mobile"
            />
          </SectionInfo>
          <SectionInfo>
            <div className="mb-5">
              <SectionInfoTitle header>
                How to Set-up a Glade Store
              </SectionInfoTitle>

              {[
                {
                  label: "Login or Create an account",
                  description:
                    "To Set up your Store, you need to be logged into your Glade account or you can create an individual or business account for free.",
                },
                {
                  label: "Create store and upload products",
                  description:
                    "Enable Glade Store from your dashboard settings, create your store, add a custom domain name for your store, add logo, change store color to suit your brand, add products, pricing, images and take your store online.",
                },
                {
                  label: "Start selling",
                  description:
                    "Your store is now live. Copy your URL and send to customers, add it to your social media channels and start selling immediately.",
                },
              ].map(({ label, description }, key) => (
                <div className="flex" key={key}>
                  {key === 2 ? (
                    <span class="check_circle  material-icons fill-current">
                      done
                    </span>
                  ) : (
                    <span class="check_circle">{key + 1}</span>
                  )}

                  <div>
                    <div>
                      <SectionInfoTitle>{label}</SectionInfoTitle>
                      <SectionInfoDescription>
                        {description}
                      </SectionInfoDescription>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SectionInfo>
        </Section>
      </section>

      <Section className="flex items-center justify-between flex-wrap">
        <SectionInfo>
          <div className="mb-5">
            <SectionInfoTitle header>
              Manage your store easily from your dashboard
            </SectionInfoTitle>
            <SectionInfoDescription>
              worth of SME loans have already been given out
            </SectionInfoDescription>
          </div>
          <Button bgColor="bg-secondary">Open an account</Button>
        </SectionInfo>
        <SectionInfo>
          <img
            src={GladeStoreDashboard}
            className="max-h-96"
            alt="Glade dashboard mobile"
          />
        </SectionInfo>
      </Section>

      <Section className="flex items-center justify-between flex-wrap">
        <SectionInfo>
          <SectionInfoTitle header>
            Why choose our Glade Store?
          </SectionInfoTitle>

          <div className="mt-5">
            <SectionInfoDescription className="flex mb-5">
              <div className="inline-block ">
                <span class="check_circle_light  material-icons fill-current mr-5">
                  done
                </span>
              </div>
              Easy and Simple to Set up
            </SectionInfoDescription>

            <SectionInfoDescription className="flex mb-5">
              <div className="inline-block">
                <span class="check_circle_light  material-icons fill-current mr-5">
                  done
                </span>
              </div>
              Keep track of what your customers are buying
            </SectionInfoDescription>

            <SectionInfoDescription className="flex mb-5">
              <div className="inline-block">
                <span class="check_circle_light  material-icons fill-current mr-5">
                  done
                </span>
              </div>
              Set up Delivery System and Track your Sales
            </SectionInfoDescription>
            <SectionInfoDescription className="flex mb-5">
              <div className="inline-block">
                <span class="check_circle_light  material-icons fill-current mr-5">
                  done
                </span>
              </div>
              Customize your store to suit your brand
            </SectionInfoDescription>
            <SectionInfoDescription className="flex mb-5">
              <div className="inline-block">
                <span class="check_circle_light  material-icons fill-current mr-5">
                  done
                </span>
              </div>
              Get instant payment to your Account
            </SectionInfoDescription>
          </div>
        </SectionInfo>
        <SectionInfo>
          <img src={GladeStoreInsight} alt="Glade apps services" />
        </SectionInfo>
      </Section>
    </Layout>
  );
}
