import "../CardList/CardList.css";
import { useState, useEffect } from "react";
import FolderCardListItem from "./FolderCardListItem";

export const FolderCardList = ({ folderId }) => {
  const [folderInfo, setFolderInfo] = useState(null); // 폴더 정보 상태
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
        setFolderInfo(folderData); // 폴더 정보 상태 업데이트
      } catch (error) {
        console.error(error);
        setFolderInfo([]); // 에러 발생 시 폴더 정보를 빈 배열로 초기화
      }
    };
    // 폴더 정보 가져오는 함수 호출
    getFolderListById();
  }, [folderId]); // folderId가 변경될 때마다 호출

  useEffect(() => {
    if (folderInfo) {
      console.log("폴더 정보:", folderInfo);
    }
  }, [folderInfo]);

  if (!folderInfo) {
    return <div>로딩 중...</div>;
  }

  if (folderInfo.data && Array.isArray(folderInfo.data)) {
    // 폴더 정보가 객체이고 그 안에 data 필드가 있는 경우, data를 사용하여 렌더링합니다.
    return (
      <div className="CardList">
        {folderInfo.data.map((item, index) => (
          <div className="CardList-item" key={index}>
            <FolderCardListItem item={item} />
          </div>
        ))}
      </div>
    );
  }

  // 폴더 정보가 없거나 잘못된 형태인 경우 에러를 표시합니다.
  return <div>폴더 정보를 불러오는 중 문제가 발생했습니다.</div>;
};
