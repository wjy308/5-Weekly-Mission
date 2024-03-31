import { useState, useEffect } from "react";
import { getUserInfo } from "./getUserInfo";

function useAsync() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // getUserInfo 함수 호출
        const data = await getUserInfo();
        // 반환된 사용자 정보 업데이트
        setUserInfo(data);
        setLoading(false); // 로딩 상태 변경
      } catch (error) {
        // 에러 발생 시 에러 상태 업데이트
        setError(error);
        setLoading(false); // 로딩 상태 변경
      }
    };

    fetchData(); // fetchData 함수 호출
  }, []);

  return { userInfo, loading, error }; // 상태를 반환
}

export default useAsync;
