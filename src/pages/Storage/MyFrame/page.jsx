import { StorageImages } from "@/components/pages/Storage/StorageImages";
import { StorageLayout } from "@/components/pages/Storage/StorageLayout";
import { EmptyStorage } from "@/components/pages/Storage/EmptyStorage";
import Footer from "@/components/layout/Footer";
import { getMyCustomFrames } from "@/api";
import { useEffect, useState } from "react";

export const MyFramePage = () => {
  const [savedMyFrame, setSavedMyFrame] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMyFrames = async () => {
      setLoading(true);
      try {
        const response = await getMyCustomFrames(
          localStorage.getItem("userId")
        );
        setSavedMyFrame(response.data);
        //return response;
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    getMyFrames();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return savedMyFrame.length != [] ? (
    <div>
      <StorageLayout title="내가 만든 프레임">
        <div className="flex flex-col gap-[21px]">
          {savedMyFrame.map((group) => (
            <StorageImages
              key={group.date}
              date={group.date}
              frames={group.frames}
            />
          ))}
        </div>
      </StorageLayout>
      <div className="h-28 w-screen max-w-[490px]"></div>
      <Footer />
    </div>
  ) : (
    <div>
      <StorageLayout title="내가 만든 프레임">
        <div className="pt-[230px]">
          <EmptyStorage />
        </div>
      </StorageLayout>
      <div className="h-28 w-screen max-w-[490px]"></div>
      <Footer />
    </div>
  );
};
