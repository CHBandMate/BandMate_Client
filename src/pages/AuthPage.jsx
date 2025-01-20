import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchToken } from "../redux/authslice";

const AuthPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(window.location.href);
    const params = new URLSearchParams(window.location.search);
    const authTempCode = params.get("code");
    const identifier = params.get("identifier");

    if (authTempCode) {
      dispatch(fetchToken({ authTempCode, identifier }));
    }
  }, [dispatch]);

  return <div>로그인 중...</div>;
};

export default AuthPage;
