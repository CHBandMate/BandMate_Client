import { useEffect } from "react";

const BottomSheet = ({ isVisible, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!isVisible) return null;

  return (
    <div className="bottom-sheet" onClick={onClose}>
      <div className={`fixed-bg ${isVisible ? "open" : ""}`} onClick={onClose}>
        <div
          className={`sheet ${isVisible ? "open" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bottom-sheet-body">
            <div className="top-control">
              <div className="header">
                <i className="header-bar"></i>
              </div>
            </div>
            <div className="flex-wrap">
              <div className="top">
                <p>지역선택</p>
              </div>
              <div className="district-wrap">
                <div className="title">시/도</div>
                <div className="btn-wrap main-btn">
                  <button className="active">전체</button>
                  <button>강원</button>
                  <button>경기</button>
                  <button>경남</button>
                  <button>경북</button>
                  <button>서울</button>
                  <button>전남</button>
                  <button>전북</button>
                  <button>제주</button>
                  <button>충남</button>
                  <button>충남</button>
                </div>
              </div>
              <div className="district-wrap">
                <div className="title">상세지역</div>
                <div className="btn-wrap sub-btn">
                  <button className="active">전체</button>
                  <button>강남구</button>
                  <button>강동구</button>
                  <button>강북구</button>
                  <button>강서구</button>
                  <button>관악구</button>
                  <button>광진구</button>
                  <button>구로구</button>
                  <button>금천구</button>
                  <button>노원구</button>
                  <button>노원구</button>
                  <button>노원구</button>
                  <button>노원구</button>
                  <button>노원구</button>
                  <button>노원구</button>
                  <button>노원구</button>
                  <button>노원구</button>
                  <button>노원구</button>
                  <button>노원구</button>
                </div>
              </div>
              <div className="bottom">
                <button onClick={onClose}>확인</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSheet;
