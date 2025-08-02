import React from 'react'
import RoleSelector from '../Components/RoleSelector'
import PostOpenMicComponent from '../Components/VenueComponents/PostOpenMicComponent'
import PostPaidGigsComponent from '../Components/VenueComponents/PostPaidGigsComponent'
import FindTalentComponent from '../Components/VenueComponents/FindTalentComponent'
import PostContentComponent from '../Components/PostContentComponent'
import JoinNowComponent from '../Components/JoinNowComponent'

const VenueHomePage = ({performerView, setPerformerView}) => {
  return (
    <div className="bg-gray-100 text-[#2A2A2A] min-h-screen">
    {/* Page Wrapper */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 py-10">

        {/* Hero / Join */}
        <JoinNowComponent performerView={performerView} setPerformerView={setPerformerView} />

        {/* Sections in card-style alternating layout */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <PostOpenMicComponent />
        </div>

        <div className="bg-[#f9f9f9] rounded-xl shadow-sm p-6">
          <PostPaidGigsComponent />
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <FindTalentComponent />
        </div>

        <div className="bg-[#f9f9f9] rounded-xl shadow-sm p-6 mb-20">
          <PostContentComponent />
        </div>

      </div>
    </div>
  )
}

export default VenueHomePage
