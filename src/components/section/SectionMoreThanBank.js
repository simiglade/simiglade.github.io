import React from "react";
import Section from "components/section/Section";
import SectionInfo from "components/section/SectionInfo";
import SectionInfoTitle from "components/section/SectionInfoTitle";
import SectionInfoDescription from "components/section/SectionInfoDescription";
import HomeGladeService from "pages/home/HomeGladeService.png";

export default function SectionMoreThanBank() {
  return (
    <Section className="flex items-center justify-between flex-wrap">
      <SectionInfo>
        <img src={HomeGladeService} alt="Glade apps services" />
      </SectionInfo>
      <SectionInfo>
        <SectionInfoTitle header>
          More than just a bank account
        </SectionInfoTitle>
        <SectionInfoDescription>
          A business current account that is packed with features which save you
          time and money.
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
          Go cashless by making and accepting payments via Bank Transfer, Cards,
          Mobile Money, USSD, QR Pay and point-of-sale (POS) at a very low cost.
        </SectionInfoDescription>
      </SectionInfo>
    </Section>
  );
}
