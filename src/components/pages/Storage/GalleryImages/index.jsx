export const GalleryImages = ({ date, photos }) => {
  return (
    <div className="mb-[20px] flex flex-col">
      <span className="Body_normal_M text-black">{date}</span>

      <div className="mt-[10px] grid grid-cols-3 gap-[30px]">
        {photos.map((photo) => (
          <div
            key={photo.photo_id}
            className="flex w-full cursor-pointer flex-col"
          >
            <img
              src={photo.photo_url}
              alt={photo.photo_id}
              className="mb-[8px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
