export const StorageImages = ({ date, frames }) => {
  return (
    <div className="mb-[20px] flex flex-col">
      <span className="Body_normal_M text-black">{date}</span>

      <div className="mt-[17px] grid grid-cols-3 gap-[20px]">
        {frames.map((frame) => (
          <div
            key={frame.custom_frame_id}
            className="flex min-h-[140px] cursor-pointer flex-col justify-center"
          >
            <img
              src={frame.custom_frame_url}
              alt={frame.custom_frame_title}
              className="min-w-[100px]"
            />
            <span className="Caption_reading_M">
              {frame.custom_frame_title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
