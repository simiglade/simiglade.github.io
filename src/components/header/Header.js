import React from "react";
import clsx from "clsx";
import { RouteEnum } from "utils/constants";
import Logo from "components/Logo";
import IconButton from "components/button/IconButton";
import Button from "components/button/Button";
import HeaderLink from "./HeaderLink";
import HeaderMobileLink from "./HeaderMobileLink";
import { useLocation, Link } from "react-router-dom";

function Header(props) {
  const location = useLocation();
  const [isMobileMenu, setIsMobileMenu] = React.useState(false);
  const [isFixedHeader, setIsFixedHeader] = React.useState(false);

  const openAccountButton = <Button>Open an account</Button>;
  const loginToWebButtonWhite = (
    <Button variant="outlined" className="ring-white text-white">
      Login to web
    </Button>
  );

  const loginToWebButtonPrimary = (
    <Button variant="outlined" className="ring-primary text-primary">
      Login to web
    </Button>
  );

  const logoDark = <Logo />;
  const logoLight = <Logo light />;

  function toggleMobileMenu() {
    setIsMobileMenu((p) => !p);
  }

  const desktopContent = (
    loginToWebButton = loginToWebButtonPrimary,
    logo = logoDark
  ) => (
    <div className="lg:container flex items-center justify-between h-20 m-auto px-4">
      <Link to="/">{logo}</Link>
      <div className="hidden lg:flex items-center justify-between h-20 space-x-4">
        {LINKS.map((link, index) => (
          <HeaderLink key={index} link={link} />
        ))}
        {openAccountButton}
        {loginToWebButton}
      </div>
      <IconButton
        className="lg:hidden fixed right-4 bg-primary"
        onClick={toggleMobileMenu}
      >
        <span className="material-icons text-white">menu</span>
      </IconButton>
    </div>
  );

  React.useLayoutEffect(() => {
    function handleScroll(e) {
      setIsFixedHeader(window.scrollY >= 100);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`relative z-10 ${
          location.pathname === "/" ? "text-white" : "text-black"
        }`}
      >
        {desktopContent(
          loginToWebButtonWhite,
          location.pathname === "/" ? logoLight : logoDark
        )}
      </div>
      {location.pathname === "/" ? (
        <div
          className={clsx(
            "fixed bg-white text-black z-appBar w-full hidden lg:block",
            isFixedHeader ? "top-0" : "-top-20"
          )}
        >
          {desktopContent()}
        </div>
      ) : (
        <div
          className={clsx(
            "fixed bg-white text-black z-appBar w-full hidden lg:block top-0"
          )}
        >
          {desktopContent()}
        </div>
      )}

      <div
        style={{
          transform: isMobileMenu ? "translateX(0%)" : "translateX(100%)",
        }}
        className={clsx(
          "fixed top-0 right-0 flex lg:hidden flex-col w-full sm:max-w-xs h-full bg-white transition-transform z-50",
          {}
        )}
      >
        <div className="flex justify-between items-center h-20 px-4">
          {logoDark}
          <IconButton onClick={toggleMobileMenu}>
            <span className="material-icons">close</span>
          </IconButton>
        </div>
        <div className="flex-1 p-4 overflow-auto divide-y-2">
          {LINKS.map((link, index) => (
            <HeaderMobileLink key={index} link={link} />
          ))}
        </div>
        <div className="flex justify-center space-x-4 p-4">
          {openAccountButton}
          {loginToWebButtonPrimary}
        </div>
      </div>
    </>
  );
}

export default Header;

const LINKS = [
  {
    label: "Business Banking",
    submenus: [
      {
        label: "Products",
        submenus: [
          {
            label: "Business Banking",
            path: RouteEnum.BUSINESS_BANKING,
            description:
              "Create a business current account and manage transactions on the go.",
          },
          {
            label: "Glade POS",
            path: RouteEnum.GLADE_POS,
            description:
              "We provide POS to our merchants for in-store payment collections and give our agents competitive price to make profit.",
          },
          {
            label: "Glade Store",
            path: RouteEnum.GLADE_STORE,
            description:
              "Take your business online. Create, upload and sell your products.",
          },
          {
            label: "Glade Pay",
            path: RouteEnum.GLADE_PAY,
            description:
              "Available for innovators like you to build amazing solutions seamlessly.",
          },

          {
            label: "Glade SME Loans",
            path: RouteEnum.GLADE_SME_LOANS,
            description:
              "Available for innovators like you to build amazing solutions seamlessly.",
          },
        ],
      },
      {
        label: "Our Customers",
        submenus: [
          { label: "Small Business", path: RouteEnum.SMALL_BUSINESS },
          { label: "Freelancers", path: RouteEnum.FREELANCERS },
          { label: "Startups", path: RouteEnum.STARTUPS },
        ],
      },
    ],
  },
  {
    label: "Register a company",
    submenus: [
      {
        submenus: [
          { label: "Register a company", path: RouteEnum.SMALL_BUSINESS },
          { label: "Company name check", path: RouteEnum.FREELANCERS },
        ],
      },
    ],
  },
  {
    label: "Support",
    submenus: [
      {
        label: "Guidelines",
        submenus: [
          {
            label: "Dashboard user Manual",
            path: RouteEnum.DASHBOARD_USER_MANUAL,
          },
          {
            label: "Mobile User Manual",
            path: RouteEnum.MOBILE_USER_MANUAL,
          },
          {
            label: "Glade Store",
            path: RouteEnum.GLADE_STORE,
          },
          {
            label: "Go live Guide",
            path: RouteEnum.GO_LIVE_GUIDE,
          },
          {
            label: "Invoicing Guide",
            path: RouteEnum.INVOICING_GUIDE,
          },
          {
            label: "Pay me link Guide",
            path: RouteEnum.PAY_ME_LINK,
          },
          {
            label: "Make Payments Guide",
            path: RouteEnum.MAKE_PAYMENTS_GUIDE,
          },
        ],
      },
      {
        submenus: [
          {
            label: "Contact Us",
            path: RouteEnum.CONTACT_US,
          },
          {
            label: "FAQ",
            path: RouteEnum.FAQ,
          },
        ],
      },
    ],
  },
  {
    label: "About",
    submenus: [
      {
        submenus: [
          {
            label: "Pricing",
            path: RouteEnum.PRICING,
          },
          {
            label: "About Us",
            path: RouteEnum.ABOUT_US,
          },
          { label: "Blog", path: RouteEnum.BLOG },
        ],
      },
    ],
  },
];
