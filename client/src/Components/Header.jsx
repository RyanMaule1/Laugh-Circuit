import React from 'react'


const Header = () => {
  return (
    <header className="bg-[#121212] text-[#E0E0E0] shadow-md border-b border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <h1 className="text-xl font-bold text-[#6C63FF]">
          Laugh Circuit
        </h1>

        {/* Navigation Links */}
        <nav className="space-x-6 hidden md:flex">
          <a href="#" className="hover:text-[#6C63FF] transition">Explore</a>
          <a href="#" className="hover:text-[#6C63FF] transition">Performers</a>
          <a href="#" className="hover:text-[#6C63FF] transition">Venues</a>
          <a href="#" className="hover:text-[#6C63FF] transition">My Bookings</a>
        </nav>

        {/* CTA Button */}
        <button className="bg-[#FF5E5B] text-white px-4 py-2 rounded-2xl font-medium hover:bg-opacity-80 transition">
          Book a Gig
        </button>
      </div>
    </header>
  );
}


export default Header
