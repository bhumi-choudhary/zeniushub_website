<<<<<<< HEAD
import React from 'react';
import PageHero from '../component/PageHero';
import { ICONS } from '../component/Icons';
=======
import React from 'react'
import PageHero from '../component/PageHero'
import Location from '../component/Location'
>>>>>>> 0a0e051348eb73903e084991bf6b78967d419c5c

const Contactus = () => {
  return (
    <>
      <PageHero />
<<<<<<< HEAD
=======
      <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
        <Location/>
      </div>
    </>
  )
}
>>>>>>> 0a0e051348eb73903e084991bf6b78967d419c5c

      <div className="relative min-h-screen overflow-hidden bg-gradient-to-tr from-orange-50 via-white to-orange-50 py-16 px-6">

        {/* Abstract Background Shapes */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-tr from-orange-400 via-orange-200 to-transparent rounded-full opacity-30 animate-pulse-slow blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-br from-orange-300 via-yellow-100 to-transparent rounded-full opacity-20 animate-bounce-slow blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-200 rounded-full opacity-10 transform -translate-x-1/2 -translate-y-1/2 animate-rotate-slow"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">

          {/* Contact Form with Glass Effect */}
          <form className="bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl p-10 lg:p-12 space-y-6 border border-white/30">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-wide">
              Get in Touch
            </h2>

            {[
              { label: 'Name', type: 'text', placeholder: 'Your full name', id: 'name', required: true },
              { label: 'Email', type: 'email', placeholder: 'you@example.com', id: 'email', required: true },
              { label: 'Contact Number', type: 'tel', placeholder: '+91 12345 67890', id: 'contactNumber', required: true },
              { label: 'Institute Name', type: 'text', placeholder: 'Your institution', id: 'instituteName', required: true }
            ].map((field, i) => (
              <div key={i}>
                <label htmlFor={field.id} className="block mb-2 font-semibold text-gray-800">{field.label} {field.required && '*'}</label>
                <input
                  type={field.type}
                  id={field.id}
                  placeholder={field.placeholder}
                  required={field.required}
                  className="w-full rounded-2xl border border-white/50 px-5 py-3 text-lg placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-orange-300 focus:border-orange-400 transition shadow-sm hover:shadow-md bg-white/70 backdrop-blur-sm"
                />
              </div>
            ))}

            <div>
              <label htmlFor="message" className="block mb-2 font-semibold text-gray-800">Message (Optional)</label>
              <textarea
                id="message"
                rows="4"
                placeholder="Your message"
                className="w-full rounded-2xl border border-white/50 px-5 py-3 text-lg placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-orange-300 transition shadow-sm hover:shadow-md resize-none bg-white/70 backdrop-blur-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white py-4 rounded-2xl font-semibold tracking-wide shadow-lg hover:shadow-2xl transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info & Map */}
          <div className="space-y-10">

            {/* Info Card with Glass Effect */}
            <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-white/30 space-y-6">
              <h3 className="text-3xl font-extrabold text-gray-900 mb-4">Contact Details</h3>

              <div className="flex items-start space-x-4">
                <ICONS.map className="text-orange-500 w-7 h-7 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Address</h4>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    Zeniushub<br />
                    D-153, Hanuman Nagar, Amerpali Circle,<br />
                    Veshali Nagar (Opposite INOX Complex & Near Amerpali Circle)
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <ICONS.mail className="text-orange-500 w-7 h-7" />
                <a href="mailto:info@Zeniushub.co.in" className="text-orange-500 hover:underline text-lg font-medium">
                  info@Zeniushub.co.in
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <ICONS.phone className="text-orange-500 w-7 h-7" />
                <a href="tel:+919257479576" className="text-orange-500 hover:underline text-lg font-medium">
                  +91 92574 79576
                </a>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/30">
              <iframe
                title="Zeniushub Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.140618983433!2d75.80071021503378!3d26.93442898313193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6ff4c13d81f%3A0xf0d7413e204513c5!2sZeniushub%20D-153%2C%20Hanuman%20Nagar%2C%20Amerpali%20Circle%2C%20Vesali%20Nagar%2C%20Jaipur%2C%20Rajasthan-302021!5e0!3m2!1sen!2sin!4v1696656456789!5m2!1sen!2sin"
                width="100%"
                height="320"
                className="border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-pulse-slow {
          animation: pulse 6s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce 10s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(20px); }
        }
        .animate-rotate-slow {
          animation: rotate 60s linear infinite;
        }
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
};

export default Contactus;
