import { useNavigate } from "react-router-dom";
import Header from "../components/HeaderTitle";

function MyPage() {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/profile");
  };
  return (
    <>
      <div className="mypage inner">
        <div className="title">
          <h1>마이페이지</h1>
        </div>
        <div className="myp-content">
          <div className="myp-menu" onClick={handleNavigation}>
            <p>내 프로필</p>
            <div className="ico">
              <img src="/src/assets/images/icon/arrow.png" alt="" />
            </div>
          </div>
          <div className="myp-menu">
            <p>밴드 프로필</p>
            <div className="ico">
              <img src="/src/assets/images/icon/arrow.png" alt="" />
            </div>
          </div>
          <div className="myp-menu">
            <p>초대/지원 현황</p>
            <div className="ico">
              <img src="/src/assets/images/icon/arrow.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MyPage;
