const BASE_URL = "https://bootcamp-api.codeit.kr/api";

export const getUserFolder = async () => {
  const response = await fetch(`${BASE_URL}/sample/folder`, {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error("폴더정보 불러오기 실패");
  }
  const { folder } = await response.json();
  return { folder };
};
