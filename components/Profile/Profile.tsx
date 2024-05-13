getUserInfo;
import { useState, useEffect } from "react";
import styles from "./Profile.module.css";
import React from "react";
import { getUserInfo } from "@/lib/api/getUserInfo";
import { useAsync } from "@/lib/api/useAsync";
import { getUserFolder } from "@/lib/api/getUserFolder";

function Profile() {
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
  if (!userInfo || !userFolder) {
    return null;
  }
  // 사용자 정보 출력
  return (
    <div className={`${styles.Profile}`}>
      <img
        className="Profile-img"
        src={userFolder.folder.owner.profileImageSource}
        alt="Profile"
      />
      <p className="Profile-name">{userFolder.folder.owner.name}</p>
      <p className="Profile-folderName">{userFolder.folder.name}</p>
    </div>
  );
}

export default Profile;
