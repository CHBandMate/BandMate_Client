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
        </div>
      </div>
    </>
  );
}
export default MainPage;
