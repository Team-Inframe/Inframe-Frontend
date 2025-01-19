// @ts-nocheck
import { useState } from "react";
import { bookmarkCustomFrame } from "@/api"; // API 호출 함수

const BookmarkCustomFrameTestPage = () => {
  // 상태 변수 설정
  const [userId, setUserId] = useState(""); // 유저 ID 입력값
  const [customFrameId, setCustomFrameId] = useState(""); // 커스텀 프레임 ID 입력값
  const [result, setResult] = useState(""); // API 응답을 표시할 상태

  // 커스텀 프레임 저장 요청
  const handleBookmarkFrame = async () => {
    if (!userId || !customFrameId) {
      alert("유저 ID와 커스텀 프레임 ID를 모두 입력해주세요.");
      return;
    }

    try {
      const response = await bookmarkCustomFrame(userId, customFrameId); // API 호출
      if (response.status === 201) {
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
      <h1>커스텀 프레임 저장 API 테스트</h1>

      <div>
        <h2>커스텀 프레임 저장</h2>
        <input
          type="number"
          value={userId}
          onChange={(e) => setUserId(e.target.value)} // 유저 ID 설정
          placeholder="유저 ID"
        />
        <input
          type="number"
          value={customFrameId}
          onChange={(e) => setCustomFrameId(e.target.value)} // 커스텀 프레임 ID 설정
          placeholder="커스텀 프레임 ID"
        />
        <button onClick={handleBookmarkFrame}>커스텀 프레임 저장</button>
      </div>

      <div id="output">
        <h3>결과</h3>
        <pre>{result}</pre> {/* API 결과 출력 */}
      </div>
    </div>
  );
};

export default BookmarkCustomFrameTestPage;
