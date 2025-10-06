import React from 'react'
import PageHero from '../../component/PageHero'

const WhyChooseUs = () => {
  const points = [
    { title: 'Security by Design', desc: 'Encryption in transit & at rest, role-based access, SSO-ready, audit logs.' },
    { title: 'Performance & Uptime', desc: 'Optimized infrastructure with CDN and caching for fast, reliable access.' },
    { title: 'Scalable & Modular', desc: 'Works for single-campus and multi-branch institutions with centralized control.' },
    { title: 'Support You Can Trust', desc: 'Rapid onboarding, 24x7 support and dedicated customer success.' }
  ]
  return (
    <>
      <PageHero title="Why Choose Us" />
      <section className="max-w-7xl mx-auto px-6 py-12 text-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text block - second on small, first on md+ */}
          <div className="reveal order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#ff6a21]">Secure. Fast. Reliable.</h2>
            <p className="mt-3 text-gray-700">We prioritize security and performance at every layer, from data handling and access controls to continuous monitoring and backups.</p>
            <ul className="mt-4 space-y-2">
              {points.map(p => (
                <li key={p.title} className="text-gray-700"><span className="font-semibold">{p.title}:</span> {p.desc}</li>
              ))}
            </ul>
          </div>
          {/* Image block - first on small, second on md+ */}
          <div className="rounded-2xl border border-orange-100 bg-white shadow reveal reveal-delay-2 order-1 md:order-2 p-3 flex items-center justify-center">
            <img loading="lazy" src="/Img/Secure.png" alt="Security" className="max-h-80 md:max-h-96 w-full object-contain" />
          </div>
        </div>
      </section>

      {/* Layout 2: Assurance cards */}
      <section className="max-w-7xl mx-auto px-6 pb-14 text-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[{
            t:'Data Protection', d:'Encryption, backups, and strict data residency policies.'
          },{
            t:'Access Control', d:'Fine‑grained roles, SSO, and audit logs reduce risk.'
          },{
            t:'Reliability', d:'Multi‑AZ infrastructure, proactive monitoring & alerts.'
          },{
            t:'Compliance', d:'Best‑practice handling aligned with applicable regulations.'
          }].map((c,i)=> (
            <div key={c.t} className={`rounded-2xl bg-white shadow border border-orange-100 p-6 text-center reveal reveal-delay-${(i%4)+1}`}>
              <h4 className="font-semibold text-gray-900">{c.t}</h4>
              <p className="mt-2 text-sm text-gray-600">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Layout 3: Why Choose Us details */}
      <section className="max-w-7xl mx-auto px-6 pb-16 text-gray-800">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#ff6a21] mb-6">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[{
            title: 'Proven Track Record',
            desc: 'Our parent company has over a decade in the industry with sustainable growth and minimal attrition. The portfolio and results we have delivered for 1000+ customers speak for themselves.',
          },{
            title: 'We listen to you',
            desc: 'We are open‑minded and start by understanding your requirements. Your ideas guide the solution and we convert them into a practical, launched product you envisioned.',
          },{
            title: 'Post‑launch updates',
            desc: 'Engagement does not end at launch. Websites and apps evolve, especially across academic years. We support change requests, enhancements, and integrations whenever you need them.',
          },{
            title: 'Rich Experience',
            desc: 'Zeniushub leverages 10+ years of multi‑industry experience to bring best practices to education. We translate those principles into a delightful digital experience for your institution.',
          },{
            title: 'Professional Team',
            desc: 'Our experts convert traffic into outcomes. With strengths in UX, information architecture, usage patterns and content psychology, we increase engagement that leads to better results.',
          },{
            title: 'Total Solutions',
            desc: 'From domain & hosting to CMS, content and digital marketing—we partner with trusted providers so everything lives under one roof and fits your budget.',
          }].map((c,i)=> (
            <div key={c.title} className={`rounded-2xl bg-white shadow border border-orange-100 p-6 reveal reveal-delay-${(i%4)+1}`}>
              <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center mb-3">
                <span className="text-[#ff6a21] font-extrabold">{i+1}</span>
              </div>
              <h3 className="font-semibold text-gray-900">{c.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default WhyChooseUs


