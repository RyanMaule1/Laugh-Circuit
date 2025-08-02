import React from 'react'

const PostPaidGigsComponent = () => {
  return (
     <section className="w-full bg-white rounded-xl shadow-md p-10 flex flex-col md:flex-row items-center md:items-start gap-8">
      
      {/* Left Side - Illustration or Icon */}
      <div className="w-24 h-24 flex items-center justify-center rounded-full bg-[#6C63FF] text-white text-3xl font-bold">
        💰
      </div>

      {/* Right Side - Text Content */}
      <div className="flex-1">
        <h3 className="text-2xl font-semibold text-[#2A2A2A] mb-3">Advertise Paid Gigs</h3>
        <p className="text-[#6B7280]">
          Post opportunities and connect with experienced performers ready to bring their talent to your stage.
        </p>
      </div>

    </section>
  )
}

export default PostPaidGigsComponent
