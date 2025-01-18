import { useState } from "react";

const ShareToggle = () => {
  const [isOn, setisOn] = useState(false);

  return (
    <div className="">
      <div className="flex items-center justify-center">
        <span className="ml-2 px-1 text-sm font-medium">공유하기</span>
        <label className="relative mr-5 inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            className="peer sr-only"
            checked={isOn}
            readOnly
          />
          <div
            onClick={() => {
              setisOn(!isOn);
            }}
            className="peer h-6 w-11 rounded-full bg-gray-200 from-syscolor-SystemPurple2 to-syscolor-SystemPurple1 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-gradient-to-r peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-syscolor-SystemPurple2"
          ></div>
        </label>
      </div>
    </div>
  );
};

export default ShareToggle;
