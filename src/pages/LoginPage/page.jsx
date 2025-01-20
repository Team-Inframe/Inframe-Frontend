import { useEffect, useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

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

  return (
    <div className="flex flex-col px-[47px] pt-[220px]">
      <div className="Headline_B px-[0px] pt-[0px]">로그인</div>

      <div className="conentWrap">
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
      </div>

      <div>
        <button
          disabled={notAllow}
          type="button"
          className="Label_M ml-[326px] mt-9 rounded-md bg-gradient-to-b from-syscolor-SystemPurple1 to-syscolor-SystemPurple2 px-5 py-2 text-white outline-none"
        >
          로그인
        </button>
      </div>
    </div>
  );
};
export default LoginPage;
