export const StorageImages = ({ date, frames }) => {
  return (
    <div className="mb-[20px] flex flex-col">
      <span className="Body_normal_M text-black">{date}</span>

      <div className="mt-[10px] grid grid-cols-3 gap-[30px]">
        {frames.map((frame) => (
          <div
            key={frame.customFrameId}
            className="flex w-full cursor-pointer flex-col"
          >
            <img
              src={frame.customFrameUrl}
              alt={frame.customFrameTitle}
              className="mb-[8px]"
            />
            <span className="Label_B">{frame.customFrameTitle}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
