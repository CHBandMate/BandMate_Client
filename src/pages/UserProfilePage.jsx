function UserProfilePage() {
  return (
    <>
      <div className="profilepage">
        <div className="title">
          <h2>내 프로필</h2>
        </div>
        <div className="profile-img-area">
          <div className="profile-img">
            <img src="/src/assets/images/img/basic_bg.png" alt="" />
          </div>
          <button>이미지 등록</button>
        </div>
        <div className="from">
          <div className="from-group">
            <div className="inp-wrap">
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default UserProfilePage;
