// @ts-nocheck
import { useState } from "react";
import { createSticker } from "@/api"; // API 호출 함수

const StickersTestPage = () => {
  // 상태 변수 설정
  const [userId, setUserId] = useState("");
  const [prompt, setPrompt] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [result, setResult] = useState("");

  // 스티커 생성 요청
  const handleStickerCreate = async () => {
    const formData = new FormData();
    formData.append("user_id", userId);

    if (prompt) {
      // 스티커 생성 프롬포트
      formData.append("prompt", prompt);
    }

    if (uploadedImage) {
      // 이미지 배경 제거
      formData.append("uploaded_image", uploadedImage);
    }

    try {
      const response = await createSticker(formData); // API 호출
      if (response.status === 201) {
        setResult(JSON.stringify(response, null, 2)); // 성공적인 응답 처리
      } else {
        setResult("Error: " + response.message);
      }
    } catch (error) {
      setResult("Error: " + error.message); // 오류 처리
    }
  };

  // 파일 선택 핸들러
  const handleImageChange = (e) => {
    setUploadedImage(e.target.files[0]); // 선택된 파일을 상태에 저장
  };

  return (
    <div>
      <h1>스티커 생성 API 테스트</h1>

      <div>
        <h2>스티커 생성</h2>
        <input
          type="number"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="유저 아이디"
        />
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="스티커 텍스트 프롬프트"
        />
        <input type="file" onChange={handleImageChange} />
        <button onClick={handleStickerCreate}>스티커 생성</button>
      </div>

      <div id="output">
        <h3>결과</h3>
        <pre>{result}</pre> {/* API 결과 출력 */}
      </div>
    </div>
  );
};

export default StickersTestPage;
