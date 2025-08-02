import React from 'react'
import headshot1 from '../../Resources/headshot1.webp'
import headshot2 from '../../Resources/headshot2.jpg'
import headshot3 from '../../Resources/headshot3.jpeg'
import headshot4 from '../../Resources/headshot4.jpg'




const headshots = [headshot1, headshot2, headshot3, headshot4]


const ConnectWithOtherPerformers = () => {
  return (
    <section className="w-full px-6 py-16   bg-[#f9f9f9] flex justify-center">
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-10 items-center">
        
        {/* Avatar Grid */}
        <div className="grid grid-cols-2 gap-4 w-full md:w-1/2">
          {headshots.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Performer ${i + 1}`}
              className="w-full aspect-square object-cover rounded-xl"
            />
          ))}
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-3xl font-bold mb-3">🤝 Meet Other Performers</h3>
          <p className="text-gray-700 mb-4">
            Join a community of stand-up comedians to collaborate, share ideas, and support each other’s journey.
          </p>
          <button className="px-6 py-3 bg-[#6C63FF] text-white rounded-xl hover:bg-[#5752cc] transition">
            Join the Community
          </button>
        </div>
      </div>
    </section>
  )
}

export default ConnectWithOtherPerformers
