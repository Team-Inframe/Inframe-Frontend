export const HotFrame = ({ onClick, label }) => {
  return (
    <div className="flex-col ">
      <button
        className="bg-white w-44 h-48 shadow-lg border-black"
        onClick={onClick}
      ></button>
      <span className="text-black text-l flex flex-col justify-start">
        {label}
      </span>
    </div>
  );
};
