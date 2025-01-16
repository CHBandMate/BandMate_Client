function LoginPage() {
  const KAKAO_AUTH_URL = `http://sungmin999.gonetis.com/oauth2/authorization/kakao`;

  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <>
      <div className="login">
        <div className="inner">
          <div className="login-wrapper">
            <h2 className="login-title">로그인</h2>
            <a
              className="btn-kakao"
              href="javascript:void(0)"
              onClick={handleLogin}
            >
              <img src="/src/assets/images/icon/kakao_ico.png" alt="" />
              카카오 로그인
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
