import React from "react";

export const RecommendCard = ({ label }) => {
  return (
    <div className="bg-slate-400 w-48 h-48 rounded-sm shadow-md">
      <span className="text-black text-l justify-start pl-5">{label}</span>
    </div>
  );
};
