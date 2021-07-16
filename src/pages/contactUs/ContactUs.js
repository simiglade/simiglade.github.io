import React from "react";
import Layout from "../../components/Layout";
import SectionInfoTitle from "components/section/SectionInfoTitle";
import SectionInfoDescription from "components/section/SectionInfoDescription";
import Button from "components/button/Button";
export default function ContactUs() {
  return (
    <Layout>
      <section className="flex justify-center mb-15">
        <div className="py-15 px-4">
          <div className="text-center ">
            <SectionInfoTitle header className="mt-20">
              Got a Question?
            </SectionInfoTitle>
            <SectionInfoDescription className="mt-5 mb-10">
              We'd love to talk about how we can help you. Please check the FAQs
              page to check if your question had
            </SectionInfoDescription>
            <Button bgColor="bg-primary">See FAQs</Button>
          </div>
          <div className="pt-20 pb-20">
            <div className="text-center ">
              <SectionInfoTitle header className="mt-10">
                Got a Question?
              </SectionInfoTitle>
              <SectionInfoDescription className="mt-5 mb-10">
                We always want to hear from you! Let us know how we can best
                help you and we'll do our very best.
              </SectionInfoDescription>
            </div>
            <form className="w-full max-w-3xl">
              <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <input
                    className="appearance-none block w-full bg-gray-100 text-gray-500 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    placeholder="Full Name"
                  />
                  {/* <p className="text-red-500 text-xs italic">
                    Please fill out this field.
                  </p> */}
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <input
                    className="appearance-none block w-full bg-gray-100 text-gray-500 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="email"
                    placeholder="E-Mail"
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <input
                    className="appearance-none block w-full bg-gray-100 text-gray-500 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <div className="relative">
                    <select
                      className="block appearance-none w-full bg-gray-100 text-gray-500 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-state"
                    >
                      <option>Frontend</option>
                      <option>Backend</option>
                      <option>UI/UX</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full px-3 mb-6 md:mb-0">
                  <input
                    className="appearance-none block w-full bg-gray-100 text-gray-500 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    placeholder="Subject"
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-10">
                <div className="w-full px-3 mb-6 md:mb-0">
                  <textarea
                    col={10}
                    rows={10}
                    className="appearance-none block w-full bg-gray-100 text-gray-500 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  />
                </div>
              </div>

              <div className="text-center">
                <Button bgColor="bg-primary">Send message</Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
