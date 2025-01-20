import Header from "@/components/layout/Header";
import ShareToggle from "@/components/pages/SaveFrame/ShareToggle";

const SaveFrame = () => {
  return (
    <div>
      <Header title="프레임 저장하기" />
      <ShareToggle />
      <h1>Maked Frame</h1>

      <div className="bottom-0 bg-violet-400">
        <div className="flex items-center rounded-md outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:outline-offset-1 has-[input:focus-within]:outline-syscolor-SystemPurple1">
          <input
            type="text"
            className="Body_reading_M block min-w-0 grow py-1.5 pl-2 pr-3 focus:outline focus:outline-0"
          ></input>
        </div>
      </div>
      <button>
        <div>저장하기</div>
      </button>
    </div>
  );
};

export default SaveFrame;
