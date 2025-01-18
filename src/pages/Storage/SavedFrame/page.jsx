import { StorageLayout } from "@/components/pages/Storage/StorageLayout";
import { EmptyStorage } from "@/components/pages/Storage/EmptyStorage";

export const SavedFramePage = () => {
  return (
    <>
      <StorageLayout title="내가 저장한 프레임">
        <div className="pt-[230px]">
          <EmptyStorage />
        </div>
      </StorageLayout>
    </>
  );
};
