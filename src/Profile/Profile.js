import { getUserInfo } from "../api/getUserInfo";
import useAsync from "../api/useAsync";
import { useState, useEffect } from "react";
import "./Profile.css";
import { getUserFolder } from "../api/getUserFolder";

function Profile() {
  // 상태 초기화
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userFolder, setUesrFolder] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // getUserInfo 함수 호출
        const data = await getUserInfo();
        const folderData = await getUserFolder();
        // 반환된 사용자 정보 업데이트
        setUserInfo(data);
        setUesrFolder(folderData);
        setLoading(false); // 로딩 상태 변경
      } catch (error) {
        // 에러 발생 시 에러 상태 업데이트
        setError(error);
        setLoading(false); // 로딩 상태 변경
      }
    };

    fetchData(); // fetchData 함수 호출
  }, []);

  // 로딩 중일 때
  if (loading) {
    return <div>Loading...</div>;
  }

  // 에러 발생 시
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // 사용자 정보가 없을 때
  if (!userInfo) {
    return null;
  }

  // 사용자 정보 출력
  return (
    <div className="Profile">
      <img
        className="Profile-img"
        src={userInfo.profileImageSource}
        alt="Profile"
      />
      <p className="Profile-name">@ {userInfo.name}</p>
      <p className="Profile-folderName">{userFolder.folder.name}</p>
    </div>
  );
}

export default Profile;
