import React from 'react'

const FindVenueComponent = () => {
  return (
     <section className="w-full px-6 py-16   flex justify-center">
      <div className="max-w-xl w-full text-center">
        {/* Icon */}
        <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-[#6C63FF] text-white text-3xl rounded-full shadow-lg">
          🧠
        </div>

        {/* Title & Description */}
        <h3 className="text-3xl font-bold mb-3">Find a Coach or Agent</h3>
        <p className="text-gray-600 mb-6">
          Work with experienced mentors and professionals who can give real guidance on your comedy path.
        </p>

        {/* CTA */}
        <button className="px-6 py-3 bg-[#6C63FF] text-white rounded-xl hover:bg-[#5752cc] transition">
          Connect Now
        </button>
      </div>
    </section>
  )
}

export default FindVenueComponent
