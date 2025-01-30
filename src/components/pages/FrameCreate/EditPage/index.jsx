import { useStickerStore } from "@/libraries/store/storesticker";
import { useRef } from "react";
import { Rnd } from "react-rnd";
import {
  BasicFrame1,
  BasicFrame2,
  BasicFrame3,
  BasicFrame4,
} from "@/components/common/BasicFrame";

const EditPage = ({ setSelectedSticker }) => {
  const stickers = useStickerStore((state) => state.stickers);
  const updateSticker = useStickerStore((state) => state.updateSticker);
  // const removeSticker = useStickerStore((state) => state.removeSticker);
  //const [width, setWidth] = useState(0);
  //const [height, setHeight] = useState(0);
  const frameRef = useRef(null);
  // const [selectedsticker, setSelectedSticker] = useState(null);

  // useEffect(() => {
  //   console.log(selectedsticker);
  //   removeSticker(selectedsticker);
  // }, [isdeleted]);

  const renderFrame = () => {
    switch (localStorage.getItem("basicFrameId")) {
      case "1":
        return <BasicFrame1 bgsrc={localStorage.getItem("frameBg")} />;
      case "2":
        return <BasicFrame2 bgsrc={localStorage.getItem("frameBg")} />;
      case "3":
        return <BasicFrame3 bgsrc={localStorage.getItem("frameBg")} />;
      case "4":
        return <BasicFrame4 bgsrc={localStorage.getItem("frameBg")} />;
      default:
        return null;
    }
  };

  const handleDrag = (e, d, index) => {
    updateSticker(index, {
      position: { x: d.x, y: d.y },
    });
  };

  const handleResizeStop = (index, e, direction, ref, delta, position) => {
    updateSticker(index, {
      ...stickers[index],
      size: {
        width: ref.style.width,
        height: ref.style.height,
      },
      position: {
        x: position.x,
        y: position.y,
      },
    });
  };

  //   const handleremover = (e, index) => {
  //     //e.preventDefault();
  //     removeSticker(index);
  //   };

  return (
    <div className="relative">
      <div className="flex flex-1 items-center justify-center" ref={frameRef}>
        <div className="z-10">{renderFrame()}</div>
        {stickers.map((sticker, index) => (
          <Rnd
            key={index}
            //maxHeight={}
            //maxWidth={width}
            default={{
              x: sticker.position.x,
              y: sticker.position.y,
              width: sticker.size.width,
              height: sticker.size.height,
            }}
            lockAspectRatio={true}
            onDragStop={(e, d) => {
              handleDrag(e, d, index);
              setSelectedSticker(index);
            }}
            //dragHandleClassName="handle"
            onResizeStop={(e, direction, ref, delta, position) =>
              handleResizeStop(index, e, direction, ref, delta, position)
            }
            style={{ zIndex: 50 }}
          >
            <img src={sticker.src} />
          </Rnd>
        ))}
      </div>
      {/* {console.log(selectedsticker)} */}

      {/* <button onClick={handleremover}>삭제</button> */}
    </div>
  );
};

export default EditPage;
