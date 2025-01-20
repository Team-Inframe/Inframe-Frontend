const IconButton = ({ iconSrc, altText, label, onClick }) => {
  return (
    <button
      className="flex h-14 w-11 flex-col items-center justify-center bg-white"
      onClick={onClick}
    >
      <img src={iconSrc} alt={altText} className="h-7 w-7" />
      <span className="Caption_reading_L h-8 w-40">{label}</span>
    </button>
  );
};

export default IconButton;
