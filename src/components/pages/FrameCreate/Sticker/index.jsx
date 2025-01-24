const Sticker = ({ imgSrc, onClick }) => {
  return (
    <button
      className="flex h-[100px] w-[100px] items-center justify-center rounded-[5px] px-3"
      onClick={onClick}
    >
      <img src={imgSrc} alt="스티커 이미지" />
    </button>
  );
};

export default Sticker;
