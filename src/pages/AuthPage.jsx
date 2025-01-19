import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
// http://localhost:3000/auth?identifier=8&code=6228c0a1-bdb0-4298-87f6-b53dba37018d
function AuthPage() {
  const navigate = useNavigate();
  // console.log(window.location.href);
  const [searchParams] = useSearchParams();
  // URL에서 identifier 추출
  const identifier = searchParams.get("identifier");
  // URL에서 code 추출
  const authTempCode = searchParams.get("code");

  useEffect(() => {
    axios
      .post(`http://sungmin999.gonetis.com/auth/token`, {
        authTempCode,
        identifier,
      })
      .then((response) => {
        console.log("res: ", response.data);

        // localStorage.setItem("token", res.data.token);
        navigate("/loginSuccess");
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
