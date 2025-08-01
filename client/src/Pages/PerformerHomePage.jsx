import React from 'react'
import RoleSelector from '../Components/RoleSelector';

const ComedianHomePage = ({performerView, setPerformerView}) => {
  return (

    <div className="bg-[#121212] text-[#E0E0E0] min-h-screen">
      {/* Header - Assume already rendered elsewhere */}

      {/* Hero / Intro */}
      <section className="py-10 text-center border-b border-[#2A2A2A]">
        <h2 className="text-3xl font-bold text-[#6C63FF] mb-2">Welcome, Performer</h2>
        <p className="text-[#9E9E9E]">Grow your career, get booked, and connect with the comedy world.</p>
      </section>

      {/* Role Selector - Optional */}
      <div className="my-6">
        <RoleSelector performerView={performerView} setPerformerView={setPerformerView}/>
      </div>

      {/* Sections */}
      <section className="w-full px-6 py-12 border-t border-[#2A2A2A]">
        <h3 className="text-2xl font-semibold mb-2">🎤 Find Open Mics</h3>
        <p className="text-[#9E9E9E]">Discover local and virtual open mic nights to test your material and get on stage.</p>
      </section>

      <section className="w-full px-6 py-12 border-t border-[#2A2A2A]">
        <h3 className="text-2xl font-semibold mb-2">💰 Find Paid Gigs</h3>
        <p className="text-[#9E9E9E]">Browse listings from venues and event organizers looking for talent.</p>
      </section>

      <section className="w-full px-6 py-12 border-t border-[#2A2A2A]">
        <h3 className="text-2xl font-semibold mb-2">🧠 Find a Coach or Agent</h3>
        <p className="text-[#9E9E9E]">Connect with experienced mentors and professionals who can guide your comedy career.</p>
      </section>

      <section className="w-full px-6 py-12 border-t border-[#2A2A2A]">
        <h3 className="text-2xl font-semibold mb-2">🤝 Meet Other Performers</h3>
        <p className="text-[#9E9E9E]">Join a community of stand-up comedians and collaborate, share, and support each other.</p>
      </section>

      <section className="w-full px-6 py-12 border-t border-[#2A2A2A] pb-20">
        <h3 className="text-2xl font-semibold mb-2">📣 Post Your Material</h3>
        <p className="text-[#9E9E9E]">Upload sets, share videos, or test jokes with a supportive audience.</p>
      </section>
    </div>
  );
} 

  
export default ComedianHomePage
