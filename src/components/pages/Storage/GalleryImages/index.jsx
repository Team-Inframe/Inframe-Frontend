import { useNavigate } from "react-router-dom";

export const GalleryImages = ({ date, photos }) => {
  const navigate = useNavigate();

  return (
    <div className="mb-[20px] flex flex-col">
      <span className="Body_normal_M text-black">{date}</span>

      <div className="mt-[10px] grid grid-cols-3 gap-[20px]">
        {photos.map((photo) => (
          <div
            key={photo.photo_id}
            className="flex min-h-[140px] cursor-pointer flex-col items-center justify-center"
            onClick={() => navigate(`/storages/galleries/${photo.photo_id}`)}
          >
            <img
              src={photo.photo_url}
              alt={photo.photo_id}
              className="min-w-[100px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
