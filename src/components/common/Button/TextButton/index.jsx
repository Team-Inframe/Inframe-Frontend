const TextButton = ({ text, onClick, colorsrc }) => {
  return (
    <button
      className={`Label_M ${colorsrc ? "text-syscolor-SystemBlack" : "text-syscolor-SystemGray"}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default TextButton;
