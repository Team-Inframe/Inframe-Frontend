// @ts-nocheck
import { useState } from "react";
import { getMyBookmarkCustomFrame } from "@/api"; // API 호출 함수

const MyBookmarkCustomFrameTestPage = () => {
  // 상태 변수 설정
  const [userId, setUserId] = useState(""); // 유저 ID 입력값
  const [result, setResult] = useState(""); // API 응답을 표시할 상태

  // 저장된 커스텀 프레임 목록 요청
  const handleFetchFrames = async () => {
    if (!userId) {
      alert("유저 ID를 입력해주세요.");
      return;
    }

    try {
      const response = await getMyBookmarkCustomFrame(userId); // API 호출
      setResult(JSON.stringify(response, null, 2)); // 응답 데이터를 JSON 형식으로 표시
    } catch (error) {
      setResult("Error: " + error.message); // 오류 처리
    }
  };

  return (
    <div>
      <h1>내가 저장한 커스텀 프레임 목록 조회 API 테스트</h1>

      <div>
        <h2>커스텀 프레임 목록 조회</h2>
        <input
          type="number"
          value={userId}
          onChange={(e) => setUserId(e.target.value)} // 유저 ID 설정
          placeholder="유저 ID"
        />
        <button onClick={handleFetchFrames}>커스텀 프레임 목록 조회</button>
      </div>

      <div id="output">
        <h3>결과</h3>
        <pre>{result}</pre> {/* API 결과 출력 */}
      </div>
    </div>
  );
};

export default MyBookmarkCustomFrameTestPage;
