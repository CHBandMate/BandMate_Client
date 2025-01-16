import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function AuthPage() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const authCode = searchParams.get("code");
    if (authCode) {
      fetch("http://sungmin999.gonetis.com/oauth2/authorization/kakao", {
        method: "POST",
        headers: {
          "Content-Type": "applycation/json",
        },
        body: JSON.stringify({ code: authCode }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            // 인증 성공시 : 토큰 저장및 리다이렉트
            localStorage.setItem("token", data.token); //JWT 토큰 저장
            window.location.href = "/detail"; //메인으로 이동
          } else {
            alert("로그인 실패");
          }
        })
        .catch((error) => {
          console.log("로그인 에러", error);
        });
    } else {
      console.error("인증 코드가 전달되지 않았습니다.");
    }
  }, [searchParams]);

  return (
    <>
      <div>로그인 구현중....</div>
    </>
  );
}

export default AuthPage;
