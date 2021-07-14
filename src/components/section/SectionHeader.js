import React from "react";
import Section from "components/section/Section";
import SectionInfoTitle from "components/section/SectionInfoTitle";
import SectionInfoDescription from "components/section/SectionInfoDescription";
import SectionInfo from "components/section/SectionInfo";

export default function SectionHeader() {
  return (
    <div>
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
        </SectionInfo>
        <SectionInfo>
          {/* <HomeVirtualCardSvg className="w-full" /> */}
        </SectionInfo>
      </Section>
    </div>
  );
}
