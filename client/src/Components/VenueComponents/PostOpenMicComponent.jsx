import React from 'react'

const PostOpenMicComponent = () => {
  return (
    <section className="w-full bg-[#f9f9f9] rounded-xl shadow-sm p-8 flex flex-col md:flex-row-reverse items-center gap-6">
      
      {/* Right Side - Visual Placeholder */}
      <div className="w-full md:w-1/3 aspect-square bg-[#6C63FF] rounded-xl flex items-center justify-center text-white text-lg font-medium">
        Open Mic Promo
      </div>

      {/* Left Side - Content */}
      <div className="w-full md:w-2/3 text-left">
        <h3 className="text-2xl font-semibold text-[#2A2A2A] mb-2">🎤 Promote Open Mics</h3>
        <p className="text-[#6B7280]">
          Share upcoming local and virtual open mic nights. Bring talent to your venue and build a regular crowd.
        </p>
      </div>

    </section>
  )
}

export default PostOpenMicComponent
