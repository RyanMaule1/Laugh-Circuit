import React from 'react'
import openMic from "../Resources/openMic.jpg"
import RoleSelector from './RoleSelector'



const JoinNowComponent = ({performerView, setPerformerView}) => {
  return (
    <section className=" bg-gray-100 px-4 py-10 flex flex-col items-center">
      {/* Hero / Intro */}
      <section className="w-full max-w-3xl text-center mb-10 border-b border-[#2A2A2A] pb-6">
        <h2 className="text-3xl font-bold text-[#6C63FF] mb-2">Welcome, Performer</h2>
        <p className="text-[#9E9E9E]">
          {performerView ? `Grow your career, get booked, and connect with the comedy world.` : "Find Talent, Grow Your Brand, Explore New Opportunities"}
        </p>
      </section>

      {/* Role Selector */}
      <section className="w-full max-w-2xl mb-10">
        <RoleSelector performerView={performerView} setPerformerView={setPerformerView} />
      </section>

      {/* Join Section */}
      <section className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
        <p className="text-lg text-gray-700 mb-6">
          Connect with performers, find gigs, and share your passion. Sign up today and start your journey.
        </p>
        <button className="px-6 py-3 bg-[#6C63FF] text-white rounded-xl hover:bg-[#5752cc] transition">
          Join Now
        </button>
      </section>
    </section>
  )
}

export default JoinNowComponent
