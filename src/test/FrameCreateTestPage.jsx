// @ts-nocheck
import { useState } from "react";
import { createFrame } from "@/api"; // 프레임 생성 API 호출 함수

const FrameCreateTestPage = () => {
  // 상태 변수 설정
  const [frameImg, setFrameImg] = useState(null); // 프레임 이미지 파일
  const [cameraWidth, setCameraWidth] = useState(""); // 카메라 너비
  const [cameraHeight, setCameraHeight] = useState(""); // 카메라 높이
  const [result, setResult] = useState(""); // API 응답을 표시할 상태
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태

  // 프레임 생성 요청
  const handleFrameCreate = async () => {
    if (!frameImg || !cameraWidth || !cameraHeight) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    // 요청 데이터 (form-data 형식)
    const formData = new FormData();
    formData.append("frame_img", frameImg);
    formData.append("camera_width", cameraWidth);
    formData.append("camera_height", cameraHeight);

    setIsLoading(true); // 로딩 시작
    setResult(""); // 이전 결과를 지움

    try {
      const response = await createFrame(formData); // 프레임 생성 API 호출
      if (response.status === 201) {
        setResult(JSON.stringify(response, null, 2)); // 응답이 존재하면 결과 출력
      } else {
        setResult("Error: " + response.message);
      }
    } catch (error) {
      setResult("Error: " + error.message); // API 호출 오류 처리
    } finally {
      setIsLoading(false); // 로딩 끝
    }
  };

  // 파일 선택 핸들러
  const handleFileChange = (e) => {
    setFrameImg(e.target.files[0]); // 선택된 파일을 상태에 저장
  };

  return (
    <div>
      <h1>프레임 생성 API 테스트</h1>

      <div>
        <h2>프레임 생성</h2>
        <input
          type="file"
          onChange={handleFileChange} // 파일 변경 시 호출되는 함수
        />
        <input
          type="number"
          value={cameraWidth}
          onChange={(e) => setCameraWidth(e.target.value)} // 카메라 너비 설정
          placeholder="카메라 너비"
        />
        <input
          type="number"
          value={cameraHeight}
          onChange={(e) => setCameraHeight(e.target.value)} // 카메라 높이 설정
          placeholder="카메라 높이"
        />
        <button onClick={handleFrameCreate} disabled={isLoading}>
          {isLoading ? "프레임 생성 중..." : "프레임 생성"}
        </button>
      </div>

      <div id="output">
        <h3>결과</h3>
        <pre>{result}</pre> {/* API 결과 출력 */}
        {isLoading && <p>로딩 중...</p>} {/* 로딩 표시 */}
      </div>
    </div>
  );
};

export default FrameCreateTestPage;
