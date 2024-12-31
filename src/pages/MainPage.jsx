import { useDispatch } from "react-redux";

function MainPage() {
  // const dispatch = useDispatch();

  return (
    <>
      <header>
        <div className="inner">
          <div className="gnb">
            <ul>
              <li className="login">로그인/회원가입</li>
              <li>마이페이지</li>
              <li>로그아웃</li>
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
