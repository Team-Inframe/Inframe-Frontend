// @ts-nocheck
import { useState } from "react";
import { getCustomFrame } from "@/api"; // API 호출 함수

const CustomFrameReadTestPage = () => {
  // 상태 변수 설정
  const [customFrameId, setCustomFrameId] = useState(""); // 사용자 입력을 위한 커스텀 프레임 ID
  const [result, setResult] = useState(""); // API 응답을 표시할 상태

  // 커스텀 프레임 조회 요청
  const handleGetCustomFrame = async () => {
    if (!customFrameId) {
      alert("커스텀 프레임 ID를 입력해주세요.");
      return;
    }

    try {
      const response = await getCustomFrame(customFrameId); // API 호출
      console.log(response);
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
      <h1>커스텀 프레임 조회 API 테스트</h1>

      <div>
        <h2>커스텀 프레임 ID 입력</h2>
        <input
          type="text"
          value={customFrameId}
          onChange={(e) => setCustomFrameId(e.target.value)} // 커스텀 프레임 ID 입력
          placeholder="커스텀 프레임 ID"
        />
        <button onClick={handleGetCustomFrame}>커스텀 프레임 조회</button>
      </div>

      <div id="output">
        <h3>결과</h3>
        <pre>{result}</pre> {/* API 결과 출력 */}
      </div>
    </div>
  );
};

export default CustomFrameReadTestPage;
