import { useCameraFrames } from "@/hooks";
import { useEffect } from "react";

export const BasicCameraFrame1 = ({ bgsrc, isCapturing, currentFrame }) => {
  const isColor = bgsrc && bgsrc.startsWith("BG");
  const isImage =
    (bgsrc && bgsrc.startsWith("blob:")) || bgsrc.startsWith("http");

  const { frames, videoRefs, canvasRefs, captureFrame } = useCameraFrames(4);

  useEffect(() => {
    if (isCapturing && currentFrame >= 0 && currentFrame < 4) {
      captureFrame(currentFrame);
    }
  }, [isCapturing, currentFrame, captureFrame]);

  return (
    <div
      className={`flex h-[450px] w-[180px] flex-col gap-[5px] px-[17px] py-[21px] shadow-lg ${
        isColor ? `bg-BGColor-${bgsrc}` : ""
      }`}
      style={{
        backgroundImage: isImage ? `url(${bgsrc})` : "none",
        backgroundColor: !isImage && !isColor ? bgsrc : undefined,
        backgroundSize: isImage ? "cover" : undefined,
        backgroundPosition: isImage ? "center" : undefined,
      }}
    >
      {[0, 1, 2, 3].map((index) => (
        <div className="flex bg-white" key={index}>
          {frames[index] ? (
            <img
              src={frames[index]}
              alt={`Frame ${index + 1}`}
              className="h-[100px] w-[144px] object-cover"
            />
          ) : (
            <video
              ref={videoRefs.current[index]}
              autoPlay
              playsInline
              className="h-[100px] w-[144px] object-cover"
            ></video>
          )}
          <canvas ref={canvasRefs.current[index]} className="hidden"></canvas>
        </div>
      ))}
    </div>
  );
};

export const BasicCameraFrame2 = ({ bgsrc, isCapturing, currentFrame }) => {
  const { frames, videoRefs, canvasRefs, captureFrame } = useCameraFrames(4);

  useEffect(() => {
    if (isCapturing && currentFrame >= 0 && currentFrame < 4) {
      captureFrame(currentFrame);
    }
  }, [isCapturing, currentFrame, captureFrame]);

  const isColor = bgsrc && bgsrc.startsWith("BG");
  const isImage =
    (bgsrc && bgsrc.startsWith("blob:")) || bgsrc.startsWith("http");

  return (
    <div
      className={`flex h-[400px] w-[300px] flex-col gap-[4px] px-[13px] py-[26px] shadow-lg ${
        isColor ? `bg-BGColor-${bgsrc}` : ""
      }`}
      style={{
        backgroundImage: isImage ? `url(${bgsrc})` : "none",
        backgroundColor: !isImage && !isColor ? bgsrc : undefined,
        backgroundSize: isImage ? "cover" : undefined,
        backgroundPosition: isImage ? "center" : undefined,
      }}
    >
      <div className="flex gap-[8px]">
        <div className="h-[130px] w-[140px]">
          <div
            className={`relative h-full bg-white ${
              isCapturing && currentFrame === 0 ? "border-blue-500" : ""
            }`}
          >
            {frames[0] ? (
              <img
                src={frames[0]}
                alt="Frame 1"
                className="h-[150px] w-[140px] object-cover"
              />
            ) : (
              <video
                ref={videoRefs.current[0]}
                autoPlay
                playsInline
                className="h-[150px] w-[140px] object-cover"
              ></video>
            )}
            <canvas ref={canvasRefs.current[0]} className="hidden"></canvas>
          </div>
        </div>
        <div className="h-[130px] w-[140px]">
          <div
            className={`relative mt-[26px] h-full bg-white ${
              isCapturing && currentFrame === 1 ? "border-blue-500" : ""
            }`}
          >
            {frames[1] ? (
              <img
                src={frames[1]}
                alt="Frame 2"
                className="h-[150px] w-[140px] object-cover"
              />
            ) : (
              <video
                ref={videoRefs.current[1]}
                autoPlay
                playsInline
                className="h-[150px] w-[140px] object-cover"
              ></video>
            )}
            <canvas ref={canvasRefs.current[1]} className="hidden"></canvas>
          </div>
        </div>
      </div>
      <div className="mt-[26px] flex gap-[8px]">
        <div className="h-[130px] w-[140px]">
          <div
            className={`relative h-full bg-white ${
              isCapturing && currentFrame === 2 ? "border-blue-500" : ""
            }`}
          >
            {frames[2] ? (
              <img
                src={frames[2]}
                alt="Frame 3"
                className="h-[150px] w-[140px] object-cover"
              />
            ) : (
              <video
                ref={videoRefs.current[2]}
                autoPlay
                playsInline
                className="h-[150px] w-[140px] object-cover"
              ></video>
            )}
            <canvas ref={canvasRefs.current[2]} className="hidden"></canvas>
          </div>
        </div>
        <div className="h-[130px] w-[140px]">
          <div
            className={`relative mt-[26px] h-full bg-white ${
              isCapturing && currentFrame === 3 ? "border-blue-500" : ""
            }`}
          >
            {frames[3] ? (
              <img
                src={frames[3]}
                alt="Frame 4"
                className="h-[150px] w-[140px] object-cover"
              />
            ) : (
              <video
                ref={videoRefs.current[3]}
                autoPlay
                playsInline
                className="h-[150px] w-[140px] object-cover"
              ></video>
            )}
            <canvas ref={canvasRefs.current[3]} className="hidden"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BasicCameraFrame3 = ({ bgsrc, isCapturing, currentFrame }) => {
  const { frames, videoRefs, canvasRefs, captureFrame } = useCameraFrames(4);

  useEffect(() => {
    if (isCapturing && currentFrame >= 0 && currentFrame < 4) {
      captureFrame(currentFrame);
    }
  }, [isCapturing, currentFrame, captureFrame]);

  const isColor = bgsrc && bgsrc.startsWith("BG");
  const isImage =
    (bgsrc && bgsrc.startsWith("blob:")) || bgsrc.startsWith("http");

  return (
    <div
      className={`flex h-[290px] w-[370px] flex-col gap-[5px] px-[23px] py-[17px] shadow-lg ${
        isColor ? `bg-BGColor-${bgsrc}` : ""
      }`}
      style={{
        backgroundImage: isImage ? `url(${bgsrc})` : "none",
        backgroundColor: !isImage && !isColor ? bgsrc : undefined,
        backgroundSize: isImage ? "cover" : undefined,
        backgroundPosition: isImage ? "center" : undefined,
      }}
    >
      <div className="flex flex-1 gap-[5px]">
        {[0, 1].map((index) => (
          <div className="bg-white" key={index}>
            {frames[index] ? (
              <img
                src={frames[index]}
                alt={`Frame ${index + 1}`}
                className="h-[120px] w-[164px] object-cover"
              />
            ) : (
              <video
                ref={videoRefs.current[index]}
                autoPlay
                playsInline
                className="h-[120px] w-[164px] object-cover"
              ></video>
            )}
            <canvas ref={canvasRefs.current[index]} className="hidden"></canvas>
          </div>
        ))}
      </div>
      <div className="flex flex-1 gap-[5px]">
        {[2, 3].map((index) => (
          <div className="bg-white" key={index}>
            {frames[index] ? (
              <img
                src={frames[index]}
                alt={`Frame ${index + 1}`}
                className="h-[120px] w-[164px] object-cover"
              />
            ) : (
              <video
                ref={videoRefs.current[index]}
                autoPlay
                playsInline
                className="h-[120px] w-[164px] object-cover"
              ></video>
            )}
            <canvas ref={canvasRefs.current[index]} className="hidden"></canvas>
          </div>
        ))}
      </div>
    </div>
  );
};

export const BasicCameraFrame4 = ({ bgsrc, isCapturing, currentFrame }) => {
  const { frames, videoRefs, canvasRefs, captureFrame } = useCameraFrames(4);

  useEffect(() => {
    if (isCapturing && currentFrame >= 0 && currentFrame < 4) {
      captureFrame(currentFrame);
    }
  }, [isCapturing, currentFrame, captureFrame]);

  const isColor = bgsrc && bgsrc.startsWith("BG");
  const isImage =
    (bgsrc && bgsrc.startsWith("blob:")) || bgsrc.startsWith("http");

  return (
    <div
      className={`flex h-[290px] w-[370px] flex-col gap-[8px] px-[23px] py-[17px] shadow-lg ${
        isColor ? `bg-BGColor-${bgsrc}` : ""
      }`}
      style={{
        backgroundImage: isImage ? `url(${bgsrc})` : "none",
        backgroundColor: !isImage && !isColor ? bgsrc : undefined,
        backgroundSize: isImage ? "cover" : undefined,
        backgroundPosition: isImage ? "center" : undefined,
      }}
    >
      <div className="ml-[19px] flex flex-1 gap-[4px]">
        {[0, 1].map((index) => (
          <div className="bg-white" key={index}>
            {frames[index] ? (
              <img
                src={frames[index]}
                alt={`Frame ${index + 1}`}
                className="h-[120px] w-[164px] object-cover"
              />
            ) : (
              <video
                ref={videoRefs.current[index]}
                autoPlay
                playsInline
                className="h-[120px] w-[164px] object-cover"
              ></video>
            )}
            <canvas ref={canvasRefs.current[index]} className="hidden"></canvas>
          </div>
        ))}
      </div>
      <div className="mr-[19px] flex flex-1 gap-[4px]">
        {[2, 3].map((index) => (
          <div className="bg-white" key={index}>
            {frames[index] ? (
              <img
                src={frames[index]}
                alt={`Frame ${index + 1}`}
                className="h-[120px] w-[164px] object-cover"
              />
            ) : (
              <video
                ref={videoRefs.current[index]}
                autoPlay
                playsInline
                className="h-[120px] w-[164px] object-cover"
              ></video>
            )}
            <canvas ref={canvasRefs.current[index]} className="hidden"></canvas>
          </div>
        ))}
      </div>
    </div>
  );
};
