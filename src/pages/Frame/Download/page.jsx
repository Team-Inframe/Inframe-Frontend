import RoutePath from "@/routes/routePath";
import { useNavigate } from "react-router-dom";

export const FrameCameraDownloadPage = () => {
  const photoUrl = localStorage.getItem("photoUrl");
  const navigate = useNavigate();

  const onDownloadBtn = () => {
    const link = document.createElement("a");
    link.href = photoUrl;
    link.download = "MyPhoto.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleConfirmClick = () => {
    localStorage.removeItem("photoUrl");
    navigate(RoutePath.Storage);
  };

  return (
    <div className="flex h-real-screen flex-col justify-between bg-white pb-[60px] pt-[50px]">
      <div className="mb-3 flex flex-col">
        <div className="flex-col">
          <div
            className="Label_M mb-[10px] flex justify-end px-[24px]"
            onClick={handleConfirmClick}
          >
            완료
          </div>
          <div className="Label_L px-[24px]">사진 촬영이 완료됐어요</div>
          <div className="flex items-center gap-[5px] px-[24px]">
            <span className="Label_M mt-1">
              사진은 보관함에서 확인할 수 있어요!
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <img src={photoUrl} className="max-h-[450px]" />
      </div>

      <div className="mt-3 flex items-center justify-center">
        <div className="Label_L" onClick={onDownloadBtn}>
          저장하기
        </div>
      </div>
    </div>
  );
};
