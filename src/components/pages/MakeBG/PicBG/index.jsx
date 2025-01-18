import PicSelect from "/src/assets/svgs/PicSelect.svg";

const PicBG = () => {
  return (
    <div className="bottom-0 bg-lime-400">
      <button>
        <img src={PicSelect} alt="사진 선택" />
      </button>
    </div>
  );
};

export default PicBG;
