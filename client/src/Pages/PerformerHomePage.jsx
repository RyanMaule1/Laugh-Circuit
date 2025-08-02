import React from 'react'
import RoleSelector from '../Components/RoleSelector';
import OpenMicsComponent from '../Components/PerformerComponents/OpenMicsComponent';
import PaidGigsComponent from '../Components/PerformerComponents/PaidGigsComponent';
import ConnectWithOtherPerformers from '../Components/PerformerComponents/ConnectWithOtherPerformers';
import PostContentComponent from '../Components/PostContentComponent';
import FindVenueComponent from '../Components/PerformerComponents/FindVenueComponent';
import JoinNowComponent from '../Components/JoinNowComponent';

const ComedianHomePage = ({performerView, setPerformerView}) => {
  return (

    <div className="bg-gray-100 text-[#2A2A2A]">
      {/* Wrapper for all sections */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 py-10">
        
        {/* Hero / Join */}
        <JoinNowComponent performerView={performerView} setPerformerView={setPerformerView} />

        {/* Alternating Backgrounds for Flow */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <OpenMicsComponent />
        </div>

        <div className="bg-[#f9f9f9] rounded-xl shadow-sm p-6">
          <PaidGigsComponent />
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <FindVenueComponent />
        </div>

        <div className="bg-[#f9f9f9] rounded-xl shadow-sm p-6">
          <ConnectWithOtherPerformers />
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <PostContentComponent />
        </div>
      </div>
    </div>
  );
} 

  
export default ComedianHomePage
