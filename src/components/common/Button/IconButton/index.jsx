const IconButton = ({ iconSrc, altText, label, onClick, className }) => {
  return (
    <button
      className={`flex flex-col items-center justify-center gap-[6px] bg-white ${className}`}
      onClick={onClick}
    >
      <img src={iconSrc} alt={altText} className="" />
      <span className="Caption_normal_M">{label}</span>
    </button>
  );
};

export default IconButton;
