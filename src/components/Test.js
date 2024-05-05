import "../CardList/CardList.css";
import { useFolderAsync } from "../api/useFolderAsync";
// import FolderItem from "../CardList/FolderItem";
import { getFolderListById } from "../api/getUserFolder";
import { useState, useEffect } from "react";
export const FolderCardList = ({ folderId }) => {
  const [folderInfo, setFolderInfo] = useState({}); // 폴더 정보 상태
  const BASE_URL = "https://bootcamp-api.codeit.kr/api";

  useEffect(() => {
    const getFolderListById = async () => {
      try {
        let response;
        if (folderId) {
          response = await fetch(
            `${BASE_URL}/users/1/links?folderId=${folderId}`
          );
        } else {
          response = await fetch(`${BASE_URL}/users/1/links`);
        }

        if (!response.ok) {
          throw new Error("폴더 정보를 가져오는데 실패했습니다.");
        }

        const folderData = await response.json();
        setFolderInfo({ folderData }); // 폴더 정보 상태 업데이트
      } catch (error) {
        console.error(error);
      }
    };
    // 폴더 정보 가져오는 함수 호출
    getFolderListById();
  }, [folderId]); // folderId가 변경될 때마다 호출

  useEffect(() => {
    console.log("폴더 정보:", folderInfo.folderData);
  }, [folderInfo]);
  return (
    <div className="card-grid-container">
      {folderInfo.folderData &&
        folderInfo.folderData.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {/* 다른 정보들을 렌더링하는 코드를 추가하세요 */}
          </div>
        ))}
    </div>
  );
};
