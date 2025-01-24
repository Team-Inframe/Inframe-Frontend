import { useEffect, useState } from "react";
import { login } from "@/api";
import axios from "axios";
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
    <div className="w-full-een flex flex-col px-[47px] pt-[220px]">
      <div className="Headline_B px-[0px] pt-[0px]">로그인</div>

      <div className="flex w-full">
        <div className="w-full">
          <div className="Label_M mb-2 pt-[52px]">이메일 주소</div>
          <div className="flex items-center rounded-md outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:outline-offset-1 has-[input:focus-within]:outline-syscolor-SystemPurple1">
            <input
              type="text"
              className="Body_reading_M block min-w-0 grow px-3 py-3 focus:outline focus:outline-0"
              placeholder="example@Email.com"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className="Label_M pt-[4px] text-red-600">
            {!emailValid && email.length > 0 && (
              <div>올바른 이메일을 입력해주세요.</div>
            )}
          </div>

          <div style={{ marginTop: "21px" }} className="Label_M mb-2">
            비밀번호
          </div>
          <div className="flex items-center rounded-md outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:outline-offset-1 has-[input:focus-within]:outline-syscolor-SystemPurple1">
            <input
              type="password"
              className="Body_reading_M block min-w-0 grow px-3 py-3 focus:outline focus:outline-0"
              placeholder="영문, 숫자, 특수문자 포함 8자 이상"
              value={pw}
              onChange={handlePassword}
            />
          </div>
          <div className="Label_M pt-[4px] text-red-600">
            {!pwValid && pw.length > 0 && (
              <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
            )}
          </div>
          <button
            //disabled={notAllow}
            type="button"
            className={`Label_M mt-9 w-full rounded-md py-2.5 text-white outline-none ${notAllow ? "bg-syscolor-SystemLightGray" : "bg-gradient-to-b from-syscolor-SystemPurple1 to-syscolor-SystemPurple2"} `}
            onClick={handleLogin}
          >
            로그인
          </button>
        </div>
      </div>

      <button
        type="button"
        className="Caption_normal_M mt-8 text-syscolor-SystemGray"
        onClick={handleSignup}
      >
        회원가입
      </button>
    </div>
  );
};
export default LoginPage;
