// @ts-nocheck
import React from "react";
import { Link } from "react-router-dom"; // React Router를 사용하여 네비게이션 구성

const TestPages = () => {
  const testPages = [
    { name: "회원가입, 로그인", path: "/test/users-test" },
    { name: "스티커 생성", path: "/test/stickers-test" },
    { name: "프레임 배경 생성", path: "/test/frame-background-create-test" },
    { name: "프레임 생성", path: "/test/frame-create-test" },
    { name: "프레임 조회", path: "/test/frame-view-test" },
    { name: "최종 사진 생성", path: "/test/photo-create-test" },
    { name: "최종 사진 목록 조회", path: "/test/photo-list-test" },
    { name: "커스텀 프레임 생성", path: "/test/custom-frame-create-test" },
    { name: "커스텀 프레임 단일 조회", path: "/test/custom-frame-read-test" },
    { name: "커스텀 프레임 목록 조회", path: "/test/custom-frame-list-test" },
    {
      name: "나의 커스텀 프레임 목록 조회",
      path: "/test/my-custom-frame-test",
    },
    { name: "커스텀 프레임 북마크", path: "/test/custom-frame-bookmark-test" },
    {
      name: "내가 저장한 커스텀 프레임 목록 조회",
      path: "/test/my-bookmark-custom-frame-test",
    },
  ];

  return (
    <div>
      <h1>Test Pages Navigation</h1>
      <ul>
        {testPages.map((page, index) => (
          <li key={index}>
            <Link to={page.path}>{page.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestPages;
