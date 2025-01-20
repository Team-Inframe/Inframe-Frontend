// @ts-nocheck
import { useState } from "react";
import { login, signup } from "@/api"; // api 파일에서 로그인 및 회원가입 함수 가져오기

const UsersTestPage = () => {
  // 상태 변수 설정
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [result, setResult] = useState("");

  // 로그인 요청
  // @ts-ignore
  const handleLogin = async () => {
    if (!loginEmail || !loginPassword) {
      alert("이메일과 비밀번호를 입력해주세요.");
      return;
    }
    const result = await login(loginEmail, loginPassword);
    setResult(JSON.stringify(result, null, 2)); // 결과를 상태에 저장하여 화면에 출력
  };

  // 회원가입 요청
  const handleSignup = async () => {
    if (!signupEmail || !signupPassword) {
      alert("이메일과 비밀번호를 입력해주세요.");
      return;
    }
    const result = await signup(signupEmail, signupPassword);
    setResult(JSON.stringify(result, null, 2)); // 결과를 상태에 저장하여 화면에 출력
  };

  return (
    <div>
      <h1>로그인 & 회원가입 API 테스트</h1>

      <div>
        <h2>로그인</h2>
        <input
          type="email"
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
          placeholder="이메일"
        />
        <input
          type="password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
          placeholder="비밀번호"
        />
        <button onClick={handleLogin}>로그인</button>
      </div>

      <div>
        <h2>회원가입</h2>
        <input
          type="email"
          value={signupEmail}
          onChange={(e) => setSignupEmail(e.target.value)}
          placeholder="이메일"
        />
        <input
          type="password"
          value={signupPassword}
          onChange={(e) => setSignupPassword(e.target.value)}
          placeholder="비밀번호"
        />
        <button onClick={handleSignup}>회원가입</button>
      </div>

      <div id="output">
        <h3>결과</h3>
        <pre>{result}</pre> {/* API 결과 출력 */}
      </div>
    </div>
  );
};

export default UsersTestPage;
