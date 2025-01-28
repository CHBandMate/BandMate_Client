export const isAuthenticated = () => {
  // 토큰이 있으면 true, 없으면 false
  return !!localStorage.getItem("token");
};
