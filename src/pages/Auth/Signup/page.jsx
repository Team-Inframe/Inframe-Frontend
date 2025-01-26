import { useEffect, useState } from "react";
import { signup } from "@/api";
import { useNavigate } from "react-router-dom";
import RoutePath from "@/routes/routePath";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [username, setUsername] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate(RoutePath.Login);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handlePassword = (e) => {
    setPw(e.target.value);
    const regex =
      /^(?=.*[A-Za-z])(?=.*[$`~!@$!%*#^?&])(?=.*[0-9])[A-Za-z\d$`~!@$!%*#^?&]{7,20}$/;
    if (regex.test(pw)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  useEffect(() => {
    if (emailValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, pwValid]);

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await signup(email, pw, username);
      navigate(RoutePath.Login);
      return response.data;
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <div className="flex h-real-screen flex-col justify-center px-[48px]">
      <div className="Headline_B">회원가입</div>

      <div className="flex w-full">
        <div className="w-full">
          <div className="Label_M mb-2.5 mt-[70px]">닉네임</div>
          <div className="flex items-center rounded-md outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:outline-offset-1 has-[input:focus-within]:outline-syscolor-SystemPurple1">
            <input
              type="text"
              className="Label placeholder:Label_L w-full px-3 py-3 focus:outline focus:outline-0"
              placeholder="닉네임을 입력해주세요."
              value={username}
              onChange={handleUsername}
            />
          </div>
          <div className="Label_M mb-2.5 pt-[21px]">이메일 주소</div>
          <div className="flex items-center rounded-md outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:outline-offset-1 has-[input:focus-within]:outline-syscolor-SystemPurple1">
            <input
              type="text"
              className="Labell_M placeholder:Label_L w-full px-3 py-3 focus:outline focus:outline-0"
              placeholder="example@Email.com"
              value={email}
              onChange={handleEmail}
            />
          </div>
          {!emailValid && email.length > 0 && (
            <div className="Caption_normal_M pt-[8px] text-red-600">
              올바른 이메일을 입력해주세요.
            </div>
          )}

          <div className="Label_M mb-2.5 pt-[21px]">비밀번호</div>
          <div className="flex items-center rounded-md outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:outline-offset-1 has-[input:focus-within]:outline-syscolor-SystemPurple1">
            <input
              type="password"
              className="Label_M placeholder:Label_L w-full px-3 py-3 focus:outline focus:outline-0"
              placeholder="영문, 숫자, 특수문자 포함 8자 이상"
              value={pw}
              onChange={handlePassword}
            />
          </div>
          {!pwValid && pw.length > 0 && (
            <div className="Caption_normal_M pt-[8px] text-red-600">
              영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.
            </div>
          )}

          <button
            disabled={notAllow}
            type="button"
            className={`Label_M mt-[50px] w-full rounded-md py-3 text-white outline-none ${notAllow ? "bg-syscolor-SystemLightGray" : "bg-gradient-to-b from-syscolor-SystemPurple1 to-syscolor-SystemPurple2"} `}
            onClick={handleSignup}
          >
            회원가입
          </button>
        </div>
      </div>

      <button
        type="button"
        className="Caption_normal_M mt-6 rounded-md bg-syscolor-SystemWhite text-syscolor-SystemGray underline"
        onClick={handleLogin}
      >
        로그인하러 가기
      </button>
    </div>
  );
};
export default SignupPage;
