import React from 'react';
import PageHero from '../component/PageHero';
import { ICONS } from '../component/Icons';
import Button from '../component/Button';

const Contactus = () => {
  const contactFields = [
    { label: 'Name', type: 'text', placeholder: 'Your full name', id: 'name', required: true },
    { label: 'Email', type: 'email', placeholder: 'you@example.com', id: 'email', required: true },
    { label: 'Contact Number', type: 'tel', placeholder: '+91 12345 67890', id: 'contactNumber', required: true },
    { label: 'Institute Name', type: 'text', placeholder: 'Your institution', id: 'instituteName', required: true },
  ];

  return (
    <>
      <PageHero />

      <div className="relative min-h-screen bg-gradient-to-tr from-orange-50 via-white to-orange-100 py-10 px-4 sm:px-6 md:px-12 lg:px-16">

        {/* Blurred Background Glow */}
        <div className="absolute inset-0 flex justify-center items-center z-0 pointer-events-none">
          <div className="w-[40rem] h-[40rem] rounded-full bg-orange-100 opacity-20 blur-[120px]"></div>
        </div>

        {/* Main Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">

          {/* Form Section */}
          <div className="p-[2px] rounded-3xl bg-gradient-to-r from-orange-200 via-orange-100 to-white shadow-xl">
            <form className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 space-y-6 border border-orange-100 hover:shadow-[0_0_30px_10px_rgba(255,170,70,0.15)] transition-transform duration-700 transform hover:scale-[1.02]">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300 mb-6 tracking-tight">
                Get in Touch
              </h2>

              {contactFields.map((field, i) => (
                <div key={i}>
                  <label htmlFor={field.id} className="block mb-1 font-medium text-gray-700 text-sm sm:text-base">
                    {field.label} *
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    placeholder={field.placeholder}
                    required={field.required}
                    className="w-full rounded-xl border border-orange-200 px-4 py-2 text-sm placeholder-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-400 transition shadow-sm hover:shadow-md bg-white/95 backdrop-blur-sm"
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" className="block mb-1 font-medium text-gray-700 text-sm sm:text-base">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Your message"
                  className="w-full rounded-xl border border-orange-200 px-4 py-2 text-sm placeholder-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-300 transition shadow-sm hover:shadow-md resize-none bg-white/95 backdrop-blur-sm"
                />
              </div>

              <Button
                text="Send Message"
                className="bg-gradient-to-r from-orange-300 to-orange-100 hover:from-orange-400 hover:to-orange-200 text-orange-800 font-semibold rounded-xl py-3 px-6 transition-transform hover:scale-105"
              />
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-lg p-5 border border-orange-100 hover:shadow-[0_0_20px_8px_rgba(255,170,70,0.12)] transition duration-500">
              <div className="flex items-start space-x-3">
                <ICONS.map className="text-orange-400 w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-semibold text-orange-500 text-sm sm:text-base">Address</h4>
                  <p className="text-gray-800 leading-relaxed text-xs sm:text-sm mt-1">
                    Zeniushub<br />
                    D-153, Hanuman Nagar, Amerpali Circle,<br />
                    Veshali Nagar (Opposite INOX Complex & Near Amerpali Circle)
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-lg p-5 border border-orange-100 hover:shadow-[0_0_20px_8px_rgba(255,170,70,0.12)] transition duration-500 flex items-center space-x-3">
              <ICONS.mail className="text-orange-400 w-6 h-6" />
              <a href="mailto:info@Zeniushub.co.in" className="text-orange-500 hover:underline text-sm sm:text-base font-medium break-all">
                info@Zeniushub.co.in
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-lg p-5 border border-orange-100 hover:shadow-[0_0_20px_8px_rgba(255,170,70,0.12)] transition duration-500 flex items-center space-x-3">
              <ICONS.phone className="text-orange-400 w-6 h-6" />
              <a href="tel:+919257479576" className="text-orange-500 hover:underline text-sm sm:text-base font-medium">
                +91 92574 79576
              </a>
            </div>

            {/* Map */}
            <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden border border-orange-100 hover:shadow-[0_0_20px_8px_rgba(255,170,70,0.12)] transition duration-500">
              <iframe
                title="Zeniushub Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.140618983433!2d75.80071021503378!3d26.93442898313193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6ff4c13d81f%3A0xf0d7413e204513c5!2sZeniushub%20D-153%2C%20Hanuman%20Nagar%2C%20Amerpali%20Circle%2C%20Vesali%20Nagar%2C%20Jaipur%2C%20Rajasthan-302021!5e0!3m2!1sen!2sin!4v1696656456789!5m2!1sen!2sin"
                width="100%"
                height="220"
                className="border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Contactus;
