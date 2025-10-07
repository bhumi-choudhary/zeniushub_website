import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Herohome from "../component/Herohome";
import { ICONS } from "../component/Icons";
import role_img from "../assets/images/hero_image.png";
import CTAsection from "../component/CTAsection";
import PromoModal from "../component/PromoModal";
import Button from "../component/Button";

const Homepage = () => {
  const data = [
    { date: "26 December 2019", title: "Super Admin", desc: "Manage system-wide settings and user roles efficiently." },
    { date: "02 January 2020", title: "Admin", desc: "Handle courses, batches, and student reports seamlessly." },
    { date: "10 February 2020", title: "Instructor", desc: "Create classes, assignments, and track learning progress." },
    { date: "15 March 2020", title: "Student", desc: "Access learning materials and track progress effortlessly." },
  ];

  const features = [
    { title: "BatchFlow", desc: "Create & clone batches easily", image: "https://api.time.com/wp-content/uploads/2022/11/GettyImages-1358149692.jpg" },
    { title: "ExamPulse", desc: "Schedule quizzes & auto-grade", image: "https://api.time.com/wp-content/uploads/2022/11/GettyImages-1358149692.jpg" },
    { title: "AttendTrack", desc: "Live attendance tracking", image: "https://api.time.com/wp-content/uploads/2022/11/GettyImages-1358149692.jpg" },
    { title: "ContentHub", desc: "Drag & drop course builder", image: "https://api.time.com/wp-content/uploads/2022/11/GettyImages-1358149692.jpg" },
  ];

  const modernizationRoadmap = [
    {
      step: 1,
      title: "Discover & Plan",
      desc: "Understand your school's unique needs and envision a future-ready technology-driven environment.",
    },
    {
      step: 2,
      title: "Integrate Seamlessly",
      desc: "Enhance existing systems with modern, intuitive platforms that simplify school management.",
    },
    {
      step: 3,
      title: "Empower Educators & Students",
      desc: "Provide engaging tools that boost teaching effectiveness and inspire student success.",
    },
    {
      step: 4,
      title: "Optimize & Grow",
      desc: "Leverage real-time insights for continuous growth, resource optimization, and academic excellence.",
    },
  ];

  const stats = [
    {
      icon: <ICONS.building className="text-white" size={32} />,
      value: 1200,
      label: "Business Users",
      desc: "Trusted by over 1,200 companies worldwide to unify and automate core processes.",
    },
    {
      icon: <ICONS.cube className="text-white" size={32} />,
      value: 85,
      label: "Integrated Modules",
      desc: "Comprehensive modules spanning finance, HR, supply chain, and more.",
    },
    {
      icon: <ICONS.circlecheck className="text-white" size={32} />,
      value: 5400,
      label: "Projects Completed",
      desc: "Successful ERP implementations across industries, on time and budget.",
    },
    {
      icon: <ICONS.chart className="text-white" size={32} />,
      value: 300,
      label: "Growth Stories",
      desc: "Empowering businesses with analytics and scalability.",
    },
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));
  const [index, setIndex] = useState(0);
  const autoScrollRef = useRef();

  useEffect(() => {
    autoScrollRef.current = () => {
      setIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    };
  });

  useEffect(() => {
    const interval = setInterval(() => {
      autoScrollRef.current();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prev) =>
        prev.map((val, i) => (val < stats[i].value ? val + Math.ceil(stats[i].value / 100) : val))
      );
    }, 20);
    return () => clearInterval(interval);
  }, [stats]);

  const formatNumber = (num) => num.toLocaleString();

  return (
    <>
      <PromoModal delayMs={2000} />
      {/* Main Background with Elegant Gradients */}
      <div className="fixed inset-0 -z-10">
        <svg width="100vw" height="100vh" style={{ position: "absolute", width: "100vw", height: "100vh" }}>
          <circle cx="20%" cy="20%" r="240" fill="#FF4500" opacity="0.06" />
          <circle cx="90%" cy="80%" r="220" fill="#FF6347" opacity="0.07" />
          <circle cx="70%" cy="10%" r="140" fill="#FF4500" opacity="0.04" />
        </svg>
      </div>

      {/* Hero Section */}
      <Herohome />

      {/* Roles Overview Slider */}
      <section className="relative bg-gradient-to-r from-white to-orange-50 py-16 md:py-24 overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(255,69,0,0.06)_0,transparent_80%)] z-0"></div>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-10 md:mb-16 text-[#FF4500] tracking-tight drop-shadow">
            Roles Overview
          </h2>
          <div className="w-full max-w-5xl h-auto md:h-[420px] bg-white rounded-[30px] shadow-2xl mx-auto flex flex-col md:flex-row overflow-hidden relative">
            {/* Image Section */}
            <motion.div
              key={data[index].title + "-img"}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 w-full flex justify-center items-center bg-gradient-to-br from-[#FF6347] to-[#FF4500] m-4 md:m-6 rounded-[25px] overflow-hidden"
            >
              <img
                src={role_img}
                alt={data[index].title}
                className="object-cover w-full md:max-h-none max-h-60 rounded-[25px]"
              />
            </motion.div>
            {/* Text & Navigation */}
            <motion.div
              key={data[index].title + "-text"}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 w-full p-6 md:p-10 flex flex-col justify-center"
            >
              <p className="text-orange-400 mb-2">{data[index].date}</p>
              <h2 className="text-xl md:text-3xl font-bold mb-3 md:mb-4 text-[#FF4500]">{data[index].title}</h2>
              <p className="text-gray-600 mb-4 md:mb-6">{data[index].desc}</p>
              <button className="bg-gradient-to-r from-[#FF4500] to-[#FF6347] text-white px-4 py-2 md:px-5 md:py-2 rounded-full font-semibold hover:from-[#FF6347] hover:to-[#FF4500] transition-all duration-300 shadow">
                READ MORE
              </button>
            </motion.div>
            {/* Navigation Dots */}
            <div className="absolute right-5 top-1/2 -translate-y-1/2 flex flex-col space-y-3 z-20">
              {data.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-3 h-8 rounded-full transition-colors duration-300 ${i === index ? "bg-[#FF4500]" : "bg-gray-300 hover:bg-[#FF6347]"
                    }`}
                  aria-label={`Go to role ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section with Elegant UI */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20 px-6 max-w-7xl mx-auto">
        {/* Left: Heading and text */}
        <div className="flex-1 w-full max-w-lg md:max-w-none">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            <span className="text-orange-500">Our </span>
            <span className="text-gray-900">Facilities</span>
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </p>
        </div>

        {/* Right: Cards with image and text */}
        <div className="flex flex-wrap gap-6 md:gap-8 flex-1 justify-center md:justify-start">
          {features.map((item, idx) => (
            <div key={idx} className="flex items-center gap-5 rounded-2xl bg-orange-600 p-5 shadow-lg w-full max-w-md">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
              />
              <div>
                <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-orange-100 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Impact & Stats Section */}
      <section className="relative bg-white py-20 px-6 max-w-7xl mx-auto">
        {/* Background gold circle like your image */}
        <div className="absolute -top-24 left-0 w-72 h-72 rounded-full bg-orange-400 opacity-10 -z-10"></div>

        <div className="max-w-2xl mb-14 mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            <span className="text-orange-500">Our </span>
            <span className="text-gray-900">Impact</span>
          </h2>
          <p className="mt-4 max-w-md text-gray-600 leading-relaxed mx-auto">
            We track our progress visually and transparently to ensure quality education combined with a modern and vibrant experience.
          </p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-between gap-8 md:gap-12">
          {stats.map(({ icon, label, value }, idx) => (
            <div key={idx} className="flex flex-col items-center text-center max-w-[14rem] mx-auto p-4">
              <div className="bg-orange-500 rounded-xl p-5 mb-4 flex items-center justify-center shadow-lg ">
                {icon}
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-1">{label}</h3>
              <p className="text-gray-600 text-sm">{formatNumber(value)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Us */}
      <section className="relative bg-gradient-to-r from-white via-orange-50 to-white py-20 px-6 md:py-24 lg:px-16 overflow-hidden">
        {/* Background blurred circles */}
        <div className="absolute top-24 left-[-120px] w-72 md:w-96 h-72 md:h-96 bg-orange-400 rounded-full opacity-20 filter blur-3xl -z-10"></div>
        <div className="absolute bottom-28 right-[-80px] w-60 md:w-80 h-60 md:h-80 bg-orange-300 rounded-full opacity-30 filter blur-2xl -z-10"></div>

        {/* Subtle diagonal stripes (SVG Pattern) */}
        <svg
          className="absolute inset-0 w-full h-full -z-20 opacity-10"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="diagonalLines"
              patternUnits="userSpaceOnUse"
              width="30"
              height="30"
              patternTransform="rotate(45)"
            >
              <line x1="0" y1="0" x2="0" y2="30" stroke="#FF4500" strokeWidth="2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonalLines)" />
        </svg>

        {/* Content container */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          {/* Left Text */}
          <motion.div
            className="md:w-1/2 w-full"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#FF4500] mb-8 leading-tight">
              About <span className="text-gray-900">Our ERP Platform</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our ERP solution seamlessly integrates all your business processes into a unified platform, empowering data-driven decisions, efficiency, and scalable growth.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Designed with flexibility and user-friendliness, our ERP platform handles finance, supply chain, HR, and more, enabling seamless collaboration and agility.
            </p>
            <Button text="Learn More" variant="back" className="text-black" />
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="md:w-1/2 w-full rounded-3xl overflow-hidden shadow-2xl ring-4 ring-orange-300 hover:scale-105 transform transition-transform duration-500"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://cdn.pixabay.com/photo/2024/05/16/19/29/ai-generated-8766874_960_720.jpg"
              alt="Our ERP Platform"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Our Process / Roadmap */}
      <section className="relative py-20 px-6 max-w-7xl mx-auto bg-gradient-to-tr from-orange-50 via-white to-orange-100 rounded-3xl shadow-lg overflow-hidden">
        {/* Background decorative circles */}
        <div className="absolute top-0 left-0 w-72 md:w-96 h-72 md:h-96 rounded-full bg-orange-300 opacity-10 blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 w-60 md:w-80 h-60 md:h-80 rounded-full bg-orange-400 opacity-10 blur-3xl -z-10"></div>

        <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#FF4500] mb-12 drop-shadow-lg">
          Modern Technology Roadmap for Schools
        </h2>

        <div className="flex flex-col md:flex-row items-start justify-center md:justify-between gap-8 md:gap-16">
          {modernizationRoadmap.map(({ step, title, desc }, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-start bg-white rounded-xl shadow-xl py-8 px-6 w-full max-w-md cursor-default hover:shadow-2xl transition-shadow duration-300 relative min-h-[260px] md:min-h-[280px]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <div className="text-orange-500 rounded-full border-2 border-orange-500 w-12 h-12 flex items-center justify-center font-semibold text-xl mb-4 select-none">
                {step}
              </div>
              <h3 className="text-xl text-gray-900 mb-2 font-semibold">{title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="px-6 py-10 max-w-7xl mx-auto">
        <CTAsection />
      </section>
    </>
  );
};

export default Homepage;
