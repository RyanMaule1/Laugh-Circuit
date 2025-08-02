import React from 'react'

const FindTalentComponent = () => {
  return (
    <section className="w-full bg-white rounded-xl shadow-sm p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
      
      {/* Left Content - Text */}
      <div className="md:w-2/3">
        <h3 className="text-2xl font-semibold text-[#2A2A2A] mb-2">🔎 Search for Top Local Talent</h3>
        <p className="text-[#6B7280]">
          Discover the best available performers. Filter by Style, Experience, and Cost.
        </p>
      </div>

      {/* Right Content - Placeholder for future filter UI or image */}
      <div className="md:w-1/3 w-full aspect-video bg-[#6C63FF] rounded-xl flex items-center justify-center text-white font-medium text-lg">
        Talent Filters
      </div>
    </section>
  )
}

export default FindTalentComponent
