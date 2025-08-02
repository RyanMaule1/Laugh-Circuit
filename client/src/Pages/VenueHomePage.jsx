import React from 'react'
import RoleSelector from '../Components/RoleSelector'
import PostOpenMicComponent from '../Components/VenueComponents/PostOpenMicComponent'
import PostPaidGigsComponent from '../Components/VenueComponents/PostPaidGigsComponent'
import FindTalentComponent from '../Components/VenueComponents/FindTalentComponent'
import PostContentComponent from '../Components/PostContentComponent'
import JoinNowComponent from '../Components/JoinNowComponent'

const VenueHomePage = ({performerView, setPerformerView}) => {
  return (
    <div className="bg-[#121212] text-[#E0E0E0] min-h-screen">
    
        {/* Hero / Intro */}
        <section className="py-10 text-center border-b border-[#2A2A2A]">
        <h2 className="text-3xl font-bold text-[#6C63FF] mb-2">Welcome, Agent</h2>
        <p className="text-[#9E9E9E]">Find Talent, Sell Out Shows, and Grow Your Community.</p>
        </section>

        {/* Role Selector - Optional */}
        <div className="my-6">
            <RoleSelector performerView={performerView} setPerformerView={setPerformerView}/>
        </div>

        {/* Sections */}
        <JoinNowComponent />
        <PostOpenMicComponent />
        <PostPaidGigsComponent/>
        <FindTalentComponent/>
        <PostContentComponent />
        


    </div>
  )
}

export default VenueHomePage
