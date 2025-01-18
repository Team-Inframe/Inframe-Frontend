import { useState } from "react";

const BasicBG = ({ colorChanger }) => {
  return (
    <div className="bottom-0 bg-slate-500">
      <ColorButton
        color="bg-BGColor-BGColor1"
        onClick={() => colorChanger("BGColor1")}
      />
      <ColorButton
        color="bg-BGColor-BGColor2"
        onClick={() => colorChanger("BGColor2")}
      />
      <ColorButton
        color="bg-BGColor-BGColor3"
        onClick={() => colorChanger("BGColor3")}
      />
      <ColorButton
        color="bg-BGColor-BGColor4"
        onClick={() => colorChanger("BGColor4")}
      />
      <ColorButton
        color="bg-BGColor-BGColor5"
        onClick={() => colorChanger("BGColor5")}
      />
      <br />
      <ColorButton
        color="bg-BGColor-BGColor6"
        onClick={() => colorChanger("BGColor6")}
      />
      <ColorButton
        color="bg-BGColor-BGColor7"
        onClick={() => colorChanger("BGColor7")}
      />
      <ColorButton
        color="bg-BGColor-BGColor8"
        onClick={() => colorChanger("BGColor8")}
      />
      <ColorButton
        color="bg-BGColor-BGColor9"
        onClick={() => colorChanger("BGColor9")}
      />
      <ColorButton
        color="bg-BGColor-BGColor10"
        onClick={() => colorChanger("BGColor10")}
      />
    </div>
  );
};

const ColorButton = ({ color, onClick }) => {
  return (
    <button
      className={`h-10 w-10 rounded-full border-2 border-black ${color} border-syscolor-SystemGray`}
      onClick={onClick}
    ></button>
  );
};

export default BasicBG;
