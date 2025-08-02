import React from 'react'

const PaidGigsComponent = () => {
  return (
     <section className="w-full px-6 py-12   flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-md p-6 md:p-10 flex flex-col md:flex-row items-center gap-6">
        
        {/* Icon Badge */}
        <div className="bg-[#6C63FF] text-white text-3xl p-4 rounded-full">
          💰
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold mb-2">Find Paid Gigs</h3>
          <p className="text-gray-700 mb-4">
            Browse listings from venues and event organizers looking for talent.
          </p>
          <button className="px-5 py-2 bg-[#6C63FF] text-white rounded-lg hover:bg-[#5752cc] transition">
            Explore Gigs
          </button>
        </div>
      </div>
    </section>
  )
}

export default PaidGigsComponent
