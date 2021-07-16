import React from "react";
import Layout from "../../components/Layout";
import Section from "components/section/Section";
import SectionInfo from "components/section/SectionInfo";
import SectionInfoTitle from "components/section/SectionInfoTitle";
import SectionInfoDescription from "components/section/SectionInfoDescription";
import BrandColor from "./BrandColor.png";
import Button from "components/button/Button";

export default function Brand() {
  return (
    <Layout>
      <Section className="flex px-4 items-center justify-between flex-wrap">
        <SectionInfo>
          <img src={BrandColor} alt="Brand Color" />
        </SectionInfo>
        <SectionInfo>
          <div>
            <SectionInfoTitle header className="mt-10">
              Brand Assets
            </SectionInfoTitle>
            <SectionInfoDescription className="mt-5 mb-10">
              Download all our brand assets including our logos and
            </SectionInfoDescription>
          </div>
          <Button bgColor="bg-primary">Download assets</Button>
        </SectionInfo>
      </Section>
    </Layout>
  );
}
