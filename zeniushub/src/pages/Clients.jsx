import React from "react";
import PageHero from "../component/PageHero";
import CounterCard from "../component/counter";

const Clients = () => {
  return (
    <>
      <PageHero />
      <div className="py-16 px-4 md:px-20 bg-gray-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <img
            src="/Img/about-us.png"
            alt="About Us"
            className="rounded shadow-md"
            style={{
              height: "300px",
              width: "500px",
            }}
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">About Our Company</h2>
            <p className="mb-4">
              We are committed to providing the best solutions to help
              businesses achieve their goals. Our team of experts ensures
              quality and innovation in every project.
            </p>
            <p>
              Our focus is on delivering results that exceed expectations while
              building long-term partnerships with our clients.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded shadow text-center">
            <p className="mb-4">
              "Amazing service and great support. Highly recommend!"
            </p>
            <h4 className="font-semibold">Ankit</h4>
          </div>
          <div className="bg-white p-6 rounded shadow text-center">
            <p className="mb-4">
              "Professional team delivering results beyond expectations."
            </p>
            <h4 className="font-semibold">Ritesh</h4>
          </div>
          <div className="bg-white p-6 rounded shadow text-center">
            <p className="mb-4">
              "Their expertise helped our business grow faster than we
              imagined."
            </p>
            <h4 className="font-semibold">Ankit New</h4>
          </div>
        </div>
      </div>

      <div className="py-10 bg-gray-100 px-5 md:px-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                img: "/Img/logos/demo1.jpg",
                heading: "This is First Heading",
                text: "With a team of seasoned professionals, we bring a wealth of experience across diverse industries. Whether you're in finance, healthcare, retail, or beyond, our expertise ensures tailored IT solutions that meet your unique challenges and goals.",
              },
              {
                img: "/Img/logos/demo2.webp",
                heading: "This is second Heading",
                text: "Empowering businesses through cutting-edge technology, we specialize in delivering scalable solutions that streamline operations and enhance productivity, ensuring measurable growth and success.",
              },
              {
                img: "/Img/logos/demo3.webp",
                heading: "This is Third Heading",
                text: "Our client-first approach means we focus on understanding your business needs deeply — designing innovative solutions that solve real problems and create sustainable value.",
              },
              {
                img: "/Img/logos/demo4.jpg",
                heading: "This is Fourth Heading",
                text: "From startups to enterprises, we provide strategic guidance and robust solutions that help organizations transform digitally and achieve long-term success.",
              },
              {
                img: "/Img/logos/demo5.jpg",
                heading: "This is Fifth Heading",
                text: "We partner with you to navigate complex challenges, delivering custom IT solutions that are secure, scalable, and future-ready, no matter your industry.",
              },
              {
                img: "/Img/logos/demo6.jpg",
                heading: "This is Sixth Heading",
                text: "Innovation is at the heart of everything we do — blending creativity with technology to craft solutions that drive growth, efficiency, and competitive advantage.",
              },
            ].map((client, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
              >
                <img
                  src={client.img}
                  alt={`Client ${index + 1}`}
                  className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
                />

                {/* Hover Text Slide-Up Overlay */}
                <div className="absolute inset-0 bg-[#FFD8A8] bg-opacity-80 flex items-center justify-center text-center px-5 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                  <div className="">
                    <h3 className="text-white text-3xl pb-5">
                      {client.heading}
                    </h3>
                    <p className="text-white text-sm md:text-base font-medium leading-relaxed">
                      {client.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 px-5 md:px-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-16 relative inline-block">
            Our Work
            <span className="block w-20 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-orange-100 rounded-2xl shadow-lg p-10 transform hover:scale-105 transition duration-300">
              <h3 className="text-5xl font-bold text-yellow-600 mb-3">80+</h3>
              <p className="text-lg font-medium text-gray-700">Happy Clients</p>
            </div>

            <div className="bg-orange-100 rounded-2xl shadow-lg p-10 transform hover:scale-105 transition duration-300">
              <h3 className="text-5xl font-bold text-green-600 mb-3">50+</h3>
              <p className="text-lg font-medium text-gray-700">
                Companies Served
              </p>
            </div>

            <div className="bg-orange-100 rounded-2xl shadow-lg p-10 transform hover:scale-105 transition duration-300">
              <h3 className="text-5xl font-bold text-blue-600 mb-3">230+</h3>
              <p className="text-lg font-medium text-gray-700">
                Projects Delivered
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
