const BasicBG = ({ colorChanger }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-[20px]">
      <div className="flex gap-[22px]">
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
      </div>
      <div className="flex gap-[22px]">
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
    </div>
  );
};

const ColorButton = ({ color, onClick }) => {
  return (
    <button
      className={`h-10 w-10 rounded-full border-[3px] ${color} border-syscolor-SystemGray`}
      onClick={onClick}
    />
  );
};

export default BasicBG;
