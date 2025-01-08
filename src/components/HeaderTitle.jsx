import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/MyPage");
  };
  const handleMain = () => {
    navigate("/");
  };
  return (
    <header>
      <div className="inner">
        <div className="gnb">
          <ul>
            {/* <li className="login">로그인/회원가입</li> */}
            <li className="user" onClick={handleNavigation}>
              <div className="img">
                <img src="/src/assets/images/icon/user-avatar.png" alt="" />
              </div>
              마이페이지
            </li>
            <li className="logout">
              <div className="img">
                <img src="/src/assets/images/icon/logout.png" alt="" />
              </div>
              로그아웃
            </li>
          </ul>
        </div>
        <div className="gnb-menu">
          <div className="logo">
            <img src="/src/assets/images/logo/logo.png" alt="" />
          </div>
          <ul>
            <li className="active" onClick={handleMain}>
              밴드원 모집
            </li>
            <li>개인 프로필</li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
