const TextButton = ({ text, onClick, colorsrc }) => {
  return (
    <button
      className={`Label_L ${colorsrc ? "text-syscolor-SystemBlack" : "text-syscolor-SystemGray"}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default TextButton;
