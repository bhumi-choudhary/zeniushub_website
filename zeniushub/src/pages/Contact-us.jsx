import React from 'react'
import PageHero from '../component/PageHero'
import Location from '../component/Location'

const Contactus = () => {
  return (
    <>
      <PageHero />
      <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
        <Location/>
      </div>
    </>
  )
}

export default Contactus