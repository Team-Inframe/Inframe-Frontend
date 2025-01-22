import EmptyFile from "@/assets/svgs/EmptyFile.svg";

export const EmptyStorage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={EmptyFile} alt="EmptyFile" className="mb-[30px]" />
      <span className="Body_reading_M mb-[12px] text-center text-black">
        보관된 사진이 없습니다.
      </span>
      <span className="Caption_normal_M max-w-[180px] text-center text-[#A7A7A7]">
        프레임을 만들고 사진을 편집하면 보관함에 자동으로 저장됩니다.
      </span>
    </div>
  );
};
