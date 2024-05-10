import { useAsync } from "@/lib/api/useAsync";
import Image from "next/image";
import React from "react";
import styles from "./NavigationBar.module.css";

function NavProfile() {
  const { userInfo, userFolder, loading, error } = useAsync();
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
  return (
    <>
      <div className={`${styles.NavigationBarProfileImg}`}>
        {userInfo.profileImageSource ? (
          <Image fill src={userInfo.profileImageSource} alt="Profile" />
        ) : (
          <Image fill src="default-img" alt="Default Profile" />
        )}
      </div>

      <span className={`${styles.NavaigationBarProfileEmail}`}>
        {userInfo.email}
      </span>
    </>
  );
}
export default NavProfile;
