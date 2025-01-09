function UserProfilePage() {
  return (
    <div className="inner">
      <div className="profilepage">
        <div className="title">
          <h2>내 프로필</h2>
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
              <span className="label-name">닉네임</span>
              <input type="text" />
            </div>
            <div className="btn-check">
              <button disabled>중복확인</button>
            </div>
          </div>
          <span className="error-msg">이미 사용중인 닉네임 입니다.</span>

          <div className="checkbox-group">
            <span className="label-name">포지션</span>
            <div className="checkbox-wrap">
              <div className="check-box">
                <input type="checkbox" id="guitar" />
                <span className="checkmark"></span>
                <label htmlFor="guitar">기타</label>
              </div>
              <div className="check-box">
                <input type="checkbox" id="base" />
                <span className="checkmark"></span>
                <label htmlFor="base">베이스</label>
              </div>
              <div className="check-box">
                <input type="checkbox" id="drum" />
                <span className="checkmark"></span>
                <label htmlFor="drum">드럼</label>
              </div>
              <div className="check-box">
                <input type="checkbox" id="keyboard" />
                <span className="checkmark"></span>
                <label htmlFor="keyboard">키보드</label>
              </div>
              <div className="check-box">
                <input type="checkbox" id="vocal" />
                <span className="checkmark"></span>
                <label htmlFor="vocal">보컬</label>
              </div>
              <div className="check-box">
                <input type="checkbox" id="etc" />
                <span className="checkmark"></span>
                <label htmlFor="etc">그 외</label>
              </div>
            </div>
          </div>

          <div className="from-group">
            <div className="inp-wrap">
              <span className="label-name">악기</span>
              <input type="text" />
            </div>
            <div className="btn-add">
              <button>+</button>
            </div>
          </div>
          <div className="hash-group">
            <div className="hash-tag">
              <button>
                베이스1
                <span className="ico">삭제</span>
              </button>
            </div>
            <div className="hash-tag">
              <button>
                베이스2
                <span className="ico">삭제</span>
              </button>
            </div>
          </div>

          <div className="from-group">
            <div className="inp-wrap">
              <span className="label-name">이펙터</span>
              <input type="text" />
            </div>
            <div className="btn-add">
              <button>+</button>
            </div>
          </div>
          <div className="hash-group">
            <div className="hash-tag">
              <button>
                이펙터1
                <span className="ico">삭제</span>
              </button>
            </div>
            <div className="hash-tag">
              <button>
                이펙터2
                <span className="ico">삭제</span>
              </button>
            </div>
          </div>

          <div className="from-group">
            <div className="inp-wrap">
              <span className="label-name">카카오톡 Id</span>
              <input type="text" />
            </div>
          </div>

          <div className="from-group">
            <div className="inp-wrap">
              <span className="label-name">이메일</span>
              <input type="text" />
            </div>
            <div className="btn-check">
              <button>중복확인</button>
            </div>
          </div>
          <span className="error-msg">이미 사용중인 이메일 입니다.</span>

          <div className="from-group">
            <div className="inp-wrap">
              <span className="label-name">합주 가능 지역</span>
              <input type="text" readOnly />
            </div>
            <div className="btn-selec">
              <button>선택</button>
            </div>
          </div>

          <div className="from-group">
            <div className="inp-wrap">
              <span className="label-name">노출 여부</span>
            </div>
            <div className="radio-wrap">
              <input type="radio" id="show-id" />
              <label htmlFor="show-id">OFF</label>
            </div>
          </div>

          <div className="from-group">
            <div className="inp-wrap">
              <span className="label-name">유튜브</span>
              <input type="text" />
            </div>
          </div>
          <div className="from-group">
            <div className="inp-wrap">
              <span className="label-name">인스타그램</span>
              <input type="text" />
            </div>
          </div>
          <div className="from-group">
            <div className="inp-wrap">
              <span className="label-name">사운드 클라우드</span>
              <input type="text" />
            </div>
          </div>

          <div className="from-group">
            <div className="inp-wrap">
              <span className="label-name">자기소개</span>
              <input type="text" />
            </div>
          </div>

          <div className="from-group">
            <div className="selc-wrap">
              <span className="label-name">선호 장르</span>
              <button>선택</button>
            </div>
            <div className="hash-wrap">
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
          </div>

          <div className="btn-wrap">
            <button disabled>등록</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserProfilePage;
