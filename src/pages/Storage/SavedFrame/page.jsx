import { StorageLayout } from "@/components/pages/Storage/StorageLayout";
import { EmptyStorage } from "@/components/pages/Storage/EmptyStorage";
import { useState, useEffect } from "react";
import { getMyBookmarkCustomFrame } from "@/api";
import { StorageImages } from "@/components/pages/Storage/StorageImages";

export const SavedFramePage = () => {
  const [savedFrames, setSavedFrames] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getbookmarke = async () => {
      setLoading(true);
      try {
        const response = await getMyBookmarkCustomFrame(
          localStorage.getItem("userId")
        );
        setSavedFrames(response.data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    getbookmarke();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return savedFrames.length != 0 ? (
    <div>
      <StorageLayout title="내가 저장한 프레임">
        <div className="flex flex-col gap-[21px]">
          {savedFrames.map((group) => (
            <StorageImages
              key={group.date}
              date={group.date}
              frames={group.frames}
            />
          ))}
        </div>
      </StorageLayout>
      <div className="h-28 w-screen max-w-[490px]"></div>
    </div>
  ) : (
    <div>
      <StorageLayout title="내가 저장한 프레임">
        <div className="pt-[230px]">
          <EmptyStorage />
        </div>
      </StorageLayout>
      <div className="h-28 w-screen max-w-[490px]"></div>
    </div>
  );
};
