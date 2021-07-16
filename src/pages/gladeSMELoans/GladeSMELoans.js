import React from "react";
import SectionHeader from "../../components/section/SectionHeader";
import Layout from "../../components/Layout";
import SectionInfoTitle from "components/section/SectionInfoTitle";
import SectionInfoDescription from "components/section/SectionInfoDescription";
import BusinessOwner from "./BusinessOwner.png";
import BusinessLoanApp from "./BusinessLoanApp.png";
import BusinessSMELoans from "./BusinessSMELoans.png";
import Section from "components/section/Section";
import SectionInfo from "components/section/SectionInfo";
import Button from "components/button/Button";
import BusinessBusinessOwner from "./BusinessBusinessOwner.png";

export default function GladeSMELoans() {
  const headerdetails = {
    title: "Access SME loans for growing your business",
    description:
      "Glade offers capital to enable small and medium business enterprises grow ",
    buttonLabel: "Apply for a loan",
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
              src={BusinessLoanApp}
              className="max-h-96"
              alt="Glade dashboard mobile"
            />
          </SectionInfo>
          <SectionInfo>
            <div className="mb-5">
              <SectionInfoTitle header>
                Fast and easy loans with Glade
              </SectionInfoTitle>
              <SectionInfoDescription>
                Credit decisions are made automatically based on transactions
                and account data, enabling quick access to loans and working
                capital that can be repaid in installments.
              </SectionInfoDescription>
              {[
                {
                  label: "Apply for a loan",
                  description:
                    "Log into your glade account and make an application for a business loan.",
                },
                {
                  label: "Your account is analyzed",
                  description:
                    "Your transaction and account data are analyzed in real time by the system.",
                },
                {
                  label: "Your loan is approved! ",
                  description:
                    "If you qualify, the funds will be transferred to your account within 1 to 3 hours.",
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
            <SectionInfoTitle header>₦100M+</SectionInfoTitle>
            <SectionInfoTitle>
              worth of SME loans have already been given out
            </SectionInfoTitle>
          </div>
          <Button bgColor="bg-secondary">Apply for a loan</Button>
        </SectionInfo>
        <SectionInfo>
          <img
            src={BusinessBusinessOwner}
            className="max-h-96"
            alt="Glade dashboard mobile"
          />
        </SectionInfo>
      </Section>

      <Section className="flex items-center justify-between flex-wrap">
        <SectionInfo>
          <img src={BusinessSMELoans} alt="Glade apps services" />
        </SectionInfo>
        <SectionInfo>
          <SectionInfoTitle header>Why choose our SME loans?</SectionInfoTitle>
          <SectionInfoDescription>
            AGet the best offers available for your business
          </SectionInfoDescription>

          <div className="mt-8 flex justify-between flex-col md:flex-row">
            <div className="mr-2">
              <SectionInfoDescription className="flex mb-5">
                <div className="inline-block ">
                  <span class="check_circle_light  material-icons fill-current mr-5">
                    done
                  </span>
                </div>
                Competitive rates
              </SectionInfoDescription>

              <SectionInfoDescription className="flex mb-5">
                <div className="inline-block">
                  <span class="check_circle_light  material-icons fill-current mr-5">
                    done
                  </span>
                </div>
                No hidden fees
              </SectionInfoDescription>
            </div>
            <div>
              <SectionInfoDescription className="flex mb-5">
                <div className="inline-block ">
                  <span class="check_circle_light  material-icons fill-current mr-5">
                    done
                  </span>
                </div>
                No collateral required
              </SectionInfoDescription>

              <SectionInfoDescription className="flex mb-5">
                <div className="inline-block">
                  <span class="check_circle_light  material-icons fill-current mr-5">
                    done
                  </span>
                </div>
                Get loans within 3 hours
              </SectionInfoDescription>
            </div>
          </div>
          <Button bgColor="bg-primary">Open an account</Button>
        </SectionInfo>
      </Section>
    </Layout>
  );
}
