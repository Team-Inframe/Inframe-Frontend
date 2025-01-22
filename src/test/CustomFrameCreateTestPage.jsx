// @ts-nocheck
import { useState } from "react";
import { createCustomFrame } from "@/api"; // API 호출 함수

const CustomFrameCreateTestPage = () => {
  // 상태 변수 설정
  const [userId, setUserId] = useState(""); // 사용자 ID
  const [frameId, setFrameId] = useState(""); // 프레임 ID
  const [customFrameTitle, setCustomFrameTitle] = useState(""); // 프레임 제목
  const [customFrameImg, setCustomFrameImg] = useState(null); // 커스텀 프레임 이미지
  const [stickers, setStickers] = useState([]); // 스티커 리스트
  const [isShared, setIsShared] = useState(false); // 공유 여부
  const [result, setResult] = useState(""); // API 응답

  // 스티커 추가 핸들러
  const addSticker = () => {
    setStickers([
      ...stickers,
      {
        stickerId: null, // stickerId는 null로 설정하여 서버에서 받아올 예정
        positionX: 0,
        positionY: 0,
        stickerWidth: 0,
        stickerHeight: 0,
      },
    ]);
  };

  // 스티커 위치 및 크기 수정 핸들러
  const handleStickerChange = (index, field, value) => {
    const updatedStickers = [...stickers];
    updatedStickers[index][field] = value;
    setStickers(updatedStickers);
  };

  // 커스텀 프레임 생성 요청
  const handleCreateCustomFrame = async () => {
    if (!customFrameImg) {
      alert("커스텀 프레임 이미지를 선택해주세요.");
      return;
    }

    // FormData 생성
    const formData = new FormData();
    formData.append("custom_frame_img", customFrameImg);

    // 스티커 데이터를 스네이크 케이스로 변환
    const transformedStickers = stickers.map((sticker) => ({
      sticker_id: sticker.stickerId,
      position_x: sticker.positionX,
      position_y: sticker.positionY,
      sticker_width: sticker.stickerWidth,
      sticker_height: sticker.stickerHeight,
    }));

    // 요청 데이터
    const requestData = {
      user_id: userId, // userId -> user_id
      frame_id: frameId, // frameId -> frame_id
      custom_frame_title: customFrameTitle, // customFrameTitle -> custom_frame_title
      stickers: transformedStickers,
      is_shared: isShared, // isShared -> is_shared
    };

    // FormData에 JSON 데이터 추가
    formData.append("data", JSON.stringify(requestData));

    try {
      const response = await createCustomFrame(
        userId,
        frameId,
        customFrameTitle,
        stickers,
        customFrameImg,
        isShared
      ); // API 호출
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
      <h1>커스텀 프레임 생성 API 테스트</h1>

      <div>
        <h2>커스텀 프레임 정보</h2>
        <input
          type="number"
          value={userId}
          onChange={(e) => setUserId(e.target.value)} // 제목 입력
          placeholder="유저아이디"
        />
        <input
          type="number"
          value={frameId}
          onChange={(e) => setFrameId(e.target.value)} // 제목 입력
          placeholder="프레임 아이디"
        />
        <input
          type="text"
          value={customFrameTitle}
          onChange={(e) => setCustomFrameTitle(e.target.value)} // 제목 입력
          placeholder="커스텀 프레임 제목"
        />
        <input
          type="file"
          onChange={(e) => setCustomFrameImg(e.target.files[0])} // 프레임 이미지 업로드
        />

        <button onClick={addSticker}>스티커 추가</button>
      </div>

      <div>
        <h2>스티커 설정</h2>
        {stickers.map((sticker, index) => (
          <div key={index}>
            <input
              type="number"
              value={sticker.stickerId || ""} // stickerId 사용
              onChange={(e) =>
                handleStickerChange(index, "stickerId", e.target.value)
              } // stickerId 수정
              placeholder="스티커 id"
            />
            <input
              type="number"
              value={sticker.positionX || ""}
              onChange={(e) =>
                handleStickerChange(index, "positionX", e.target.value)
              }
              placeholder="X 위치"
            />
            <input
              type="number"
              value={sticker.positionY || ""}
              onChange={(e) =>
                handleStickerChange(index, "positionY", e.target.value)
              }
              placeholder="Y 위치"
            />
            <input
              type="number"
              value={sticker.stickerWidth || ""} // stickerWidth 사용
              onChange={(e) =>
                handleStickerChange(index, "stickerWidth", e.target.value)
              } // stickerWidth 수정
              placeholder="스티커 너비"
            />
            <input
              type="number"
              value={sticker.stickerHeight || ""} // stickerHeight 사용
              onChange={(e) =>
                handleStickerChange(index, "stickerHeight", e.target.value)
              } // stickerHeight 수정
              placeholder="스티커 높이"
            />
          </div>
        ))}
      </div>

      <div>
        <label>
          공유 여부
          <input
            type="checkbox"
            checked={isShared}
            onChange={(e) => setIsShared(e.target.checked)} // 공유 여부 설정
          />
        </label>
      </div>

      <button onClick={handleCreateCustomFrame}>커스텀 프레임 생성</button>

      <div id="output">
        <h3>결과</h3>
        <pre>{result}</pre> {/* API 결과 출력 */}
      </div>
    </div>
  );
};

export default CustomFrameCreateTestPage;
