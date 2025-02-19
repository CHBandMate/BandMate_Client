import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { BottomSheet } from "react-spring-bottom-sheet";
// import "../assets/scss/bottomsheet.scss";
import PopupWindow from "../components/PopupWindow";

function UserProfilePage() {
  // 입력 값 관리
  const [formState, setFormState] = useState({
    nickName: "",
    kakaoId: "",
    email: "",
    introduction: "",
  });
  // 중복확인
  const isNickValid = formState.nickName.trim() !== "";
  const isEmailValid = formState.email.trim() !== "";
  const [isChecking, setIsChecking] = useState(false);
  const [isAvailable, setIsAvailable] = useState(null);
  // bottom sheet 반응성
  const [open, setOpen] = useState(false);
  // 지역 데이터 상태
  const [regions, setRegions] = useState([]);
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [selectedRegionId, setSelectedRegionId] = useState(null);
  const [selectedDistrictId, setSelectedDistrictId] = useState(null);
  // 팝업 상태
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopup2Open, setIsPopup2Open] = useState(false);

  // 배경 클릭시 바텀시트 닫기
  const handleDismiss = () => {
    setOpen(false);
  };
  // 필수 입력 값 관리
  const isFormValid =
    formState.nickName.trim() !== "" &&
    formState.kakaoId.trim() !== "" &&
    formState.email.trim() !== "" &&
    formState.introduction.trim() !== "";
  // 입력 필드 체크
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  // 중복 닉네임 확인
  const checkNickname = async () => {
    if (!formState.nickName.trim()) return; // 빈 값 체크
    setIsChecking(true);
    setIsAvailable(null);
    try {
      const response = await axiosInstance.get("/user/profile/check-nickname", {
        params: { nickname: formState.nickName },
      });
      setIsAvailable(response.data.data); // 데이터 확인 후 상태 업데이트
    } catch (error) {
      console.error("Error checking nickname:", error);
      setIsAvailable(false); // 에러 발생 시 false 처리
    }
  };
  const selectDistricts =
    regions.find((region) => region.regionId === selectedRegionId)?.districts ||
    [];
  // 지역 선택 추가
  const addSelectedRegion = () => {
    const selectedRegion = regions.find(
      (region) => region.regionId === selectedRegionId
    );
    const selectedDistrict = selectDistricts.find(
      (district) => district.districtId === selectedDistrictId
    );
    if (selectedRegion && selectedDistrict) {
      setSelectedRegions((prev) => [
        ...prev,
        {
          regionName: selectedRegion.regionName,
          districtName: selectedDistrict.districtName,
        },
      ]);
    }
    setOpen(false);
  };
  // 지역 선택 삭제
  const removeRegion = (index) => {
    setSelectedRegions((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (isFormValid) {
      console.log("회원 정보 등록");
    }
  };

  // 지역선택
  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const response = await axiosInstance.get("/profile/metadata/district");
        const data = response.data.data;
        setRegions(data);
        if (data.length > 0) {
          setSelectedRegionId(data[0].regionId);
        }
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchRegions();
  }, []);

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
              <input
                type="text"
                name="nickName"
                placeholder="닉네임을 입력하세요."
                onChange={handleChange}
                value={formState.nickName}
              />
            </div>
            <div className="btn-check">
              <button
                onClick={checkNickname}
                className={`${isNickValid ? "" : "disabled"}`}
                disabled={!isNickValid}
              >
                중복확인
              </button>
            </div>
          </div>
          {isAvailable === false && (
            <span className="error-msg">이미 사용중인 닉네임 입니다.</span>
          )}
          {isAvailable === true && (
            <span className="success-msg">사용 가능한 닉네임입니다.</span>
          )}

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
              <input
                type="text"
                placeholder="보유하고 있는 악기를 입력하세요."
              />
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
              <input
                type="text"
                placeholder="보유하고 있는 이펙터를 입력하세요"
              />
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
              <span className="label-name">카카오톡 ID</span>
              <input
                type="text"
                name="kakaoId"
                placeholder="카카오톡 ID를 입력하세요."
                onChange={handleChange}
                value={formState.kakaoId}
              />
            </div>
          </div>

          <div className="from-group">
            <div className="inp-wrap">
              <span className="label-name">이메일</span>
              <input
                type="text"
                name="email"
                placeholder="이메일을 입력하세요."
                onChange={handleChange}
                value={formState.email}
              />
            </div>
            <div className="btn-check">
              <button
                className={`${isEmailValid ? "" : "disabled"}`}
                disabled={!isEmailValid}
              >
                중복확인
              </button>
            </div>
          </div>
          <span className="error-msg">이미 사용중인 이메일 입니다.</span>

          <div className="from-group">
            <div className="inp-wrap">
              <span className="label-name">합주 가능 지역</span>
              <input type="text" readOnly placeholder="지역을 선택하세요." />
            </div>
            <div className="btn-selec">
              <button onClick={() => setOpen(true)}>선택</button>
            </div>
          </div>
          <div className="hash-group">
            {selectedRegions.map((region, index) => (
              <div className="hash-tag" key={index}>
                <button>
                  {region.regionName} {region.districtName}
                  <span className="ico" onClick={() => removeRegion(index)}>
                    삭제
                  </span>
                </button>
              </div>
            ))}
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
            <div className="inp-wrap inp-wrap1">
              <span className="label-name">자기소개</span>
              <textarea
                name="introduction"
                placeholder="자기소개를 입력하세요."
                onChange={handleChange}
                value={formState.introduction}
              ></textarea>
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

          <div className="btn-wrap">
            <button
              className={`${isFormValid ? "" : "disabled"}`}
              onClick={handleSubmit}
              disabled={!isFormValid}
            >
              등록
            </button>
          </div>
        </div>
        <BottomSheet onDismiss={handleDismiss} open={open}>
          <div className="bottom-sheet-body">
            <div className="flex-wrap">
              <div className="top">
                <p>지역선택</p>
              </div>
              <div className="district-wrap">
                <div className="title">시/도</div>
                <div className="btn-wrap main-btn">
                  {regions.map((region) => (
                    <button
                      className={`region-btn ${
                        selectedRegionId === region.regionId ? "active" : ""
                      }`}
                      key={region.regionId}
                      onClick={() => setSelectedRegionId(region.regionId)}
                    >
                      {region.regionName}
                    </button>
                  ))}
                </div>
              </div>
              <div className="district-wrap">
                <div className="title">상세지역</div>
                <div className="btn-wrap sub-btn">
                  {selectDistricts.map((district) => (
                    <button
                      key={district.districtId}
                      onClick={() => setSelectedDistrictId(district.districtId)}
                      className={
                        selectedDistrictId === district.districtId
                          ? "active"
                          : ""
                      }
                    >
                      {district.districtName}
                    </button>
                  ))}
                  {/* <button className="active">전체</button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <button onClick={addSelectedRegion}>확인</button>
          </div>
        </BottomSheet>
      </div>
    </div>
  );
}
export default UserProfilePage;
