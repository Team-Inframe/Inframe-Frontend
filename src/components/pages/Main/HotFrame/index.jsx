export const HotFrame = ({ label }) => {
  return (
    <div className="flex-col">
      <div className="bg-white w-44 h-48 shadow-lg border-black  ">
        <span className="text-black text-l flex flex-col justify-start pl-5">
          {label}
        </span>
      </div>
    </div>
  );
};
