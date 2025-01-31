import { postCustomFrameImg } from "@/api/customframes";
import PicSelect from "/src/assets/svgs/PicSelect.svg";
import { useRef, useState } from "react";

const PictureUploader = ({ uploadedImage }) => {
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDivClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);
    setError(null);

    try {
      const response = await postCustomFrameImg(file);
      const s3ImageUrl = response.data.file_url;

      if (s3ImageUrl) {
        await uploadedImage(s3ImageUrl); // handleImgUpload 호출
        localStorage.setItem("image", s3ImageUrl);
        console.log("S3에 업로드된 이미지 URL:", s3ImageUrl);
      } else {
        throw new Error("S3 URL을 받지 못했습니다.");
      }
    } catch (error) {
      console.error("이미지 업로드 실패:", error);
      setError("이미지 업로드에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex h-full flex-col items-center justify-center gap-[5px]"
      onClick={handleDivClick}
    >
      <img src={PicSelect} alt="사진 선택" />
      <span className="Caption_reading_M text-black">
        {loading ? "업로드 중..." : "사진 선택"}
      </span>
      {error && <p className="text-sm text-red-500">{error}</p>}
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
