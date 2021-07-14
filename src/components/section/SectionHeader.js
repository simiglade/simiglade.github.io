import React from "react";
import Section from "components/section/Section";
import SectionInfoTitle from "components/section/SectionInfoTitle";
import SectionInfoDescription from "components/section/SectionInfoDescription";
import SectionInfo from "components/section/SectionInfo";
import Button from "components/button/Button";

export default function SectionHeader({
  title,
  description,
  buttonLabel,
  img,
}) {
  return (
    <div>
      <Section className="flex items-center justify-center flex-wrap">
        <SectionInfo>
          <SectionInfoTitle header>{title}</SectionInfoTitle>
          <SectionInfoDescription>{description}</SectionInfoDescription>
          <Button bgColor="bg-secondary px-2" style={{ minWidth: "140px" }}>
            {buttonLabel}
          </Button>
        </SectionInfo>
        <SectionInfo>
          <img src={img} alt={title} />
        </SectionInfo>
      </Section>
    </div>
  );
}
