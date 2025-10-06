import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Herohome from "../component/Herohome";
import { ICONS } from "../component/Icons";
import role_img from "../assets/images/hero_image.png";

gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  const data = [
    { date: "26 Dec 2019", title: "Super Admin", desc: "Manage system-wide settings and user roles efficiently." },
    { date: "02 Jan 2020", title: "Admin", desc: "Handle courses, batches, and student reports seamlessly." },
    { date: "10 Feb 2020", title: "Instructor", desc: "Create classes, assignments, and track learning progress." },
    { date: "15 Mar 2020", title: "Student", desc: "Access learning materials and track progress effortlessly." },
  ];

  const features = [
    { title: "BatchFlow", desc: "Create & clone batches easily", color: "#FF7A00", icon: <ICONS.user size={30} /> },
    { title: "ExamPulse", desc: "Schedule quizzes & auto-grade", color: "#001F3F", icon: <ICONS.clipboardcheck size={30} /> },
    { title: "AttendTrack", desc: "Live attendance tracking", color: "#FF7A00", icon: <ICONS.bookopen size={30} /> },
    { title: "ContentHub", desc: "Drag & drop course builder", color: "#001F3F", icon: <ICONS.graduatecap size={30} /> },
  ];

  const processSteps = [
    { step: 1, title: "Sign Up", desc: "Create your account and login" },
    { step: 2, title: "Add Courses", desc: "Admins can create courses and batches" },
    { step: 3, title: "Enroll Students", desc: "Students join courses seamlessly" },
    { step: 4, title: "Track Progress", desc: "Monitor attendance, submissions & exams" },
  ];

  const stats = [
    { label: "Students Enrolled", value: 1200, icon: <ICONS.user size={40} /> },
    { label: "Courses Available", value: 85, icon: <ICONS.bookopen size={40} /> },
    { label: "Assignments Completed", value: 5400, icon: <ICONS.clipboardcheck size={40} /> },
    { label: "Graduates", value: 300, icon: <ICONS.graduatecap size={40} /> },
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));
  const [index, setIndex] = useState(0);
  const sectionRef = useRef(null);

  // Animate counters
  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prev =>
        prev.map((val, i) => (val < stats[i].value ? val + Math.ceil(stats[i].value / 100) : val))
      );
    }, 20);
    return () => clearInterval(interval);
  }, []);

  // GSAP ScrollTrigger for Roles Overview
  useEffect(() => {
    const triggers = [];

    // Pin the section and animate index based on scroll progress
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: `+=${data.length * 400}`, // Adjust length based on number of roles
      pin: true,
      scrub: true,
      onUpdate: self => {
        const scrollFraction = self.progress;
        const newIndex = Math.floor(scrollFraction * data.length);
        setIndex(Math.min(newIndex, data.length - 1));
      },
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  const formatNumber = num => num.toLocaleString();

  return (
    <>
      {/* Hero Section */}
      <Herohome />

      {/* Roles Overview Section */}
      <section ref={sectionRef} className="relative bg-gradient-to-r from-white to-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16 text-[#001F3F]">
            Roles Overview
          </h2>

          <div className="w-[80%] max-w-5xl h-[420px] bg-white rounded-[30px] shadow-2xl mx-auto flex overflow-hidden">
            {/* Left Image */}
            <motion.div
              key={data[index].title + "-img"}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="w-1/2 flex justify-center items-center bg-gradient-to-br from-orange-400 to-red-400 m-6 rounded-[25px] overflow-hidden"
            >
              <img
                src={role_img}
                alt={data[index].title}
                className="object-cover w-full h-full rounded-[25px]"
              />
            </motion.div>

            {/* Right Text */}
            <motion.div
              key={data[index].title + "-text"}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="w-1/2 p-10 flex flex-col justify-center"
            >
              <p className="text-gray-500 mb-2">{data[index].date}</p>
              <h2 className="text-3xl font-bold mb-4 text-[#001F3F]">{data[index].title}</h2>
              <p className="text-gray-600 mb-6">{data[index].desc}</p>
              <button className="bg-gradient-to-r from-orange-500 to-red-400 text-white px-6 py-2 rounded-full font-semibold hover:from-red-400 hover:to-orange-500 transition-all duration-300">
                READ MORE
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative bg-[#001F3F] text-white py-28 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-400 rounded-full opacity-20 animate-pulse-slow"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-yellow-400 rounded-full opacity-20 animate-pulse-slow"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-24">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {features.map((feat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08, y: -5, boxShadow: "0px 25px 50px rgba(0,0,0,0.3)" }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-3xl p-8 flex flex-col justify-center items-center text-center relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${feat.color} 0%, ${feat.color}99 100%)`,
                }}
              >
                <div className="mb-4">{feat.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{feat.title}</h3>
                <p className="text-sm sm:text-base">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights / Stats Section */}
      <section className="bg-gradient-to-r from-yellow-100 via-orange-50 to-white py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-20 text-[#001F3F]">Our Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-3xl p-10 shadow-lg flex flex-col items-center justify-center hover:scale-105 transition-all duration-300"
              >
                <div className="mb-4 text-[#FF7A00]">{stat.icon}</div>
                <h3 className="text-3xl font-bold mb-2">{formatNumber(counters[i])}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="relative bg-gradient-to-r from-gray-50 to-white py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#001F3F] mb-6">About Us</h2>
            <p className="text-lg sm:text-xl text-gray-700">
              We provide a seamless education platform connecting admins, instructors, and students.
              Track progress, manage courses, and make learning engaging and organized.
            </p>
          </motion.div>
          <motion.img
            src="https://cdn.pixabay.com/photo/2024/05/16/19/29/ai-generated-8766874_960_720.jpg"
            alt="About us"
            className="md:w-1/2 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </section>

      {/* Our Process / Roadmap */}
      <section className="relative bg-white py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-24 text-[#001F3F]">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center text-center relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold text-2xl mb-4 shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-base sm:text-lg">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-[#001F3F] text-white py-28 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-500 rounded-full opacity-20 animate-pulse-slow"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-yellow-400 rounded-full opacity-20 animate-pulse-slow"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-12">Join Our Platform Today</h2>
          <p className="text-lg sm:text-xl mb-12">
            Connect with instructors, enroll in courses, and track your learning progress effortlessly.
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-yellow-400 hover:to-orange-500 px-10 py-4 rounded-full font-bold text-lg transition-all duration-500 shadow-lg">
            Get Started
          </button>
        </div>
      </section>
    </>
  );
};

export default Homepage;
