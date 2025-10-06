import React from 'react'
import Button from './Button'

const CTAsection = () => {
  return (
    <section className="mt-12">
    <div className="rounded-2xl border border-orange-200 bg-gradient-to-r from-orange-50 to-white p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
      <div>
        <h3 className="text-lg md:text-xl font-extrabold text-gray-900">Ready to modernize your school operations?</h3>
        <p className="text-sm md:text-base text-gray-700 mt-1">Talk to our team and see how Zeniushub fits your workflows.</p>
      </div>
     <Button text='Contact Us'/>
    </div>
  </section>
  )
}

export default CTAsection