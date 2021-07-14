import React from "react";
import { ReactComponent as HomeVirtualCardSvg } from "pages/home/HomeVirtualCard.svg";
import Section from "components/section/Section";
import SectionInfo from "components/section/SectionInfo";
import SectionInfoTitle from "components/section/SectionInfoTitle";
import SectionInfoDescription from "components/section/SectionInfoDescription";

export default function SectionDebitVirtualCard() {
  return (
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
  );
}
