<<<<<<< HEAD
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchToken } from "../redux/authslice";

const AuthPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(window.location.href);
    const params = new URLSearchParams(window.location.search);
    const authTempCode = params.get("code");
    const identifier = params.get("identifier");

    if (authTempCode) {
      dispatch(fetchToken({ authTempCode, identifier }));
    }
  }, [dispatch]);

  return <div>로그인 중...</div>;
};
=======
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// http://localhost:3000/auth?identifier=8&code=6228c0a1-bdb0-4298-87f6-b53dba37018d
function AuthPage() {
  const navigate = useNavigate();
  // 현재 URL 로그
  const PARAMS = new URL(window.location.href).searchParams;
  console.log(window.location.href);
  // URL에서 identifier 추출
  const identifier = PARAMS.get("identifier");
  // URL에서 code 추출
  const code = PARAMS.get("code");

  useEffect(() => {
    axios
      .post(
        `${
          import.meta.env.VITE_REDIRECT_URL
        }/auth?identifier=${identifier}&code=${code}`
      )
      .then((res) => {
        console.log("res: ", res.data);

        localStorage.setItem("token", res.data.token);
        navigate("/loginSuccess");
      });
  }, []);

  return (
    <>
      <div>로그인 중...</div>
    </>
  );
}
>>>>>>> 2866291 (250117 토근 발급 진행중)

export default AuthPage;
