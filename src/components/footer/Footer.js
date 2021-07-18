import React from "react";
import "./Footer.css";
import facebookImg from "assets/img/footer-facebook.png";
import instagramImg from "assets/img/footer-instagram.png";
import twitterImg from "assets/img/footer-twitter.png";
import linkedinImg from "assets/img/footer-linkedin.png";
import appStoreImg from "assets/img/footer-app-store.png";
import googlePlayImg from "assets/img/footer-google-play.png";

function Footer(props) {
  const footerTopLinks = [
    {
      link: "Careers",
      path: "/",
    },
    {
      link: "Blog",
      path: "/",
    },
    {
      link: "Brand",
      path: "/",
    },
    {
      link: "Terms",
      path: "/",
    },
    {
      link: "Privacy & Policy",
      path: "/",
    },
  ];
  return (
    <div className="Footer flex justify-center bg-opacity-10 p-20">
      <div className="max-w-6xl px-5 grid md:grid-col-1 grid-cols-3 gap-8">
        <div>
          <div>
            <p className="Footer__item__text">
              Proudly made for small businesses, startups, and freelancers. Our
              platform makes financial management accessible and affordable for
              businesses.
            </p>
            <p className="Footer__item__text">
              Banking and card services provided by Providus Bank Limited;
              Member NDIC
            </p>
            <p className="Footer__item__text">
              Tel: +234 817 557 4227 | support@glade.ng
            </p>
            <div className="Footer__item__text flex space-x-3">
              {SOCIAL_MEDIAS.map(({ image, href }) => (
                <a href={href} target="_blank" rel="noreferrer">
                  <img src={image} width={25} alt="facebook" />
                </a>
              ))}
              <p className="Footer__item__slack">
                <a href="/" className="text-primary">
                  Slack us
                </a>{" "}
                Here
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="Footer__item__header">HEAD QUATERS</p>
          <p className="Footer__item__text">
            651 N Broad St, Suite 206 Middletown, 19709 New Castle, Delaware,
            US.
          </p>
          <p className="Footer__item__header">NIGERIA</p>
          <p className="Footer__item__text max-w-xs">
            2 Crown Court Estate 2, Oniru Victoria Island Lagos.
          </p>
          <p className="Footer__item__text max-w-xs">
            No. 15 J.J. Oluleye Street, Utako Abuja.
          </p>
        </div>
        <div>
          <p className="Footer__item__header">CERTIFIED</p>
          <p className="Footer__item__text max-w-xs">
            Mastercard Securecode, Verified by VISA, PCI DSS Compliant.
          </p>
          <p className="Footer__item__toplink">
            <ul>
              {footerTopLinks.map((link) => (
                <li>
                  <a href={link.path}>{link.link}</a>
                </li>
              ))}
            </ul>
          </p>

          <p className="Footer__item__text">
            © Glade 2021. All Rights Reserved
          </p>
          <div className="flex md:flex-row flex-col">
            <img src={appStoreImg} width={150} alt="appstore" className="m-1" />
            <img
              src={googlePlayImg}
              width={150}
              alt="googleplay"
              className="m-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

const SOCIAL_MEDIAS = [
  { link: "/", image: facebookImg },
  { link: "/", image: instagramImg },
  { link: "/", image: twitterImg },
  { link: "/", image: linkedinImg },
];
