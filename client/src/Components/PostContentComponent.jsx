import React from 'react'

const PostContentComponent = () => {

    const mockPosts = ["🎥 Clip 1", "🎤 Joke Draft", "📹 Set Recording", "📝 Bit Idea"];

  return (
    <section className="w-full px-6 py-16 bg-white flex justify-center">
      <div className="w-full max-w-5xl">
        {/* Title and Description */}
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold mb-2">📣 Post Your Material</h3>
          <p className="text-gray-600">
            Upload sets, share videos, or test jokes with a supportive audience.
          </p>
        </div>

        {/* Mock Post Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {mockPosts.map((label, i) => (
            <div
              key={i}
              className="bg-[#6C63FF] text-white text-center text-sm rounded-xl p-4 aspect-video flex items-center justify-center shadow-md"
            >
              {label}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="px-6 py-3 bg-[#6C63FF] text-white rounded-xl hover:bg-[#5752cc] transition">
            Upload Material
          </button>
        </div>
      </div>
    </section>
  )
}

export default PostContentComponent
