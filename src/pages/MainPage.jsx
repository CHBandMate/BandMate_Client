import { useDispatch } from "react-redux";

function MainPage() {
  // const dispatch = useDispatch();

  return (
    <>
      <header>
        <div className="inner">
          <div className="gnb">
            <ul>
              <li className="login none">로그인/회원가입</li>
              <li className="user">
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
          <div className="gnb_menu">
            <ul>
              <li>밴드원 모집</li>
              <li>개인 프로필</li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
export default MainPage;
