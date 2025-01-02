const SearchBox = () => {
  return (
    <div className="search-content">
      <div className="flex">
        <div className="search-input">
          <input type="text" placeholder="검색어를 입력하세요." />
        </div>
        <div className="arrow active">
          <img src="/src/assets/images/icon/down-arrow.png" alt="" />
        </div>
      </div>
      <div className="search-box">
        <div className="flex search-flex">
          <div className="mini-title">지역</div>
          <div className="mini-list">
            <button className="active">전체</button>
            <button>서울</button>
            <button>경기</button>
            <button>부산</button>
            <button>대구</button>
            <button>광주</button>
            <button>대전</button>
            <button>충남</button>
            <button>충북</button>
            <button>세종</button>
            <button>울산</button>
            <button>인천</button>
            <button>강원</button>
            <button>전남</button>
            <button>전북</button>
            <button>경북</button>
            <button>경남</button>
            <button>제주</button>
          </div>
        </div>
        <div className="flex search-flex">
          <div className="mini-title">장르</div>
          <div className="mini-list">
            <button className="active">전체</button>
            <button>POP</button>
            <button>ROCK</button>
            <button>인디음악</button>
            <button>재즈</button>
            <button>클래식</button>
          </div>
        </div>
        <div className="flex search-flex">
          <div className="mini-title">포지션</div>
          <div className="mini-list">
            <button className="active">전체</button>
            <button>베이스</button>
            <button>일렉 기타</button>
            <button>통 기타</button>
            <button>드럼</button>
            <button>피아노</button>
            <button>보컬</button>
            <button>작사/작곡</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
