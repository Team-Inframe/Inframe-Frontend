import { StorageLayout } from "@/components/pages/Storage/StorageLayout";
import { EmptyStorage } from "@/components/pages/Storage/EmptyStorage";
import Footer from "@/components/layout/Footer";
import { useEffect, useState } from "react";
import { getPhotosList } from "@/api";
import { GalleryImages } from "@/components/pages/Storage/GalleryImages";

export const GalleryPage = () => {
  const [savedGallery, setSavedGallery] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getGallery = async () => {
      setLoading(true);
      try {
        const response = await getPhotosList(localStorage.getItem("userId"));
        setSavedGallery(response.data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    getGallery();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return savedGallery.length != [] ? (
    <div>
      <StorageLayout title="갤러리">
        <div className="flex flex-col gap-[21px]">
          {savedGallery.map((group) => (
            <GalleryImages
              key={group.date}
              date={group.date}
              photos={group.photos}
            />
          ))}
        </div>
      </StorageLayout>
      <div className="h-28 w-screen max-w-[490px]"></div>
      <Footer />
    </div>
  ) : (
    <div>
      <StorageLayout title="갤러리">
        <div className="pt-[230px]">
          <EmptyStorage />
        </div>
      </StorageLayout>
      <div className="h-28 w-screen max-w-[490px]"></div>
      <Footer />
    </div>
  );
};
