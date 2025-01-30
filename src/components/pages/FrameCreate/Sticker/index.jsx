import { useStickerStore } from "@/libraries/store/storesticker";

const Sticker = ({ stickerId, imgSrc, isdisable }) => {
  const addsticker = useStickerStore((state) => state.addSticker);

  return (
    <button
      className="flex h-[100px] w-[100px] items-center justify-center rounded-[5px] px-3"
      //addsticker에 imgSrc를 넣어서 스티커를 추가하는 함수를 실행
      onClick={() =>
        addsticker({
          id: stickerId,
          src: imgSrc,
          position: { x: 0, y: 0 },
          size: { width: 70, height: 70 },
        })
      }
      disabled={isdisable}
    >
      <img src={imgSrc} alt="스티커 이미지" />
    </button>
  );
};

export default Sticker;
