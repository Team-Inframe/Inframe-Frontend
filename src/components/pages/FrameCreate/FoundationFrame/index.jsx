const FoundationFrame = ({ src, onClick }) => {
  return (
    <button onClick={onClick}>
      <img src={src} alt="FoundationFrame" className="object-contain" />
    </button>
  );
};

export default FoundationFrame;
