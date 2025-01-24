import React, { useEffect, useRef, useState } from "react";

export default function useCameraFrames(initialFramesCount = 4) {
  const [frames, setFrames] = useState(Array(initialFramesCount).fill(null));
  const videoRefs = useRef(
    Array(initialFramesCount)
      .fill(null)
      .map(() => React.createRef())
  );
  const canvasRefs = useRef(
    Array(initialFramesCount)
      .fill(null)
      .map(() => React.createRef())
  );

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        videoRefs.current.forEach((videoRef) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        });
      } catch (error) {
        console.error(error);
      }
    };

    startCamera();

    return () => {
      videoRefs.current.forEach((videoRef) => {
        if (videoRef.current && videoRef.current.srcObject) {
          const tracks = videoRef.current.srcObject.getTracks();
          tracks.forEach((track) => track.stop());
        }
      });
    };
  }, []);

  const captureFrame = (index) => {
    console.log("capture");
    if (
      videoRefs.current[index]?.current &&
      canvasRefs.current[index]?.current
    ) {
      const canvas = canvasRefs.current[index].current;
      const context = canvas.getContext("2d");
      const video = videoRefs.current[index].current;

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      const frameData = canvas.toDataURL("image/png");
      setFrames((prevFrames) => {
        const updatedFrames = [...prevFrames];
        updatedFrames[index] = frameData;
        return updatedFrames;
      });
    }
  };

  return { frames, setFrames, videoRefs, canvasRefs, captureFrame };
}
