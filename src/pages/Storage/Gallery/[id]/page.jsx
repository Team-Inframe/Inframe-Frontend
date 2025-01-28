import { useNavigate, useParams } from "react-router-dom";
import LeftArrow from "@/assets/svgs/LeftArrow.svg";
import { useEffect, useState } from "react";
import { getPhoto } from "@/api/photos";

export const GalleryDetailPage = () => {
  const navigate = useNavigate();
  const { id: photoId } = useParams();
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    const handleGetPhoto = async () => {
      try {
        const response = await getPhoto(photoId);
        setPhoto(response.data.photo_url);
      } catch (error) {
        console.error(error);
      }
    };

    handleGetPhoto();
  }, [photoId]);

  const handleDownload = async () => {
    try {
      const response = await fetch(photo);
      const blob = await response.blob();
      const file = new File([blob], "MyPhoto.png", { type: blob.type });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: "My Four-Cut",
          files: [file],
        });
      } else {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "MyPhoto.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (error) {
      console.error("Error saving the photo:", error);
    }
  };

  return (
    <div className="flex h-real-screen flex-col bg-white pb-[120px] pt-[56px]">
      <button onClick={() => navigate(-1)}>
        <img src={LeftArrow} alt="뒤로가기" className="mb-[20px] px-[10px]" />
      </button>
      <div className="flex h-full flex-col justify-between px-[24px]">
        <div className="flex flex-col">
          <span className="Label_M text-black">2025.02.01</span>
          <span className="Label_L text-black">경기도 부천시에서의 추억</span>
        </div>

        <img src={photo} className="max-h-[450px] max-w-[350px] self-center" />
        <div className="Label_M text-center" onClick={handleDownload}>
          저장하기
        </div>
      </div>
    </div>
  );
};
