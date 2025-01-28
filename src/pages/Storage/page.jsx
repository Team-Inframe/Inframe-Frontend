import Footer from "@/components/layout/Footer";
import { StorageMenu } from "@/components/pages/Storage/StorageMenu";

export const StoragePage = () => {
  return (
    <div className="pt-[70px]">
      <span className="Headline_B px-[24px]">보관함</span>
      <div className="flex flex-col gap-[43px] px-[24px] pt-[74px]">
        <div className="flex-col gap-[11px]">
          <StorageMenu to="/storages/my-frames">내가 만든 프레임</StorageMenu>
          <StorageMenu to="/storages/saved-frames">
            내가 저장한 프레임
          </StorageMenu>
          <StorageMenu to="/storages/galleries">갤러리</StorageMenu>
        </div>
      </div>
      <Footer />
    </div>
  );
};
