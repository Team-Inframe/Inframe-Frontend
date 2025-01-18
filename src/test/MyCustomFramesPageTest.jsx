// @ts-nocheck
import { useState } from "react";
import { getMyCustomFrames } from "@/api"; // API 호출 함수

const MyCustomFramesPageTest = () => {
  // 상태 변수 설정
  const [userId, setUserId] = useState(""); // 유저 ID 입력값
  const [result, setResult] = useState(""); // API 응답을 표시할 상태

  // 나의 커스텀 프레임 목록 조회 요청
  const handleGetMyFrames = async () => {
    if (!userId) {
      alert("유저 아이디를 입력해주세요.");
      return;
    }

    try {
      const response = await getMyCustomFrames(userId); // API 호출
      if (response.status === 200) {
        setResult(JSON.stringify(response.data, null, 2)); // 성공적인 응답 처리
      } else {
        setResult("Error: " + response.data.message); // 실패한 응답 처리
      }
    } catch (error) {
      setResult("Error: " + error.message); // API 호출 오류 처리
    }
  };

  return (
    <div>
      <h1>나의 커스텀 프레임 목록 조회 API 테스트</h1>

      <div>
        <h2>유저 ID 입력</h2>
        <input
          type="number"
          value={userId}
          onChange={(e) => setUserId(e.target.value)} // 유저 ID 설정
          placeholder="유저 아이디"
        />
        <button onClick={handleGetMyFrames}>목록 조회</button>
      </div>

      <div id="output">
        <h3>결과</h3>
        <pre>{result}</pre> {/* API 결과 출력 */}
      </div>
    </div>
  );
};

export default MyCustomFramesPageTest;
