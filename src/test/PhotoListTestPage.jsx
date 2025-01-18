// @ts-nocheck
import { useState } from "react";
import { getPhotosList } from "@/api"; // API 호출 함수

const PhotosListTestPage = () => {
  // 상태 변수 설정
  const [userId, setUserId] = useState(""); // 유저 ID 상태
  const [photosList, setPhotosList] = useState([]); // 저장된 사진 목록 상태
  const [result, setResult] = useState(""); // API 응답을 표시할 상태

  // 사진 목록 조회 요청
  const handleGetPhotosList = async () => {
    if (!userId) {
      alert("유저 ID를 입력해주세요.");
      return;
    }

    try {
      const response = await getPhotosList(userId); // API 호출
      console.log(response);
      if (response.status === 200) {
        setPhotosList(response.data); // 성공적인 응답 처리
      } else {
        setResult("Error: " + response.message); // 실패한 응답 처리
      }
    } catch (error) {
      setResult("Error: " + error.message); // API 호출 오류 처리
    }
  };

  return (
    <div>
      <h1>갤러리 목록 조회 API 테스트</h1>

      <div>
        <h2>사진 목록 조회</h2>
        <input
          type="number"
          value={userId}
          onChange={(e) => setUserId(e.target.value)} // userId 값 설정
          placeholder="유저 아이디"
        />
        <button onClick={handleGetPhotosList}>사진 목록 조회</button>
      </div>

      <div id="output">
        <h3>결과</h3>
        {photosList.length > 0 ? (
          <ul>
            {photosList.map((photo, index) => (
              <li key={index}>
                {photo.photo_id}:{" "}
                <a
                  href={photo.photo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {photo.photo_url}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <pre>{result}</pre> // 사진 목록이 없을 경우 오류 메시지 출력
        )}
      </div>
    </div>
  );
};

export default PhotosListTestPage;
