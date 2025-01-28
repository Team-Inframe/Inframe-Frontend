export const StorageImages = ({ date, frames }) => {
  return (
    <div className="mb-[20px] flex flex-col">
      <span className="Body_normal_M text-black">{date}</span>

      <div className="mt-[10px] grid grid-cols-3 gap-[30px]">
        {frames.map((frame) => (
          <div
            key={frame.custom_frame_id}
            className="flex w-full cursor-pointer flex-col"
          >
            <img
              src={frame.custom_frame_url}
              alt={frame.custom_frame_title}
              className="mb-[4px]"
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
