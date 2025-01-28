import PicSelect from "/src/assets/svgs/PicSelect.svg";
import { useRef } from "react";

const PictureUploader = ({ uploadedImage }) => {
  const fileInputRef = useRef(null);

  const handleDivClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      uploadedImage(imageUrl);
      localStorage.setItem("image", imageUrl);
    }
  };

  return (
    <div
      className="flex h-full flex-col items-center justify-center gap-[5px]"
      onClick={handleDivClick}
    >
      <img src={PicSelect} alt="사진 선택" />
      <span className="Caption_reading_M text-black">사진 선택</span>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        className="hidden"
        onChange={handleImageUpload}
      />
    </div>
  );
};

export default PictureUploader;
