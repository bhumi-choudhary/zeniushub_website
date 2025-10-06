import React from 'react'
import PageHero from '../../component/PageHero'

const WhatWeDo = () => {
  const modules = [
    { title: 'Admissions & Onboarding', desc: 'Digital forms, approvals, document capture, status tracking.' },
    { title: 'Attendance & Academics', desc: 'QR/biometric attendance, timetable, assessments, results.' },
    { title: 'Fee Management', desc: 'Online fee collection, instalments, concessions, invoicing.' },
    { title: 'Transport & Hostel', desc: 'GPS bus tracking, routes, room allocation, rules & logs.' },
    { title: 'Library & Inventory', desc: 'Catalog, issue/return, fines and stock audits.' },
    { title: 'Communication Suite', desc: 'SMS, email, push notifications and announcements.' },
  ]
  return (
    <>
      <PageHero title="What We Do" />
      {/* Platform Highlights (moved to top) */}
      <section className="max-w-7xl mx-auto px-6 pb-8 pt-10 text-gray-800">
        <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4">Platform Highlights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="rounded-3xl overflow-hidden bg-white border border-orange-100 shadow reveal">
            <img loading="lazy" src="/Img/Master-Panel.png" alt="Platform modules" className="w-full h-80 object-contain" />
          </div>
          <div className="reveal reveal-delay-2">
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#ff6a21]">Unified platform, modular by design</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Role‑based portals for master, admin, instructors, students and parents</li>
              <li>• Custom workflows, approvals, and policy‑driven controls</li>
              <li>• Exportable reports, APIs and secure integrations</li>
              <li>• Mobile‑first experience and notifications</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Layout 0: Services overview grid with CTA */}
      <section className="max-w-7xl mx-auto px-6 pt-10 text-gray-800">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-wider text-[#ff6a21] flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#ff6a21]"></span>
              WHAT WE DO
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-gray-900 max-w-3xl">
              We offer all kinds of services that are required to launch a website
            </h2>
          </div>
          <a
            href="#services"
            className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#ff6a21] text-white font-semibold hover:opacity-90 reveal reveal-delay-1"
          >
            Contact Us
            <span className="text-white">→</span>
          </a>
        </div>

        <div id="services" className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { label:'Admissions', img:'/Img/services/admissions.png' },
            { label:'Attendance', img:'/Img/services/attendance.png' },
            { label:'Exams & Results', img:'/Img/services/exams.png' },
            { label:'Fee Management', img:'/Img/services/fees.png' },
            { label:'Timetable', img:'/Img/services/timetable.png' },
            { label:'Transport', img:'/Img/services/transport.png' },
            { label:'Hostel', img:'/Img/services/hostel.png' },
            { label:'Library', img:'/Img/services/library.png' },
            { label:'Communication', img:'/Img/services/communication.png' },
            { label:'Parent App', img:'/Img/services/parent-app.png' },
            { label:'Analytics & Reports', img:'/Img/services/analytics.png' },
            { label:'Website & CMS', img:'/Img/services/cms.png' },
          ].map((item, i) => (
            <div
              key={item.label}
              className={`group reveal reveal-delay-${(i%4)+1} rounded-2xl border border-orange-100 bg-white shadow-sm hover:shadow-lg transition-all p-4 flex items-center gap-3`}
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center overflow-hidden">
                  <img
                    loading="lazy"
                    src={item.img}
                    onError={(e)=>{e.currentTarget.src='/Img/logo.png'}}
                    alt={item.label}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="font-semibold text-gray-900">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Layout 1: Modules grid */}
      <section className="max-w-7xl mx-auto px-6 py-12 text-gray-800">
        <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4">Core ERP Modules</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m, i) => (
            <div key={m.title} className={`rounded-2xl bg-white shadow border border-orange-100 p-6 reveal reveal-delay-${(i%4)+1}`}>
              <h3 className="font-semibold text-gray-900">{m.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* (removed duplicate Platform Highlights) */}
    </>
  )
}

export default WhatWeDo


