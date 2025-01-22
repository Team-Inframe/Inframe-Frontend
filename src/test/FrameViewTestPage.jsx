// @ts-nocheck
import { useState } from "react";
import { viewFrame } from "@/api"; // 프레임 조회 API 호출 함수

const FrameViewTestPage = () => {
  // 상태 변수 설정
  const [frameId, setFrameId] = useState(""); // 프레임 ID 입력
  const [result, setResult] = useState(""); // API 응답을 표시할 상태
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태

  // 프레임 조회 요청
  const handleFrameView = async () => {
    if (!frameId) {
      alert("프레임 ID를 입력해주세요.");
      return;
    }

    setIsLoading(true); // 로딩 시작
    setResult(""); // 이전 결과 지움

    try {
      const response = await viewFrame(frameId); // 프레임 조회 API 호출
      console.log(response);
      if (response.status === 200) {
        setResult(JSON.stringify(response.data, null, 2)); // 응답이 존재하면 결과 출력
      }
    } catch (error) {
      setResult("Error: " + error.message); // API 호출 오류 처리
    } finally {
      setIsLoading(false); // 로딩 끝
    }
  };

  return (
    <div>
      <h1>초기 프레임 조회 API 테스트</h1>

      <div>
        <h2>프레임 조회</h2>
        <input
          type="text"
          value={frameId}
          onChange={(e) => setFrameId(e.target.value)} // 프레임 ID 설정
          placeholder="프레임 ID"
        />
        <button onClick={handleFrameView} disabled={isLoading}>
          {isLoading ? "조회 중..." : "프레임 조회"}
        </button>
      </div>

      <div id="output">
        <h3>결과</h3>
        {isLoading ? (
          <p>로딩 중...</p>
        ) : (
          <pre>{result}</pre> // API 응답 출력
        )}
      </div>
    </div>
  );
};

export default FrameViewTestPage;
