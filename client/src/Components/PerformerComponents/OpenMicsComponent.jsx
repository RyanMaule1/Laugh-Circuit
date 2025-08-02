import React from 'react'

const OpenMicsComponent = () => {
  return (
    <section className="w-full px-6 py-12   flex flex-col md:flex-row items-center md:items-start gap-8 max-w-6xl mx-auto">
      {/* Video or Placeholder */}
      

      {/* Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h3 className="text-2xl font-semibold mb-2">🎤 Find Open Mics</h3>
        <p className="text-[#9E9E9E] mb-4">
          Discover local and virtual open mic nights to test your material and get on stage.
        </p>
        <button className="px-5 py-2 bg-[#6C63FF] text-white rounded-lg hover:bg-[#5752cc] transition">
          Browse Open Mics
        </button>
      </div>

      <div className="w-full md:w-1/2 aspect-video bg-black rounded-xl flex items-center justify-center text-white text-lg font-semibold">
        Open Mic Video
      </div>
    </section>
  )
}

export default OpenMicsComponent
