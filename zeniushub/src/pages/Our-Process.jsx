import React from "react";
import PageHero from "../component/PageHero";

const steps = [
  {
    title: "Information Gathering",
    img: "/Img/icons/personal-information.png",
    desc: "We meet you to get a clear understanding of your website purposes, the main goals you wish to achieve, and the additional attractive features you want to appear on your website.",
  },
  {
    title: "Planning",
    img: "/Img/icons/work-plan.png",
    desc: "The requirements gathered evolve into a plan and content development issues are addressed. A website layout is finalized keeping in mind the objectives and target audience.",
  },
  {
    title: "Updates",
    img: "/Img/icons/sync.png",
    desc: "We frequently send information updates on website development through our demo server and ensure the client can have a first-hand feel and suggest ideas.",
  },
  {
    title: "Home Page Development",
    img: "/Img/icons/web-design.png",
    desc: "A home page is designed to incorporate the brand, message, and invite visitors to continue exploring, as first impressions are important.",
  },
  {
    title: "Design Process",
    img: "/Img/icons/design.png",
    desc: "We put our heart and soul into designing the entire website to deliver an excellent experience for the client.",
  },
  {
    title: "Confirmation",
    img: "/Img/icons/confirmation.png",
    desc: "Once the home page is approved by the client, we proceed with the full development of the website.",
  },
];

const OurProcess = () => {
  return (
    <>
      <PageHero />
      <div className="py-16 bg-gray-50 px-3 md:px-20">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:bg-[#0b2249] group"
              >
                <img
                  src={step.img}
                  alt={step.title}
                  className="mx-auto mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{
                    height: "60px",
                    width: "60px",
                  }}
                />
                <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-orange-500">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-100">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProcess;
