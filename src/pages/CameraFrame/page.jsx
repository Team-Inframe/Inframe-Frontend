import { useRef, useState, useEffect } from "react";

export default function CameraFrameApp() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [frames, setFrames] = useState([]);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("카메라를 열 수 없습니다:", err);
      }
    };
    startCamera();
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  const captureFrame = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

      const frameData = canvas.toDataURL("image/png");
      setFrames((prevFrames) => [...prevFrames, frameData]);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="mb-4 text-2xl font-bold">Camera Frame Capture</h1>

      <div className="mb-4">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="h-60 w-80 rounded-md border shadow-md"
        ></video>
      </div>

      <button
        onClick={captureFrame}
        className="rounded-md bg-blue-500 px-4 py-2 text-white shadow-md hover:bg-blue-600"
      >
        촬영하기
      </button>

      <canvas ref={canvasRef} className="hidden"></canvas>

      <div className="mt-6 grid grid-cols-2 gap-4">
        {frames.map((frame, index) => (
          <div key={index} className="rounded-md border shadow-md">
            <img
              src={frame}
              alt={`Frame ${index + 1}`}
              className="h-full w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
