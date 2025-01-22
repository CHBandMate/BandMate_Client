import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
function AuthPage() {
  const navigate = useNavigate();
  console.log(window.location.href);
  const [searchParams] = useSearchParams();
  // URL에서 identifier 추출
  const identifier = searchParams.get("identifier");
  // URL에서 code 추출
  const authTempCode = searchParams.get("code");

  useEffect(() => {
    axios
      .post("http://sungmin999.gonetis.com/auth/token", {
        authTempCode,
        identifier,
      })
      .then((response) => {
        console.log("res: ", response.data);
        const jwtToken = response.headers.get("authorization");
        localStorage.setItem("token", jwtToken);
        console.log(jwtToken);
        navigate("/user");
      })
      .catch((error) => {
        console.log("error", error);
      });
  });

  return (
    <>
      <div>로그인 중...</div>
    </>
  );
}

export default AuthPage;
