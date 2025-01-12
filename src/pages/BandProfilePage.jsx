function BandProfilePage() {
  return (
    <div className="inner">
      <div className="profilepage">
        <div className="title">
          <h2>밴드 프로필</h2>
        </div>
        <div className="profile-img-area">
          <div className="profile-img">
            <img src="/src/assets/images/img/basic_bg.png" alt="" />
          </div>
          <button className="btn-img">이미지 등록</button>
        </div>
        <div className="from">
          <div className="from-group">
            <div className="inp-wrap">
              <span className="label-name">밴드 명</span>
              <input type="text" placeholder="밴드 이름을 입력하세요." />
            </div>
          </div>

          <div className="from-group">
            <div className="inp-wrap inp-wrap1">
              <span className="label-name">밴드 소개</span>
              <textarea placeholder="밴드 소개를 입력하세요."></textarea>
            </div>
          </div>

          <div className="from-group">
            <div className="inp-wrap">
              <span className="label-name">멤버</span>
              <input type="text" placeholder="밴드 멤버를 추가하세요." />
            </div>
            <div className="btn-add">
              <button>+</button>
            </div>
          </div>
          <div className="hash-group">
            <div className="hash-tag">
              <button>
                조세호(보컬)
                <span className="ico">삭제</span>
              </button>
            </div>
            <div className="hash-tag">
              <button>
                남창희(보컬)
                <span className="ico">삭제</span>
              </button>
            </div>
          </div>

          <div className="from-group">
            <div className="selc-wrap">
              <span className="label-name">선호 장르</span>
              <button className="selc-btn">선택</button>
            </div>
          </div>
          <div className="hash-group">
            <div className="hash-tag">
              <button>
                재즈
                <span className="ico">삭제</span>
              </button>
            </div>
            <div className="hash-tag">
              <button>
                POP
                <span className="ico">삭제</span>
              </button>
            </div>
          </div>

          <div className="from-group">
            <div className="inp-wrap">
              <span className="label-name">합주 가능 지역</span>
              <input type="text" readOnly placeholder="지역을 선택하세요." />
            </div>
            <div className="btn-selec">
              <button>선택</button>
            </div>
          </div>

          <div className="from-group">
            <div className="inp-wrap">
              <span className="label-name">카카오톡 오픈채팅</span>
              <input type="text" placeholder="http://www.openkakaochat.com" />
            </div>
          </div>

          <div className="from-group">
            <div className="inp-wrap">
              <span className="label-name">유튜브</span>
              <input type="text" placeholder="http://www.youtube.com" />
            </div>
          </div>

          <div className="from-group">
            <div className="inp-wrap">
              <span className="label-name">인스타그램</span>
              <input type="text" placeholder="http://www.instagram.com" />
            </div>
          </div>

          <div className="from-group">
            <div className="inp-wrap">
              <span className="label-name">사운드 클라우드</span>
              <input type="text" placeholder="http://www.soundcloud.com" />
            </div>
          </div>

          <div className="from-group">
            <div className="inp-wrap">
              <span className="label-name">노출 여부</span>
            </div>
            <div className="toggle-wrap">
              <input type="checkbox" id="show-id" hidden />
              <label htmlFor="show-id" className="toggle-switch">
                <span className="toggle-button"></span>
              </label>
              <span className="toggle-label"></span>
            </div>
          </div>

          <div className="btn-wrap">
            <button disabled>등록</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BandProfilePage;
