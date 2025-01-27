import sendbutton from "@/assets/svgs/sendbutton.svg";

const AiUploader = ({ onClick, prompt, onPromptChange }) => {
  return (
    <div className="flex h-full w-full items-center gap-[13px]">
      <input
        type="text"
        value={prompt}
        onChange={onPromptChange}
        className="Body_reading_M flex w-full items-center rounded-[5px] border-2 px-[7px] py-[5px] focus:border-none focus:outline-2 focus:outline-syscolor-SystemPurple1"
      />
      <img src={sendbutton} onClick={() => onClick} />
    </div>
  );
};

export default AiUploader;
