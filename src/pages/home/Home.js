import React from "react";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
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
import { ReactComponent as HomePOSSvg } from "./HomePOS.svg";
import "./Home.css";
import { ArrowDown } from "../../utils/icons";

function Home(props) {
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);

  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };
  return (
    <React.Fragment>
      <Header />
      <div className="bg-primary-dark bg-opacity-80 relative">
        <div className="header-container">
          <img
            src={homeIntroImg}
            className={`-mt-20 header-asset ${
              isVideoLoaded ? "hidden" : "block"
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
                Business banking made for Africa
              </h3>
              <p className="text-body1 mb-9">
                Proudly made for small businesses, startups and freelancers in
                Africa.
              </p>
              <Button>Open an account</Button>
            </div>
          </div>
          <div className="scroll-down">
            <ArrowDown />
          </div>
        </div>
      </div>
      <Section className="">
        <div className="my-24">
          <SectionInfoTitle header className="text-center">
            For all types of businesses
          </SectionInfoTitle>
          <div className="flex mt-6 justify-center md:flex-row  items-center flex-col">
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
      <Section className="flex items-center justify-center flex-wrap">
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
          <SectionInfoTitle>Business current account</SectionInfoTitle>
          <SectionInfoDescription>
            Free business bank accounts built specifically for small businesses-
            All inclusive; invoicing, virtual cards, store management tools with
            no hidden charges.
          </SectionInfoDescription>
          <SectionInfoTitle>Financing</SectionInfoTitle>
          <SectionInfoDescription>
            Loans and Overafts to finance and fund your business on rainy days,
            With flexible payment plans.
          </SectionInfoDescription>
          <SectionInfoTitle>Payments</SectionInfoTitle>
          <SectionInfoDescription>
            Go cashless by making and accepting payments via Bank Transfer,
            Cards, Mobile Money, USSD, QR Pay and point-of-sale (POS) at a very
            low cost.
          </SectionInfoDescription>
        </SectionInfo>
      </Section>
      <Section className="flex items-center justify-center flex-wrap">
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
        <Section className="flex items-center justify-center flex-wrap">
          <SectionInfo>
            <HomeVirtualCardSvg className="w-full" />
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
      <Section className="flex items-center justify-center flex-wrap">
        <SectionInfo>
          <SectionInfoTitle header>
            Reliable POS terminals for your Business
          </SectionInfoTitle>
          <SectionInfoDescription>
            We provide POS to our merchants for in-store payment collections and
            give our agents competitive prices to make profit.
          </SectionInfoDescription>
          <SectionInfoTitle>Reliable network</SectionInfoTitle>
          <SectionInfoDescription>
            Use Glade POS and avoid "network wahala". This is why all our
            merchants and agents are always happy.
          </SectionInfoDescription>
          <SectionInfoTitle>Instant settlements</SectionInfoTitle>
          <SectionInfoDescription>
            We give instant settlements on our platform because we know that you
            would need access to your money the moment you make it.
          </SectionInfoDescription>
          <SectionInfoTitle>
            We are available across all channels
          </SectionInfoTitle>
          <SectionInfoDescription>
            Glade POS gives you access to multiple transactions channels via;
            mobile app, web, SmartPOS.
          </SectionInfoDescription>
          <Button bgColor="bg-primary">Become an agent</Button>
        </SectionInfo>
        <SectionInfo>
          <HomePOSSvg className="w-full" />
        </SectionInfo>
      </Section>
      <Section className="flex items-center justify-center flex-wrap">
        <SectionInfo>
          <HomePOSSvg className="w-full" />
        </SectionInfo>
        <SectionInfo>
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
              label: "It’s Safe",
              description:
                "Get your company registered and a business account for free",
            },
          ].map(({ label, description }, key) => (
            <div className="flex" key={key}>
              <span class="material-icons md-18 mr-3 text-green-400 fill-current">
                check_circle
              </span>
              <div>
                <SectionInfoTitle>{label}</SectionInfoTitle>
                <SectionInfoDescription>{description}</SectionInfoDescription>
              </div>
            </div>
          ))}
        </SectionInfo>
      </Section>
      <Footer />
    </React.Fragment>
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
