// @ts-nocheck
import { useState } from "react";
import { getCustomFrameList } from "@/api"; // API 호출 함수

const CustomFramesListTestPage = () => {
  // 상태 변수 설정
  const [sort, setSort] = useState("latest"); // 정렬 방식 (default: 최신순)
  const [result, setResult] = useState(""); // API 응답을 표시할 상태

  // 커스텀 프레임 목록 조회 요청
  const handleGetFramesList = async () => {
    try {
      const response = await getCustomFrameList(sort); // API 호출
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
      <h1>커스텀 프레임 목록 조회 API 테스트</h1>

      <div>
        <h2>정렬 방식 선택</h2>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)} // 정렬 방식 선택
        >
          <option value="latest">최신순</option>
          <option value="bookmarks">북마크수순</option>
        </select>
        <button onClick={handleGetFramesList}>목록 조회</button>
      </div>

      <div id="output">
        <h3>결과</h3>
        <pre>{result}</pre> {/* API 결과 출력 */}
      </div>
    </div>
  );
};

export default CustomFramesListTestPage;
