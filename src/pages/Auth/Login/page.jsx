import { useState, useEffect } from "react";
import { login } from "@/api"; // 로그인 API 호출
import { useNavigate } from "react-router-dom"; // 페이지 이동
import RoutePath from "@/routes/routePath"; // 라우팅 경로

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);
  const [loginError, setLoginError] = useState(""); // 로그인 오류 메시지 상태 추가
  const navigate = useNavigate();

  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailValid(value.includes("@")); // 이메일 유효성 검사
  };

  const handlePassword = (e) => {
    const value = e.target.value;
    setPw(value);
    setPwValid(value.length >= 6); // 비밀번호 길이가 6자 이상이어야 유효
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (emailValid && pwValid) {
      try {
        const response = await login(email, pw);
        if (response && response.data) {
          const { user_id } = response.data; // 로그인 후 user_id를 추출
          localStorage.setItem("userId", user_id); // user_id를 localStorage에 저장
          navigate(RoutePath.Main); // 메인 페이지로 이동
        } else {
          setLoginError("로그인에 실패했습니다. 다시 시도해 주세요.");
        }
      } catch (e) {
        setLoginError("로그인에 실패했습니다. 다시 시도해 주세요.");
        console.error("로그인 API 호출 실패:", e);
      }
    }
  };

  useEffect(() => {
    if (emailValid && pwValid) {
      setNotAllow(false);
    } else {
      setNotAllow(true);
    }
  }, [emailValid, pwValid]);

  const handleSignupRedirect = () => {
    navigate(RoutePath.Signup); // 회원가입 페이지로 이동
  };

  return (
    <div className="flex h-screen flex-col justify-center px-12">
      <div className="Headline_B flex justify-center">로그인</div>

      <div className="">
        <div className="Label_M mb-2.5 mt-[50px]"></div>
        <div className="flex items-center rounded-md outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:outline-offset-1 has-[input:focus-within]:outline-syscolor-SystemPurple1">
          <input
            type="text"
            placeholder="이메일을 입력해주세요"
            value={email}
            onChange={handleEmail}
            className="Label_M placeholder:Label_L w-full px-3 py-3 focus:outline focus:outline-0"
          />
        </div>
        {!emailValid && email.length > 0 && (
          <div className="Caption_normal_M pt-[8px] text-red-600">
            올바른 이메일을 입력해주세요.
          </div>
        )}
        <div className="Label_M mb-2.5 mt-4"></div>
        <div className="flex items-center rounded-md outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:outline-offset-1 has-[input:focus-within]:outline-syscolor-SystemPurple1">
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={pw}
            onChange={handlePassword}
            className="Label_M placeholder:Label_L w-full px-3 py-3 focus:outline focus:outline-0"
          />
        </div>
        {!pwValid && pw.length > 0 && (
          <div className="Caption_normal_M pt-[8px] text-red-600">
            비밀번호는 6자 이상이어야 합니다.
          </div>
        )}
        <button
          disabled={notAllow}
          onClick={handleLogin}
          className={`Label_M mt-[50px] w-full rounded-md py-3 text-white outline-none ${notAllow ? "bg-syscolor-SystemLightGray" : "bg-syscolor-SystemPurple1"} `}
        >
          로그인
        </button>
        {loginError && (
          <div className="Caption_normal_M mt-6 text-syscolor-SystemGray underline">
            {loginError}
          </div>
        )}{" "}
        {/* 로그인 실패 메시지 표시 */}
      </div>

      <button
        onClick={handleSignupRedirect}
        className="Caption_normal_M mt-6 text-syscolor-SystemGray underline"
      >
        회원가입
      </button>
    </div>
  );
};

export default LoginPage;
