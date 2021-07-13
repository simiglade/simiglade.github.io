import React from "react";
import Logo from "components/Logo";
import "./Footer.css";
import facebookImg from "assets/img/footer-facebook.png";
import instagramImg from "assets/img/footer-instagram.png";
import twitterImg from "assets/img/footer-twitter.png";
import linkedinImg from "assets/img/footer-linkedin.png";
import appStoreImg from "assets/img/footer-app-store.png";
import googlePlayImg from "assets/img/footer-google-play.png";

function Footer(props) {
  return (
    <div className="Footer bg-primary-light bg-opacity-10 p-8">
      <div className="container grid gap-4 md:grid-cols-4">
        <div className="">
          <Logo />
        </div>
        <div>
          <p className="Footer__item__text">
            Proudly made for small businesses, startups, and freelancers. Our
            platform makes financial management accessible and affordable for
            businesses.
          </p>
          <p className="Footer__item__text">
            Banking and card services provided by Providus Bank Limited; Member
            NDIC
          </p>
          <p className="Footer__item__text">
            Tel: +234 817 557 4227 | support@glade.ng
          </p>
          <div className="Footer__item__text flex space-x-4">
            {SOCIAL_MEDIAS.map(({ image, href }) => (
              <a href={href} target="_blank" rel="noreferrer">
                <img src={image} alt="facebook" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="Footer__item__header">HEAD QUATERS</p>
          <p className="Footer__item__text">
            651 N Broad St, Suite 206 Middletown, 19709 New Castle, Delaware,
            US.
          </p>
          <p className="Footer__item__header">NIGERIA</p>
          <p className="Footer__item__text">
            651 N Broad St, Suite 206 Middletown, 19709 New Castle, Delaware,
            US.
          </p>
          <p className="Footer__item__text">
            No. 15 J.J. Oluleye Street, Utako Abuja.
          </p>
        </div>
        <div>
          <p className="Footer__item__header">CERTIFIED</p>
          <p className="Footer__item__text">
            Mastercard Securecode, Verified by VISA, PCI DSS Compliant.
          </p>
          <p className="Footer__item__text">
            No. 15 J.J. Oluleye Street, Utako Abuja.
          </p>
          <div className="flex md:flex-row flex-col">
            <img src={appStoreImg} alt="appstore" className="m-1" />
            <img src={googlePlayImg} alt="googleplay" className="m-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

const SOCIAL_MEDIAS = [
  { link: "", image: facebookImg },
  { link: "", image: instagramImg },
  { link: "", image: twitterImg },
  { link: "", image: linkedinImg },
];
