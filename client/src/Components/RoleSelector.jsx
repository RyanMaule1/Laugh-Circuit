import { useState } from "react";

export default function RoleSelector({ performerView, setPerformerView }) {

  const handleSelect = (isPerformer) => {
    setPerformerView(isPerformer)
  };

  return (
    <div className="bg-[#1E1E1E] rounded-2xl p-4 flex items-center justify-center space-x-4 shadow-inner border border-[#2A2A2A] w-fit mx-auto">
      <button
        onClick={() => handleSelect(true)}
        className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
          performerView
            ? "bg-[#6C63FF] text-white"
            : "bg-[#2A2A2A] text-[#E0E0E0] hover:bg-[#333]"
        }`}
      >
        I'm a Performer
      </button>
      <button
        onClick={() => handleSelect(false)}
        className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
          performerView 
            ? "bg-[#2A2A2A] text-[#E0E0E0] hover:bg-[#333]"
            : "bg-[#6C63FF] text-white"
        }`}
      >
        I'm an Agent / Venue
      </button>
    </div>
  );
}
