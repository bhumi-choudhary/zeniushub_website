import React from 'react'
import PageHero from '../../component/PageHero'
import Button from '../../component/Button'

const WhoWeAre = () => {
  return (
    <>
      <PageHero title="Who We Are" />
      {/* Layout 1: Mission + Image */}
      <section className="max-w-7xl mx-auto px-6 py-12 text-gray-800 section-spacing">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image first on small screens */}
          <div className="rounded-2xl overflow-hidden border border-orange-100 bg-white shadow-lg reveal order-1 md:order-2 animated-gradient">
            <img loading="lazy" src="/Img/Building.jpg" alt="Zeniushub team" className="w-full h-72 md:h-96 object-cover" />
          </div>
          <div className="reveal order-2 md:order-1 rounded-2xl border border-orange-100 bg-white shadow p-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#ff6a21]">Building a modern digital school</h2>
            <p className="mt-3 text-gray-700">Zeniushub is a professional digital‑school platform focused on outcomes: simpler operations, better coordination, and improved parent engagement. We blend secure cloud infrastructure with user‑friendly design to help institutions move faster.</p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Automation across admissions, attendance, exams, transport and fees</li>
              <li>• Live analytics dashboards for leaders and administrators</li>
              <li>• Parent app for real‑time updates and two‑way communication</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
          {[{k:'Schools',v:'75+'},{k:'Users',v:'10k+'},{k:'Uptime',v:'99.9%'},{k:'Reports',v:'50+'}].map((s,i)=> (
            <div key={s.k} className={`rounded-xl bg-white shadow border border-orange-100 p-4 text-center reveal reveal-delay-${i+1}`}>
              <div className="text-xl font-extrabold">{s.v}</div>
              <div className="text-xs text-gray-500">{s.k}</div>
            </div>
          ))}
        </div>
      </section>

     

      {/* Layout 2: Experience & impact with progress rings */}
      <section className="max-w-7xl mx-auto px-6 pb-14 text-gray-800 section-spacing">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="rounded-3xl overflow-hidden bg-white border border-orange-100 shadow-xl reveal animated-gradient">
            <div className="relative aspect-[16/10] w-full">
              <img loading="lazy" src="/Img/OurStory.jpg" alt="Experience in education" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-1.5 bg-[#ff6a21] rounded-full" />
            </div>
          </div>
          <div className="reveal reveal-delay-2 rounded-2xl border border-orange-100 bg-white shadow p-6">
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#ff6a21]">Experience in Education</h3>
            <p className="mt-3 text-gray-700">Our team brings hands‑on experience building school systems at scale. We focus on usability for teachers and measurable outcomes for management.</p>
            <p className="mt-3 text-gray-700">From data migration to training, we ensure a smooth rollout and continuous improvements based on feedback.</p>
            <div className="mt-6 grid grid-cols-2 gap-8">
              {[{p:80,label:'Faster Operations'},{p:70,label:'Parent Engagement'}].map((d,i)=> (
                <div key={d.label} className={`reveal reveal-delay-${i+1}`}>
                  <div className="w-28 h-28 rounded-full bg-[conic-gradient(#ff6a21_0deg,#ff6a21_${d.p*3.6}deg,#ffe1cf_${d.p*3.6}deg,#ffe1cf_360deg)] relative mx-auto">
                    <div className="absolute inset-2 rounded-full bg-white flex items-center justify-center text-lg font-extrabold">{d.p}%</div>
                  </div>
                  <div className="mt-3 text-center font-semibold">{d.label}</div>
                  <p className="text-xs text-gray-500 text-center mt-1">Estimated improvement based on recent deployments.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

       {/* About, Vision, Mission + CTA (placed at page end) */}
      <section className="max-w-7xl mx-auto px-6 pb-16 text-gray-800 section-spacing">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Content */}
          <div className="lg:col-span-2 space-y-10 reveal">
            <div className="rounded-2xl border border-orange-100 bg-white shadow-sm p-6">
              <h3 className="text-xl md:text-2xl font-extrabold text-gray-900">About Zeniushub</h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                With the core team behind Zeniushub involved in digital products for years, our focus is
                to provide a complete and bespoke solution for every educational institution. From
                domain registration and hosting to website content and parent communication, we build
                fast, secure and delightful experiences that reflect your institution’s identity.
              </p>
              <p className="mt-3 text-gray-700 leading-relaxed">
                We assure you a professional web presence with strong UI/UX and performance so that the
                experience for students and parents remains smooth across devices.
              </p>
            </div>

            <div className="rounded-2xl border border-orange-100 bg-white shadow-sm p-6">
              <h3 className="text-xl md:text-2xl font-extrabold text-gray-900">Our Vision</h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                To be the most trusted digital‑school platform—known for beautiful design, robust
                engineering and measurable outcomes for academic institutions.
              </p>
            </div>

            <div className="rounded-2xl border border-orange-100 bg-white shadow-sm p-6">
              <h3 className="text-xl md:text-2xl font-extrabold text-gray-900">Our Mission</h3>
              <ul className="mt-3 space-y-3 text-gray-700">
                <li>• Help institutions launch unique, modern websites in a cost‑effective manner.</li>
                <li>• Support every stage—from domain & hosting to content and parent communication.</li>
                <li>• Ensure brand consistency, accessibility and performance across devices.</li>
                <li>• Provide a smooth viewing experience with error‑free, updated and secure pages.</li>
              </ul>
            </div>
          </div>

          {/* Right: Distinct CTA card */}
          <div className="reveal reveal-delay-2">
            <div className="rounded-2xl border border-orange-100 bg-gradient-to-b from-orange-50 to-white shadow-lg p-6 flex flex-col gap-3">
              <h4 className="text-lg font-extrabold text-gray-900">Let’s Build Your Digital School</h4>
              <p className="text-sm text-gray-700">Need a fast, secure and beautiful experience for students and parents? Our team can help you plan and launch quickly.</p>
        <Button text='Contact Us'/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhoWeAre


