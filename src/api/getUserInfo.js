const BASE_URL = "https://bootcamp-api.codeit.kr/api";

export const getUserInfo = async () => {
  const response = await fetch(`${BASE_URL}/sample/user`, {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error("유저 불러오기 실패");
  }
  const { name, id, email, profileImageSource } = await response.json();
  return { name, id, email, profileImageSource };
};
