import { useDispatch } from "react-redux";
import SearchBox from "../components/SearchBox";
import Header from "../components/HeaderTitle";

function MainPage() {
  // const dispatch = useDispatch();

  return (
    <>
      <Header />
      <div className="main-content">
        <div className="inner">
          <SearchBox />
          <div className="band-item-area">
            <div className="band-item-card">
              <div className="item-card-img">
                <p>TEST_Band</p>
              </div>
              <div className="item-card-txt">
                <div className="item-box item-card-user">
                  <div className="user-txt">
                    <p className="user-name">TEST_Band</p>
                    <span className="user-category">재즈</span>
                  </div>
                  <div className="user-bmark">
                    <img
                      src="/src/assets/images/icon/bookmark_active.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="item-box item-card-title">
                  <p className="title">밴드 보컬 구합니다.</p>
                </div>
                <div className="item-box item-card-skill">
                  <div className="skill-item">#일렉기타</div>
                  <div className="skill-item">#베이스</div>
                  <div className="skill-item">#피아노</div>
                </div>
                <div className="item-box item-card-location">
                  <div className="location_icon">
                    <img src="/src/assets/images/icon/pin.png" alt="" />
                  </div>
                  <p>서울시 강남구</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MainPage;
