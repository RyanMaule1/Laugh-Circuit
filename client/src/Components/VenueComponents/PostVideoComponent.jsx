import React from 'react'

const PostVideoComponent = () => {
  return (
    <section className="w-full bg-[#fefefe] p-10 rounded-2xl shadow-lg flex flex-col md:flex-row gap-6 items-center md:items-start">

      {/* Text Section */}
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-[#6C63FF] mb-3">📣 Post Content for Your Venue</h3>
        <p className="text-[#4B5563]">
          Promote your club or venue with posts, images, and videos. Let performers and fans know what's happening.
        </p>
      </div>

      {/* Image Placeholder or Promo Block */}
      <div className="w-full md:w-1/3 h-48 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 font-semibold text-center">
        Venue Promo Space
      </div>
    </section>
  )
}

export default PostVideoComponent
