import { useEffect, useState } from "react";
import { login } from "@/api";
import { useNavigate } from "react-router-dom";
import RoutePath from "@/routes/routePath";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate(RoutePath.Signup);
  };

  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
    setEmailValid(regex.test(value));
  };

  const handlePassword = (e) => {
    const value = e.target.value;
    setPw(value);
    const regex =
      /^(?=.*[A-Za-z])(?=.*[$`~!@$!%*#^?&])(?=.*[0-9])[A-Za-z\d$`~!@$!%*#^?&]{8,20}$/;
    setPwValid(regex.test(value));
  };

  useEffect(() => {
    if (emailValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, pwValid]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, pw);
      const userId = response.data.user_id;

      localStorage.setItem("userId", userId);
      navigate(RoutePath.Main);
      return response.data;
    } catch (e) {
      console.error(e.message);
    }
  };
  return (
    <div className="flex h-real-screen flex-col justify-center px-[48px]">
      <div className="Headline_B">로그인</div>

      <div className="flex w-full">
        <div className="w-full">
          <div className="Label_M mb-2.5 mt-[50px]">이메일 주소</div>
          <div className="flex items-center rounded-md outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:outline-offset-1 has-[input:focus-within]:outline-syscolor-SystemPurple1">
            <input
              type="text"
              className="Label_M placeholder:Label_L w-full px-3 py-3 focus:outline focus:outline-0"
              placeholder="example@email.com"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className="Caption_normal_M pt-[8px] text-red-600">
            {!emailValid && email.length > 0 && (
              <div>올바른 이메일을 입력해주세요.</div>
            )}
          </div>

          <div className="Label_M mb-2.5 mt-4">비밀번호</div>
          <div className="flex items-center rounded-md outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:outline-offset-1 has-[input:focus-within]:outline-syscolor-SystemPurple1">
            <input
              type="password"
              className="Label_M placeholder:Label_L w-full px-3 py-3 focus:outline focus:outline-0"
              placeholder="영문, 숫자, 특수문자 포함 8자 이상"
              value={pw}
              onChange={handlePassword}
            />
          </div>
          <div className="Caption_normal_M pt-[8px] text-red-600">
            {!pwValid && pw.length > 0 && (
              <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
            )}
          </div>
          <button
            disabled={notAllow}
            type="button"
            className={`Label_M mt-[50px] w-full rounded-md py-3 text-white outline-none ${notAllow ? "bg-syscolor-SystemLightGray" : "bg-gradient-to-b from-syscolor-SystemPurple1 to-syscolor-SystemPurple2"} `}
            onClick={handleLogin}
          >
            로그인
          </button>
        </div>
      </div>

      <button
        type="button"
        className="Caption_normal_M mt-6 text-syscolor-SystemGray underline"
        onClick={handleSignup}
      >
        회원가입
      </button>
    </div>
  );
};
export default LoginPage;
