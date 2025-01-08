import Header from "../components/HeaderTitle";

function Detail() {
  return (
    <>
      <Header />
      <div className="detail">
        <div className="inner">
          <div className="detail-header">
            <h2>같이 연주하실 분~!!</h2>
            <div className="profile-box">
              <div className="profile-img">
                <img src="/src/assets/images/img/basic_bg.png" alt="" />
              </div>
              <p>nickname</p>
            </div>
          </div>

          <div className="detail-middle">
            <div className="info-table">
              <table>
                <tr>
                  <th>구인 포지션</th>
                  <td>보컬, 드럼, 피아노, 기타</td>
                  <th>지역</th>
                  <td>서울시 중구</td>
                </tr>
                <tr>
                  <th>장르</th>
                  <td>클래식</td>
                  <th>멤버</th>
                  <td>
                    <span>
                      패트<b>(통 기타)</b>
                    </span>
                    ,
                    <span>
                      패트<b>(통 기타)</b>
                    </span>
                    ,
                    <span>
                      패트<b>(통 기타)</b>
                    </span>
                  </td>
                </tr>
              </table>
            </div>
            <div className="btn-area">
              <button className="mark-btn">북마크</button>
              <button className="apply-btn">신청하기</button>
            </div>
          </div>

          <div className="detail-content">
            <div className="content-title">
              <h2>상세내용</h2>
            </div>
            <div className="detail-text">
              <p>
                안녕하세요 직장인 밴드 같이 연주하실 분 모집해요!~!~! <br />
                시간 맞춰서 합주하실 분 구합니다 <br /> 편하게 연락주세요!
              </p>
            </div>

            <div className="btn">
              <button>목록</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Detail;
