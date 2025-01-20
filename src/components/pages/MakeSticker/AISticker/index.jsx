import sendbutton from "/src/assets/svgs/sendbutton.svg";

const AISticker = () => {
  return (
    <div className="flex flex-col px-20">
      <div className="flex items-center rounded-md outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:outline-offset-1 has-[input:focus-within]:outline-syscolor-SystemPurple1">
        <input
          type="text"
          className="Body_reading_M block min-w-0 grow py-1.5 pl-2 pr-3 focus:outline focus:outline-0"
        ></input>
      </div>
      <button>
        <img src={sendbutton} />
      </button>
    </div>
  );
};

export default AISticker;
