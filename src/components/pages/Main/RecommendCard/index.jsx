export const RecommendCard = ({ label }) => {
  return (
    <div className="h-48 w-48 rounded-sm bg-slate-400 shadow-md">
      <span className="text-l justify-start pl-5 text-black">{label}</span>
    </div>
  );
};
