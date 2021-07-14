import React from "react";
import homeIntroImg from "assets/img/home-intro.png";
import Button from "components/button/Button";
import Section from "components/section/Section";
import SectionInfo from "components/section/SectionInfo";
import SectionInfoTitle from "components/section/SectionInfoTitle";
import SectionInfoDescription from "components/section/SectionInfoDescription";
import { ReactComponent as HomeBusinessSvg } from "./HomeBusinesses.svg";
import { ReactComponent as HomeFreelancerSvg } from "./HomeFreelancer.svg";
import { ReactComponent as HomeStartupSvg } from "./HomeStartup.svg";
import { ReactComponent as HomeDashboardSvg } from "./HomeDashboard.svg";
import { ReactComponent as HomeVirtualCardSvg } from "./HomeVirtualCard.svg";
import "./Home.css";
import { ArrowDown } from "../../utils/icons";

import HomeExecutive from "./HomeRegisterComapny.png";
import HomePos from "./HomePOS.png";
import HomeDashboard from "./HomeDashboard.png";
import DashboardMobile from "./DashboardMobile.png";
import DashboardMerchant from "./DashboardMerchant.png";
import appStoreImg from "assets/img/footer-app-store.png";
import googlePlayImg from "assets/img/footer-google-play.png";
import Layout from "../../components/Layout";

function Home(props) {
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);

  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };
  return (
    <Layout>
      <div className="bg-primary-dark bg-opacity-80 relative">
        <div className="header-container">
          <img
            src={homeIntroImg}
            className={`-mt-20 header-asset ${
              isVideoLoaded ? "hidden" : "hidden"
            }`}
            alt="home intro"
          />
          <video
            onLoadedData={onLoadedData}
            className="-mt-20 header-asset"
            loop="true"
            autoplay="autoplay"
            muted
          >
            <source
              src="https://res.cloudinary.com/silva/video/upload/v1626089337/Glade_web_dev_video_12.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="absolute inset-0">
          <div className="container mx-auto px-4 h-full flex items-center ">
            <div className="text-white max-w-xl">
              <h5 className="text-h5" style={{ fontWeight: 600 }}>
                Business Bank Account
              </h5>
              <h3 className="text-h3" style={{ fontWeight: "bolder" }}>
                Business banking made for Africa.
              </h3>
              <p
                className="text-body2b mt-5 mb-9 max-w-md"
                style={{ color: "white" }}
              >
                Proudly made for small businesses, startups and freelancers in
                Africa.
              </p>
              <Button>Open an account</Button>
            </div>
          </div>
          <div className="scroll-down">
            <a href="#our-businesses">
              <ArrowDown />
            </a>
          </div>
        </div>
      </div>
      <Section className="" id="our-businesses">
        <div className="my-5">
          <SectionInfoTitle
            header
            className="text-center"
            style={{ marginBottom: "4.375rem" }}
          >
            For all types of businesses
          </SectionInfoTitle>
          <div className="flex mt-6 justify-between md:flex-row  items-center flex-col">
            {TYPE_OF_BUSINESSES.map((business, key) => (
              <div key={key} className="flex flex-col items-center w-80 px-4">
                <business.icon className="mb-4" />
                <SectionInfoTitle>{business.label}</SectionInfoTitle>
                <SectionInfoDescription className="text-center">
                  {business.description}
                </SectionInfoDescription>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section className="flex items-center justify-between flex-wrap">
        <SectionInfo>
          <HomeDashboardSvg className="w-full" />
        </SectionInfo>
        <SectionInfo>
          <SectionInfoTitle header>
            More than just a bank account
          </SectionInfoTitle>
          <SectionInfoDescription>
            A business current account that is packed with features which save
            you time and money.
          </SectionInfoDescription>

          <SectionInfoTitle>
            <span class="material-icons md-18 mr-3 mt-3 text-green-400 fill-current">
              check_circle
            </span>
            Business current account
          </SectionInfoTitle>
          <SectionInfoDescription>
            Free business bank accounts built specifically for small businesses-
            All inclusive; invoicing, virtual cards, store management tools with
            no hidden charges.
          </SectionInfoDescription>
          <SectionInfoTitle>
            <span class="material-icons md-18 mr-3 mt-3 text-green-400 fill-current">
              check_circle
            </span>
            Financing
          </SectionInfoTitle>
          <SectionInfoDescription>
            Loans and Overafts to finance and fund your business on rainy days,
            With flexible payment plans.
          </SectionInfoDescription>
          <SectionInfoTitle>
            <span class="material-icons md-18 mr-3 mt-3 text-green-400 fill-current">
              check_circle
            </span>
            Payments
          </SectionInfoTitle>
          <SectionInfoDescription>
            Go cashless by making and accepting payments via Bank Transfer,
            Cards, Mobile Money, USSD, QR Pay and point-of-sale (POS) at a very
            low cost.
          </SectionInfoDescription>
        </SectionInfo>
      </Section>
      <Section className="flex items-center justify-between flex-wrap">
        <SectionInfo>
          <SectionInfoTitle header>
            Debit & Virtual Card without Stress.
          </SectionInfoTitle>
          <SectionInfoDescription>
            We ensure you can make secure business expenses through debit and
            virtual cards.
          </SectionInfoDescription>
          <SectionInfoTitle>Business card</SectionInfoTitle>
          <SectionInfoDescription>
            Get a debit card to manage your business expense.
          </SectionInfoDescription>
          <SectionInfoTitle>Dollar card</SectionInfoTitle>
          <SectionInfoDescription>
            Create a virtual dollar card to manage your USD expenses for
            international transactions.
          </SectionInfoDescription>
          <SectionInfoTitle>Stay in control</SectionInfoTitle>
          <SectionInfoDescription>
            Set spending limits, lock and unlock your card, change Pin.
          </SectionInfoDescription>
        </SectionInfo>
        <SectionInfo>
          <HomeVirtualCardSvg className="w-full" />
        </SectionInfo>
      </Section>
      <div
        style={{
          background:
            "linear-gradient(105.37deg, #00AFEF 17.71%, #0E038A 100%)",
        }}
      >
        <Section className="flex items-center justify-between flex-wrap">
          <SectionInfo>
            <img src={HomeDashboard} alt="Glade Dashboard" />
          </SectionInfo>
          <SectionInfo>
            <SectionInfoTitle header style={{ color: "white" }}>
              Control your business finance conveniently.
            </SectionInfoTitle>
            <SectionInfoDescription style={{ color: "white" }}>
              Everything your business needs built into your phone and laptop.
            </SectionInfoDescription>
            <SectionInfoTitle style={{ color: "white" }}>
              Invoicing
            </SectionInfoTitle>
            <SectionInfoDescription style={{ color: "white" }}>
              Create and send invoices to customer and request for payments.
            </SectionInfoDescription>
            <SectionInfoTitle style={{ color: "white" }}>
              Staff Payroll
            </SectionInfoTitle>
            <SectionInfoDescription style={{ color: "white" }}>
              Manage employees schedules and payroll.
            </SectionInfoDescription>
            <SectionInfoTitle style={{ color: "white" }}>
              Payments
            </SectionInfoTitle>
            <SectionInfoDescription style={{ color: "white" }}>
              Accept online and in-store payments. Track and monitor your
              inflows.
            </SectionInfoDescription>
            <SectionInfoTitle style={{ color: "white" }}>
              Customer Insights
            </SectionInfoTitle>
            <SectionInfoDescription style={{ color: "white" }}>
              Understand your customer behaviour and generate valuable insights
              to help in making informed decisions.
            </SectionInfoDescription>
          </SectionInfo>
        </Section>
      </div>
      <div
        style={{
          background:
            "linear-gradient(105.37deg, #00AFEF 17.71%, #0E038A 100%)",
        }}
      ></div>
      <Section className="flex items-center justify-between flex-wrap">
        <SectionInfo>
          <div className="mb-5">
            <SectionInfoTitle header>
              Reliable POS terminals for your Business
            </SectionInfoTitle>
            <SectionInfoDescription>
              We provide POS to our merchants for in-store payment collections
              and give our agents competitive prices to make profit.
            </SectionInfoDescription>
            <SectionInfoTitle>Reliable network</SectionInfoTitle>
            <SectionInfoDescription>
              Use Glade POS and avoid "network wahala". This is why all our
              merchants and agents are always happy.
            </SectionInfoDescription>
            <SectionInfoTitle>Instant settlements</SectionInfoTitle>
            <SectionInfoDescription>
              We give instant settlements on our platform because we know that
              you would need access to your money the moment you make it.
            </SectionInfoDescription>
            <SectionInfoTitle>
              We are available across all channels
            </SectionInfoTitle>
            <SectionInfoDescription>
              Glade POS gives you access to multiple transactions channels via;
              mobile app, web, SmartPOS.
            </SectionInfoDescription>
          </div>

          <Button bgColor="bg-primary">Become an agent</Button>
        </SectionInfo>
        <SectionInfo>
          <img src={HomePos} alt="POS" />
        </SectionInfo>
      </Section>
      <div
        style={{
          background: "#F9FDFF",
        }}
      >
        <Section className="flex items-center justify-between flex-wrap">
          <SectionInfo>
            <img src={HomeExecutive} alt="Company Executive" />
          </SectionInfo>
          <SectionInfo>
            <div className="mb-5">
              <SectionInfoTitle header>
                Register your company and open a Glade account
              </SectionInfoTitle>
              {[
                {
                  label: "It’s FREE",
                  description:
                    "Get your company registered and a business account for free",
                },
                {
                  label: "It’s Fast",
                  description:
                    "Get your company registered and a business account for free",
                },
                {
                  label: "It’s safe",
                  description:
                    "Get your company registered and a business account for free",
                },
              ].map(({ label, description }, key) => (
                <div className="flex" key={key}>
                  <span class="material-icons md-18 mr-3 mt-3 text-green-400 fill-current">
                    check_circle
                  </span>
                  <div>
                    <div>
                      <SectionInfoTitle>{label}</SectionInfoTitle>
                      <SectionInfoDescription style={{ color: "#7782BF" }}>
                        {description}
                      </SectionInfoDescription>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button bgColor="bg-secondary">Register your company</Button>
          </SectionInfo>
        </Section>
      </div>

      <Section className="flex items-center justify-between flex-wrap">
        <SectionInfo>
          <div className="mb-5">
            <SectionInfoTitle header>
              Getting started on mobile
            </SectionInfoTitle>
            <SectionInfoDescription>
              Set up your account with these easy steps.
            </SectionInfoDescription>
            {[
              {
                label: "Download the app",
                description: "Get the app on playstore or app store",
              },
              {
                label: "Tell us about your company",
                description: "Get the app on playstore or app store",
              },
              {
                label: "Get the app on playstore or app store",
                description: "Get the app on playstore or app store",
              },
              {
                label: "Your account is ready ",
                description: "Get the app on playstore or app store",
              },
            ].map(({ label, description }, key) => (
              <div className="flex" key={key}>
                {key === 3 ? (
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
        <SectionInfo>
          <img
            src={DashboardMobile}
            className="max-h-96"
            alt="Glade dashboard mobile"
          />
        </SectionInfo>
      </Section>

      <section className="px-4 py-10 flex justify-center">
        <div className="container">
          <SectionInfoTitle header className="text-center mb-5">
            Trusted by Nigerian businesses
          </SectionInfoTitle>

          <div className="flex flex-wrap justify-center  -mx-2">
            {[
              {
                title: "CEO, Mustees Clothing",
                description:
                  "Its amazing to be able to receive instant settlements, the customer service at Glade is of an exceptional standard. I'd recommend it to all business online",
              },
              {
                title: "Project manager, NobleGate",
                description:
                  "I can testify of their credibility. I have never been stranded with Glade. They are experts in treating their customers right. Thumbs up!",
              },
              {
                title: "Head of Growth, Payforce",
                description:
                  "I want to thank the Glade team for their support during our project. Our service is now more efficient today &amp; sales have increased by 70%. Thank you once more guys & don't stop doing what you do.",
              },
              {
                title: "Canbillaire Nigeria Ltd.",
                description:
                  "I have found Glade to be one of the most reliable payment solutions i've ever used. The insights dashboard has helped me target and reward my most valued customers.",
              },
            ].map(({ title, description }, key) => (
              <div key={key} className="w-full md:w-1/4 sm:w-1/2 p-2">
                <div
                  className="m-3 h-full  p-8"
                  style={{ background: "#FDFDFD" }}
                >
                  <div className="text-subtitle3 text-textPrimaryLight mb-2">
                    {title}
                  </div>
                  <div className="text-body3 text-textPrimaryLighter">
                    {description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div
        style={{
          background: "#F9FDFF",
        }}
        className="flex justify-center"
      >
        <div className="container">
          <section className="flex items-center flex-wrap py-8 ">
            <SectionInfo>
              <div className="mb-5">
                <div className="flex">
                  <div>
                    <SectionInfoTitle header>Stay in the loop</SectionInfoTitle>
                    <SectionInfoTitle>
                      Get updates on our latest features and offers.
                    </SectionInfoTitle>
                    <div>
                      <div class="w-full">
                        <input
                          className="mt-5 appearance-none border-2 border-gray-200  w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none bg-white focus:border-blue-500"
                          id="inline-password"
                          type="email"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="text-body3 text-textPrimaryLighter mt-3 max-w-md">
                        By subscribing you agree to receive marketing
                        communications from Glade. You can unsubscribe anytime
                        using the link in the footer of any of our emails. See
                        our privacy policy.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button bgColor="bg-secondary px-2" style={{ minWidth: "140px" }}>
                Signup
              </Button>
            </SectionInfo>
          </section>
        </div>
      </div>

      <Section className="flex items-center justify-between flex-wrap">
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
        <SectionInfo>
          <img
            src={DashboardMerchant}
            className="max-h-96"
            alt="Glade dashboard mobile"
          />
        </SectionInfo>
      </Section>
    </Layout>
  );
}

export default Home;

const TYPE_OF_BUSINESSES = [
  {
    label: "Freelancers",
    icon: HomeFreelancerSvg,
    description:
      "Imagine a business banking experience designed for someone as busy as you on-the-go without hidden charges. ",
  },
  {
    label: "Growing businesses",
    icon: HomeBusinessSvg,
    description:
      "Glade eliminates the time and hassle of business banking. Just simply designed, fast and delightful personal service.",
  },
  {
    label: "Startups",
    icon: HomeStartupSvg,
    description:
      "Glade is the smartest bank account your business can get. A powerful Open API and tools to build amazing products.",
  },
];
