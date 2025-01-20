// @ts-nocheck
import { useState } from "react";
import { createFrameBackground } from "@/api"; // API 호출 함수

const FrameBackgroundCreateTestPage = () => {
  // 상태 변수 설정
  const [prompt, setPrompt] = useState(""); // 사용자 입력을 위한 상태
  const [result, setResult] = useState(""); // API 응답을 표시할 상태
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태

  // 프레임 배경 생성 요청
  const handleFrameBackgroundCreate = async () => {
    if (!prompt) {
      alert("프롬프트를 입력해주세요.");
      return;
    }

    setIsLoading(true); // 로딩 시작
    setResult(""); // 이전 결과를 지움

    try {
      const response = await createFrameBackground(prompt); // API 호출
      if (response.status === 201) {
        setResult(JSON.stringify(response, null, 2));
      } else {
        setResult("Error: " + response.message); // 실패한 응답 처리
      }
    } catch (error) {
      setResult("Error: " + error.message); // API 호출 오류 처리
    } finally {
      setIsLoading(false); // 로딩 끝
    }
  };

  return (
    <div>
      <h1>초기 프레임 배경 생성 API 테스트</h1>

      <div>
        <h2>프레임 배경 생성</h2>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)} // prompt 값 설정
          placeholder="프롬프트"
        />
        <button onClick={handleFrameBackgroundCreate} disabled={isLoading}>
          {isLoading ? "생성 중..." : "프레임 배경 생성"}
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

export default FrameBackgroundCreateTestPage;
