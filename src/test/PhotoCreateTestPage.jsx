// @ts-nocheck
import { useState } from "react";
import { createPhoto } from "@/api"; // API 호출 함수

const PhotoCreateTestPage = () => {
  // 상태 변수 설정
  const [userId, setUserId] = useState(""); // 유저 ID 상태
  const [photoImg, setPhotoImg] = useState(null); // 업로드할 사진 파일 상태
  const [result, setResult] = useState(""); // API 응답을 저장할 상태

  // 사진 업로드 핸들러
  const handleImageChange = (e) => {
    setPhotoImg(e.target.files[0]); // 선택된 파일을 상태에 저장
  };

  // 최종 사진본 생성 요청
  const handleCreateFinalPhoto = async () => {
    if (!userId || !photoImg) {
      alert("유저 ID와 사진을 입력해주세요.");
      return;
    }

    try {
      const response = await createPhoto(userId, photoImg); // API 호출
      if (response.status === 201) {
        setResult(JSON.stringify(response, null, 2)); // 성공적인 응답 처리
      } else {
        setResult("Error: " + response.message); // 실패한 응답 처리
      }
    } catch (error) {
      setResult("Error: " + error.message); // API 호출 오류 처리
    }
  };

  return (
    <div>
      <h1>최종 사진본 생성 API 테스트</h1>

      <div>
        <h2>최종 사진본 생성</h2>
        <input
          type="number"
          value={userId}
          onChange={(e) => setUserId(e.target.value)} // userId 값 설정
          placeholder="유저 아이디"
        />
        <input
          type="file"
          onChange={handleImageChange} // 사진 파일 선택
        />
        <button onClick={handleCreateFinalPhoto}>최종 사진본 생성</button>
      </div>

      <div id="output">
        <h3>결과</h3>
        <pre>{result}</pre> {/* API 결과 출력 */}
      </div>
    </div>
  );
};

export default PhotoCreateTestPage;
