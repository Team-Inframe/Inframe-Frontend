const SelectedFrame = ({ bgsrc }) => {
  return typeof bgsrc == "string" ? (
    <div className={`bg-BGColor-${bgsrc}`}>
      <h1>hi</h1>
    </div>
  ) : (
    <div className="">
      <h1>bye</h1>
    </div>
  );
};

export default SelectedFrame;
