const IconButton = ({ iconSrc, altText, label, onClick }) => {
  return (
    <button
      className="flex-col flex items-center justify-center w-11 h-14 bg-white"
      onClick={onClick}
    >
      <img src={iconSrc} alt={altText} className="w-8 h-8" />
      <span className="text-sm w-40 h-8 ">{label}</span>
    </button>
  );
};

export default IconButton;
