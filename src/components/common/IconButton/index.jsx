const IconButton = ({ iconSrc, altText, label, onClick }) => {
  return (
    <button
      className="flex h-14 w-11 flex-col items-center justify-center bg-white"
      onClick={onClick}
    >
      <img src={iconSrc} alt={altText} className="h-8 w-8" />
      <span className="h-8 w-40 text-sm">{label}</span>
    </button>
  );
};

export default IconButton;
