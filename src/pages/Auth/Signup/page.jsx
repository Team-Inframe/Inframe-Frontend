import { useState, useEffect } from "react";
import { signup } from "@/api"; // 회원가입 API 호출
import { useNavigate } from "react-router-dom"; // 페이지 이동
import RoutePath from "@/routes/routePath"; // 라우팅 경로

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [username, setUsername] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [usernameValid, setUsernameValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);
  const [signupError, setSignupError] = useState(""); // 회원가입 실패 메시지 상태
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

  const handleUsername = (e) => {
    const value = e.target.value;
    setUsername(value);
    setUsernameValid(value.length >= 3); // 닉네임 길이가 3자 이상이어야 유효
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (emailValid && pwValid && usernameValid) {
      try {
        const response = await signup(email, pw, username);
        if (response && response.code === "MEM_2011") {
          navigate(RoutePath.Login); // 회원가입 성공 후 로그인 페이지로 이동
        } else {
          setSignupError("회원가입에 실패했습니다. 다시 시도해 주세요.");
        }
      } catch (e) {
        setSignupError("회원가입에 실패했습니다. 다시 시도해 주세요.");
        console.error("로그인 API 호출 실패:", e);
      }
    }
  };

  useEffect(() => {
    if (emailValid && pwValid && usernameValid) {
      setNotAllow(false); // 모든 입력이 유효하면 가입 버튼 활성화
    } else {
      setNotAllow(true); // 유효하지 않으면 버튼 비활성화
    }
  }, [emailValid, pwValid, usernameValid]);

  const handleLoginRedirect = () => {
    navigate(RoutePath.Login); // 로그인 페이지로 이동
  };

  return (
    <div className="flex h-screen flex-col justify-center px-12">
      <div className="Headline_B flex justify-center">회원가입</div>

      <div className="mt-8">
        <div className="flex items-center rounded-md outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:outline-offset-1 has-[input:focus-within]:outline-syscolor-SystemPurple1">
          <input
            type="text"
            placeholder="닉네임을 입력해주세요."
            value={username}
            onChange={handleUsername}
            className="Label placeholder:Label_L w-full px-3 py-3 focus:outline focus:outline-0"
          />
        </div>
        {!usernameValid && username.length > 0 && (
          <div className="text-red-600">닉네임은 3자 이상이어야 합니다.</div>
        )}
        <div className="Label_M mb-2.5 pt-2"></div>
        <div className="flex items-center rounded-md outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:outline-offset-1 has-[input:focus-within]:outline-syscolor-SystemPurple1">
          <input
            type="text"
            placeholder="이메일을 입력해주세요."
            value={email}
            onChange={handleEmail}
            className="Label placeholder:Label_L w-full px-3 py-3 focus:outline focus:outline-0"
          />
        </div>
        {!emailValid && email.length > 0 && (
          <div className="Caption_normal_M pt-[8px] text-red-600">
            올바른 이메일을 입력해주세요.
          </div>
        )}
        <div className="Label_M mb-2.5 pt-2"></div>
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
          onClick={handleSignup}
          className={`Label_M mt-10 w-full rounded-md py-3 text-white outline-none ${notAllow ? "bg-syscolor-SystemLightGray" : "bg-syscolor-SystemPurple1"} `}
        >
          회원가입
        </button>
        {signupError && (
          <div className="Label_M mt-4 text-red-600">{signupError}</div>
        )}{" "}
        {/* 회원가입 실패 메시지 표시 */}
      </div>

      <button
        onClick={handleLoginRedirect}
        className="Caption_normal_M mt-6 rounded-md bg-syscolor-SystemWhite text-syscolor-SystemGray underline"
      >
        로그인
      </button>
    </div>
  );
};

export default SignupPage;
